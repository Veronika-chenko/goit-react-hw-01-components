// 1
import { Profile } from './Profile/Profile';
import user from '../user.json';
// 2
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
// 3
import { FriendList } from './FriendList/FriendList';
import friends from '../friends.json';
// 4
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
