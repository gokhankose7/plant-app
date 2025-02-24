import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useDispatch, useSelector} from 'react-redux';
import P from '../../components/P';
import {
  paywall1,
  paywallFeature1,
  paywallFeature2,
  paywallFeature3,
} from '../../assets/pngs';
import {H, PAGE_PADDING, W} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../utils/colors';
import {FeatureItem, FeatureItemProps} from './components/FeatureItem';
import {SubscriptionOption} from './components/SubscriptionOption';
import {RootStackParamList} from '../../navigation/types';
import {RootState} from '../../store';
import {completeOnboarding} from '../../store/slices/onboardingSlice';
type Props = NativeStackScreenProps<RootStackParamList, 'Paywall'>;

const features: FeatureItemProps['item'][] = [
  {
    title: 'Unlimited',
    description: 'Plant Identify',
    image: (
      <Image
        source={paywallFeature1}
        style={{
          width: W(6),
          height: W(6),
        }}
      />
    ),
  },
  {
    title: 'Faster',
    description: 'Process',
    image: (
      <Image source={paywallFeature2} style={{width: W(6), height: W(6)}} />
    ),
  },
  {
    title: 'Detailed',
    description: 'Plant Care',
    image: (
      <Image source={paywallFeature3} style={{width: W(6), height: W(6)}} />
    ),
  },
];

const PaywallScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {bottom, top} = useSafeAreaInsets();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>(
    'yearly',
  );
  const {isOnboardingCompleted} = useSelector(
    (state: RootState) => state.onboarding,
  );

  const handleClose = () => {
    if (isOnboardingCompleted) {
      navigation.goBack();
    } else {
      dispatch(completeOnboarding());
      navigation.replace('TabNavigator', {
        screen: 'Home',
      });
    }
  };

  return (
    <LinearGradient colors={['#121f19', '#111e18']} style={styles.container}>
      <Image source={paywall1} resizeMode="cover" style={styles.image} />
      <TouchableOpacity
        style={[
          styles.closeButton,
          {
            top: isOnboardingCompleted ? 25 : top + 8,
          },
        ]}
        onPress={handleClose}>
        <P color="#fff" font="defaultSB" size="l1">
          X
        </P>
      </TouchableOpacity>
      <View style={[styles.wrapper, {paddingBottom: bottom}]}>
        <View style={styles.textWrapper}>
          <P size="l9" color="white" font="defaultT">
            <P size="l9" color="white" font="defaultB">
              PlantApp
            </P>{' '}
            Premium
          </P>
          <P size="l6" color={colors.secondaryWhite}>
            Access All Features
          </P>
        </View>
        <View>
          <FlatList
            horizontal
            data={features}
            renderItem={({item}) => <FeatureItem item={item} />}
            keyExtractor={item => item.title}
            style={styles.listContainer}
            contentContainerStyle={styles.featuresContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.subscriptionContainer}>
          <SubscriptionOption
            title="1 Month"
            price="₺34.99"
            description="$2.99/month, auto renewable"
            isSelected={selectedPlan === 'monthly'}
            onSelect={() => setSelectedPlan('monthly')}
          />
          <SubscriptionOption
            title="1 Year"
            price="₺274.99"
            description="First 3 days free, then $529,99/year"
            isSelected={selectedPlan === 'yearly'}
            onSelect={() => setSelectedPlan('yearly')}
            showSaveBadge
          />
          <TouchableOpacity
            onPress={handleClose}
            activeOpacity={0.8}
            style={styles.trialButton}>
            <P size="l4" color="#FFF" font="defaultM">
              Try free for 3 days
            </P>
          </TouchableOpacity>
          <P size="s4" color={colors.secondaryWhite} style={styles.disclaimer}>
            After the 3-day free trial period you'll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </P>
          <View style={styles.footer}>
            <TouchableOpacity>
              <P size="s2" color={colors.secondaryWhite}>
                Terms
              </P>
            </TouchableOpacity>
            <P style={styles.footerDot}>•</P>
            <TouchableOpacity>
              <P size="s2" color={colors.secondaryWhite}>
                Privacy
              </P>
            </TouchableOpacity>
            <P style={styles.footerDot}>•</P>
            <TouchableOpacity>
              <P size="s2" color={colors.secondaryWhite}>
                Restore
              </P>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: H(60),
    width: '100%',
    zIndex: 1,
  },
  textWrapper: {
    paddingHorizontal: PAGE_PADDING,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 2,
  },
  listContainer: {
    marginTop: 24,
  },
  featuresContainer: {
    paddingHorizontal: PAGE_PADDING,
    gap: W(2.5),
  },
  closeButton: {
    position: 'absolute',
    right: 25,
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: W(10),
    width: W(8),
    height: W(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subscriptionContainer: {
    paddingHorizontal: PAGE_PADDING,
    marginTop: 24,
  },
  trialButton: {
    backgroundColor: colors.primary,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  disclaimer: {
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  footerDot: {
    color: colors.secondaryWhite,
  },
});

export default PaywallScreen;
