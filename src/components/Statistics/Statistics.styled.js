import styled from "styled-components";

export const StatisticsWrapper = styled.section`
max-width: 500px;
margin-bottom: 20px;
border-radius: 4px;
text-align: center;
`;

export const StatisticsTitle = styled.h2`
padding: 20px;
color: #757575;
background-color: #edf3fc;
`;

export const StatListWrapper = styled.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
`;

export const StatListItem = styled.li`
display: flex;
flex-direction: column;
gap: 5px;
padding: 12px 4px;
color: #edf3fc;
`;

export const StatLabel = styled.span`
font-size: 18px;
`;

export const StatPercentage = styled.span`
font-weight: 500;
font-size: 24px;
`;