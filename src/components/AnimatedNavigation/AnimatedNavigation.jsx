import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const AnimatedNavigation = ({ children }) => {
    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (!document.startViewTransition) return;

        // Skip animation for initial page load
        if (navigationType === 'POP' && performance.navigation?.type === 1) {
            return;
        }

        // Set different transition names based on navigation direction
        const transitionName = navigationType === 'PUSH' ? 'slide-forward' : 'slide-back';
        document.documentElement.style.setProperty('--transition-name', transitionName);
    }, [location.key, navigationType]);

    return children;
};

export default AnimatedNavigation;