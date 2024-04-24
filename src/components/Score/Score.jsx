import React from 'react';
import styles from './Score.module.css';

function Score() {
    return (
        <header>
            <span>Player 1</span>
            <div className={styles.score}>
                <span>Score: 0:0</span>
                <button>Reset</button>
            </div>
            <span>Player 2</span>
        </header>
    );
}

export default Score;
