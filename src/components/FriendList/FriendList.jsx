import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={s.list}>
        {friends.map((item) => {
          return (
            <FriendListItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
              id={item.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
