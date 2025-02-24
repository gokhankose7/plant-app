import React, {useState} from 'react';
import {View, StyleSheet, Image, LayoutChangeEvent} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import P from '../../../components/P';
import {
  onboarding2,
  onboarding2underline,
  onboarding3,
} from '../../../assets/pngs';
import {W} from '../../../utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Step3 = () => {
  const {top} = useSafeAreaInsets();
  const [textLayout, setTextLayout] = useState({
    width: 0,
    x: 0,
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width, x} = event.nativeEvent.layout;
    setTextLayout({width, x});
  };

  const underlineWidth = textLayout.width * 1.2;
  const underlineLeft = -(textLayout.width * 0.1);

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <View style={styles.textRow}>
            <P style={styles.textShadow} size="l8" font="defaultM">
              Get plant{' '}
            </P>
            <View style={styles.identifyContainer}>
              <P
                style={styles.textShadow}
                size="l8"
                font="defaultEB"
                onLayout={handleLayout}>
                care guides{' '}
              </P>
              <Image
                source={onboarding2underline}
                style={[
                  styles.underlineImage,
                  {
                    width: underlineWidth,
                    left: underlineLeft,
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={onboarding3}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']}
          style={styles.gradient}
          locations={[0, 1]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: W(6.5),
    paddingTop: 12,
  },
  textWrapper: {
    alignItems: 'flex-start',
    width: '100%',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    width: '100%',
  },
  identifyContainer: {
    position: 'relative',
  },
  underlineImage: {
    position: 'absolute',
    height: W(10),
    top: W(7),
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    transform: [{translateY: 50}],
  },
  backgroundImage: {
    width: W(100),
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: -1, height: 3},
    textShadowRadius: 4,
  },
});

export default Step3;
