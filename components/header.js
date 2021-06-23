import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Lists</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 23,
        backgroundColor: 'orange',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    }
});