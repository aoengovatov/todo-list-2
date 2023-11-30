import styles from './NotFoundPageComponent.module.css';

export const NotFoundPageComponent = ({ children }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.pageContainer}>
                <h1 className={styles.title}>404</h1>
                <div className={styles.description}>{children}</div>
                <button className={styles.button}>на главную</button>
            </div>
        </div>
    );
}