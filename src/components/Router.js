
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Router = StackNavigator(
    {
        Login: { screen : Login },
        Home: { screen : Home }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none', 
        mode: 'card',
    }
);
export default Router;