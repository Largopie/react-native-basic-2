import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from './colors';
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const TODOS_KEY = '@toDos';
  const WORKING_STATE_KEY = '@working';
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const [toDos, setToDos] = useState({});

  const travel = async (state) => {
    setWorking(state);
    await saveWorking(state);
  };

  const work = async (state) => {
    setWorking(state);
    await saveWorking(state);
  };

  const onChangeText = (payload) => setText(payload);

  const saveToDo = async (saveItem) => {
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(saveItem));
  };

  const saveWorking = async (state) => {
    await AsyncStorage.setItem(WORKING_STATE_KEY, JSON.stringify(state));
  };

  const loadWorkingState = async () => {
    const workingState = await AsyncStorage.getItem(WORKING_STATE_KEY);
    setWorking(JSON.parse(workingState));
  };

  const loadToDo = async () => {
    const toDos = await AsyncStorage.getItem(TODOS_KEY);

    setToDos(toDos ? JSON.parse(toDos) : {});
  };

  const addToDo = async () => {
    if (text === '') return;

    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working },
    };
    setToDos(newToDos);
    await saveToDo(newToDos);
    setText('');
  };

  const deleteItem = async (key) => {
    const toDos = await AsyncStorage.getItem(TODOS_KEY);
    const parseToDos = JSON.parse(toDos);
    delete parseToDos[key];
    await AsyncStorage.removeItem(TODOS_KEY);
    await AsyncStorage.setItem(TODOS_KEY, JSON.stringify(parseToDos));
  };

  const deleteToDo = async (key) => {
    Alert.alert('Delete To Do', 'Are you Sure?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          await deleteItem(key);
        },
      },
    ]);
  };

  useEffect(() => {
    loadToDo();
    loadWorkingState();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => work(true)}>
          <Text style={{ ...styles.btnText, color: working ? 'white' : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => travel(false)}>
          <Text style={{ ...styles.btnText, color: !working ? 'white' : theme.grey }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        value={text}
        returnKeyType='done'
        placeholder={working ? '할 일을 추가하세요' : '어디에 가고 싶습니까?'}
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity hitSlop={15} id={key} onPress={() => deleteToDo(key)}>
                  <Text style={styles.btn}>
                    <Fontisto name='trash' size={16} color={theme.grey} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null,
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },

  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },

  btnText: {
    fontSize: 38,
    fontWeight: '600',
  },

  input: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  },

  toDo: {
    backgroundColor: '#151719',
    padding: 20,
    marginTop: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  toDoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  btnContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  btn: {
    fontSize: 16,
  },
});
