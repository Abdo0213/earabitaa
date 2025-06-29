import React from 'react';
import style from './ArrowItem.module.css';

const ArrowItem = ({ list, isExpanded, toggleItem }) => {
    return (
        <div className={style.Item}>
            <div 
                className={`${style.Question} ${isExpanded ? style.show : ''} ${list.icon ? style.icon : ''}`}
                onClick={() => toggleItem(list.id)}
            >
                {list.icon && (
                    <span className={style.leftIcon}>
                        {list.icon}
                    </span>
                )}
                <span className={style.questionText}>
                    {list.question}
                </span>
                <span className={style.toggleIcon}>
                    {isExpanded ? (
                        <svg width="19" height="12" viewBox="0 0 19 12" fill="none">
                            <path d="M2 10.5L9.5 2.5L17 10.5" stroke="#222831" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    ) : (
                        <svg width="19" height="12" viewBox="0 0 19 12" fill="none">
                            <path d="M2 1.5L9.5 9.5L17 1.5" stroke="#222831" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    )}
                </span>
            </div>
            
            <div className={`${style.Answer} ${isExpanded ? style.show : ''}`}>
                {list.answer}
            </div>
        </div>
    );
};

export default ArrowItem;