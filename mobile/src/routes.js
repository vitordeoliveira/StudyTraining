import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Training from "./pages/Training";
import Atividades from "./pages/Atividades";

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Estudar">
        <Drawer.Screen name="TRAINING" component={Training} />
        <Drawer.Screen name="ATIVIDADES" component={Atividades} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
