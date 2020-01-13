/**
 * @flow
 * @author Jean.h.ma 2020/1/13
 */
import * as React from 'react';
import {Text, View} from 'react-native';

export default function () {
    return (
        <View style={{
            flex: 1,
            paddingVertical: 10,
            backgroundColor: 'silver',
        }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>加载cerberus组件</Text>
            <Text style={{color: '555555'}}>
                我是一个远程组件，试试修改我组件会自动reload。【修改之前请关闭Fast Refresh功能】
            </Text>
        </View>
    );
}
