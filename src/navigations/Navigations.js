import {Navigation} from 'react-native-navigation';
import * as Screens from './ScreenManager';
import * as Icons from '../config/IconManagers';
import {Dimensions, Platform} from 'react-native';
import * as Colors from '../config/Colors';

const {width} = Dimensions.get('window');
const isIOS = Platform.OS == 'ios';

const DEFAULT_OPTIONS = {
  topBar: {
    visible: false,
    drawBehind: false,
    animate: false,
  },
  layout: {
    orientation: ['portrait'],
  },
  statusBar: {
    style: 'light',
    backgroundColor: Colors.greyCONMIK,
  },
};

const createMainStack = (name, passProps) => {
  return {
    id: Screens.MainStackId,
    children: [
      {
        component: {
          name,
          passProps,
          options: DEFAULT_OPTIONS,
        },
      },
    ],
    options: {
      ...DEFAULT_OPTIONS,
      statusBar: {
        style: 'light',
        backgroundColor: Colors.greyCONMIK,
      },
    },
  };
};

const createBotomTab = (name, icon) => {
  return {
    stack: {
      children: [
        {
          component: {
            name: name,
            options: {
              bottomTab: {
                icon,
              },
            },
          },
        },
      ],
    },
  };
};

const stack = {
  children: [
    {
      component: {
        name: 'Home',
      },
    },
  ],
};

const icon_home = isIOS ? Icons.home : {uri: 'home'};
const icon_news = isIOS ? Icons.news : {uri: 'news'};
const icon_account = isIOS ? Icons.account : {uri: 'account'};
const icon_contact = isIOS ? Icons.contact : {uri: 'contact'};

export const goHome = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: Screens.SideMenuId,
        left: {
          component: {
            name: Screens.ScreenSideMenu,
            options: DEFAULT_OPTIONS,
          },
        },
        center: {
          stack: {
            id: Screens.MainStackId,
            children: [
              {
                bottomTabs: {
                  id: Screens.BottomTabsId,
                  children: [
                    createBotomTab(Screens.ScreenService, icon_home),
                    createBotomTab(Screens.ScreenAbout, icon_account),
                    createBotomTab(Screens.ScreenDetail, icon_contact),
                  ],
                  options: {
                    ...DEFAULT_OPTIONS,
                    bottomTabs: {
                      animate: false,
                      titleDisplayMode: 'alwaysHide',
                    },
                  },
                },
              },
            ],
            options: {
              ...DEFAULT_OPTIONS,
              statusBar: {
                style: 'light',
                backgroundColor: Colors.greyCONMIK,
              },
            },
          },
        },
        options: {
          ...DEFAULT_OPTIONS,
          sideMenu: {
            left: {
              width: (3 * width) / 4,
            },
          },
        },
      },
    },
  });
export const goLogin = () =>
  Navigation.setRoot({
    root: {
      stack: createMainStack(Screens.ScreenLogin),
    },
  });

const goToScreen = (name, passProps) =>
  Navigation.push(Screens.MainStackId, {
    component: {
      name,
      passProps,
      options: {
        ...DEFAULT_OPTIONS,
        sideMenu: {
          left: {
            enabled: false,
          },
        },
      },
    },
  });
export const showMenu = visible =>
  Navigation.mergeOptions(Screens.SideMenuId, {
    sideMenu: {
      left: {
        visible,
      },
    },
  });

export const goBack = componentId => Navigation.pop(componentId);
export const goBackToRoot = () => Navigation.popToRoot(Screens.MainStackId);
export const goDetail = passProps =>
  goToScreen(Screens.ScreenDetail, passProps);
export const goAbout = passProps => goToScreen(Screens.ScreenAbout, passProps);
