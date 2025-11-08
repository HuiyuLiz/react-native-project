import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors, spacing, borderRadius } from '../../theme';
import { fontSize } from '../../theme/spacing';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const Input = ({ placeholder, value, onChangeText }: InputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    fontSize: fontSize.md,
  },
});
