import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};
//コンポーネントで型を受け取るときにはFCの横に受け取る型を書く、こっちの方がぱっと見で何の型を受け取るかがわかりやすい
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
