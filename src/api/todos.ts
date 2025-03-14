export const getDetail = async (id: string) => {
  const response = await fetch(`http://localhost:4000/todos/${id}`);
  const todos: Todo[] = await response.json();

  if (!response.ok) {
    throw new Error(`Failed to fetch a detail todo ${id}`);
  }

  return todos;
};

type Todo = {
  id: string;
  title: string;
  contents: string;
  isCompleted: boolean;
  imgPath: string;
  createdAt: number;
};
