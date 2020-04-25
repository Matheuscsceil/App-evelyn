import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ImageProduct = styled.Image`
  width: 100%;
  height: 250px;
`;

export const Content = styled.View`
  flex:1;
  padding:10px;
  flex-direction:row;
`;

export const Title = styled.Text`
  text-transform:uppercase;
  font-family:"Quicksand-Bold";
  color:#fff;
`;

export const Description = styled.Text`
  color:#333;
  text-align:justify;
  font-family:"Quicksand-Regular";
`;

export const BoxAvaliation = styled.TouchableOpacity`
  padding:10px;
  background-color:#080;
`;

export const Avaliation = styled.Text`
  font-size:20px;
  font-family:"Quicksand-Bold";
  color:#fff;
  justify-content:center;
  align-items:center;
`;

export const ContentFooter = styled.View`
  flex:1;
  padding:10px;
  align-items:center;
`;

export const ButtonStatus = styled.TouchableOpacity`
  background-color:${colors.primary};
  padding:10px;
  max-width:80%;
`;

export const TextButtonStatus = styled.Text`
  color:${colors.white};
  text-transform:uppercase;
  font-weight:bold;
`;

