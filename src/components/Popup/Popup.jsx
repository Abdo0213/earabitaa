import React, { useEffect, useRef } from 'react';
import style from './Popup.module.css';

const Popup = ({ isOpen, onClose, children, closeOnOutsideClick = true }) => {
    const contentRef = useRef(null);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

  // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (
            contentRef.current &&
            !contentRef.current.contains(event.target) &&
            closeOnOutsideClick
        ) {
            onClose();
        }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose, closeOnOutsideClick]);

    if (!isOpen) return null;

    return (
        <div className={`${style.overlay} ${isOpen ? style.overlayOpen : ''}`}>
            <div
                ref={contentRef}
                className={`${style.content} ${isOpen ? style.contentOpen : ''}`}
            >
                <button
                type="button"
                className={style.closeButton}
                onClick={onClose}
                aria-label="Close popup"
                >
                &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;

/*
const [isPopupOpen, setIsPopupOpen] = useState(false);
    <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)}
    >
        <h2>Popup Title</h2>
        <p>This is your popup content!</p>
        <button onClick={() => setIsPopupOpen(false)}>Close</button>
    </Popup>
    Usage
*/