
import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const ITEM_LIST_W = Math.round(width * 0.96);
const ITEM_LIST_H = height * 0.14;


export const Sizes = {
  BORDER_RAD: 20,
  ITEM_LIST_H,
  ITEM_LIST_W, 
}

export const Colors = {
  BACKGROUND: '#eeeeee',
  PRIME: '#88aa88'
}

export const Styles = StyleSheet.create({
  SM: {
    fontSize: 11,
    color: Colors.PRIME
  },
  MD: {
    fontSize: 15,
    color: Colors.PRIME
  },
  LG: {
    fontSize: 20,
    color: Colors.PRIME
  },
});