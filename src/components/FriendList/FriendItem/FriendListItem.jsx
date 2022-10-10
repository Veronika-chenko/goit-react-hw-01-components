import {
    FriendImg,
    FriendName,
    Online,
    Offline
} from './FriendListItem.styled'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <>
            {isOnline ? <Online /> : <Offline />}
            <FriendImg src={avatar} alt={avatar} width="48" />
            <FriendName>{name}</FriendName>
        </>
    )
}