import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings90987Navigator from '../features/Settings90987/navigator';
import UserProfile90980Navigator from '../features/UserProfile90980/navigator';
import Settings90979Navigator from '../features/Settings90979/navigator';
import Settings90977Navigator from '../features/Settings90977/navigator';
import SignIn290975Navigator from '../features/SignIn290975/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings90987: { screen: Settings90987Navigator },
UserProfile90980: { screen: UserProfile90980Navigator },
Settings90979: { screen: Settings90979Navigator },
Settings90977: { screen: Settings90977Navigator },
SignIn290975: { screen: SignIn290975Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
