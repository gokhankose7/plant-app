import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import P from '../../../components/P';
import {letter} from '../../../assets/pngs';
import {W} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const PremiumBanner = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('Paywall');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Image source={letter} style={styles.icon} />
        <View style={styles.badge}>
          <P size="s1" color="white" font="defaultB">
            1
          </P>
        </View>
      </View>
      <View style={styles.textContainer}>
        <P size="l3" color="#E7B75D" font="defaultSB">
          FREE Premium Available
        </P>
        <P color="#B6A07D" font="defaultM">
          Tap to upgrade your account!
        </P>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -1,
    right: -1,
    backgroundColor: 'rgba(232, 44, 19, 0.9)',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  icon: {
    width: W(10),
    height: W(10),
  },
});
