import React, { useEffect, useRef, useState } from 'react';
import style from './IndividualChat.module.css';

const IndividualChat = ({ chatPartner, onBack, messages: initialMessages }) => {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState(initialMessages || []);
    const messagesEndRef = useRef(null);
    const containerRef = useRef(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const sendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages(prevMessages => [
                ...prevMessages,
                { 
                    id: Date.now(), 
                    text: inputMessage, 
                    time: new Date().toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        hour12: false 
                    }), 
                    type: 'sent' 
                }
            ]);
            setInputMessage('');
        }
    };

    return (
        <div className={style.container} ref={containerRef}>
            <div className={style.messagesWrapper}>
                <div className={style.messagesContent}>
                    <div className={style.dateSeparator}>
                        Today
                    </div>

                    {messages.map(msg => (
                        <div
                            key={msg.id}
                            className={`${style.messageContainer} ${
                                msg.type === 'sent' ? style.messageSent : style.messageReceived
                            }`}
                        >
                            <div
                                className={`${style.messageBubble} ${
                                    msg.type === 'sent' ? style.messageSentBubble : style.messageReceivedBubble
                                }`}
                            >
                                <p className={style.messageText}>{msg.text}</p>
                                <span className={style.messageTime}>{msg.time}</span>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Message input area */}
            <div className={style.inputArea}>
                <input
                    type="text"
                    placeholder="Message"
                    className={style.messageInput}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            sendMessage();
                        }
                    }}
                />
                {inputMessage.length > 0 ? (
                    // Send icon
                    <button 
                        onClick={sendMessage}
                        className={style.sendButton}
                    >
                        <img src='sendIcon.svg' alt='send icon'></img>
                    </button>
                ) : (
                    <>
                        <button className={style.attachmentButton}>
                            <img src='attachmentIcon.svg' alt='attachement Icon'></img>
                        </button>
                        <button className={style.attachmentButton}>
                            <img src='micIcon.svg' alt='mic Icon'></img>
                        </button>
                    </>
                )}
                
                
            </div>
        </div>
    );
};

export default IndividualChat;