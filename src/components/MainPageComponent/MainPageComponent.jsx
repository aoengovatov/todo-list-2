import styles from './MainPageComponent.module.css';
import { useState } from 'react';
import { 
  useRequestGetTodos,
  useRequestAddTodo 
} from '../../hooks';
import {
  TodoItemComponent, 
  SortComponent, 
  SearchComponent, 
  AddNewCaseComponent 
} from '../../components';

export const MainPageComponent = () => {
    const [todosSearch, setTodosSearch] = useState([]);
    const [refreshTodos, setRefreshTodos] = useState(false);
    const [isSortTodos, setIsSortTodos] = useState(false);
    const {isLoading, todos} = useRequestGetTodos(isSortTodos, refreshTodos);

    const addTodo = (value) => {
        if (value !== undefined && value.trim() !== '') {
        useRequestAddTodo(value, setRefreshTodos, refreshTodos);
        }
    }

    const setSortTodos = (value) => {
        setIsSortTodos(value);
        setRefreshTodos(!refreshTodos);
    }
    
    const setSearchValue = (value) => {
        let searchTodos = [];
    
        if (value !== '') {
          todos.map(todo => 
            todo.name.toLowerCase().includes(value.toLowerCase()) 
              ? searchTodos.push(todo) 
              : false
          );
        }
        setTodosSearch(searchTodos);
    };

    return (
        <div className={styles.container}>
          <h1 className={styles.h1}>Todo list 2</h1>
          <div className={styles.topBarContainer}>
            <SortComponent isSort={isSortTodos} setSort={setSortTodos}/>
            <SearchComponent setSearchValue={setSearchValue}/>
          </div>
    
          {isLoading ? (
            <div className={styles.loader}></div>
          ) : (
            todosSearch.length !== 0 ? todosSearch.map(({id, name}) => 
           (
              <TodoItemComponent 
                key={id}  
                id={id}
                to={`task/${id}`}>
                  {name}
              </TodoItemComponent>
            )) : (
              todos.map(({id, name}) => 
              (
                <TodoItemComponent  
                  key={id} 
                  id={id}
                  to={`task/${id}`}>
                    {name}
                </TodoItemComponent>
              )            
            ))
          )}
          
          <AddNewCaseComponent addTodo={addTodo} />
        </div>
      )
}