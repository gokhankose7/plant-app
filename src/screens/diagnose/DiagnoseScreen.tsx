import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import P from '../../components/P';
import {colors} from '../../utils/colors';
import {MMKV} from 'react-native-mmkv';
import {mmkvStore} from '../../store/mmkvStore';

const DiagnoseScreen = () => {
  return (
    <View style={styles.container}>
      <P size="l3" color={colors.text} mb={20}>
        Diagnose Screen
      </P>

      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          paddingHorizontal: 15,
          paddingVertical: 8,
          borderRadius: 10,
        }}
        onPress={() => {
          mmkvStore.clearAll();
        }}>
        <P color="#fff">CLEAN MMKV</P>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

export default DiagnoseScreen;
