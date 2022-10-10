// 1
import { Profile } from './Profile/Profile';
import user from '../user.json';
// 2
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
// import { Stats } from './Statistics/Stats/Stats';
//  
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
    </div>
  );
};
