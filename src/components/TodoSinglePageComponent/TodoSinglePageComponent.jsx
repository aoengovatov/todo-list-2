import styles from './TodoSinglePageComponent.module.css';
import { useState } from 'react';
import { useRequestGetTodoWithId } from '../../hooks';
import { CaseComponent } from '../../components';

export const TodoSinglePageComponent = () => {
    const [refreshTodo, setRefreshTodo] = useState(false);
    const {isLoading, todo} = useRequestGetTodoWithId(refreshTodo);
    

    const deleteTodo = (id) => {
        useRequestDeleteTodo(id, setRefreshTodo, refreshTodo);
      }
      
      const updateTodo = (id, name) => {
        if (name !== undefined && name.trim() !== '') {
          useRequestUpdateTodo(id, name, setRefreshTodo, refreshTodo);
        }
      }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.backButton}>
                    <div className={styles.backIcon}></div>
                </div>
                <h1 className={styles.h1}>Task</h1>
            </div>
            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                <CaseComponent 
                    key={todo.id} 
                    deleteTodo={deleteTodo} 
                    updateTodo={updateTodo} 
                    id={todo.id}>{todo.name}
                </CaseComponent>
            )}
            </div>
    )
}