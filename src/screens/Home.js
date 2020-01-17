/**
 * @flow
 * @author Jean.h.ma 2020/1/13
 */
import * as React from 'react';
import {ScrollView, SafeAreaView, Text, Button, View} from 'react-native';
import {useCerberus, useCloudCerberus, preloadCloud} from '@m860/cerberus';
import type {PreloadOption} from '@m860/cerberus';

export const queryPreloadWidget = (arr: Array<string>) => {
    return arr.find((f: string) => f.indexOf('preload') >= 0);
};

export default function ({navigation}) {
    const [, defined] = useCerberus({
        debug: true,
        entry: 'http://127.0.0.1:9000/hello.js',
    });
    const renderHello = React.useCallback(() => {
        if (defined && defined.default) {
            const Hello = defined.default;
            return <Hello/>;
        }
    }, [defined]);

    const [, defined2] = useCloudCerberus({
        secret: 'ZjBjYjc1MzEtMzVlNS0xMWVhLTkwMTEtZTVjNDkzZjcxZjk5',
    });
    const renderCloudHello = React.useCallback(() => {
        if (defined2 && defined2.default) {
            const HelloCloud = defined2.default;
            return <HelloCloud/>;
        }
    }, [defined2]);

    React.useEffect(() => {
        //preload widget `PreloadWidget`
        const opt: PreloadOption = {
            secret: 'ZjBjYjc1MzEtMzVlNS0xMWVhLTkwMTEtZTVjNDkzZjcxZjk5',
            queryEntry: queryPreloadWidget,
        };
        preloadCloud(opt).then((err: ?Error) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`PreloadWidget预加载完成完成`);
            }
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: 'green',
                    paddingVertical: 10,
                    color: 'white',
                }}>useCerberus</Text>
                {renderHello()}
                <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: 'blue',
                    paddingVertical: 10,
                    color: 'white',
                }}>useCloudCerberus</Text>
                {renderCloudHello()}
                <Button title="Memory Cache"
                        onPress={() => navigation.navigate('MemoryCache')}/>
                <Button title="Show Preload Widget Cache"
                        onPress={() => navigation.navigate('ShowPreloadWidget')}/>
            </ScrollView>
        </SafeAreaView>
    );
}
