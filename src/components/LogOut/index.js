import React from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Container, ButtonSair } from './styles';

const LogOut = () => {
    const dispatch = useDispatch();

    function SignOut() {
      dispatch(signOut());
    }

  return (
      <>
        <Container>
            <ButtonSair onPress={ SignOut }>
                <Text>Sair</Text>
            </ButtonSair>
        </Container>
      </>
  );
}

export default LogOut;