import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
var width = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CardMovie = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
  min-height: 150px;
  min-width: ${width / 3 - 20}px;
  max-width: ${width / 3 - 20}px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: #fff;
  border-radius: 5px;
`;

export const Text = styled.Text`
  font-family: 'Quicksand-Regular';
  text-align: center;
  color: #000;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 5px;
`;

export const Center = styled.View`
  justify-content: center;
  align-items: center;
`;
