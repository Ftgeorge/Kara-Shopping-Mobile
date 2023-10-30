import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, PixelRatio } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;
import bgimg from "../assets/splashscreen.png"
export default function Splashscreen() {
    return (
        <>
            <ImageBackground source={bgimg} style={{
                width: screenWidth, height: screenHeight
            }}>
                <View style={{ height: screenHeight, width: screenWidth, justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(52, 156, 104, 0.6)' }}>
                    <Text style={{fontFamily:'Raleway-SemiBold', color:'white', fontSize:getFontSize(50)}}>Explore</Text>
                    <Text style={{fontFamily:'Raleway-Bold', color:'white', fontSize:getFontSize(59), lineHeight:getFontSize(52)}}>KARA</Text>
                <TouchableOpacity style={{width:screenWidth*0.6, height:screenHeight/16, borderRadius:10, backgroundColor:'#FF8601', marginTop:'70%', justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontFamily:'Raileway-Regular', fontSize:getFontSize(20), color:'white'}}>Start</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </>
    );
}