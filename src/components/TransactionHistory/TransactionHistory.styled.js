import styled from "styled-components";

export const Table = styled.table`
width: 500px;
box-shadow: 0 4px 10px #0000000d;
`;

export const TableHead = styled.thead`
color: #edf3fc;
background-color: #6c8fc4;
`;

export const TableHeaderRow = styled.tr`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
`;
export const TableHeader = styled.th`
padding: 10px 20px;
:not(:last-child) {
    border-right: 1px solid #757575;
}
text-transform: uppercase; 
`;

export const TableDataRow = styled.tr`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: #edf3fc;
:nth-child(2n) {
  background-color: #d3dff2;
}
`;

export const TableData = styled.td`
text-align: center;
padding: 5px;
text-transform: capitalize;
:not(:last-child) {
    border-right: 1px solid #757575;
}
`;