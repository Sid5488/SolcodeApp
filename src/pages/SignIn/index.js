import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
    View,
    TextInput
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
    ArrowText
} from './styles';

const SignIn = () => {
    const navigation = useNavigation();

    function handleNavigateToMain() {
        navigation.navigate('Main');
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
                <View>
                    <TextInput placeholder="Digite seu nome!" />
                </View>
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
                    <TextEntrar>Entrar</TextEntrar>
                </Button>
            </Footer>
        </Container>
    );
};

export default SignIn;
