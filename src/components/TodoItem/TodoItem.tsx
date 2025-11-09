import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '../Icon';
import { Todo } from '../../type';
import { Input } from '../Input';
import { colors, fontSize, spacing } from '../../theme';

interface TodoItemProps {
  todo: Todo;
  onCompleteTodo: () => void;
  onEditTodo: (text: string) => void;
  onDeleteTodo: () => void;
}

const TodoItem = ({
  todo,
  onCompleteTodo,
  onEditTodo,
  onDeleteTodo,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditTodo = () => {
    setIsEditing(!isEditing);
    onEditTodo(editedText);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        // edit todo
        <Input
          value={editedText}
          onChangeText={setEditedText}
          placeholder="Edit todo"
        />
      ) : (
        // complete todo
        <TouchableOpacity
          style={styles.completeButton}
          onPress={onCompleteTodo}
        >
          <View style={styles.iconContainer}>
            <Icon
              name={todo.completed ? 'check-box' : 'check-box-outline-blank'}
              size={24}
              color={todo.completed ? colors.primary : colors.text.secondary}
            />
          </View>
          <Text
            style={[styles.todoText, todo.completed && styles.completedText]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {todo.text}
          </Text>
        </TouchableOpacity>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEditTodo}>
          <Icon
            name={isEditing ? 'check' : 'edit'}
            size={24}
            color={colors.text.secondary}
          />
        </TouchableOpacity>
        {isEditing ? (
          // cancel edit
          <TouchableOpacity onPress={handleCancelEdit}>
            <Icon name="close" size={24} color={colors.error} />
          </TouchableOpacity>
        ) : (
          // delete todo
          <TouchableOpacity onPress={onDeleteTodo}>
            <Icon name="delete" size={24} color={colors.error} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    borderColor: colors.border.primary,
    borderBottomWidth: 1,
    gap: spacing.lg,
    minHeight: 80,
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flex: 1,
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoText: {
    fontSize: fontSize.md,
    color: colors.text.primary,
    flexShrink: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: colors.text.disabled,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: spacing.xxl,
  },
});
