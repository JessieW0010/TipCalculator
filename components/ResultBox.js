import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ResultBox(props) {
	return <Text style={styles.resultbox}>{props.result}</Text>;
}

const styles = StyleSheet.create({
	resultbox: {
		flex: 1,
		textAlign: "right",
		paddingLeft: 8,
		paddingRight: 8,
		backgroundColor: "#909090",
		fontSize: 32,
		color: "#212121"
	}
});
