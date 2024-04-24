import React from 'react';
import Square from '../Square/Square';
import styles from './Board.module.css';
import Chat from '../Chat/Chat';

function Board({ player }) {
    return (
        <section className={styles.board}>
            <h3>Your turn:</h3>
            <div className={styles.square}>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
            <Chat player={player} />
        </section>
    );
}

export default Board;
