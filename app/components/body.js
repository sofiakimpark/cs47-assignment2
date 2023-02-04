import { View, Text, Image, StyleSheet, ImageBackground} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";

const Body = () => {
    return (
        <View>
            <View style={styles.photoCard}>
                <ImageBackground source={Profiles.mtl.image} style={styles.pImage} imageStyle={styles.pImageStyle}> 
                <Text style={styles.textName}>{Profiles.mtl.name}</Text>
                <Text style={styles.textDist}>{Profiles.mtl.caption}</Text>
                </ImageBackground>
            </View>
            <View style={styles.audioFeature}>
                <Text style={styles.textMHT}>My hottest take</Text>
                <View style={styles.player}>
                    <Image source={Icons.player.light} style={styles.playButton}/>
                    <Image source={Icons.audioWave.light} style={styles.soundWave} />
                </View>
                
            </View>
        </View>
        

    );
};

const styles = StyleSheet.create({
    pImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1 / 1.1,
        justifyContent: "space-between",
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    pImageStyle: {
        borderRadius: 8,
    },
    textName: {
        padding: 8,
        color: "white",
        fontSize: 32,
        fontFamily: "Sydney",
    },
    textDist: {
        padding: 8,
        color: "white",
        fontSize: 14,
        fontFamily: "Sydney",
    },
    textMHT: {
        fontSize: 25,
        fontFamily: "Sydney",
    },
    player: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20,
    },
    audioFeature: {
        backgroundColor: Themes.light.bgSecondary,
        padding: 20,
        marginTop: 20,
        height: 150,
        borderRadius: 20,
        shadowColor: Themes.light.shadows.shadowColor,
        shadowOpacity: Themes.light.shadows.shadowOpacity,
        shadowRadius: Themes.light.shadows.shadowRadius,
        shadowOffset: Themes.light.shadows.shadowOffset,
    },
    photoCard: {
    },
    playButton: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    soundWave: {
        height: 40,
        width: 230,
        resizeMode: "contain",
    },
});

export default Body;