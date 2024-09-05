import css from './App.module.css';

import friends from '../friends.json';
import transactions from '../transactions.json';
import userData from '../userData.json';

import FriendList from '../FriendList/FriendList.jsx';
import Profile from '../Profile/Profile.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';

const App = () => {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
