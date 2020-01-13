/**
 * @flow
 * @author Jean.h.ma 2020/1/13
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';

export default createAppContainer(
    createStackNavigator({
        Home,
    }),
);
