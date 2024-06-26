const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="RecommendRecipe"
        onPress={() =>
          navigation.navigate('RecommendRecipe', {name: 'Jane'})
        }
      />
    );
  };
  const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

  export default HomeScreen;