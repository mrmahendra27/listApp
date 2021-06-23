import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ item, handleList }) {
    return (
        <TouchableOpacity onPress={() => handleList(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 18,
        marginTop : 18,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
});