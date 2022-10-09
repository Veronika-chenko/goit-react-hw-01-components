// import PropTypes from 'prop-types';
// import css from './Statistics.module.css'
// import { Section } from './Statistics.styled';
// import { StatList } from './StatList/StatList';

export const Statistics = ({title, data: {id, label, percentage}}) => {
    return (
        <section>
            {title && <h2>{title}</h2>}

            {/* <ul>
                {data.map((stat) => {
                    <li key={stat.id}>
                        <span>{stat.label}</span>
                        <span>{stat.percentage}</span>
                    </li>
                })}
            </ul> */}
            
        </section>
    )
}

// Statistics.propTypes = {

// }