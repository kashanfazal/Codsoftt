import { StyleSheet, Text, View , Image ,Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop:15}}>
      <Image
      style={{ height:370,width:"100%",resizeMode:"contain"}}
      source={{
        uri:"https://cdn.pixabay.com/photo/2017/03/31/22/51/quiz-2192590_1280.jpg"
      }}
      />
      <View style ={{padding:18}}>
        <Text style ={{textAlign:"center",color:"green",fontSize:30,fontWeight:"900"}}>QUIZE CRITERIA</Text>
        <View style={{padding:10, backgroundColor:"green", borderRadius:6, marginTop:15}}>

        <View style={{ flexDirection: "row" , alignItems:"center" ,marginVertical:5}}>
            <Text style ={{color:"white"}}>*</Text>
            <Text style ={{marginLeft:4, color:"black", fontSize:15,fontWeight:"600"}}>For each correct answer you get 5 Points</Text>
            </View>
            
            <View style={{ flexDirection: "row" , alignItems:"center" ,marginVertical:5}}>
            <Text style ={{color:"white"}}>*</Text>
            <Text style ={{marginLeft:4, color:"black", fontSize:15,fontWeight:"600"}}>There is no negative marking on wrong attempt</Text>
            </View>

            <View style={{ flexDirection: "row" , alignItems:"center" ,marginVertical:5}}>
            <Text style ={{color:"white"}}>*</Text>
            <Text style ={{marginLeft:4, color:"black", fontSize:15,fontWeight:"600"}}>Each question has a time limit of 15 seconds</Text>
            </View>

            <View style={{ flexDirection: "row" , alignItems:"center",marginVertical:5}}>
            <Text style ={{color:"white"}}>*</Text>
            <Text style ={{marginLeft:4, color:"black", fontSize:15,fontWeight:"600"}}>You have to compulsarily answer all the given question</Text>
            </View>
            
             </View>

        </View>
        <Pressable onPress={()=>navigation.navigate("Quiz")}
        style ={{ backgroundColor:"green", padding:14 , width:120, borderRadius:25, marginLeft:"auto" , marginRight:"auto", marginTop:30}}>
          <Text style={{color:"black" ,fontSize:16 ,fontWeight:"700" ,textAlign: "center"}}> Let's Begin Quize</Text>
        </Pressable>
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})