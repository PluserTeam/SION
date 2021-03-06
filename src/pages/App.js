import React, {useEffect, useState} from 'react';
//Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import AnimatedSplash from 'react-native-animated-splash-screen';
//Pages
import Login from './Login';
import Projects from './Projects';
import CreateProject from './CreateProject';
import ProjectDetail from './ProjectDetail';
import EditProject from './EditProject';
import AddSupplies from './AddSupplies';
import EditSupplies from './EditSupplies';
import CreateLine from './CreateLine';
import LineDetail from './LineDetail';
//Images
import logo from '../images/logo_SPA.png';

const Stack = createStackNavigator();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      logoImage={logo}
      backgroundColor={'#3B666F'}
      logoHeight={900}
      logoWidht={900}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Projects"
            component={Projects}
            options={{
              title: 'Proyectos',
              headerLeft: null,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3B666F',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="CreateProject"
            component={CreateProject}
            options={{
              title: 'Crear proyecto',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3B666F',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="CreateLine"
            component={CreateLine}
            options={{
              title: 'Crear linea',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3B666F',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="ProjectDetail"
            component={ProjectDetail}
            options={{
              title: 'Detalles del proyecto',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3B666F',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="EditProject"
            component={EditProject}
            options={{
              title: 'Editar proyecto',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3B666F',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="LineDetail"
            component={LineDetail}
            options={{
              title: 'Detalles de linea',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3B666F',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="AddSupplies"
            component={AddSupplies}
            options={{
              title: 'Agregar insumo',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3B666F',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="EditSupplies"
            component={EditSupplies}
            options={{
              title: 'Editar insumo',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#3B666F',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AnimatedSplash>
  );
};

export default App;
