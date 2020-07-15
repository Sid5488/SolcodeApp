import styled from 'styled-components/native';

export const ContainerVoltar = styled.View`
    flex-direction: row;
    padding: 30px;
    background-color: white;
`;

export const Container = styled.View`
  flex: 1px;
  padding: 30px;
  justify-content: center;
  background-color: dodgerblue;
`;

export const ContainerCard = styled.View`
    padding: 0px 15px;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
    align-items: center;
`;

export const Card = styled.View`
    width: 170px;
    height: 170px;
    border-radius: 8px;
    margin-top: 16px;
    margin-bottom: 8px;
    background-color: white;
`;

export const CardFooter = styled.View`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    background-color: #00000011;
    margin-top: auto;
    justify-content: center;
`;

export const CardBody = styled.View`
    width: 100%;
    height: 80%;
`;

export const TextFooterCard = styled.Text`
    text-align: center;
`;
