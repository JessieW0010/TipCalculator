import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import ExpressionBox from "./components/ExpressionBox.js";
import ResultBox from "./components/ResultBox";
import NumPad from "./components/NumPad";

export default function App() {
	const [expression, setExpression] = useState("This is dummy expression");
	const [result, setResult] = useState("This is dummy result");

	// assembleExpression() {

	// }

	// calculateResult() {

	// }

	// rollbackExpression() {

	//   assembleExpression={assembleExpression}
	//       calculateResult={calculateResult}
	//       deletePressed={rollbackExpression}

	// }

	return (
		<View style={styles.container}>
			<ExpressionBox expression={expression} />
			<ResultBox result={result} />
			<NumPad />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight
	}
});
