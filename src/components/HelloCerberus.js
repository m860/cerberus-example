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
            <View style={{paddingHorizontal: 16}}>
                <Text>加载图片。所有加载的图片都需要设置width和height，否则将不能展示图片，图片都是以uri的方式进行加载的。</Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/cerberus.jpg')}
                           resizeMode="contain"
                           style={{width: 150, height: 150}}/>
                    <Text></Text>
                </View>
                <Text>在本地开发的时候需要启动本地服务`cbs start config`</Text>
                <Text>为了更好的演示reload，请关闭Fast Refresh</Text>
            </View>
        </View>
    );
}
