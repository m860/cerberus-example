/**
 * @flow
 * @author Jean.h.ma 2020/1/13
 */
import * as React from 'react';
import {ScrollView, SafeAreaView, Text, Button} from 'react-native';
import HelloCerberus from '../components/HelloCerberus';
import {useCerberus} from '@m860/cerberus';

export default function () {
    const [, defined] = useCerberus({
        debug: true,
        entry: 'http://127.0.0.1:9000/hello.js',
    });
    console.log(defined);
    const renderHello = React.useCallback(() => {
        if (defined && defined.default) {
            const Hello = defined.default;
            return <Hello/>;
        }
    }, [defined]);
    return (
        <SafeAreaView>
            <ScrollView>
                {renderHello()}
            </ScrollView>
        </SafeAreaView>
    );
}
