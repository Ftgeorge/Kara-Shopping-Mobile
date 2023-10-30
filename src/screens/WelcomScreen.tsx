import { Dimensions, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, PixelRatio } from "react-native";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;
import foodmarketimg from "../assets/earth-3289810_1920.jpg"

export default function WelcomeScreen() {
    return (
        <View style={{ width: screenWidth, height: screenHeight, alignItems: 'center' }}>
            <Text style={{ color: 'black', fontFamily: 'Raleway-SemiBold', fontSize: getFontSize(32), marginTop: '5%' }}>KARA</Text>
            <Text style={{ color: '#4B4B4B', fontFamily: 'Raleway-Regular', fontSize: getFontSize(18) }}>Buy, Sell, Deliver</Text>
            <ImageBackground source={foodmarketimg} imageStyle={{ borderRadius: 10 }} style={{ width: screenWidth * 0.8, height: screenHeight / 5, borderRadius: 10, marginTop: '7%' }}>
                <View style={{ width: screenWidth * 0.8, height: screenHeight / 5, backgroundColor: 'rgba(52, 156, 104, 0.6)', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Raleway-SemiBold', color: 'white', fontSize: getFontSize(24) }}>Food Market</Text>
                </View>
            </ImageBackground>
            <ImageBackground source={foodmarketimg} imageStyle={{ borderRadius: 10 }} style={{ width: screenWidth * 0.8, height: screenHeight / 5, borderRadius: 10, marginTop: '7%' }}>
                <View style={{ width: screenWidth * 0.8, height: screenHeight / 5, backgroundColor: 'rgba(238, 119, 74, 0.6)', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Raleway-SemiBold', color: 'white', fontSize: getFontSize(24) }}>Pharmaceuticals</Text>
                </View>
            </ImageBackground>

            <ImageBackground source={foodmarketimg} imageStyle={{ borderRadius: 10 }} style={{ width: screenWidth * 0.8, height: screenHeight / 5, borderRadius: 10, marginTop: '7%' }}>
                <View style={{ width: screenWidth * 0.8, height: screenHeight / 5, backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Raleway-SemiBold', color: 'white', fontSize: getFontSize(24) }}>Logistics</Text>
                </View>
            </ImageBackground>
            <TouchableOpacity style={{ backgroundColor: '#349C68', width: screenWidth * 0.8, height: screenHeight / 18, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: "5%" }}>
                <Text style={{ color: 'white', fontFamily: 'Raleway-Regular', fontSize: getFontSize(18) }}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', backgroundColor: '#E6E6E6', width: screenWidth * 0.8, height: screenHeight / 18, justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginTop: "5%" }}>
                <Text style={{ color: 'black', fontFamily: 'Raleway-Regular', fontSize: getFontSize(18) }}>Location</Text>
            </TouchableOpacity>

        </View>
    );
}