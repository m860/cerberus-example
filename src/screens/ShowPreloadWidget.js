/**
 * @flow
 * @author Jean.h.ma 2020/1/15
 */
import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useCloudCerberus} from '@m860/cerberus';
import {queryPreloadWidget} from './Home';

export default function () {
    const [, defined2] = useCloudCerberus({
        secret: 'ZjBjYjc1MzEtMzVlNS0xMWVhLTkwMTEtZTVjNDkzZjcxZjk5',
        queryEntry: queryPreloadWidget,
    });
    const renderCloudHello = React.useCallback(() => {
        if (defined2 && defined2.default) {
            const PreloadWidget = defined2.default;
            return <PreloadWidget/>;
        }
        return null;
    }, [defined2]);

    return (
        <SafeAreaView>
            <ScrollView>
                {renderCloudHello()}
            </ScrollView>
        </SafeAreaView>
    );
}
