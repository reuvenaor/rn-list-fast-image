import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import {TextInputProp} from '../inferfaces';
import {Sizes, Styles, Colors} from '../../styles'

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
    width: '30%',
    height: '90%',
    marginHorizontal: '2%',
    borderRadius: Sizes.BORDER_RAD,
    textAlignVertical: 'top',
    paddingHorizontal: '5%',
    marginVertical: '2%'
  },
});


export default UiTextInput;