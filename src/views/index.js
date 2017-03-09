import { TabNavigator } from 'react-navigation';
import RecentChatsScreen from './AnimatedTabs/RecentChatsScreen';
import AllContactsScreen from './LayoutAnimationTabs/AllContactsScreen';

export default TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});