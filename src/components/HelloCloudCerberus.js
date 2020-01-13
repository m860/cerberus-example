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
            backgroundColor: '#cfdf86',
        }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>加载cloud cerberus组件</Text>
            <Text style={{color: '555555'}}>
                我部署在Cloud Cerberus中
            </Text>
        </View>
    );
}
