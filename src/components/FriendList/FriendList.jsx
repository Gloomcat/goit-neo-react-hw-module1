import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css['friend-card']}>
      <img src={avatar} alt={name} className={css['friend-avatar']} />
      <p className={css['friend-name']}>{name}</p>
      <p
        className={`${css['friend-status']} ${
          isOnline ? css.online : css.offline
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <li key={friend.id} className={css['friend-list-item']}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
