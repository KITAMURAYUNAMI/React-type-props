import { TodoType } from "./types/Todo";

/*type TodoType = {
  //型の指定の作成
  userId: number;
  title: string;
  completed?: boolean; //?を書いとくと必ずしも渡さなくて良い値と認識させられる
};
受け取りての型も指定して置くと間違ったデータを送ることがなくなる*/
export const Todo = (
  //ここでも本来はFCを使って型を定義する
  //ここでpropsの型を指定している
  props: Omit<
    TodoType,
    "id"
  > /**Omitを使うと使わない要素を除いて、型を指定できる、Pickを使うと使いたい要素だけを抽出して型を指定できる */
) => {
  const {
    title,
    userId,
    completed = false /**初期値を設定しておくと値が渡ってこなかった時に初期値が発動する */
  } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>;
};
