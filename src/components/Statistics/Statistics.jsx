import PropTypes from 'prop-types';
import {
    StatisticsWrapper,
    StatisticsTitle,
    StatListWrapper,
    StatListItem,
    StatLabel,
    StatPercentage
} from './Statistics.styled'
import {getRandomHexColor} from 'function'

export const Statistics = ({title, stats}) => {
    return (
        <StatisticsWrapper>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}
            <StatListWrapper>
                {stats.map(state => {
                    return (
                        <StatListItem key={state.id} style={{backgroundColor: getRandomHexColor()}}>
                            <>
                                <StatLabel>{state.label}</StatLabel>
                                <StatPercentage>{state.percentage}%</StatPercentage>
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
