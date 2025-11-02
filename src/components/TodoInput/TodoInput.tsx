import React, { useState } from 'react'
import { StyleSheet,Text, TextInput, TouchableOpacity, View } from 'react-native'

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [todo,setTodo] = useState('');  

  const handleAddTodo = () => {
    if (todo.trim() === '') return;
    onAddTodo(todo.trim());
    setTodo('');
  }

  return (
    <View style={styles.container}>
      <TextInput value={todo} onChangeText={setTodo} style={styles.input} placeholder="Add a new todo" />
      <TouchableOpacity onPress={handleAddTodo} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})