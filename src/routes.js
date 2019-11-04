import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';
import User from './pages/User';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Conections from './pages/Conections';

const MainStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({navigation}) => {
        return {
          headerLeft: (
            <Icon
              style={{paddingLeft: 10}}
              onPress={() => {
                navigation.openDrawer();
              }}
              name="menu"
              size={30}
              color="#FFF"
            />
          ),
        };
      },
    },
    User,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: () => {
      return {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      };
    },
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainStack,
    Perfil,
    Conexões: Conections,
  },
  {
    defaultNavigationOptions: () => {
      return {
        header: null,
      };
    },
  }
);
const DrawerNavigator = createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: () => ({
        title: 'Tela Inicial',
      }),
    },
  }
  // {
  //   hideStatusBar: true,
  //   drawerBackgroundColor: 'rgba(255,255,255,.9)',
  //   overlayColor: '#6b52ae',
  //   contentOptions: {
  //     activeTintColor: '#fff',
  //     activeBackgroundColor: '#6b52ae',
  //   },
  // }
);

const AppSwitch = createSwitchNavigator(
  {
    Login,
    Main: TabNavigator,
    DrawerNavigator,
  },
  {
    headerLayoutPreset: 'center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7159c1',
      },
      headerTintColor: '#FFF',
    },
  }
);
const Routes = createAppContainer(AppSwitch);

export default Routes;
