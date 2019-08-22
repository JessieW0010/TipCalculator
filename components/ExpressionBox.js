import React from "react";

export default function ExpressionBox(props) {
	return <Text style={styles.expressionbox}>{props.expression}</Text>;
}

const styles = StyleSheet.create({
	expressionbox: {
		flex: 1
	}
});
