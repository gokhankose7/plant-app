import React from 'react';
import {Text, TextStyle, TextProps, LayoutChangeEvent} from 'react-native';
import {fonts, W} from '../../utils';
import {FontFamily, FontSizeKey} from '../../types/fonts';
import {colors} from '../../utils/colors';

type TextAlignment = 'left' | 'center' | 'right' | 'justify';

const getSize = (size: number, maxSize: number): number =>
  W(size) > maxSize ? maxSize : W(size);

export const fontSizes: Record<FontSizeKey, number> = {
  s4: 9,
  s3: getSize(2.7, 11),
  s2: getSize(2.9, 12),
  s1: getSize(3, 13),
  m: getSize(3.3, 14),
  l1: getSize(3.6, 15),
  l2: getSize(3.9, 17),
  l3: getSize(4.1, 19),
  l4: getSize(4.5, 20),
  l5: getSize(5, 21),
  l6: getSize(5.8, 24),
  l7: getSize(6, 28),
  l8: getSize(7, 31),
  l9: getSize(8, 35),
  l10: getSize(9, 40),
};

interface PProps extends Omit<TextProps, 'style'> {
  children: React.ReactNode;
  color?: string;
  size?: FontSizeKey;
  line?: number;
  flex?: number | boolean;
  underline?: boolean;
  onClick?: () => void;
  align?: TextAlignment;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  style?: TextStyle;
  lineHeight?: number;
  opacity?: number;
  fullWidth?: boolean;
  capitalize?: boolean;
  font?: FontFamily;
  selectable?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const P: React.FC<PProps> = ({
  children,
  color = colors.text,
  size = 'm',
  line,
  flex,
  underline,
  onClick,
  align = 'left',
  mt,
  mb,
  ml,
  mr,
  style,
  lineHeight,
  opacity = 1,
  fullWidth,
  capitalize,
  font = 'defaultR',
  selectable = false,
  onLayout = () => {},
  ...props
}) => {
  return (
    <Text
      {...props}
      selectable={selectable}
      onPress={onClick}
      numberOfLines={line}
      onLayout={onLayout}
      style={{
        textTransform: capitalize ? 'capitalize' : undefined,
        color,
        fontFamily: fonts[font],
        fontSize: fontSizes[size],
        flex: typeof flex === 'number' ? flex : flex ? 1 : undefined,
        textDecorationLine: underline ? 'underline' : undefined,
        textAlign: align,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        lineHeight,
        opacity,
        width: fullWidth ? '100%' : undefined,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default P;
