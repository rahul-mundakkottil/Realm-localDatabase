import React,{Component, useState} from 'react'
import {
     View,
     Text,
     StyleSheet,TextInput,TouchableHighlight,FlatList
} from 'react-native'
import  {getallstudents,addstudent,deleteAllcontent} from "../Realm/RealmStorage"


 export default function RealmApp (){
   const [name,setname]= useState("")
   const [admno,setadmno]= useState("")
   const [height,setheight]= useState("")
   const [weaight,setweaight]= useState("")
   const [colour,setcolour]= useState("")
   const [counter,setcounter]= useState("")
   const [studentsData,setStudentsData]= useState(getallstudents)
   
   const renderItem=({item})=>{
    <View style={{height:50,width:"100%",backgroundColor:"blue",flexDirection:"row"}}>
        <Text>{item.admno}</Text>
        <Text>{item.height}</Text>
        <Text>{item.weaight}</Text>
        <Text>{item.colour}</Text>
    </View>
   }
   
    return (
       < View style={styles.viewstyle}>

         <Text style={styles.textstyle2}>Admission Number</Text>
         <TextInput style={styles.textinput}  
            maxLength={50}
            onChangeText={(data)=>setadmno(admno=>data)}  >
         </TextInput>

         
         <Text style={styles.textstyle2}>Name</Text>
         <TextInput style={styles.textinput}  
            maxLength={50}
            onChangeText={(data)=>setname(name=>data)}  >
         </TextInput>

         <Text style={styles.textstyle2}>Height</Text>
         <TextInput style={styles.textinput}  
            maxLength={50}
            onChangeText={(data)=>setheight(height=>data)}  >
         </TextInput>

         <Text style={styles.textstyle2}>Weaight</Text>
         <TextInput style={styles.textinput}  
            maxLength={50}
            onChangeText={(data)=>setweaight(weaight=>data)}  >
         </TextInput>

         <Text style={styles.textstyle2}>Colour</Text>
         <TextInput style={styles.textinput}  
            maxLength={50}
            onChangeText={(data)=>setcolour(colour=>data)}  >
         </TextInput>

        
       
        

         <TouchableHighlight style={styles.buttonstyle1} 
             onPress={()=>{addstudent(counter,height,weaight,colour);
                   setStudentsData(getallstudents)
                      setcounter(counter+1);
                      }}>
              <Text style={styles.buttontext}>Add</Text>
         </TouchableHighlight>

         <TouchableHighlight style={styles.buttonstyle1} 
             onPress={()=> {deleteAllcontent()
                setStudentsData(getallstudents)
                setcounter(1)}}>
              <Text style={styles.buttontext}>Delete</Text>
         </TouchableHighlight>
         <Text style={styles.textstyle2}>Students</Text>
         <FlatList
         data={studentsData}
         keyExtractor={item=>item.admno}
         renderItem={renderItem}>

         </FlatList>
         
       </View>

    )
}
 
 const styles=StyleSheet.create({

viewstyle:{ 
    height:'100%',
    width:'100%',
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
},
textstyle:{
    color:'black',
    fontSize:20,
    fontWeight:'bold'
},
textstyle2:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',marginRight:250,marginBottom:5
},
textinput:{
      
    height:40,
    width:'90%',
    borderColor:'white',
    borderWidth:1,
    paddingLeft:40,
    marginBottom:5,
    backgroundColor:'#EBECF0',
    borderRadius:10
   

},
buttonstyle1:{
    height:40,
    width:'80%',
    marginLeft:0,
    marginTop:10,
    backgroundColor:'#4585FB',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    borderWidth:0.2
  
   },
   flatlist:{
        
    backgroundColor:"black"

},
productbox:{
    width:350,
    elevation:20,
    padding:10,
    marginBottom:10,
    backgroundColor:"white"
}

 })
