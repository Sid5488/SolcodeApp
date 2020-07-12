import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    Logar,
    Input
} from './styles';

const SignIn = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigation = useNavigation();

    function handleNavigateToMain() {
        navigation.navigate('Main');
    }

    function handleNavigateToLogin() {
        navigation.navigate('Login');
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
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
                    <Input
                        placeholder="Digite seu nome"
                        value={ nome }
                        onChangeText={ setNome } 
                    />
                    <Input
                        placeholder="Digire seu e-mail"
                        value={ email }
                        onChangeText={ setEmail }
                    />
                    <Input
                        placeholder="Digire sua senha"
                        value={ senha }
                        onChangeText={ setSenha }
                    />
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
        </KeyboardAvoidingView>
    );
};

export default SignIn;
