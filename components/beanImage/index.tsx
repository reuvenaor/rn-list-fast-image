import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {ImageProp} from '../inferfaces';
import FastImage from 'react-native-fast-image';
import {Sizes} from '../../styles'

const Image = ({imgUrl}: ImageProp) => (
  <FastImage
    style={st.img}
    source={{
      uri: imgUrl,
      // headers: { Authorization: 'someAuthToken' },
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
)

const st = StyleSheet.create({
  img: {
    width: 200, 
    height: 200,
    borderRadius: Sizes.BORDER_RAD
    //aspectRatio: 1
  },
});

export default Image;