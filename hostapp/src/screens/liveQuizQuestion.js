import React, { Component } from 'react';
import { Text, View ,StyleSheet, TextInput,TouchableOpacity,ImageBackground, KeyboardAvoidingView} from 'react-native';


class liveQuiz extends Component {
  render() {
    return (
        <View style={styles.back}>
        
  
                <View style={styles.view}>
            
            <Text style={styles.livecount}>👨🏻‍🦲 3,997</Text>
        </View>
        <View style={styles.QuestionBox}>
                <Text style={styles.QueNum}>QUESTION 1</Text>
                <Text style={styles.question}>What is the name of Varg Vikrines Black Metal Band</Text>
                <LiveOptions options="Dark Throne" number='1' />
                <LiveOptions options="Dark Throne 2" number='2' />
                <LiveOptions options="Dark Throne 3"  number='3'/>
                <LiveOptions options="Dark Throne 4" number='4'/>
            
                
        </View>
        <View style={styles.timer}>
                    <Text style={styles.countDown}>5</Text>
                </View>
        <ChatBox  />

       
       
        </View>
        
      
    );
  }
}



class LiveOptions extends Component {
    
    getColor=()=>{
          
           return "green"  
    }
      render()
      {
          return (
            <TouchableOpacity onPress={this.getColor}>
                <View style={{...styles.optionBox,backgroundColor:this.getColor,borderColor:this.getColor}} > 
                    <View style={styles.optionNumber}> 
                    <Text>{this.props.number}</Text>
                    </View>
                    <Text> {this.props.options}</Text>
                </View>
               
            </TouchableOpacity>
                

          )
      }
}
class ChatBox extends Component {
   
    render()
    {
        return (
            
            <KeyboardAvoidingView >
                <View style={styles.chatBox}>
                    <TextInput
                        placeholder='Write a reply..'
                    />
                </View>
            </KeyboardAvoidingView>
            
            
            
            
        );
    }
}

const styles = StyleSheet.create({
    countDown:{
      fontSize:30,
      flexDirection:'row',
      marginLeft:18,
      color:'white',
      
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },

    timer:{
     
        position:'absolute',
        borderRadius:50,
        borderColor:'white',
        borderWidth:4,
        width:"17%",
        height:"10%",
        alignItems:'center',
        marginLeft:150,
        flexDirection:'row',
        marginTop:260,
        backgroundColor:'#1E2D6C',
        
    },

    back:{
        backgroundColor:'#594894',
    },
   
  
    chatBox: {
        marginTop:5,
        backgroundColor:'white',
        height:45,
        borderRadius:20,
        marginHorizontal:15,
        flexDirection:'row',
        borderWidth:1,
        paddingLeft:12,
        marginBottom:11,
        marginTop:5,

        
    },
    optionNumber:{
        
        borderRadius:50,
        borderColor:'grey',
        borderWidth:1,
        width:"7%",
        alignItems:'center',
    },
    optionBox:{
        borderRadius:15,
        borderWidth:1,
        borderColor:"black",
        padding:4,
        margin:2,
        marginVertical:2,
        marginTop:10,
        flexDirection:'row',
       
    },
    livecount: {
        height: 30,
        width: "20%",
        backgroundColor: 'white',
        borderRadius:20,
        borderColor:'grey',
        justifyContent:'center',
        padding:5,
        alignItems:'center',
        marginLeft:10,
        marginTop:10,  
    },
    view: {
        

    },

    QuestionBox:{

        height:"45%",
        padding:10,
        borderRadius:15,
        borderColor:"black",
        backgroundColor:'white',
        marginTop:"70%",
        marginHorizontal:10,

    },
    QueNum:{
        color:'grey',
        marginVertical:5,
        marginHorizontal:3,
    },
    question:{
        fontSize:20,
        padding:5,
        marginLeft:5,
    },
    
    })

export default liveQuiz;