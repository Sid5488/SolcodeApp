import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.View`
    flex: 1px;
    padding-top: 15px;
`;

export const ContainerMap = styled.View`
    padding: 0px 15px;
`;

export const Title = styled.Text`
    font-size: 24px;
    margin-top: 10px;
`;

export const Description = styled.Text`
    font-size: 16px;
    color: #888;
`;

export const BorderRadius = styled.View`
    width: 330px;
    height: 450px;
    margin-top: 15px;
    border-radius: 15px;
`;

export const Maps = styled(MapView)`
    width: 325px;
    height: 445px;
    border-radius: 15px !important;
`;

export const ItemContainer = styled.View`
    flex: 1px;
    flex-direction: row;
`;

export const ItemImage = styled.Image`
    width: 70px;
    height: 70px;
`;

export const Item = styled.View`
    width: 100px;
    height: 100px;
    margin-top: 15px;
    border-radius: 7px;
    background-color: white;
    justify-content: center;
    align-items: center;
    margin-left: 7px;
    margin-right: 7px;
    margin-bottom: 15px;
`;

export const TextItem = styled.Text``;
