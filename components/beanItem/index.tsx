import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import UiTextInput from '../uTextInput';
import Image from '../beanImage';
import Text from '../utext';
import { BeanItemProp } from '../inferfaces';
import { Sizes, Colors } from '../../styles'

const ScoreItem = ({ onFeedBack, maxInputLength, data }: BeanItemProp) => {

  const onChangeText = (value: string) => {
    onFeedBack(value, data.id)
  }

  return (
    <View style={st.item}>
      <Image imgUrl={data.imgUrl} />
      <Text typo={'SM'}>{'Fkfdhjf glj'}</Text>
      <UiTextInput
        onChangeText={onChangeText}
        maxInputLength={maxInputLength}
      />
    </View>
  );
}

const st = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: Sizes.ITEM_LIST_W,
    height: Sizes.ITEM_LIST_H,
    borderColor: Colors.PRIME,
    borderWidth: 1,
    borderRadius: Sizes.BORDER_RAD,
    marginBottom: '2%'
  },
});

export default ScoreItem;