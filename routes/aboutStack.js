import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About ReviewDetails"
    }
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "skyblue",
      height: 60
    }
  }
})

export default AboutStack;
