import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../config/colors';


//import './App.css';
const RecipeList  = (props: { navigation: string; }) => {
  const [recipes, setRecipes] = useState([]);
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:3000/recipes');
      const data = await response.json();
      const result = JSON.parse(JSON.stringify(data));
	  setRecipes(JSON.parse(result.data))
	  //const [recipes, setRecipes] = useState([]);
	  console.log("result ---------------------"); 
      console.log(JSON.parse(result.data));
	  console.log("result ---------------------");
    }
    catch (e) {
		console.log("error: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(e);
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => console.log(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.backgroundColor,
		alignItems: 'center',
		justifyContent: 'center', }, 
	item: { padding: 16, borderBottomWidth: 1, borderBottomColor: colors.borderBottomColor, }, 
	title: { fontWeight: 'bold', fontSize: 18, marginBottom: 8, }, 
	content: { fontSize: 14, }, 
  });
  
export default RecipeList;