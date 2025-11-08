import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Todo } from '../../type';
import { TodoItem } from '../TodoItem';

interface TodoListProps {
  todos: Todo[];
  onCompleteTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number, text: string) => void;
}

const TodoList = ({
  todos,
  onCompleteTodo,
  onDeleteTodo,
  onEditTodo,
}: TodoListProps) => {
  return (
    <ScrollView style={styles.container}>
      {todos?.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={() => onCompleteTodo(todo.id)}
          onDeleteTodo={() => onDeleteTodo(todo.id)}
          onEditTodo={(text: string) => onEditTodo(todo.id, text)}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
