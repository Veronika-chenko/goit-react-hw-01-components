import styled from "styled-components";

export const StatisticsWrapper = styled.section`
max-width: 400px;
margin: 0 auto 20px;
text-align: center;
`;

export const StatisticsTitle = styled.h2`
padding: 20px;
color: #757575;
`;

export const StatListWrapper = styled.ul`
display: flex;
justify-content: center;
`;

export const StatListItem = styled.li`
display: flex;
gap: 5px;
flex-direction: column;
padding: 8px 20px;
border: 1px solid #757575;;
`;

export const StatLabel = styled.span`
font-size: 18px;
`

export const StatPercentage = styled.span`
font-weight: 500;
font-size: 24px;
`

// display: grid;
// grid-template-columns: 1fr;
// padding: 30px 40px;