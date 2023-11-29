import { useEffect, useState } from "react";

export const useRequestGetTodoWithId = (id, refreshTodos) => {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:3005/todos/${id}`)
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => setTodo(loadedTodos))
      .finally(() => setIsLoading(false));
  }, [refreshTodos]);

  return {
    isLoading,
    todo,
  };
};
