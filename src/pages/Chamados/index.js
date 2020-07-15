import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Entypo as Icon,
    Feather as IconV
} from '@expo/vector-icons';
import {
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Image
} from 'react-native';

import listIcon from '../../../assets/icons/to-do-list.png';
import addToListIcon from '../../../assets/icons/add-to-list.png';

import {
    Container,
    ContainerCard,
    Card,
    CardBody,
    CardFooter,
    TextFooterCard
} from './styles';

const Chamados = () => {
    const navigation = useNavigation();

    function handleNavigationListaChamados() {
        navigation.navigate('ListaChamados');
    }

    function handleNavigationBack() {
        navigation.goBack('Login');
    }

    return (
        <>
            <Container>
                <ContainerCard>
                    <TouchableOpacity onPress={ handleNavigationListaChamados }>
                        <Card style={styles.shadowBox}>
                            <CardBody>
                                {/* <Icon name="list" size={ 125 } color="black" style={{
                                    textAlign: 'center',
                                    marginTop: 'auto',
                                    marginBottom: 'auto'
                                }} /> */}
                                <Image style={{
                                    width: 100,
                                    height: 100,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginTop: 'auto',
                                    marginBottom: 'auto',
                                }} source={ listIcon } />
                            </CardBody>
                            <CardFooter>
                                <TextFooterCard>
                                    Lista de chamados
                                </TextFooterCard>
                            </CardFooter>
                        </Card>
                    </TouchableOpacity>
                </ContainerCard>
                <ContainerCard>
                    <TouchableOpacity onPress={ handleNavigationListaChamados }>
                        <Card style={styles.shadowBox}>
                            <CardBody>
                            {/* <Icon name="add-to-list" size={ 115 } color="black" style={{
                                    textAlign: 'center',
                                    marginTop: 'auto',
                                    marginBottom: 'auto'
                                }} /> */}
                                <Image style={{
                                    width: 100,
                                    height: 100,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginTop: 'auto',
                                    marginBottom: 'auto',
                                }} source={ addToListIcon } />
                            </CardBody>
                            <CardFooter>
                                <TextFooterCard>
                                    Fazer um chamado
                                </TextFooterCard>
                            </CardFooter>
                        </Card>
                    </TouchableOpacity>
                </ContainerCard>       
            </Container>
        </>
    );
}

const styles = StyleSheet.create({
    shadowBox: {
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.5,
      shadowRadius: 5,  
      elevation: 9
    }
});

export default Chamados;