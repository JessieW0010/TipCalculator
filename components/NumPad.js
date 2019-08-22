import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NumPad(props) {
	return (
		<View style={styles.numpad}>
			<Text>Keys will show up here</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	numpad: {
		flex: 2
	}
});
