import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../constants/global";
import Spacer from "../components/Spacer";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About</Text>
      <Spacer />
      <Link href="/" style={globalStyles.link}>
        Home Page
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default About;
