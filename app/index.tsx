import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './config/colors';
//import RecommendRecipeScreen from 'RecommendRecipe';
//import RecipeListScreen from 'screen/RecipeList';

const Stack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <button style={styles.button}><Link href="screens/RecommendRecipe">RecommendRecipe</Link></button>
    <button style={styles.button}><Link href="screens/RecipeList">RecipeList</Link></button>
  </View>
      
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width:200,
    height:60,
    backgroundColor:colors.secondary
  }
  
});
export default HomeScreen;