import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Redirect,Stack } from 'expo-router';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
//import { useSession } from '../../ctx';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Title } from 'react-native-paper';
import RecommendRecipe from './screens/RecommendRecipe';
import RecipeList from './screens/RecipeList';
import NotFoundScreen from './+not-found';
import HomeScreen from '../components/HomeScreen';

//const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   // <SessionProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack initialRouteName="Home"
                screenOptions={{
                  title:'Welcome to reommend recipe app',
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
              }}>
            <Stack.Screen name="HomeScreen"   />
            <Stack.Screen name="RecommendRecipe" />
            <Stack.Screen name="RecipeList" />
            <Stack.Screen name="+not-found" />
          </Stack>
      </ThemeProvider>
   // </SessionProvider>
  );
}
//<Stack.Screen name="(tabs)" options={{ headerShown: false }} />