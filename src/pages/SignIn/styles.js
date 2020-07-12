import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: dodgerblue;
    flex: 1px;
    padding: 32px;
`;

export const Main = styled.View`
    flex: 1px;
    justify-content: center;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 32px;
    margin-top: 8px;
`;

export const Description = styled.Text`
    color: #EEE;
    font-size: 16px;
    margin-top: 16px;
    font-family: 'Roboto_400Regular';
    max-width: 260px;
    line-height: 24px;
`;

export const Footer = styled.View`
    flex: 1px;
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    width: 100%;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    align-items: center;
`;

export const TextEntrar = styled.Text`
    font-size: 16px;
    font-family: 'Roboto_400Regular';
    color: dodgerblue;
    margin-left: 15px;
`;

export const ArrowText = styled.Text`
    width: 40px;
    height: 50px;
    background-color: #DDD;
    justify-content: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-top: 13px;
    padding-left: 6px;
`;

export const ContainerLogin = styled.View`
    flex: 1px;
    justify-content: center;
    align-items: center;
`;

export const Logar = styled.Text`
    color: white;
    font-size: 20px;
`;
