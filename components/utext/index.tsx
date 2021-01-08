import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { TextProp } from '../inferfaces';
import {Styles} from '../../styles'

const UiText = ({ typo, children, style }: TextProp) => {

  return (
    <Text
      allowFontScaling={false}
      style={[stl.def, Styles[typo], style]}
    >
      {children}
    </Text>
  );
}

const stl = StyleSheet.create({
  def: {
    // flex: 1
  }
});


export default UiText;