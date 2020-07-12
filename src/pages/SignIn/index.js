import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, 
    KeyboardAvoidingView, 
    TouchableOpacity 
} from 'react-native';
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
import { TapGestureHandler } from 'react-native-gesture-handler';

import api from '../../services/api';

const SignIn = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');

    const navigation = useNavigation();

    function handleNavigateToLogin() {
        navigation.navigate('Login');
    }

    async function insertUser() {
        await api.post('/usuarios/sign-in', {
            nome: nome,
            email: email,
            senha: senha,
            cpf: cpf
        })
        .then(function (response) {
            console.log(response.data)
            handleNavigateToLogin();
        })
        .catch(function (error) {
            console.log(error);
        });

        setNome('');
        setEmail('');
        setSenha('');
        setCpf('');
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
                        autoCapitalize="sentences"
                        autoCorrect={ true }
                        autoFocus={ true }
                    />
                    <Input 
                        placeholder="Digite seu CPF"
                        keyboardAppearance="dark"
                        keyboardType="numeric"
                        value={ cpf }
                        onChangeText={ setCpf }
                    />
                    <Input
                        placeholder="Digire seu e-mail"
                        value={ email }
                        onChangeText={ setEmail }
                        autoCorrect={ false }
                        autoFocus={ true }
                    />
                    <Input
                        placeholder="Digire sua senha"
                        value={ senha }
                        onChangeText={ setSenha }
                        autoFocus={ true }
                        secureTextEntry={ true }
                    />
                    <Button onPress={ insertUser } >
                        <View>
                            <ArrowText>
                                <Icon 
                                    name="arrow-right"
                                    color="dodgerblue"
                                    size={ 24 }
                                />
                            </ArrowText>
                        </View>
                        <TextEntrar>Sign In</TextEntrar>
                    </Button>
                    <ContainerLogin>
                        <TouchableOpacity
                            onPress={handleNavigateToLogin}
                            activeOpacity={0.7}
                        >
                            <Logar>
                                Já tem uma conta? clique aqui!
                            </Logar>
                        </TouchableOpacity>
                    </ContainerLogin>
                </Footer>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
