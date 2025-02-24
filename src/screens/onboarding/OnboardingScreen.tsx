import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ViewToken,
  Image,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import P from '../../components/P';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import {H, W} from '../../utils';
import {colors} from '../../utils/colors';
import {onboarding1bg, onboarding2bg, onboarding3bg} from '../../assets/pngs';

const {width} = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const OnboardingScreen: React.FC<Props> = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const slides = [
    {
      id: '1',
      component: Step1,
    },
    {
      id: '2',
      component: Step2,
    },
    {
      id: '3',
      component: Step3,
    },
  ];

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0]) {
      setCurrentIndex(Number(viewableItems[0].index));
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate('Paywall');
    }
  };

  const renderItem = ({item}: {item: (typeof slides)[0]}) => {
    const StepComponent = item.component;

    return (
      <View style={styles.slide}>
        <StepComponent />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <>
        {currentIndex === 0 && (
          <Image
            source={onboarding1bg}
            style={{
              height: H(100),
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              zIndex: -1,
            }}
            resizeMode="cover"
          />
        )}
        {currentIndex === 1 && (
          <Image
            source={onboarding2bg}
            resizeMode="cover"
            style={{
              width: W(100),
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
            }}
          />
        )}
        {currentIndex === 2 && (
          <Image
            source={onboarding3bg}
            resizeMode="cover"
            style={{
              width: W(100),
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
            }}
          />
        )}
      </>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
      />
      <View style={styles.footer}>
        {currentIndex === 0 ? (
          <>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <P color="#fff" font="defaultSB" size="l3">
                Get Started
              </P>
            </TouchableOpacity>
            <P
              size="s2"
              color="#597165"
              align="center"
              style={{
                width: W(60),
                alignSelf: 'center',
              }}>
              By tapping next, you are agreeing to PlantID{' '}
              <P size="s2" color="#597165" underline>
                Terms of Use
              </P>{' '}
              &{' '}
              <P size="s2" color="#597165" underline>
                Privacy Policy
              </P>
              .
            </P>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <P color="#fff" font="defaultB" size="l1">
                {currentIndex === slides.length - 1 ? 'Continue' : 'Next'}
              </P>
            </TouchableOpacity>
            <View style={styles.pagination}>
              {slides.map((_, i) => (
                <TouchableOpacity
                  hitSlop={{top: 20, bottom: 20, left: 4, right: 4}}
                  key={i}
                  style={[
                    styles.paginationDot,
                    i === currentIndex && styles.paginationDotActive,
                  ]}
                  onPress={() => {
                    flatListRef.current?.scrollToIndex({
                      index: i,
                      animated: true,
                    });
                  }}
                />
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
  },
  footer: {
    paddingBottom: 40,

    paddingHorizontal: W(6.5),
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  paginationDot: {
    width: W(2),
    height: W(2),
    borderRadius: 4,
    backgroundColor: '#DEDEDE',
  },
  paginationDotActive: {
    backgroundColor: colors.text,
    width: W(3),
    height: W(3),
    borderRadius: 99,
  },
});

export default OnboardingScreen;
