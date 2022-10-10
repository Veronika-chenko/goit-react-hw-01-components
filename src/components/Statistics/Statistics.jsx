import PropTypes from 'prop-types';
import { StatList } from './StatItem/StatItem';
import {StatisticsWrapper, StatisticsTitle, StatListWrapper, StatListItem} from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
        <StatisticsWrapper>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}
            <StatListWrapper>
                {stats.map(stat => {
                    return (
                        <StatListItem key={stat.id}>
                            <StatList stat={stat} />
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
