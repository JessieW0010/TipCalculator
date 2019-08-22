import { setState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpressionBox from "./components/ExpressionBox";

export default function App() {
	[expression, setExpression] = setState("This is dummy expression");
	[result, setResult] = setState("This is dummy result");

	// assumbleExpression() {

	// }

	// calculateResult() {

	// }

	// rollbackExpression() {

	// }

	return (
		<View style={styles.container}>
			<ExpressionBox expression={expression} />
			{/* <ResultBox/>
      <NumPad
        assembleExpression={}
        calculateResult={}
        deletePressed={}
      /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
