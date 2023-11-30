import styles from './TodoItemComponent.module.css';

export const TodoItemComponent = ({ id, children }) => {

    return (
        <div className={styles.todoItemContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.label}></div>
                <div className={styles.title}>{children}</div>
            </div>
        </div>
        )
}