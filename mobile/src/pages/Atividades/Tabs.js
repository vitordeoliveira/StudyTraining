import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import History from "./History";
import Conquest from "./Conquest";
import LevelsOfStudy from "./LevelsOfStudy";
const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Historico" component={History} />
      <Tab.Screen name="Conquistas" component={Conquest} />
      <Tab.Screen name="Niveis de Corrida" component={LevelsOfStudy} />
    </Tab.Navigator>
  );
};

export default Tabs;
