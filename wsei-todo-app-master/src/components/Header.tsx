import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = (props) => {
  return (
    <View style={styles.header}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    paddingTop: 20,
    backgroundColor: "#6eaea1",
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Header;