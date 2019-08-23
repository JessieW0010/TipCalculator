import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import ExpressionBox from "./components/ExpressionBox.js";
import ResultBox from "./components/ResultBox";
import NumPad from "./components/NumPad";

const math = require("mathjs");

export default function App() {
	const [expression, setExpression] = useState("");
	const [result, setResult] = useState("");
	const [history, setHistory] = useState([]);

	function assembleExpression(symbol) {
		setExpression(expression + symbol);
		setHistory([...history, expression]);
	}

	function calculateResult() {
		let result;
		try {
			result = math.evaluate(expression);
		} catch (e) {
			result = "Error";
		}
		setResult(result);
	}

	function rollbackExpression() {
		if (expression) {
			setExpression(history.pop());
		}
	}

	return (
		<View style={styles.container}>
			<ExpressionBox expression={expression} />
			<ResultBox result={result} />
			<NumPad
				assembleExpression={assembleExpression}
				calculateResult={calculateResult}
				deletePressed={rollbackExpression}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight
	}
});
