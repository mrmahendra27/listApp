import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import AddList from './components/addList';
import Sandbox from './components/sandbox';

export default function App() {
  const [lists, setLists] = useState([
    { name: 'mahendra', key: '1' },
    { name: 'vinayak', key: '2' },
    { name: 'shelton', key: '3' },
    { name: 'rahul', key: '4' }
  ]);

  const handleList = (key) => {
    setLists((prevList) => {
      return prevList.filter(list => list.key != key)
    })
  }

  const submitHandler = (name) => {
    if (name.length > 0) {
      setLists((prevLists) => {
        return [
          { name: name, key: Math.random().toString() },
          ...prevLists,
        ]
      })
    } else {
      Alert.alert('Whoops!', 'Please Enter somthing before adding...!', [
        { text: 'Got it', onPress: () => console.log('user agreed..!') }
      ]);
    }
  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* form */}
          <AddList submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={lists}
              renderItem={({ item }) => (
                <ListItem item={item} handleList={handleList} />
              )}
            />
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});