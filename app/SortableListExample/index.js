/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';

import SortableFlatlist from '../react-native-sortable-flatlist';

export default class ExampleProjectSortableList extends Component {
    state = {
        data: [{ title: 'Rome' }, { title: 'Berlin' }, { title: 'New York' }],
    }

    swapData = () => {
        this.setState({ animating: true }, () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut, () => {
                this.setState({ animating: false });
            });
            if (this.state.data[0].title === 'Berlin') {
                this.setState({
                    data: [{ title: 'Rome' }, { title: 'Berlin' }, { title: 'New York' }],
                });
            } else {
                this.setState({
                    data: [{ title: 'Berlin' }, { title: 'Rome' }, { title: 'New York' }],
                });
            }
        });
    }

    keyExtractor = (item, index) => item.title;

    _renderItem = ({ item, isGhost }) => (
        <View style={[styles.itemWrapper, isGhost && { backgroundColor: 'rgba(0,0,0, 0.2)' }]}>
            <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>

                <SortableFlatlist
                    itemHeight={80}
                    seperatorBackgroundColor={itemBackgroundColor}
                    extradata={this.state.animating}
                    data={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this._renderItem}
                />

                <TouchableOpacity style={{ height: 20, width: 100, backgroundColor: 'red' }} onPress={this.swapData} />

            </View>
        );
    }
}

const itemBackgroundColor = '#171717';
const listItemHorizonzalPadding = 16;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 27,
        color: 'white',
    },
    itemWrapper: {
        height: 80,
        backgroundColor: itemBackgroundColor,
        paddingVertical: 22,
        paddingHorizontal: listItemHorizonzalPadding,
    },
});
