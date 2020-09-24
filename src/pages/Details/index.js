import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import api from '../../services/api';

import {
  Container,
  ImagemDestaque,
  CampoInfo,
  CampoMetade,
  Titulo,
  Tipo,
  TextoInfo,
  Botao,
  TextoBotao,
} from './styles';
import Header from '../../components/Header';
import TelaPrincipal from '../../components/TelaPrincipal';

const Details = ({ route, navigation }) => {
  const [imagem, setImagem] = useState(
    'https://i.kinja-img.com/gawker-media/image/upload/t_original/ncwj3hkmpxep6po5cooz.gif'
  );
  const [id, setId] = useState('');
  const [tipo, setTipo] = useState('');
  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const { url } = route.params;

  async function BuscarInfo() {
    const link = url.replace('https://pokeapi.co/api/v2/', '');
    const { data } = await api.get(link);
    setId(data.id);
    setTipo(data.types[0].type.name);
    setImagem(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
    );
    setNome(data.name);
    setAltura(data.height);
    setPeso(data.weight);
  }

  useEffect(() => {
    BuscarInfo();
  }, []);

  return (
    <Container>
      <Header />
      <TelaPrincipal>
        <ImagemDestaque source={{ uri: imagem }} />
      </TelaPrincipal>
      <CampoInfo>
        <CampoMetade>
          <Titulo>{nome}</Titulo>
          <TextoInfo>Id : {id}</TextoInfo>
        </CampoMetade>
        <CampoMetade>
          <Titulo>Tipo</Titulo>
          <Tipo>{tipo}</Tipo>
        </CampoMetade>
      </CampoInfo>
      <CampoInfo>
        <CampoMetade>
          <Titulo>Altura</Titulo>
          <TextoInfo>{altura}</TextoInfo>
        </CampoMetade>
        <CampoMetade>
          <Titulo>Peso</Titulo>
          <TextoInfo>{peso}KG</TextoInfo>
        </CampoMetade>
      </CampoInfo>
      <CampoInfo>
        <Botao
          onPress={() => {
            navigation.goBack();
          }}
        >
          <TextoBotao>voltar</TextoBotao>
        </Botao>
      </CampoInfo>
    </Container>
  );
};

export default Details;
