import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { SvgUrl } from 'react-native-svg';
import { Marker } from 'react-native-maps';

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
        <ScrollView>
          <ContainerMap>
            <TouchableOpacity onPress={handleNavigationBack}>
              <Icon name="arrow-left" size={20} color="dodgerblue" />
            </TouchableOpacity>
            <Title>Bem vindo.</Title>
            <Description>
              Encontre a melhor configuração pra sua empresa
            </Description>
            <BorderRadius>
              <Maps initialRegion={{
                latitude: -27.2092052,
                longitude: -49.6401092,
                latitudeDelta: 0.014,
                logintudeDelta: 0.014
              }} >
                <Marker coordinate={{
                  latitude: -27.20192052,
                  longitude: -49.64010192,
                }} />
              </Maps>
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
        </ScrollView>
      </Container>
    </>
  );
}

// #34cb79

export default Main;