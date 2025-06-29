import React, { useState, useEffect } from 'react';
import IndividualChat from '../../components/IndividualChat/IndividualChat';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import style from './Chat.module.css';

const Chat = () => {
    const [view, setView] = useState('noMessages');
    const [currentChatPartner, setCurrentChatPartner] = useState('');
    const [currentChatMessages, setCurrentChatMessages] = useState([]);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChats([
                { id: '1', name: 'Massage', lastMessage: 'Lorem ipsum dolor sit amet, consectetur', time: '1h', unread: 1 },
                { id: '2', name: 'Massage', lastMessage: 'Lorem ipsum dolor sit amet, consectetur', time: '1h', unread: 0 },
                { id: '3', name: 'Massage', lastMessage: 'Lorem ipsum dolor sit amet, consectetur', time: '1h', unread: 1 },
            ]);
            setView('chatList');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const openChat = (chatId, chatName) => {
        setCurrentChatPartner(chatName);
        setCurrentChatMessages([
            { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur', time: '09:35', type: 'received' },
            { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur', time: '09:35', type: 'sent' },
            { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur', time: '09:35', type: 'received' },
            { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur', time: '09:35', type: 'sent' },
            { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur', time: '09:35', type: 'received' },
        ]);
        setView('individualChat');
    };

    const handleBackToChatList = () => {
        setView('chatList');
        setCurrentChatPartner('');
        setCurrentChatMessages([]);
    };

    const NoMessagesYet = () => (
        <div className={style.noMessagesContainer}>
            <img src="noChat.svg" alt="No Chat" className={style.noMessagesImage} />
            <div className={style.noMessagesText}>
                <p className={style.noMessagesTitle}>No messages yet</p>
                <span className={style.noMessagesText}>You have no messages right now.</span>
                <span className={style.noMessagesText}>Come back later</span>
            </div>
        </div>
    );

    const ChatListItem = ({ chat, onClick }) => (
        <div className={style.chatListItem} onClick={() => onClick(chat.id, chat.name)}>
            <div className={style.avatar}>
                {chat.name.charAt(0)}
            </div>
            <div className={style.chatInfo}>
                <div className={style.chatHeader}>
                    <p className={style.chatName}>{chat.name}</p>
                    <span className={style.chatTime}>{chat.time}</span>
                </div>
                <p className={style.lastMessage}>{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
                <div className={style.unreadBadge}>
                    {chat.unread}
                </div>
            )}
        </div>
    );

    const ChatList = () => (
        <div className={style.chatListContainer}>
            <div className={style.chatListHeader}>
                <button className={style.markAllRead}>
                    Make all as read
                </button>
            </div>
            <div className={style.chatListContent}>
                {chats.map(chat => (
                    <ChatListItem key={chat.id} chat={chat} onClick={openChat} />
                ))}
            </div>
        </div>
    );

    return (
        <>
            {view === 'individualChat' ? (
                <Header
                    header={currentChatPartner || "Chat"}
                    canBack={true}
                    onBack={handleBackToChatList}
                    trailingIcon={view === 'individualChat' ? "callIcon.svg" : null}
                    trailingIconNavigationPath={view === 'individualChat' ? "/search" : null}
                />
            ) : (
                <Header 
                    header={"Chat"} 
                    canBack={false}
                    trailingIcon="searchIcon.svg"
                    trailingIconNavigationPath="/search"
                />
            )}
            
            <div className={style.container}>
                <main className={style.mainContent}>
                    {view === 'noMessages' && <NoMessagesYet />}
                    {view === 'chatList' && <ChatList />}
                    {view === 'individualChat' && (
                        <IndividualChat 
                            chatPartner={currentChatPartner}
                            onBack={handleBackToChatList}
                            messages={currentChatMessages}
                        />
                    )}
                </main>
            </div>
            
            {view !== 'individualChat' && <Footer />}
        </>
    );
};

export default Chat;