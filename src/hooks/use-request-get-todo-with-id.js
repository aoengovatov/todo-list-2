import { useEffect, useState } from "react";

export const useRequestGetTodoWithId = (id, refreshTodo) => {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:3005/todos/${id}`)
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => setTodo(loadedTodos))
      .finally(() => setIsLoading(false));
  }, [refreshTodo]);

  return {
    isLoading,
    todo,
  };
};
