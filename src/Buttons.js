import React ,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


class Buttons extends Component{
    render(){
        let { value, press,stylesc} = this.props 
        return (
            <View>
                <TouchableOpacity style={stylesc} onPress={press}>
                    <Text style={stylessc.text} >{value}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const stylessc = StyleSheet.create(
    { 
        text:{
            fontSize: 35,
            color: '#FFF',
            //fontWeight: '200'
        },
        
    }
)
export default Buttons
