import React, {useState} from 'react';
import {View, StyleSheet, Image, LayoutChangeEvent} from 'react-native';
import P from '../../../components/P';
import {onboarding2, onboarding2underline} from '../../../assets/pngs';
import {W} from '../../../utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Step2 = () => {
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
              Take a photo to{' '}
            </P>
            <View style={styles.identifyContainer}>
              <P
                style={styles.textShadow}
                size="l8"
                font="defaultEB"
                onLayout={handleLayout}>
                identify{' '}
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
            <P style={styles.textShadow} size="l8" font="defaultM">
              the plant!
            </P>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={onboarding2}
          style={styles.backgroundImage}
          resizeMode="cover"
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
    top: W(5.5),
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  backgroundImage: {
    width: W(100),
    height: '100%',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: -1, height: 3},
    textShadowRadius: 4,
  },
});

export default Step2;
