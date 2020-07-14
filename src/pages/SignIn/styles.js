import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: dodgerblue;
    flex: 1px;
    padding: 32px;
`;

export const Main = styled.View`
    justify-content: center;
    margin-bottom: 20px;
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

export const ContainerVoltar = styled.View`
    flex-direction: row;
    padding: 30px;
    background-color: dodgerblue;
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

export const Logar = styled.Text`
    color: white;
    font-size: 20px;
    margin-top: 20px;
`;

export const ContainerLogin = styled.View`
    flex: 1px;
    background-color: dodgerblue;
`;

// export const BackgroundBlue = styled.view`
//     flex: 1px;
//     background-color: dodgerblue;
// `;
