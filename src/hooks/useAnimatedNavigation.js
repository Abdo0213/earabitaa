import { useNavigate } from 'react-router-dom';

export const useAnimatedNavigation = () => {
    const navigate = useNavigate();

    const animatedNavigate = (path) => {
        if (!document.startViewTransition) {
            navigate(path);
            return;
        }
        
        document.startViewTransition(() => {
            navigate(path);
        });
    };

    return animatedNavigate;
};