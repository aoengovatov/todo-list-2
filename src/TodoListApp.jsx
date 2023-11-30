import { Routes, Route } from 'react-router-dom';
import { MainPageComponent, NotFoundPageComponent, TodoSinglePageComponent } from './components';

export const TodoListApp = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPageComponent />}></Route>
        <Route path='/task/:id' element={<TodoSinglePageComponent/>}></Route>
        <Route path='*' element={<NotFoundPageComponent>Страница не найдена</NotFoundPageComponent>}></Route>
      </Routes>
    </div>
  )
}
