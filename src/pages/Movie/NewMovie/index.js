import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import api, { url_image } from '~/services/api';

import LinearGradient from 'react-native-linear-gradient';
import { Searchbar } from 'react-native-paper';

import Card from '~/components/Card';

export default function NewMovie() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  async function searchMovie() {
    setLoading(true);
    if (search != '') {
      const { data } = await api.get(
        `search/movie?api_key=7fa50a0dd7e42903a4cd12c3924b4c41&query=${search}&language=pt-br`
      );
      setMovies(data.results);
    } else {
      setMovies([]);
    }
    setLoading(false);
  }

  return (
    <LinearGradient
      /* start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} */ colors={[
        '#1F1C18',
        '#8E0E00',
      ]}
      style={{
        flex: 1,
      }}
    >
      <View style={{ padding: 10 }}>
        <Searchbar
          placeholder="Buscar Filme"
          onChangeText={(value) => setSearch(value)}
          value={search}
          onPress={() => searchMovie()}
          onIconPress={() => searchMovie()}
        />
      </View>

      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="small" color="#fff" />
        </View>
      ) : (
        <FlatList
          data={movies}
          numColumns={3}
          //keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <Card
              type={1}
              movie={{
                id: item.id,
                title: item.title,
                description: item.overview,
                avaliation: '0.0',
                status: false,
                poster: `${url_image}/${item.backdrop_path}`,
                url: `${url_image}/${item.poster_path}`,
              }}
            />
          )}
        />
      )}
    </LinearGradient>
  );
}

NewMovie.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'NOVO FILME',
  };
};
