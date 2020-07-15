import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { BoxShadow } from 'react-native-shadow'
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';

import {
  ContainerText,
  TextBemVindo,
  ContainerCard,
  Card,
  CardHeader,
  CardBody,
  TextCard,
  TextCardHeader,
  CardRedFlag,
  CardWarningFlag,
  CardGreenFlag
} from './styles';

import Menu from '../../components/Menu';
import ButtonDetail from '../../components/ButtonDetail';
// import LogOut from '../../components/LogOut';

import {
  Container
} from './styles';

export default function Main() {
  return (
    <>
      <Menu />
      <ScrollView>
        <Container>
          <ContainerText>
            <TextBemVindo>
              Bem vindo(a)
            </TextBemVindo>
          </ContainerText>
          <ContainerCard>
            <Card style={styles.shadowBox}>
              <CardHeader>
                <TextCardHeader>Informativo Urgente!!</TextCardHeader>
                <CardRedFlag />
              </CardHeader>
              <CardBody>
                <TextCard>
                Lorem Ipsum is simply 
                dummy text of the printing 
                and typesetting industry. 
                Lorem Ipsum has been the the 1500s, when an unknown printer took a galley.
                </TextCard>
              </CardBody>
              <ButtonDetail />
            </Card>
            <Card style={styles.shadowBox}>
              <CardHeader>
                <TextCardHeader>Informativo Médio!!</TextCardHeader>
                <CardWarningFlag />
              </CardHeader>
              <CardBody>
                <TextCard>
                Lorem Ipsum is simply 
                dummy text of the printing 
                and typesetting industry. 
                Lorem Ipsum has been the the 1500s, when an unknown printer took a galley.
                </TextCard>
              </CardBody>
              <ButtonDetail />
            </Card>
            <Card style={styles.shadowBox}>
              <CardHeader>
                <TextCardHeader>Informativo Sutil!!</TextCardHeader>
                <CardGreenFlag />
              </CardHeader>
              <CardBody>
                <TextCard>
                Lorem Ipsum is simply 
                dummy text of the printing 
                and typesetting industry. 
                Lorem Ipsum has been the the 1500s, when an unknown printer took a galley.
                </TextCard>
              </CardBody>
              <ButtonDetail />
            </Card>
            <Card style={styles.shadowBox}>
              <CardHeader>
                <TextCardHeader>Informativo Sutil!!</TextCardHeader>
                <CardGreenFlag />
              </CardHeader>
              <CardBody>
                <TextCard>
                Lorem Ipsum is simply 
                dummy text of the printing 
                and typesetting industry. 
                Lorem Ipsum has been the the 1500s, when an unknown printer took a galley.
                </TextCard>
              </CardBody>
              <ButtonDetail />
            </Card>
          </ContainerCard>
        </Container>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  shadowBox: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5
  }
});