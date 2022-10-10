import PropTypes from 'prop-types';
import { FriendListItem } from './FriendItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(friend => {
                return (
                    <li key={friend.id}>
                        <FriendListItem friend={friend} />
                    </li>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired, 
        })
    )
}