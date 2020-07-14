import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, ContainerMenu } from './styles';

const Menu = () => {
  const navigation = useNavigation();

  function openMenu() {
    navigation.openDrawer();
  }
  return (
    <Container>
      <ContainerMenu>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={openMenu}>
          <Icon name="menu" size={ 24 } style={{ 
            color: 'white',
          }} />
        </TouchableOpacity>
      </ContainerMenu>
    </Container>
  );
}

export default Menu;