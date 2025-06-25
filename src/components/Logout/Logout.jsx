import React from 'react';
import style from './Logout.module.css';
import Popup from '../../components/Popup/Popup';

const Logout = ({ isOpen, onClose, onLogout }) => {
    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
            closeOnOutsideClick={true}
        >
            <div className={style.logoutContent}>
                <h2>Log out</h2>
                <p>Are you sure you want to log out?</p>
                <div className={style.popupButtons}>
                    <button 
                        className={style.cancelButton} 
                        onClick={onClose}
                    >
                        No
                    </button>
                    <button 
                        className={style.logoutButton}
                        onClick={() => {
                            onLogout();
                            onClose();
                        }}
                    >
                        Yes
                    </button>
                </div>
            </div>
        </Popup>
    );
};

export default Logout;