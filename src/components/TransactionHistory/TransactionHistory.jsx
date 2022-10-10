import PropTypes from 'prop-types';
import {Table, TableHead, TableHeaderRow, TableHeader, TableRowData, TableData} from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <TableHead>
                <TableHeaderRow>
                    <TableHeader>type</TableHeader>
                    <TableHeader>amount</TableHeader>
                    <TableHeader>currency</TableHeader>
                </TableHeaderRow>
            </TableHead>

            <tbody> 
                {items.map(item => {
                    return (
                        <TableRowData key={item.id}>
                            <TableData>{item.type}</TableData>
                            <TableData>{item.amount}</TableData>
                            <TableData>{item.currency}</TableData>
                        </TableRowData>
                    )
                })}
            </tbody>
        </Table>
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