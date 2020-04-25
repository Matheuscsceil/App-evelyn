import React, { useState, useEffect } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/FontAwesome';

import Movie from '~/pages/Movie';
import Serie from '~/pages/Serie';
import Profile from '~/pages/Profile';

import NewMovie from '~/pages/Movie/NewMovie';
import DetailMovie from '~/components/Card/DetailMovie';

import NewSerie from '~/pages/Serie/NewSerie';
import DetailSerie from '~/components/Card/DetailSerie';

import { colors } from '~/styles';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Filmes: {
      screen: createStackNavigator(
        { Movie, NewMovie },
        {
          defaultNavigationOptions: {
            headerTitle: 'FILMES',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: colors.primary,
            },
          },
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="library-movie" size={28} color={tintColor} />
        ),
        tabBarLabel: 'Filmes',
      }),
    },
    'Séries': {
      screen: createStackNavigator(
        { Serie, NewSerie },
        {
          defaultNavigationOptions: {
            headerTitle: 'SÉRIES',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: colors.primary,
            },
          },
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="television" size={28} color={tintColor} />
        ),
        tabBarLabel: 'Séries',
      }),
    },
    /* Perfil: {
      screen: createStackNavigator(
        {
          Profile,
        },
        {
          defaultNavigationOptions: {
            headerTitle: 'PERFIL',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: colors.primary,
            },
          },
        }
      ),
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <IconUser name="user" size={28} color={tintColor} />
        ),
        tabBarLabel: 'Perfil',
      }),
    }, */
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: colors.primary,//"#f90f9E",
      inactiveTintColor: '#999',
      activeBackgroundColor: '#fff',
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 0.6,
        borderTopColor: '#ebebeb',
        height: 60,
        paddingBottom: 5,
        paddingTop: 5,
      },
    },
  }
);

const Routes = () => createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: BottomTabNavigator,
        navigationOptions: { header: null },
      },
      NewMovie: {
        screen: NewMovie,
        navigationOptions: {
          headerStyle: {
            //height: Platform.OS === 'ios' ? 100 : 70,
            backgroundColor: colors.primary,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
          headerTintColor: colors.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleStyle: {
            color: colors.primary,
          },
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
          },
        },
      },
      DetailMovie: {
        screen: DetailMovie,
        navigationOptions: {
          headerStyle: {
            //height: Platform.OS === 'ios' ? 100 : 70,
            backgroundColor: colors.primary,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
          headerTintColor: colors.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleStyle: {
            color: colors.primary,
          },
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
          },
        },
      },

      NewSerie: {
        screen: NewSerie,
        navigationOptions: {
          headerStyle: {
            //height: Platform.OS === 'ios' ? 100 : 70,
            backgroundColor: colors.primary,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
          headerTintColor: colors.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleStyle: {
            color: colors.primary,
          },
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
          },
        },
      },
      DetailSerie: {
        screen: DetailSerie,
        navigationOptions: {
          headerStyle: {
            //height: Platform.OS === 'ios' ? 100 : 70,
            backgroundColor: colors.primary,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
          headerTintColor: colors.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleStyle: {
            color: colors.primary,
          },
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
          },
        },
      }
    }
  )
);

export default Routes;
