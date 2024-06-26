import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default class GenderRadioGroup extends Component {
    state = {
        gender: 'male',
        maleButtonColor: '#841584',
        femaleButtonColor: '#C0C0C0'
    }

    onPress = (gender: any) => this.setState({ gender });

    render() {
        return (
            <View>
                <Text style={styles.header}>
                    Selected Gender - {this.state.gender}
                </Text>
                <Button
                    onPress={() => {
                        this.setState({
                            gender: 'male',
                            maleButtonColor: '#841584',
                            femaleButtonColor: '#C0C0C0'
                        })
                    }}
                    title="Male"
                    color="#841584"
                />
                <Button
                    onPress={() => {
                        this.setState({
                            gender: 'female',
                            maleButtonColor: '#C0C0C0',
                            femaleButtonColor: '#841584'
                        })
                    }}
                    title="Female"
                    color="#841584"
                />
            </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16, 
        justifyContent: 'center', 
    },
    header: {
        fontSize: 18, 
        marginBottom: 10,
    },
});