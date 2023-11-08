//typescriptの型指定で安全にwebAPIでデータを取ってくる

import { useState } from "react";
import "./styles.css";
import axios from "axios";
import { Todo } from "./Todo";
import { TodoType } from "./types/Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
/*TodoType = {通常はここで作る
  //型の指定の作成
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};*/

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([] /*初期値の設定*/);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  const user: User = {
    name: "相川",
    hobbies: ["映画", "ゲーム"]
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データの取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
