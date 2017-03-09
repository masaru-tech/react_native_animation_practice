import { StackNavigator } from 'react-navigation';
import MainScreenNavigator from './views';
import SpringViews from './views/AnimatedTabs/SpringViews';
import TimingViews from './views/AnimatedTabs/TimingViews';

export default StackNavigator({
  Home: { screen: MainScreenNavigator },
  SpringViews: { screen: SpringViews },
  TimingViews: { screen: TimingViews }
});