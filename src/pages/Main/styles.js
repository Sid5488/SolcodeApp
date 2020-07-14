import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1px;
    padding-top: 15px;
    background-color: white;
`;

export const ContainerText = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
`;

export const TextBemVindo = styled.Text`
    color: dodgerblue;
    font-size: 24px;
`;

export const ContainerCard = styled.View`
    flex: 1px;
    padding: 0px 15px;
`;

export const Card = styled.View`
    width: 100%;
    height: 170px;
    border-radius: 8px;
    margin-top: 8px;
    background-color: white;
`;

export const CardHeader = styled.View`
    width: 100%;
    padding: 10px;
`;

export const TextCardHeaderRed = styled.Text`
    color: red;
    font-size: 20px;
    margin-left: 15px;
`;

export const TextCardHeaderGreen = styled.Text`
    color: #0fd122;
    font-size: 20px;
    margin-left: 15px;
`;

export const CardBody = styled.View`
    width: 100%;
    height: 80px;
`;

export const TextCard = styled.Text`
    margin-left: 15px;
    margin-right: 15px;
`;
