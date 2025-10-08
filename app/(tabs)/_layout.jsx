import { Tabs, usePathname, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const TabsLayout = () => {
  const router = useRouter(); // функціонал навігації
  const pathname = usePathname(); // поточний маршрут
  
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#ddd",
            height: 50,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="home"
                size={24}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="books"
          listeners={{
            tabPress: (e) => {
             e.preventDefault();
             router.navigate("/books");
            },
          }}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              pathname === "/books" ? null : (
                <FontAwesome5
                  name="book"
                  size={24}
                  color={focused ? "black" : "gray"}
                />
              ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user"
                size={24}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
      </Tabs>

      {pathname === "/books" && (
        <Pressable
          style={styles.plusBtn}
          onPress={() => router.push("/books/add")}
        >
          <FontAwesome name="plus" size={24} color="white" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  plusBtn: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
  },
});

export default TabsLayout;
