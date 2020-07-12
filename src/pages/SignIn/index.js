import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import {
    Container,
    Main,
    Title,
    Description,
    Footer,
    Button,
    TextEntrar,
    ArrowText,
    ContainerLogin,
    Logar
} from './styles';

const SignIn = () => {
    const navigation = useNavigation();

    function handleNavigateToMain() {
        navigation.navigate('Main');
    }

    function handleNavigateToLogin() {
        navigation.navigate('Login');
    }

    return (
        <Container 
            source={require('../../../assets/defaults/login-image.jpeg')}
            imageStyle={{ width: 450, height: 750 }}
        >
            <Main>
                <Title>Seu Outsourcing App</Title>
                <Description>
                    Ajudamos empressas a encontrarem a configuração eficiente!
                </Description>
            </Main>
            <Footer>
                <Input />
                <Input />
                <Input />
                <Button onPress={handleNavigateToMain} >
                    <View>
                        <ArrowText>
                            <Icon 
                                name="arrow-right"
                                color="dodgerblue"
                                size={24}
                            />
                        </ArrowText>
                    </View>
                    <TextEntrar>Sign In</TextEntrar>
                </Button>
                <ContainerLogin>
                    <Logar onPress={handleNavigateToLogin}>
                        Já tem uma conta? clique aqui!
                    </Logar>
                </ContainerLogin>
            </Footer>
        </Container>
    );
};

export default SignIn;
