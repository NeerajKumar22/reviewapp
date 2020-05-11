import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "ReviewApp"
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "ReviewDetails"
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "skyblue",
      height: 60
    }
  }
});

//export default createAppContainer(HomeStack);
export default HomeStack;

