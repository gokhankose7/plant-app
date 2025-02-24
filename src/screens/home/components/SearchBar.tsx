import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../../utils/colors';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color={colors.secondaryText} />
      <TextInput
        placeholder="Search for plants"
        placeholderTextColor={colors.secondaryText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 46,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 14,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: colors.text,
  },
});
