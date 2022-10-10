import {FriendBadge, FriendImg, FriendName} from './FriendListItem.styled'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <>
            <FriendBadge>{isOnline}</FriendBadge>
            <FriendImg src={avatar} alt={avatar} width="48" />
            <FriendName>{name}</FriendName>
        </>
    )
}