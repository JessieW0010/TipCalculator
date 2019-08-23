import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function Key(props) {
	function onPress() {
		props.echoSymbol(props.symbol);
	}

	return (
		<TouchableHighlight
			onPress={onPress}
			style={props.op ? [styles.opkey, styles.key] : styles.key}
		>
			<View>
				<Text style={props.op ? styles.opKeyText : styles.keyText}>
					{props.symbol}
				</Text>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	key: {
		borderRadius: 30,
		backgroundColor: "#c7c7c7",
		width: 60,
		height: 60,
		justifyContent: "center",
		alignItems: "center"
	},
	keyText: {
		fontSize: 20
	},
	opkey: {
		backgroundColor: "#989898",
		marginRight: 10
	},
	opKeyText: {
		color: "white"
	}
});
