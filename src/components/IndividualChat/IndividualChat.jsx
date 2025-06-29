import React, { useEffect, useRef, useState } from 'react';
import style from './IndividualChat.module.css';

const IndividualChat = ({ chatPartner, onBack, messages: initialMessages }) => {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState(initialMessages || []);
    const messagesContainerRef = useRef(null);
    const [autoScroll, setAutoScroll] = useState(true);

    const sendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages(prevMessages => [
                ...prevMessages,
                { 
                    id: Date.now(), // Better to use timestamp for unique IDs
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
            setAutoScroll(true);
        }
    };

    // Handle scroll events
    const handleScroll = () => {
        const container = messagesContainerRef.current;
        if (container) {
            // Check if user has scrolled up (not at bottom)
            const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
            setAutoScroll(isAtBottom);
        }
    };

    // Auto-scroll to bottom when new messages arrive and autoScroll is true
    useEffect(() => {
        if (autoScroll && messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages, autoScroll]);

    return (
        <div className={style.container}>
            <div 
                ref={messagesContainerRef}
                className={`${style.messagesContainer} ${style.customScrollbar}`}
                onScroll={handleScroll}
            >
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