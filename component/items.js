import React ,{useState , useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, DecNumber } from "../action/index";

       

export default function Items({title, Rs, img, Tq}) {

	const currentState=useSelector((state)=>state.ChangeTheNumber)
	const dispatch=useDispatch();

	const [quantity, setquantity] = useState(0)
	const [totalPrice, settotalPrice] = useState(0)

	
	const onPressAdd=()=>{
		
		setquantity(quantity+1)
			

	}
	const onPressSub=()=>{
		setquantity(quantity-1)
	}

	useEffect(() => {
    
		 
		console.log("Total Items: "+quantity)
		settotalPrice(quantity*Rs);
                console.log("Total Amount: "+totalPrice)




	}, [quantity , totalPrice])

	 Tq =quantity;
	
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <Text style={styles.text} >{title}</Text>
      <Text>Rs.{Rs}</Text>
      <View style={styles.row}>
      <TouchableOpacity onPress={()=>onPressAdd()}><Text style={styles.text}>+</Text></TouchableOpacity>
      <TextInput value={quantity.toString()} style={styles.input}/>
      <TouchableOpacity onPress={onPressSub}><Text style={styles.text}>-</Text></TouchableOpacity>
      </View>
    </View>
    

  )

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
     justifyContent: "center",
      alignItems: "center"
   
  },
  text:{
    fontWeight:'900',
    backgroundColor:'#5345',
    padding:10,
    borderRadius:10,
    
  },
  input:{
    borderWidth:1,
    width:100,
    textAlign:'center',
  },
  row:{
    flexDirection:'row',
    margin:10,
    padding:0,
  },
  img:{
    width:150,
    height:100,
  }

})
