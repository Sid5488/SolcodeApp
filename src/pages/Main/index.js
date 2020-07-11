import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SvgUrl } from 'react-native-svg';

import {
  Container,
  ContainerMap,
  Title,
  Description,
  BorderRadius,
  Maps,
  ItemContainer,
  Item,
  TextItem,
  ItemImage
} from './styles';

const Main = () => {
  const navigation = useNavigation();

  function handleNavigationBack() {
    navigation.goBack();
  }

  return (
    <>
      <Container>
        <ContainerMap>
          <TouchableOpacity onPress={handleNavigationBack}>
            <Icon name="arrow-left" size={20} color="dodgerblue" />
          </TouchableOpacity>
          <Title>Bem vindo.</Title>
          <Description>
            Encontre a melhor configuração pra sua empresa
          </Description>
          <BorderRadius>
            <Maps />
          </BorderRadius>
        </ContainerMap>
        <ItemContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20
            }}
          >
            <Item>
              <ItemImage source={require('../../../assets/icons/icon.png')} />
              <TextItem>Item - 01</TextItem>
            </Item>
            <Item>
              <ItemImage source={require('../../../assets/icons/icon.png')} />
              <TextItem>Item - 02</TextItem>
            </Item>
            <Item>
              <ItemImage source={require('../../../assets/icons/icon.png')} />
              <TextItem>Item - 03</TextItem>
            </Item>
            <Item>
              <ItemImage source={require('../../../assets/icons/icon.png')} />
              <TextItem>Item - 04</TextItem>
            </Item>
            <Item>
              <ItemImage source={require('../../../assets/icons/icon.png')} />
              <TextItem>Item - 05</TextItem>
            </Item>
            <Item>
              <ItemImage source={require('../../../assets/icons/icon.png')} />
              <TextItem>Item - 06</TextItem>
            </Item>
          </ScrollView>
        </ItemContainer>
      </Container>
    </>
  );
}

// #34cb79

export default Main;