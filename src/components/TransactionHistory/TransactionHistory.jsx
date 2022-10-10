import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem/TransactionItem';

export const TransactionHistory = ({items}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>type</th>
                    <th>amount</th>
                    <th>currency</th>
                </tr>
            </thead>

            <tbody> 
                {items.map(item => {
                    return (
                        <TransactionItem key={item.id} item={item} />
                    )
                })}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}