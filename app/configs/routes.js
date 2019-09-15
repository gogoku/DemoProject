import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/homeScreen/home'
import ActionSheetDemo from '../screens/actionSheetDemoScreen/actionSheetDemo'
import colorCodes from './colors';

const RootNavigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:({ navigation }) => ({
      title: 'Home',
      headerStyle:{backgroundColor: colorCodes.headerColor},
      headerTintColor:colorCodes.brightTextColor
    }),
  },
  ActionSheetDemo:{
    screen:ActionSheetDemo,
    navigationOptions:({ navigation }) => ({
      title: 'Action Sheet',
      headerStyle:{backgroundColor: colorCodes.headerColor},
      headerTintColor:colorCodes.brightTextColor
    }),
  }
});

export default createAppContainer(RootNavigation);