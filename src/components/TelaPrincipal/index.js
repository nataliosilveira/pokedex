import React from 'react';
import { View } from 'react-native';

import { TelaPrincipalc, AreaLista } from './styles';
import Tela from '../../images/Tela.png';

const TelaPrincipal = ({ children }) => {
  return (
    <TelaPrincipalc source={Tela}>
      <AreaLista>{children}</AreaLista>
    </TelaPrincipalc>
  );
};

export default TelaPrincipal;
