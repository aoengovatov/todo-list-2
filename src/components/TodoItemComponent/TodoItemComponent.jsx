import styles from './TodoItemComponent.module.css';
import { Link } from 'react-router-dom';

export const TodoItemComponent = ({ id, children, to }) => {

    return (
        <Link to={to} className={styles.todoItemContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.label}></div>
                <div className={styles.title}>{children}</div>
            </div>
        </Link>
        )
}