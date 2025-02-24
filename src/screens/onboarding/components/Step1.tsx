import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import P from '../../../components/P';
import {onboarding1} from '../../../assets/pngs';
import {H, W} from '../../../utils';
import {colors} from '../../../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Step1 = () => {
  const {bottom, top} = useSafeAreaInsets();
  return (
    <>
      <View
        style={[
          styles.container,
          {
            paddingTop: top,
          },
        ]}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <P
              size="l9"
              font="defaultR"
              line={1}
              adjustsFontSizeToFit
              fullWidth>
              Welcome to{' '}
              <P size="l9" font="defaultSB" color="#13231B">
                PlantApp
              </P>
            </P>
          </View>
          <P size="l4" color={colors.secondaryText}>
            Identify more than 3000+ plants and 88% accuracy.
          </P>
        </View>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={{width: W(100), height: '100%'}}
            source={onboarding1}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  content: {
    width: '100%',
    paddingLeft: W(6.5),
    paddingRight: W(13),
    paddingTop: 32,
    gap: 8,
  },
  titleContainer: {
    width: '100%',
  },
  leftGradient: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: W(50),
    opacity: 0.5,
  },
});

export default Step1;
