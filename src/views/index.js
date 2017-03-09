import { TabNavigator } from 'react-navigation';
import AnimatedViewList from './AnimatedTabs/AnimatedViewList';
import AllContactsScreen from './LayoutAnimationTabs/AllContactsScreen';

export default TabNavigator({
  Animated: { screen: AnimatedViewList },
  All: { screen: AllContactsScreen },
});