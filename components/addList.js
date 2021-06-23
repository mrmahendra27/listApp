import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddList({ submitHandler }) {
    const [name, setName] = useState('');

    const changeHandler = (value) => {
        setName(value);
    }

    return (
        <View>
            <TextInput 
            style={styles.input}
            placeholder="Enter new name to the list...."
            onChangeText={changeHandler}
            />
            <Button 
            title='add name'
            color='orange'
            onPress={() => submitHandler(name)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1.5
    }
});