import React from 'react';
import styles from './Chat.module.css';

function Chat({ player }) {
    return (
        <div className={styles.chat}>
            <div className={styles.playerName}>
                <div
                    className={`${styles.circleContainer} ${
                        styles[player.playerFigureClass]
                    }`}
                ></div>
                <span>{player.name}</span>
            </div>
            <div className={styles.chatField}>
                <div className={styles.inputField}>
                    <input type="text" placeholder="Message" />
                    <button className={styles.sendMessageButton} />
                </div>
            </div>
        </div>
    );
}

export default Chat;
