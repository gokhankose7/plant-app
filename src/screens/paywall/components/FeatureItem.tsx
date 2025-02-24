import React from 'react';
import {View, StyleSheet} from 'react-native';
import P from '../../../components/P';
import {W} from '../../../utils';
import {colors} from '../../../utils/colors';

export type FeatureItemProps = {
  item: {
    title: string;
    description: string;
    image: React.ReactNode;
  };
};

export const FeatureItem: React.FC<FeatureItemProps> = ({item}) => (
  <View style={styles.featureItem}>
    <View style={styles.featureItemImage}>{item.image}</View>
    <View style={styles.featureItemContent}>
      <P size="l6" color="white" font="defaultB" adjustsFontSizeToFit line={1}>
        {item.title}
      </P>
      <P size="l4" color={colors.secondaryWhite}>
        {item.description}
      </P>
    </View>
  </View>
);

const styles = StyleSheet.create({
  featureItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
    borderRadius: 16,
    width: W(41.2),
    height: 'auto',
  },
  featureItemContent: {
    marginTop: 16,
    gap: 4,
  },
  featureItemImage: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    padding: 8,
    borderRadius: 8,
  },
});
