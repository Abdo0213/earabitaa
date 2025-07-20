import { useNavigate } from 'react-router-dom';
import style from './Header.module.css';

const Header = ({ 
    header, 
    trailingIcon, 
    backNavigationPath,
    trailingIconNavigationPath,
    canBack = true,
    onBack // Add this new prop for custom back handling
}) => {

    const navigate = useNavigate();

    const handleNavigation = (path, isBack = false) => {
        if (!document.startViewTransition) {
            isBack ? navigate(-1) : navigate(path);
            return;
        }
        

        document.startViewTransition(() => {
            isBack ? navigate(-1) : navigate(path);
        });
    };

    const handleBackClick = () => {
        if (onBack) {
            // If custom back handler is provided, use it
            onBack();
        } else if (backNavigationPath) {
            // Otherwise use the path-based navigation
            handleNavigation(backNavigationPath);
        } else {
            // Fallback to default back navigation
            handleNavigation('', true);
        }
    };

    const handleTrailingIconClick = () => {
        if (trailingIconNavigationPath) {
            handleNavigation(trailingIconNavigationPath);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.leftContent} onClick={handleBackClick}>
                {canBack && 
                <img 
                    src={process.env.PUBLIC_URL+'/invertedArrowIcon.svg' }
                    alt="back arrow" 
                    width="25" 
                    height="25" 
                    className={style.icon}
                />}
            </div>
            
            <p className={style.text}>{header}</p>
            
            <div className={style.rightContent}>
                {trailingIcon && (
                    <img
                        src={trailingIcon}
                        alt="action icon"
                        width="25"
                        height="25"
                        className={style.icon}
                        onClick={handleTrailingIconClick}
                    />
                )}
            </div>
        </div>
    );
};

export default Header;