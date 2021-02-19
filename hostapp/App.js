import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import liveQuiz from './src/screens/liveQuizQuestion';

const navigator = createStackNavigator(
  {
    liveQuiz : liveQuiz,
    
  },
  {
    initialRouteName: 'liveQuiz',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);