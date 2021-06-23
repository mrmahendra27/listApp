import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ListItem({ item, handleList }) {
    return (
        <TouchableOpacity onPress={() => handleList(item.key)}>
            <View style={styles.item}>
                <Icon name="delete" size={18} color='black'/>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 18,
        marginTop: 18,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    }
});