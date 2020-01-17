/**
 * @flow
 * @author Jean.h.ma 2020/1/17
 */
import * as React from 'react';
import {View, Text} from 'react-native';

export default function () {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>当前组件已经预加载</Text>
        </View>
    );
}
