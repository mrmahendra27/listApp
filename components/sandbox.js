import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
        backgroundColor: 'skyblue',
    },
    boxOne: {
        flex: 1,
        padding: 10,
        backgroundColor: 'violet',
    },
    boxTwo: {
        flex: 1,
        padding: 20,
        backgroundColor: 'red',
    },
    boxThree: {
        flex: 1,
        padding: 30,
        backgroundColor: 'green',
    },
    boxFour: {
        flex: 1,
        padding: 40,
        backgroundColor: 'yellow',
    },
});