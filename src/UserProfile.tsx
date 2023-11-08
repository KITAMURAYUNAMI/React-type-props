import { FC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join("/")}</dd> 　 　
    </dl> /**joinは複数入ってきた値を一つの文字列にする */
  ); //値が入ってこなかった時用に?を付けておくとエラーが起きない
};
