import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import Card from '~/components/Card';
import LinearGradient from 'react-native-linear-gradient';

import { Searchbar } from 'react-native-paper';
import store from '~/services/storage';

export default function Watched({
  setLoading,
  loading,
  setMovies,
  movies,
  moviesAll,
}) {
  const [search, setSearch] = useState('');

  function searching(text) {
    setLoading(true);
    setSearch(text);

    const filter = moviesAll.filter((value) => {
      return String(value.title)
        .toUpperCase()
        .includes(String(text).toUpperCase());
    });
    setMovies(filter);

    setTimeout(() => {
      setLoading(false);
    }, 250);
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
          style={{ fontFamily: 'Quicksand-Regular' }}
          placeholder="Buscar Série"
          onChangeText={(value) => searching(value)}
          value={search}
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
          renderItem={({ item }) => <Card type={2} movie={item} />}
        />
      )}
    </LinearGradient>
  );
}
