/**
 * @flow
 * @author Jean.h.ma 2020/1/13
 */
import * as React from 'react';
import {Image, Text, View} from 'react-native';

export default function () {
    return (
        <View style={{
            flex: 1,
            paddingVertical: 10,
            backgroundColor: '#cfdf86',
        }}>
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>useCloudCerberus</Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/cerberus.jpg')}
                       resizeMode="contain"
                       style={{width: 150, height: 150}}/>
            </View>
            <Text style={{color: '#555555'}}>
                我部署在Cloud Cerberus中
            </Text>
        </View>
    );
}
