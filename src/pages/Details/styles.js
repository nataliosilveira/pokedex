import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  background-color: #c50222;
  margin-top: 50px;
  padding: 0;
`;

export const ImagemDestaque = styled.Image`
  margin-top: 50px;
  width: 200px;
  height: 200px;
`;

export const CampoInfo = styled.View`
  flex-direction: row;
  padding: 0 20px 0 20px;
  margin-top: 10px;
`;

export const CampoMetade = styled.View`
  width: 50%;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Tipo = styled.Text`
  background: white;
  color: black;
  border-radius: 10px;
  width: 100px;
  text-align: center;
`;

export const TextoInfo = styled.Text`
  color: white;
`;

export const Botao = styled.TouchableOpacity`
  background: white;
  margin-top: 15px;
  width: 100px;
  padding: 5px 10px;
`;

export const TextoBotao = styled.Text`
  text-align: center;
  text-transform: uppercase;
`;
