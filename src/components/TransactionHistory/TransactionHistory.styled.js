import styled from "styled-components";
export const Table = styled.table`
width: 500px;
margin: 0 auto;
box-shadow: 0 4px 10px #0000000d;
`
// border: 1px solid #757575;
export const TableHead = styled.thead`
background-color: #00BFFF;
color: #ffffff;

`
export const TableHeaderRow = styled.tr`
display: flex;
display:grid;
grid-template-columns: 1fr 1fr 1fr;

`
export const TableHeader = styled.th`
padding: 10px 20px;
:not(:last-child) {
    border-right: 1px solid #757575;
}

text-transform: uppercase; 
`
// border: 1px solid black;
export const TableRowData = styled.tr`
display: flex;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
:nth-child(2n) {
  background-color: #ADD8E6;
}

`
export const TableData= styled.td`
text-align: center;
padding: 5px;

text-transform: capitalize;
:not(:last-child) {
    border-right: 1px solid #757575;
}
`
