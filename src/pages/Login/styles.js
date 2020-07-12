import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1px;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: dodgerblue;
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

export const Input = styled.TextInput`
    width: 295px;
    height: 40px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 15px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 16px;
`;

export const ContainerText = styled.View`
    width: 250px;
    height: 100px;
    justify-content: center;
    align-items: center;
`;

export const TextLogin = styled.Text`
    color: white;
    font-size: 26px;
    justify-content: center;
    align-items: center;
`;

export const ContainerVoltar = styled.View`
    flex-direction: row;
    padding: 30px;
    background-color: dodgerblue;
`;
