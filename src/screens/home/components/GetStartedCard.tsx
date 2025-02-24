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

type GetStartedCardProps = {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
};

export const GetStartedCard: React.FC<GetStartedCardProps> = ({
  title,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <View style={styles.overlay}>
          <P
            line={2}
            size="l2"
            color="white"
            font="defaultSB"
            style={styles.title}>
            {title}
          </P>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: W(64),
    height: W(45),
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: W(18),
    justifyContent: 'center',
    paddingLeft: 13,
  },
  title: {
    width: '80%',
  },
});
