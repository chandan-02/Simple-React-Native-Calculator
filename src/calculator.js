import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './Buttons'
import { ToastAndroid } from 'react-native';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultText: ""
        };
        this.names = [7, 8, 9, , 4, 5, 6, , 1, 2, 3, , '.', 0, , '%']
        this.operators = ['+','-','*','/']
    }

    buttonPress(text) {
        if (text === '.' && this.state.resultText === ''){
            return
        }
        if (text === '%' && this.state.resultText === ''){
            return
        }
        if (text === '%' && this.state.resultText.includes('%') === true){
            return
        }
        this.setState({
            resultText: this.state.resultText + text
        }
        )
    }

    delete() {
        this.setState({
            resultText: ''
        })
    }

    validate = () => {
        var result = this.state.resultText
        switch (result.substr(result.length - 1)) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                return false;
        }
        return true;
    }
    
    operations = (opr) =>{
        switch(opr){
            case '+':
            case '-':
            case '*':
            case '/':
                var last = this.state.resultText.split('').pop()
                if (this.operators.indexOf(last) > -1) return

                if (this.state.resultText == '') return 
                this.setState({
                    resultText: this.state.resultText + opr
                })
                
        }
    }

    equalsTo() {
        if (this.validate() === true) {
            let res = eval(this.state.resultText)
            this.setState({
                resultText: res
            })
        } else {
            ToastAndroid.showWithGravityAndOffset('Invalid Input',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM, 25, 50)
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.input}>
                    <Text style={styles.textInput}>{this.state.resultText}</Text>
                </View>
                <View style={styles.banner}>
                    <Text style={{ color: '#fff', fontSize: 12 }}> D e v e l o p e d   B y   :    N i n j a D a k 1 n g </Text>
                </View>
                <View style={styles.special}>
                    <Buttons press={() => this.delete()} stylesc={styles.buttonStylex} value={'Clear'} />
                    <Buttons press={() => this.equalsTo()} stylesc={styles.buttonStylex} value={'='} />
                </View>
                <View style={styles.buttons}>

                    <View style={styles.numbers}>
                        {this.names.map((name, index) => {
                            return (
                                <Buttons key={index}
                                    press={() => this.buttonPress(name)}
                                    value={name}
                                    stylesc={styles.buttonStyle} />
                            )
                        })}
                    </View>

                    <View style={styles.operators}>
                    {this.operators.map((name, index) => {
                            return (
                                <Buttons key={index}
                                    press={() => this.operations(name)}
                                    value={name}
                                    stylesc={styles.buttonStyle} />
                            )
                        })}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 70,
        marginTop: 40,
        fontSize: 50,
        color: '#FFF',
        fontWeight: '900',
    },
    container: {
        flex: 1,
        backgroundColor: '#f8b739',
    },
    input: {
        flex: 2,
        backgroundColor: '#f8b739',
        fontSize: 70,
        marginTop: 40,
        fontSize: 50,
        color: '#FFF',
        fontWeight: '900',
    },
    banner: {
        flex: 0.2,
        backgroundColor: '#ff9900',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    special: {
        flex: 0.6,
        
        flexDirection:'row'
    },
    buttons: {
        flex: 3,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    operators: {
        flex: 1,
        backgroundColor: '#f8b739'
    },
    buttonStylex: {  
        backgroundColor: '#bf484c',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        paddingVertical: 8,
        borderRightWidth: 0.2,
    },
    buttonStyle: {
        backgroundColor: '#38363b',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        paddingVertical: 16,
    },
})

