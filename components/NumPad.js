import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Key from "./Key";

export default function NumPad(props) {
	function echoSymbol(symbol) {
		switch (symbol) {
			case "=":
				props.calculateResult();
				break;
			case "DEL":
				props.deletePressed();
				break;
			default:
				props.assembleExpression(symbol);
				break;
		}
	}

	return (
		<View style={styles.numpad}>
			<View style={styles.numgroup}>
				<Key symbol="1" echoSymbol={echoSymbol} />
				<Key symbol="2" echoSymbol={echoSymbol} />
				<Key symbol="3" echoSymbol={echoSymbol} />
				<Key symbol="4" echoSymbol={echoSymbol} />
			</View>
			<View style={styles.numgroup}>
				<Key symbol="5" echoSymbol={echoSymbol} />
				<Key symbol="6" echoSymbol={echoSymbol} />
				<Key symbol="7" echoSymbol={echoSymbol} />
				<Key symbol="8" echoSymbol={echoSymbol} />
			</View>
			<View style={styles.numgroup}>
				<Key symbol="9" echoSymbol={echoSymbol} />
				<Key symbol="0" echoSymbol={echoSymbol} />
				<Key symbol="." echoSymbol={echoSymbol} />
				<Key symbol="=" echoSymbol={echoSymbol} />
			</View>
			<ScrollView horizontal={true}>
				<Key symbol="DEL" op={true} echoSymbol={echoSymbol} />
				<Key symbol="+" op={true} echoSymbol={echoSymbol} />
				<Key symbol="-" op={true} echoSymbol={echoSymbol} />
				<Key symbol="*" op={true} echoSymbol={echoSymbol} />
				<Key symbol="/" op={true} echoSymbol={echoSymbol} />
				<Key symbol="(" op={true} echoSymbol={echoSymbol} />
				<Key symbol=")" op={true} echoSymbol={echoSymbol} />
				<Key symbol="sin" op={true} echoSymbol={echoSymbol} />
				<Key symbol="cos" op={true} echoSymbol={echoSymbol} />
				<Key symbol="tan" op={true} echoSymbol={echoSymbol} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	numpad: {
		flex: 2,
		padding: 20
	},
	numgroup: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between"
	}
});
