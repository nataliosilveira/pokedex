import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  background-color: #c50222;
  padding: 0;
  margin-top: 50px;
`;

export const TelaPrincipal = styled.ImageBackground`
  width: 90%;
  height: 300px;
  margin-top: 10px;
  align-content: center;
  align-items: center;
`;

export const AreaLista = styled.View`
  height: 260px;
`;

export const Lista = styled.FlatList`
  margin-top: 45px;
  width: 250px;
`;

export const ListaItem = styled.TouchableOpacity`
  background: #f7f7f7;
  margin-bottom: 10px;
  height: 30px;
`;

export const NomePokemon = styled.Text`
  text-align: center;
  margin-top: 5px;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-top: 10px;
`;

export const CampoPesquisa = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Campotexto = styled.TextInput`
  background: white;
  width: 50%;
  height: 30px;
  margin-right: 10px;
  padding-left: 5px;
`;

export const BotaoBasico = styled.TouchableOpacity`
  background: white;
  padding: 5px;
  margin-right: 15px;
  margin-left: 15px;
`;
