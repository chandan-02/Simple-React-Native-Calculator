import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Animated
} from 'react-native';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            fadeIn: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeIn, {
                toValue: 1,
                duration: 1000,
                useNativeDriver:true
            }
        ).start()
    }

    render() {
        let { text, fadeIn } = this.state;

        return (
            <View>
                <Animated.View style={{ opacity: fadeIn }}>
                    <Text style={styles.welcome}>Welcome ,</Text>

                    <TextInput
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({ text })}
                        placeholder="User Name"
                        placeholderTextColor="rgba(255,255,255,0.5)"
                        value={text}
                    />
                </Animated.View>
                <TouchableOpacity
                        style={styles.continueContainer}
                        onPress={() => alert('User ' + text + ' Registered')}>
                        <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        paddingTop: 42,
        color: '#219991',
        fontSize: 30,
        fontWeight: '800',
    },
    textinput: {
        fontSize: 50,
        color: '#FFF',
        fontWeight: '900',
        alignItems: 'center',
    },
    continueContainer: {
        backgroundColor: '#219991',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        width: 160,
        elevation: 4,
        paddingVertical: 8
    },
    continueText: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: '500'
    }
})
export default Welcome;