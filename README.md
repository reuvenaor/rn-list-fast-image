### React Native fast list pixel perfect exercise

#### peerDependencies:

[react-native-fast-image](https://www.npmjs.com/package/react-native-fast-image)


#### Usage:
```javascript 

const createArray = (SIZE: number) => {
  let arr = []
  for (let i = 0; i < SIZE; i++) {
    arr.push({
      id: i, 
      imgUrl: 'https://storage.googleapis.com/defects-types/black.png',
      type: 'Black',
      defect_beans: 200,
      precent: 99
    }) 
  }
  return arr;
}
const data: Array<any> = createArray(100);

const Screen = () => {
  const [state] = React.useState(data)
  
  return (
    <View style={[st.container]}>

      <BeansList
        onFeedBackItem={(value: string, id: number) => console.log(value, id)} 
        maxInputLength={300}
        data={state}
        style={{height: 500}}         // *** I left the wrapper styling open. tested only with height !
        fadingEdgeLength={200}
      />

    </View>
  );
}
```
