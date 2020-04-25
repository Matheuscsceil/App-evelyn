import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { colors } from '~/styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Header, Content, Tab, Tabs } from 'native-base';
// import { Container } from './styles';
import Tab1 from './ToWatch';
import Tab2 from './Watched';

import store from '~/services/storage';

export default function Serie({ navigation }) {
  const [moviesWatched, setMoviesWatched] = useState([]);
  const [moviesNotWatched, setMoviesNotWatched] = useState([]);

  const [moviesWatchedAll, setMoviesWatchedAll] = useState([]);
  const [moviesNotWatchedAll, setMoviesNotWatchedAll] = useState([]);

  const [loading, setLoading] = useState(false);

  async function getMovies() {
    setLoading(true);
    const a = await store.get("series-evelyn");

    if (a) {
      const wahtched = a.filter((item) => (item.type == 1));
      const notWatched = a.filter((item) => (item.type == 2));

      wahtched.sort((a, b) =>
        Number(a.avaliation) < Number(b.avaliation)
          ? 1
          : Number(b.avaliation) < Number(a.avaliation)
            ? -1
            : 0,
      );

      notWatched.sort((a, b) =>
        Number(a.avaliation) < Number(b.avaliation)
          ? 1
          : Number(b.avaliation) < Number(a.avaliation)
            ? -1
            : 0,
      );

      setMoviesWatched(wahtched);
      setMoviesNotWatched(notWatched);

      setMoviesWatchedAll(wahtched);
      setMoviesNotWatchedAll(notWatched);
    }

    setLoading(false);
  }

  useEffect(() => {
    getMovies();

    navigation.setParams({
      getMovies: () => getMovies(),
    });
  }, [])

  return (
    <Tabs tabBarUnderlineStyle={{ backgroundColor: "#fff" }}>
      <Tab heading="FALTA ASSISTIR" tabStyle={{ backgroundColor: colors.primary }} textStyle={{ fontFamily: 'Quicksand-Bold', color: '#fff' }} activeTabStyle={{ backgroundColor: colors.primary }} activeTextStyle={{ fontFamily: 'Quicksand-Bold', color: '#fff', fontWeight: 'normal' }}>
        <Tab1 setLoading={setLoading} setMovies={setMoviesNotWatched} loading={loading} moviesAll={moviesNotWatchedAll} movies={moviesNotWatched} />
      </Tab>
      <Tab heading="JÁ ASSISTIDO" tabStyle={{ backgroundColor: colors.primary }} textStyle={{ fontFamily: 'Quicksand-Bold', color: '#fff' }} activeTabStyle={{ backgroundColor: colors.primary }} activeTextStyle={{ fontFamily: 'Quicksand-Bold', color: '#fff', fontWeight: 'normal' }}>
        <Tab2 setLoading={setLoading} setMovies={setMoviesWatched} loading={loading} moviesAll={moviesWatchedAll} movies={moviesWatched} />
      </Tab>
    </Tabs>
  );
}

Serie.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.state.params.getMovies()}>
        <Icon
          style={{ marginLeft: 10 }}
          name="reload"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("NewSerie")}>
        <Icon
          style={{ marginRight: 10 }}
          name="plus"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
    )
  }
}
