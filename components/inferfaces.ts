import {StyleProp, ViewStyle, TextStyle} from 'react-native'

export interface Data {
  id: number,
  imgUrl: string,
  type: string,
  defect_beans: number,
  precent: number
}

export interface TextInputProp {
  onChangeText: any,
  maxInputLength?: number
  style?: StyleProp<TextStyle>
}

export interface BeanListProp {
  onFeedBackItem: any,
  maxInputLength?: number,
  data: Array<any>
  style?: StyleProp<ViewStyle>,
  fadingEdgeLength?: number
}

export interface BeanItemProp {
  onFeedBack: any,
  maxInputLength: number,
  data: Data
}

export interface ImageProp {
  imgUrl: string,
}

export interface TextProp {
  typo: string,
  children: string
  style?: StyleProp<TextStyle>
}

