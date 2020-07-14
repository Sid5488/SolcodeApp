import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1px;
    /* justify-content: center; */
    align-items: center;
    padding: 30px;
    background-color: dodgerblue;
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    width: 295px;
    height: 40px;
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
    height: 40px;
    background-color: #DDD;
    justify-content: center;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-top: 8px;
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
    flex: 1px;
    justify-content: center;
    justify-content: flex-end;
    padding-bottom: 50px;
    align-items: center;
    background-color: dodgerblue;
`;

export const TextLogin = styled.Text`
    color: white;
    font-size: 20px;
    justify-content: center;
    align-items: center;
`;

export const ContainerVoltar = styled.View`
    flex-direction: row;
    padding: 30px;
    background-color: dodgerblue;
`;

export const ContainerSignIn = styled.View`
    width: 295px;
    justify-content: center;
    align-items: center;
`;

export const SignInText = styled.Text`
    color: white;
    font-size: 20px;
    margin-top: 8px;
`;
