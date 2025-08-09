import React, { useState } from "react";
import styles from "./Notification.module.css";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";

const Notification = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, title: "Lorem ipsum", message: "Lorem ipsum dolor sit amet, consectetur", time: "11:00 PM", read: false },
        { id: 2, title: "Lorem ipsum", message: "Lorem ipsum dolor sit amet, consectetur", time: "11:00 PM", read: false },
        { id: 3, title: "Lorem ipsum", message: "Lorem ipsum dolor sit amet, consectetur", time: "11:00 PM", read: true },
        { id: 4, title: "Lorem ipsum", message: "Lorem ipsum dolor sit amet, consectetur", time: "11:00 PM", read: true },
    ]);

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    return (
        <Layout>
            <Header 
                header="Notifications"
                backNavigationPath="/home"
            />
            <div className={styles.container}>
                <div className={styles.header} onClick={markAllAsRead}>
                    Make all as read
                </div>

                <div className={styles.list}>
                    {notifications.map((n) => (
                    <div
                        key={n.id}
                        className={`${styles.card} ${!n.read ? styles.unread : ""}`}
                    >
                        <div className={styles.topRow}>
                            <span className={styles.title}>{n.title}</span>
                            <span className={styles.time}>{n.time}</span>
                        </div>
                        <div className={styles.message}>{n.message}</div>
                    </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Notification;
