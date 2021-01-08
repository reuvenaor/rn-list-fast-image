
import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = height / 600;

export function normalize(size: number) {
  let newSize = null;
  if (scale > 1) {
    newSize = size * scale;
  } else {
    newSize = size * scale * 0.9;
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const ITEM_LIST_W = Math.round(width * 0.96);
const ITEM_LIST_H = height * 0.14;
const BORDER_RAD = height * 0.013;
const FONT_VSM = normalize(7);
const FONT_SM = normalize(11);
const FONT_LG = normalize(19);

export const Sizes = {
  BORDER_RAD,
  ITEM_LIST_H,
  ITEM_LIST_W, 
}

export const Colors = {
  BACKGROUND: '#eeeeee',
  PRIME: '#88aa88'
}

export const Styles = StyleSheet.create({
  VSM: {
    fontSize: FONT_VSM,
    lineHeight: FONT_VSM,
    color: Colors.PRIME
  },
  SM: {
    fontSize: FONT_SM,
    lineHeight: FONT_SM,
    color: Colors.PRIME
  },
  SM_B: {
    fontSize: FONT_SM,
    lineHeight: FONT_SM,
    color: Colors.PRIME,
    fontWeight: '700',
  },
  LG: {
    fontSize: FONT_LG,
    lineHeight: FONT_LG,
    color: Colors.PRIME,
    fontWeight: '700',
  },
});