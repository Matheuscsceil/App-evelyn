import React from 'react';
import { Container, CardMovie, Text, Center, Image } from './styles';

import api, { url_image } from '~/services/api';
import { withNavigation } from 'react-navigation';

// Categorias, caixa de busca, coleçoes, detalhes (titulo,imagen,descricao,categoria)

function Card({ type = 1, movie, navigation }) {
  return (
    <Container>
      <CardMovie onPress={() => type == 1 ? navigation.navigate("DetailMovie", { item: movie }) : navigation.navigate("DetailSerie", { item: movie })}>
        <Center>
          <Image resizeMode="contain" source={{ uri: `${movie.url}` }} />
          <Text>{movie.title}</Text>
        </Center>
      </CardMovie>
    </Container>
  );
}

export default withNavigation(Card);
