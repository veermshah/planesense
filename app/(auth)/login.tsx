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
import { Link } from "expo-router";

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScrollView>
            <View className="mt-60 px-4 py-3 ">
                <Text className="text-5xl font-Lusitana_700 leading-tight border-4">
                    PlaneSense
                </Text>
                <View className="flex-col gap-1">
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
                            //do something
                        }}
                    >
                        <Text className="text-xl text-white font-black font-lusitana py-3 px-7 :">
                            Login
                        </Text>
                    </TouchableHighlight>
                    <View className="flex-row justify-center">
                        <Text className="text-black font-interThin">
                            Don't have an account?{" "}
                        </Text>
                        <Link href="/(auth)/register">
                            <Text className="text-secondary underline">
                                Register
                            </Text>
                        </Link>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default login;

const styles = StyleSheet.create({});
