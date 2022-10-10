import PropTypes from 'prop-types';
import { FriendListItem } from './FriendItem/FriendListItem';
import {FriendListWrapper, FriendItem} from './FriendList.styled'

export const FriendList = ({friends}) => {
    return (
        <FriendListWrapper>
            {friends.map(friend => {
                return (
                    <FriendItem key={friend.id}>
                        <FriendListItem friend={friend} />
                    </FriendItem>
                )
            })}
        </FriendListWrapper>
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