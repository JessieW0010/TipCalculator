import React from "react";
import { View, Text } from "react-native";

export default function Hello({ name }) {
	return (
		<View>
			<Text>Hello my name is {name}</Text>
		</View>
	);
}
