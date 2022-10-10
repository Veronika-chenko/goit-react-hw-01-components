import PropTypes from 'prop-types';
import {
    StatisticsWrapper,
    StatisticsTitle,
    StatListWrapper,
    StatListItem,
    StatLabel,
    StatPercentage
} from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
        <StatisticsWrapper>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}
            <StatListWrapper>
                {stats.map(stat => {
                    return (
                        <StatListItem key={stat.id}>
                            <>
                                <StatLabel>{stat.label}</StatLabel>
                                <StatPercentage>{stat.percentage}</StatPercentage>
                            </>
                        </StatListItem>
                    )
                })}
            </StatListWrapper>
        </StatisticsWrapper>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
}
