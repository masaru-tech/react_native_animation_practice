import { StackNavigator } from 'react-navigation';
import MainScreenNavigator from './views';
import SpringViews from './views/AnimatedTabs/SpringViews';

export default StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: SpringViews }
});