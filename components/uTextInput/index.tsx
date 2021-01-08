import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import {TextInputProp} from '../inferfaces';
import { Styles, Colors} from '../../styles'

const UiTextInput = ({onChangeText, maxInputLength, style}: TextInputProp) => {

  return (
      <TextInput
        allowFontScaling={false}
        style={[stl.textInput, Styles.SM, style]}
        numberOfLines={5}
        placeholder={'Feedback'}
        placeholderTextColor={Colors.PRIME}
        underlineColorAndroid={'transparent'}
        onChangeText={onChangeText}
        multiline={true}
        maxLength={maxInputLength || 50}
        disableFullscreenUI={true}
      />
  );
}

const stl = StyleSheet.create({
  textInput: {
    width: '40%',
    height: '100%',
    padding: 0,
    paddingLeft: '1%',
    textAlignVertical: 'top',
  },
});


export default UiTextInput;