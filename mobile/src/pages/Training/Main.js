import React, { useState, useEffect } from "react";
import useTimer from "../../hooks/useTimer";
import usePress from "../../hooks/usePress";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Main = () => {
  const [seconds, minutes, hour, isActive, toggle, reset] = useTimer(false);
  const [start, stop, finish] = usePress(1);
  const [sec, setSec] = useState("00");
  const [min, setMin] = useState("00");
  const [hr, setHr] = useState("00");

  useEffect(() => {
    if (seconds < 10) {
      setSec("0" + seconds);
    } else {
      setSec(seconds);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes < 10) {
      setMin("0" + minutes);
    } else {
      setMin(minutes);
    }
  }, [minutes]);

  useEffect(() => {
    if (hour < 10) {
      setHr("0" + hour);
    } else {
      setHr(hour);
    }
  }, [hour]);

  useEffect(() => {
    reset();
  }, [finish]);

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {hr}:{min}:{sec}
      </Text>

      {!isActive && seconds === 0 ? (
        <TouchableOpacity style={styles.button} onPress={toggle}>
          <Text>Iniciar</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={toggle} style={styles.button}>
            <Text>{!isActive ? "Start" : "Stop"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPressIn={start}
            onPressOut={stop}
          >
            <Text>Finalizar </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  timer: {
    fontSize: 90,
    fontWeight: "bold"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    flexWrap: "wrap-reverse"
  },
  button: {
    backgroundColor: "yellow",
    width: 150,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  endTraining: {
    backgroundColor: "black",
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "yellow",
    borderWidth: 1
  },
  end: {
    color: "yellow"
  }
});

export default Main;
