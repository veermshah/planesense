import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Alert,
    Button,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";
// import type { NativeStackNavigationProp} from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native";

const register = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createProfile = async (response: any) => {
        // db().ref(`/users/${response.user.uid}`).set({ name });
        // db().ref(`/users/${response.user.uid}/streaks`).set({ streak: 1 });
    };

    const handleRegister = async () => {
        // Handle registration logic here
        console.log("REGISTERING...");
        // if (email && password) {
        //     try {
        //         const response = await auth().createUserWithEmailAndPassword(
        //             email,
        //             password
        //         );

        //         if (response.user) {
        //             await createProfile(response);
        //             //push to home screen
        //             Alert.alert("Registration", "Registration successful!");
        //         }
        //     } catch (e) {
        //         Alert.alert("Oops", "Please check your form and try again");
        //     }
        // }
        navigation.navigate("(tabs)"); // Use the route name of the screen you want to navigate to
    };

    return (
        <ScrollView>
            <View className="mt-60 px-4 py-3 ">
                <Text className="text-5xl font-Lusitana_700 leading-tight border-4">
                    PlaneSense
                </Text>
                <View className="flex-col gap-1">
                    <TextInput
                        className="border border-gray-300 rounded p-4 mb-3"
                        placeholder="Name"
                        placeholderTextColor={"#000"}
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        className="border border-gray-300 rounded p-4 mb-3"
                        placeholder="Email"
                        placeholderTextColor={"#000"}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput
                        className="border border-gray-300 rounded p-4 mb-3"
                        placeholder="Password"
                        placeholderTextColor={"#000"}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableHighlight
                        underlayColor="rgba(0, 0, 0, 1)"
                        className="border-6 border-red-400 bg-secondary rounded-3xl mb-2"
                        onPress={() => {
                            handleRegister();
                        }}
                    >
                        <Text className="text-xl text-white font-black font-lusitana py-3 px-7 :">
                            Register
                        </Text>
                    </TouchableHighlight>
                    <View className="flex-row justify-center">
                        <Text className="text-black font-interThin">
                            Already have an account?{" "}
                        </Text>
                        <Link href="/(auth)/login">
                            <Text className="text-secondary underline">
                                Login
                            </Text>
                        </Link>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default register;

const styles = StyleSheet.create({});
