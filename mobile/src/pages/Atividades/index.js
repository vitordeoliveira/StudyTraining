import React from "react";
import Tabs from "./Tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

const Stack = createStackNavigator();

const Atividades = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Activities"
        component={Tabs}
        options={{
          headerLeft: () => (
            <Button onPress={() => navigation.openDrawer()} title="Info" />
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default Atividades;
