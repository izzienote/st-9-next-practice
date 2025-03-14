"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: string;
  title: string;
  contents: string;
  isCompleted: boolean;
  imgPath: string;
  createdAt: number;
};

const TodoList = () => {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: async (): Promise<Todo[]> => {
      const response = await fetch(`http://localhost:4000/todos`);
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      return await response.json();
    },
  });

  console.log(todos);

  return (
    <>
      <ul style={{ listStyle: "none", width: 250 }}>
        {todos!.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
};

export default TodoList;
