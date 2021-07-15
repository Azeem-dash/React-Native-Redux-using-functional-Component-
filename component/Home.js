import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, DecNumber } from "../action/index";
import  Items  from "./items";

export default function Home({props}) {
  const currentState=useSelector((state)=>state.ChangeTheNumber)
	const dispatch=useDispatch();

  
  

  return (
    <SafeAreaView>
    <View style={styles.container}>
     <Items 
     img={{uri:"https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg"}}
     title="Banana"
     Rs={100}
     


     />


<Items 
     img={{uri:"https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"}}
     title="Apple"
     Rs={150}
     />
     
    </View>
    <View style={styles.container}>

    <Items 
     img={{uri:"https://media.istockphoto.com/photos/mango-and-leaf-isolated-white-background-picture-id1019835828?k=6&m=1019835828&s=612x612&w=0&h=yMpoukyjphHd2pfXsl9rIdnxwRzHmHBBJ4IyREX6VXM="}}
     title="Mango"
     Rs={200}
     />


    <Items 
     img={{uri:"https://static9.depositphotos.com/1642482/1149/i/950/depositphotos_11490801-stock-photo-oranges-fruit.jpg"}}
     title="Orange"
     Rs={180}
     />

    </View>
    <View>
      <Text style={styles.heading}>Total</Text>

      <View style={styles.container}>
        <Text>Total Items: </Text>
        <TextInput style={styles.input} value={currentState.toString()}/>
        </View>

     <View style={styles.container}>
       <Text>Total Amount: </Text>
       <TextInput style={styles.input} />
       </View>
    </View>
    </SafeAreaView>
    

  )

}



const styles = StyleSheet.create({
  container:{
   flexDirection:'row',
   padding:15

  },
  heading:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
  },
  input:{
    borderWidth:1,
    width:100,
    textAlign:'center',
    height:20,
    fontWeight:'bold',
  }, 
  

})
