import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
  ImageBackground,
} from 'react-native';
import P from '../../../components/P';
import {W} from '../../../utils';

type CategoryCardProps = {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.content}>
          <P size="l4" color="black" font="defaultSB" numberOfLines={2}>
            {title}
          </P>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 158 / 152,
    backgroundColor: '#F6F8F6',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  content: {
    padding: 16,
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
