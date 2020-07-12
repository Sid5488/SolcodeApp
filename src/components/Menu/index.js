import React from 'react';
import { View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { Container, ContainerMenu } from './styles';

const Menu = () => {
  return (
    <Container>
      <ContainerMenu>
        <Icon name="menu" size={ 24 } style={{ 
          color: 'dodgerblue',
        }} />
      </ContainerMenu>
    </Container>
  );
}

export default Menu;