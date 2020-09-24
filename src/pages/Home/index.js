import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import api from '../../services/api';

import {
  Container,
  TelaPrincipal,
  AreaLista,
  Lista,
  ListaItem,
  NomePokemon,
  Titulo,
  CampoPesquisa,
  Campotexto,
  BotaoBasico,
} from './styles';
import Header from '../../components/Header';
import Tela from '../../images/Tela.png';

const Home = ({ navigation }) => {
  const [pokemons, setPokemon] = useState([]);
  const [proximo, setProximo] = useState(null);
  const [anterior, setAnterior] = useState(null);
  const [pesquisa, setPesquisa] = useState('');

  async function callpokes() {
    const { data } = await api.get('pokemon');
    setPokemon(data.results);
    setProximo(data.next);
    setAnterior(data.previous);
  }

  async function NavegarLista(item) {
    const url = item.replace('https://pokeapi.co/api/v2/', '');
    const { data } = await api.get(url);
    setPokemon(data.results);
    setProximo(data.next);
    setAnterior(data.previous);
  }

  async function BuscarPorNome(name) {
    try {
      const { data } = await api.get(`pokemon/${name.toLowerCase()}`);
      if (data) {
        navigation.navigate('Details', { url: `pokemon/${data.id}` });
      }
    } catch (error) {
      return Alert.alert('Atenção', 'Pokemon não encontrado');
    }
  }

  useEffect(() => {
    callpokes();
  }, []);

  const renderPokemonsList = ({ item }) => (
    <ListaItem
      onPress={() => {
        navigation.navigate('Details', { url: item.url });
      }}
    >
      <NomePokemon>{item.name}</NomePokemon>
    </ListaItem>
  );
  return (
    <Container>
      <Header />
      <TelaPrincipal source={Tela}>
        <AreaLista>
          <Lista
            data={pokemons}
            renderItem={renderPokemonsList}
            keyExtractor={(item) => item.name}
          />
        </AreaLista>
      </TelaPrincipal>
      <Titulo>Pesquise pelo nome</Titulo>
      <CampoPesquisa>
        <Campotexto
          onChangeText={(text) => {
            setPesquisa(text);
          }}
          value={pesquisa}
        />
        <BotaoBasico
          onPress={() => {
            BuscarPorNome(pesquisa);
          }}
        >
          <Text>PESQUISAR</Text>
        </BotaoBasico>
      </CampoPesquisa>
      <CampoPesquisa>
        {anterior ? (
          <BotaoBasico
            onPress={() => {
              NavegarLista(anterior);
            }}
          >
            <Text>Anterior</Text>
          </BotaoBasico>
        ) : (
          <Text></Text>
        )}
        {proximo ? (
          <BotaoBasico
            onPress={() => {
              NavegarLista(proximo);
            }}
          >
            <Text>Proximo</Text>
          </BotaoBasico>
        ) : (
          <Text></Text>
        )}
      </CampoPesquisa>
    </Container>
  );
};

export default Home;
