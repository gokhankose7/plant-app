import {useWindowDimensions, Dimensions} from 'react-native';

export {fonts} from './fonts';

const {width, height} = Dimensions.get('window');
export const W = (percentage: number): number => (width * percentage) / 100;
export const H = (percentage: number): number => (height * percentage) / 100;

export const PAGE_PADDING = W(6.5);

export const useWindowSize = () => {
  const {width, height} = useWindowDimensions();
  return {W: width, H: height};
};
