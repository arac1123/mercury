import { StyleSheet } from 'react-native'
const homestyle =StyleSheet.create({
    container:{
        backgroundColor:"rgb(205,205,205)",
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },

    fle:{
        width:350,
        backgroundColor:"rgb(205,205,205)",
        flexDirection:'row',
        marginBottom:150,
        flex:1,
        justifyContent:"space-around",

    },
    fle2:{
        justifyContent:"center",
        backgroundColor:"rgb(205,205,205)",
        flexDirection:"column",
        marginBottom:100,
        flex:2
        
    },
    txt:{
       fontSize:52,
       marginBottom:0,
       fontWeight:"bold",
        color:"rgb(51,59,105)",
    },
    txt2:{
       fontSize:30,
        fontWeight:"bold",
        color:'white'
    },
    cir:{
        alignItems:"center",
        width:150,
        height:150,
        backgroundColor:"rgb(51,59,105)",
        borderRadius:150/2,
        fontSize:20,
        justifyContent:"center",
    },

    ele2:{
        width:250,
        justifyContent:"space-evenly"
    },
})
const driver =StyleSheet.create({
   container:{
        backgroundColor:"rgb(205,205,205)",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    txt:{
    
    color:"rgb(51,59,105)",
    fontSize:42,
    fontWeight:"bold",
    },
    txt1:{
        marginBottom:0,
        fontSize:52,
        fontWeight:"bold",
         color:"rgb(51,59,105)",
     },
    txt2:{
        fontSize:30,
         fontWeight:"bold",
         color:'white'
     },
     txt3:{
        fontSize:52,
        fontWeight:"bold",
         color:"rgb(51,59,105)",
     },
     type:{
        textAlign:"center",
        marginBottom:50,
        height:60,
        width:300,
        borderWidth:1,
        marginTop:50,
        fontSize:20,
     },
    butt:{
        color:"rgb(51,59,105)",
        width:40,
        height:20,
    },
    squ:{
        backgroundColor:"rgb(51,59,105)",
        width:150,
        height:50,
        justifyContent:"center",
        alignItems:"center"
    }
    
})
const logger =StyleSheet.create({
    container:{
         backgroundColor:"rgb(205,205,205)",
         flex:1,
         justifyContent:"center",
         alignItems:"center"
     },
     txt:{
     
     color:"black",
     fontSize:30,
     fontWeight:"bold",
     },
     txt1:{
         marginBottom:0,
         fontSize:52,
         fontWeight:"bold",
          color:"rgb(51,59,105)",
      },
     txt2:{
         fontSize:30,
          fontWeight:"bold",
          color:'white'
      },
      txt3:{
         fontSize:52,
         fontWeight:"bold",
          color:"rgb(51,59,105)",
          marginBottom:40
      },
      type:{
         textAlign:"center",
         marginBottom:30,
         height:50,
         width:250,
         borderWidth:1,
         marginTop:10,
         fontSize:20,
      },
     butt:{
         color:"rgb(51,59,105)",
         width:40,
         height:20,
     },
     squ:{
         backgroundColor:"rgb(51,59,105)",
         width:150,
         height:50,
         justifyContent:"center",
         alignItems:"center"
     }})
export{homestyle,driver,logger}