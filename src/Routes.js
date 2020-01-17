/**
 * @flow
 * @author Jean.h.ma 2020/1/13
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import MemoryCache from './screens/MemoryCache';
import ShowPreloadWidget from './screens/ShowPreloadWidget';

export default createAppContainer(
    createStackNavigator({
        Home,
        MemoryCache,
        ShowPreloadWidget,
    }),
);
