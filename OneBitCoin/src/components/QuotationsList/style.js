import { StyleSheet } from "react-native";
import CurrentPrice from ".";

const styles = StyleSheet.create({
    filters: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 15,
        justifyContent: "space-evenly"
    },
    buttonQuery: {
        width: 50,
        height: 30,
        backgroundColor: "#f50d41",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    textButtonQuery: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 14,
    },
});

export default styles