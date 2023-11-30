import styles from './TodoSinglePageComponent.module.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
    useRequestGetTodoWithId,
    useRequestDeleteTodo,
    useRequestUpdateTodo
} from '../../hooks';
import { CaseComponent, NotFoundPageComponent } from '../../components';

export const TodoSinglePageComponent = () => {
    const [refreshTodo, setRefreshTodo] = useState(false);
    const params = useParams();
    const {isLoading, todo} = useRequestGetTodoWithId(params.id, refreshTodo);
    const navigate = useNavigate();

    if (!todo.id) {
        return <NotFoundPageComponent>Такой задачи не найдено</NotFoundPageComponent>;
    }

    const deleteTodo = (id) => {
        useRequestDeleteTodo(id, setRefreshTodo, refreshTodo);
        return navigate('/');
      }
      
      const updateTodo = (id, name) => {
        if (name !== undefined && name.trim() !== '') {
          useRequestUpdateTodo(id, name, setRefreshTodo, refreshTodo);
        }
      }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.backButton} onClick={() => navigate(-1)}>
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