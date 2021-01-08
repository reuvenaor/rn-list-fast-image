import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import ScoreItem from '../beanItem';
import { BeanListProp } from '../inferfaces';
import { Sizes } from '../../styles'

const BeansList = ({ onFeedBackItem, style, maxInputLength, data, fadingEdgeLength }: BeanListProp) => {

  const onFeedBack = React.useCallback((id, value) => {
    onFeedBackItem(id, value)
  }, [])

  return (
    <FlatList
      style={st.list}
      numColumns={1}
      fadingEdgeLength={fadingEdgeLength || 0}
      contentContainerStyle={st.container}
      data={data}
      keyExtractor={(item, idx) => item + idx}
      renderItem={({ item }) => {
        return (<ScoreItem
          onFeedBack={onFeedBack}
          data={item}
          maxInputLength={maxInputLength || Sizes.BORDER_RAD}
        />)
      }}
    />
  );
}

const st = StyleSheet.create({
  list: {
    width: '100%',
  },
  container: { 
    alignItems: 'center', 
    justifyContent: 'center',
  }
});

export default BeansList;