import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Menu from '../../components/Menu';
// import LogOut from '../../components/LogOut';

import {
  Container
} from './styles';

const Main = () => {
  return (
    <>
      <Menu />
      <Container>
        <ContainerText>
          <TextBemVindo>
            Bem vindo(a)
          </TextBemVindo>
        </ContainerText>
      </Container>
    </>
  );
}

// #34cb79

export default Main;