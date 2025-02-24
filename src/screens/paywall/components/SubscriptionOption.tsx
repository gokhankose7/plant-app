import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import P from '../../../components/P';
import {colors} from '../../../utils/colors';

export type SubscriptionOptionProps = {
  title: string;
  price: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
  showSaveBadge?: boolean;
};

export const SubscriptionOption: React.FC<SubscriptionOptionProps> = ({
  title,
  price,
  description,
  isSelected,
  onSelect,
  showSaveBadge,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[
      styles.container,
      {
        borderColor: isSelected ? colors.primary : 'rgba(255, 255, 255, 0.3)',
        borderWidth: isSelected ? 2 : 1,
      },
    ]}
    onPress={onSelect}>
    {isSelected ? (
      <View style={styles.selectedOverlay}>
        <View style={styles.selectedOverlayInner} />
      </View>
    ) : (
      <View style={styles.unselectedOverlay} />
    )}
    {showSaveBadge && (
      <View style={styles.saveBadge}>
        <P size="s1" color="white" font="defaultB">
          Save 50%
        </P>
      </View>
    )}
    <View style={styles.header}>
      <P size="l3" color="white" font="defaultSB">
        {title}
      </P>
      <P size="l1" color={colors.secondaryWhite}>
        {description}
      </P>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 14,
    borderRadius: 14,
    borderWidth: 2,
    marginBottom: 16,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  header: {
    gap: 1,
  },
  saveBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    zIndex: 1,
  },
  selectedOverlay: {
    height: 24,
    width: 24,
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedOverlayInner: {
    width: 8,
    height: 8,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  unselectedOverlay: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
  },
});
