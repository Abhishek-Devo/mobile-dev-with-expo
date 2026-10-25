import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const userIdScreen = () => {
  const { userId } = useLocalSearchParams();
  return (
    <View>
      <Text>userIdScreen {userId}</Text>
    </View>
  );
};

export default userIdScreen;

const styles = StyleSheet.create({});
