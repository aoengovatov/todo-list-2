import styles from './EditButtonComponent.module.css';

export const EditButtonComponent = ({ editTodo }) => {
    return (
        <div className={styles.editButton} onClick={editTodo}>
            редактировать
        </div>
    )
}