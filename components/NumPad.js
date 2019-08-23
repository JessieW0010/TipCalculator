import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Key from "./Key";

export default function NumPad(props) {
	return (
		<View style={styles.numpad}>
			<View style={styles.numgroup}>
				<Key symbol="1" />
				<Key symbol="2" />
				<Key symbol="3" />
				<Key symbol="4" />
			</View>
			<View style={styles.numgroup}>
				<Key symbol="5" />
				<Key symbol="6" />
				<Key symbol="7" />
				<Key symbol="8" />
			</View>
			<View style={styles.numgroup}>
				<Key symbol="9" />
				<Key symbol="0" />
				<Key symbol="." />
				<Key symbol="=" />
			</View>
			<ScrollView horizontal={true}>
				<Key symbol="DEL" op={true} />
				<Key symbol="+" op={true} />
				<Key symbol="-" op={true} />
				<Key symbol="*" op={true} />
				<Key symbol="/" op={true} />
				<Key symbol="(" op={true} />
				<Key symbol=")" op={true} />
				<Key symbol="sin" op={true} />
				<Key symbol="cos" op={true} />
				<Key symbol="tan" op={true} />
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
