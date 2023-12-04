import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { SettingPage } from '../App';
import { FlashCardApp } from '../App';

const Tab = createBottomTabNavigator;

export const MyTabs = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name='FlashCardApp' component={FlashCardApp} />
            <Tab.Screen name='SettingPage' component={SettingPage} />
        </Tab.Navigator>
    )
}