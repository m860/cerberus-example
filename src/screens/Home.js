/**
 * @flow
 * @author Jean.h.ma 2020/1/13
 */
import * as React from 'react';
import {ScrollView, SafeAreaView, Text, Button} from 'react-native';
import {useCerberus, useCloudCerberus} from '@m860/cerberus';

export default function () {
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

    return (
        <SafeAreaView>
            <ScrollView>
                {renderHello()}
                {renderCloudHello()}
            </ScrollView>
        </SafeAreaView>
    );
}
