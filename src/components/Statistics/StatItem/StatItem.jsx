import { StatLabel, StatPercentage } from './StatItem.styled';

export const StatList = ({ stat: { label, percentage } }) => {
    return (
        <>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}</StatPercentage>
        </>
    )
}