import { Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import globalStyles from "../constants/global";
import Spacer from "../components/Spacer";
import Logo from "../assets/adaptive-icon.png";
import { useEffect, useState } from "react";

const About = () => {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => { 
      setOrientation(width > height ? 'landscape' : 'portrait')
  }, [width, height])

  return (
    <View style={globalStyles.container}>
      <Image
        source={Logo}
        style={{
          width: orientation === "landscape" ? height * 0.3 : width * 0.5,
          height: orientation === "landscape" ? height * 0.3 : width * 0.5,
        }}
        resizeMode="contain"
      />
      <Text style={globalStyles.title}>Dimensions API</Text>
      <Spacer />
      <Text style={{ fontSize: width > 500 ? 30 : 20 }}>
        Width: {width} {"\n"}
        Height: {height} {"\n"}
        Orientation: {orientation}
      </Text>

      <Spacer />
      <Link href="/" style={globalStyles.link}>
        Home Page
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default About;
