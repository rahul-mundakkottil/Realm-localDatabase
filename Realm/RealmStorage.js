
import Realm from 'react'


 class Student extends Realm.Object {}

 Student.schema={
    name:"Rahul MM",
    properties:{
        admno:123456, height:175,weaight:60,colour:"brown"
    },primaryKey: "admno"
 }
 let realm = new Realm({schema:[Student],schemaVersion:4})


  let getallstudents=()=>{
    return realm.Object("Student")
  }

  let addstudent=(admno1, height1,weaight1,colour1)=>{
  realm.write(()=>{            //name     //properties
    const Student=realm.create("Student",{ admno:admno1,height:height1,weaight:weaight1,colour:colour1})
  })
  }
  let deleteAllcontent=()=>{
   realm.write(()=>{realm.delete(getallstudents)})
  } 
  
  export default realm
  export {getallstudents,addstudent,deleteAllcontent}