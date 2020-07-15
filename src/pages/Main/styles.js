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
    margin-top: 16px;
    margin-bottom: 8px;
    background-color: white;
`;

export const CardHeader = styled.View`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #00000011;
`;

export const TextCardHeader = styled.Text`
    color: dodgerblue;
    font-size: 20px;
    margin-left: 15px;
`;

export const CardRedFlag = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: red;
    margin-left: auto;
`;

export const CardWarningFlag = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #ffc012;
    margin-left: auto;
`;

export const CardGreenFlag = styled.View`
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #00c900;
    margin-left: auto;
`;

export const CardBody = styled.View`
    width: 100%;
    height: 80px;
`;

export const TextCard = styled.Text`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 4px;
`;
