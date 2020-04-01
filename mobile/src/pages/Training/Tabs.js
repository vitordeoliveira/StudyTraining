import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Main from "./Main";
import Professores from "./Professores";
const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Main} />
      <Tab.Screen name="Professor" component={Professores} />
    </Tab.Navigator>
  );
};

export default Tabs;
