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
      <View style={st.dataWrap}>
        <View style={st.boxType}>
          <Text typo={'SM'}>{'Type'}</Text>
          <Text typo={'SM_B'} style={{ alignSelf: 'center' }}>{'Tasty'}</Text>
        </View>
        <View style={st.boxNums}>
          <View style={st.smallBox}>
            <Text typo={'VSM'} >{'Defect Beans'}</Text>
            <Text typo={'LG'} >{"" + data.defect_beans}</Text>
          </View>
          <View style={st.smallBox}>
            <Text typo={'SM'} >{'%'}</Text>
            <Text typo={'LG'} >{data.precent + ''}</Text>
          </View>
        </View>
      </View>
      <UiTextInput
        onChangeText={onChangeText}
        maxInputLength={maxInputLength}
      />
    </View>
  );
}

const st = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: Sizes.ITEM_LIST_W,
    height: Sizes.ITEM_LIST_H,
    borderColor: Colors.PRIME,
    borderWidth: 1,
    borderRadius: Sizes.BORDER_RAD,
    marginBottom: '2%',
    padding: '1.5%',
  },
  dataWrap: {
    width: '38%',
    paddingHorizontal: '2%',
    height: '100%',
    borderRightWidth: 0.5,
    borderColor: Colors.PRIME,
  },
  boxType: {
    borderColor: Colors.PRIME,
    borderBottomWidth: 0.5,
    height: '50%',
    justifyContent: 'space-around'
  },
  boxNums: {
    height: '50%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  smallBox: {
    height: '90%',
    flex: 1,
    flexDirection: 'column',
    // padding: '1%',
    borderColor: Colors.PRIME,
    borderLeftWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ScoreItem;