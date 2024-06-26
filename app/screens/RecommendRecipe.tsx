import { Link, Stack, useNavigation } from 'expo-router';
import React, { useState, useEffect } from 'react'; 
import { View, TextInput, TouchableOpacity,Text, StyleSheet } from 'react-native'; 
import InputSpinner from "react-native-input-spinner";
//import GenderRadioGroup from '@/app/GenderRadioGroup';
import { RadioButton } from 'react-native-paper';


//import './App.css';
function RecommendRecipe()  {
  // State variables to store form inputs,  
    // errors, and form validity 
    const navigation = useNavigation();
    const [age, setAge] = useState(18); 
    const [height, setHeight] = useState(150); 
    const [weight, setWeight] = useState(50); 
    const [gender, setGender] = useState(''); 
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [errors, setErrors] = useState({}); 
    const [isFormValid, setIsFormValid] = useState(true); 
    const TITLE = 'Recommend a recipe';
    const [selectedGender, setSelectedGender] = useState('male');
    const state = {
        gender: [
            {
                label: 'Male',
                color: 'green',
                selected:false
            },
            {
                label: 'Female',
                color: 'green',
                selected:false
            }
        ],
    };
    useEffect(() => { 
        navigation.setOptions({ headerShown: false });
        // Trigger form validation when name,  
        // email, or password changes 
        //validateForm(); 
    }, [navigation,name, email, password]); 
  
    const validateForm = () => { 
        let errors = {name,email,password}; 
  
        // Validate name field 
        if (!name) { 
            errors.name = 'Name is required.'; 
        } 
  
        // Validate email field 
        if (!email) { 
            errors.email = 'Email is required.'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'Email is invalid.'; 
        } 
  
        // Validate password field 
        if (!password) { 
            errors.password = 'Password is required.'; 
        } else if (password.length < 6) { 
            errors.password = 'Password must be at least 6 characters.'; 
        } 
  
        // Set the errors and update form validity 
        setErrors(errors); 
        setIsFormValid(Object.keys(errors).length === 0); 
    }; 
  
    const handleSubmit = () => { 
        console.log('age::' + age + navigation);
       navigation.navigate('screens/RecipeList', {age: {age}})
        if (isFormValid) { 
  
            // Form is valid, perform the submission logic 
            console.log('Form submitted successfully!'); 
        } else { 
              
            // Form is invalid, display error messages 
            console.log('Form has errors. Please correct them.'); 
        } 
    }; 
  
    return ( 
        
        <View style={styles.container}> 
        <Stack.Screen options={{ title: TITLE }} />
        <label> Age
            <InputSpinner
                style={styles.inputSpinner} 
                max={150}
                min={18}
                step={1}
                colorMax={"#f04048"}
                colorMin={"#40c5f4"}
                value={age}
                onChange={setAge}
            /></label>
            <label> Height (cm)
            <InputSpinner
                style={styles.inputSpinner} 
                max={230}
                min={150}
                step={1}
                colorMax={"#f04048"}
                colorMin={"#40c5f4"}
                value={height}
                onChange={setHeight}
            /></label>

            <label> Weight (kg)
            <InputSpinner
                style={styles.inputSpinner} 
                max={230}
                min={50}
                step={1}
                colorMax={"#f04048"}
                colorMin={"#40c5f4"}
                value={weight}
                onChange={setWeight}
            /></label>
            
            <label> Gender {selectedGender}<RadioButton.Group
                onValueChange={(value) => setSelectedGender(value)}
                value={selectedGender}
                >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value="male" gender="male" />
                    <Text>Male</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton value="female" gender="female" />
                    <Text>Female</Text>
                </View>
            </RadioButton.Group></label>
            <TouchableOpacity 
                style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]} 
                disabled={!isFormValid} 
                onPress={handleSubmit} 
            > 
            <Text style={styles.buttonText}>Submit</Text> 
            </TouchableOpacity> 
              
           
        </View> 
    ); 
}; 
  
// Styles for the components 
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 16, 
        justifyContent: 'center', 
    }, 
    inputSpinner:{
        //width:400,
        height: 60,
        color:'#B0228C',

    },
    input: { 
        height: 60, 
        borderColor: '#ccc', 
        borderWidth: 1, 
        marginBottom: 12, 
        paddingHorizontal: 10, 
        borderRadius: 8, 
        fontSize: 16, 
    }, 
    button: { 
        backgroundColor: 'green', 
        borderRadius: 8, 
        paddingVertical: 10, 
        alignItems: 'center', 
        marginTop: 16, 
        marginBottom: 12, 
    }, 
    buttonText: { 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16, 
    }, 
    error: { 
        color: 'red', 
        fontSize: 20, 
        marginBottom: 12, 
    }, 
}); 
  
  /*
 <TextInput 
                style={styles.input} 
                placeholder="Name"
                value={name} 
                onChangeText={setName} 
            /> 
            <TextInput 
                style={styles.input} 
                placeholder="Email"
                value={email} 
                onChangeText={setEmail} 
            /> 
            <TextInput 
                style={styles.input} 
                placeholder="Password"
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry 
            /> 
  */
export default RecommendRecipe;