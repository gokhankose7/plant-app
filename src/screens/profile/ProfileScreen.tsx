import React from 'react';
import {View, StyleSheet} from 'react-native';
import P from '../../components/P';
import {colors} from '../../utils/colors';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <P size="l3" color={colors.text}>
        Profile Screen
      </P>
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

export default ProfileScreen;
