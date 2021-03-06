import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ExpressionBox(props) {
	return <Text style={styles.expressionbox}>{props.expression}</Text>;
}

const styles = StyleSheet.create({
	expressionbox: {
		flex: 1,
		textAlign: "right",
		paddingLeft: 8,
		paddingRight: 8,
		backgroundColor: "#909090",
		fontSize: 32,
		color: "#212121"
	}
});
