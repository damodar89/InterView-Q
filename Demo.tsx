import { View, Text,Flatlist } from 'react-native'
import React from 'react'

export default function Demo() {

const Data=["Damodar"]

const renderItem=({item}=>(
  <View><Text>{item.title}</Text></View>
))

  return (
    <View>

        <Flatlist 
        
        data={Data}
        renderItem={renderItem}
        keyExyractor={item=>item.id}
        />



<Flatlist 

data = {Data}
renderItem={renderItem}
keyExyractor={item=>item.id}
/>


{

  Data.map((item,index)=>(
<Text>{item}</Text>
  ))
}

{
  Data.map((item)=>(
    <Text>{item}</Text>
  ))
}















      <Text>Demo</Text>
    </View>
  )
}