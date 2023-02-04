import { View, Text , Image, StyleSheet, Dimensions } from "react-native";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source ={Icons.menu.light} style={styles.headerIcons}/>
            <Text style={styles.title}>ensom</Text>
            <Image source={Icons.sun} style={styles.headerIcons}/>
        </View>
    );
};

const styles = StyleSheet.create({
    headerIcons: {
        height: windowWidth * 0.10,
        width: windowHeight * 0.05,
        resizeMode: "contain",

    },
    title: {
        fontFamily: "Sydney-Bold",
        fontSize: 32,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 10,
    },
});

export default Header;