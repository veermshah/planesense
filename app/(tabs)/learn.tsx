import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from "react-native";
import React from "react";

const learn = () => {
    return (
        <ScrollView>
            <View className="mt-24">
                <View className="items-center">
                    <TouchableHighlight
                        onPress={() => {
                            //do something
                        }}
                        className="bg-primary rounded-full h-40 w-40 flex items-center justify-center"
                        underlayColor="rgba(0, 0, 0, 1)"
                    >
                        <Text className="text-white text-center text-lg font-black font-lusitana">
                            Welcome To Planespotting
                        </Text>
                    </TouchableHighlight>
                </View>
                <View className="items-center">
                    <View className="bg-black h-16 w-1"></View>
                </View>
                <View className="items-center">
                    <TouchableHighlight
                        onPress={() => {
                            //do something
                        }}
                        className="bg-primary rounded-full h-40 w-40 flex items-center justify-center"
                        underlayColor="rgba(0, 0, 0, 1)"
                    >
                        <Text className="text-white text-center text-lg font-black font-lusitana">
                            Parts of Aircraft
                        </Text>
                    </TouchableHighlight>
                </View>
                <View className="mr-40 flex-col items-center">
                    <TouchableHighlight
                        onPress={() => {
                            //do something
                        }}
                        className="bg-primary rounded-full h-40 w-40 flex items-center justify-center"
                        underlayColor="rgba(0, 0, 0, 1)"
                    >
                        <Text className="text-white text-center text-lg font-black font-lusitana">
                            Commerical
                        </Text>
                    </TouchableHighlight>
                    <View className="w-1 h-16 bg-black"></View>
                    <TouchableHighlight
                        onPress={() => {
                            //do something
                        }}
                        className="bg-primary rounded-full h-40 w-40 flex items-center justify-center"
                        underlayColor="rgba(0, 0, 0, 1)"
                    >
                        <Text className="text-white text-center text-lg font-black font-lusitana">
                            Boeing
                        </Text>
                    </TouchableHighlight>
                    <View className="w-1 h-16 bg-black"></View>

                    <TouchableHighlight
                        onPress={() => {
                            //do something
                        }}
                        className="bg-primary rounded-full h-40 w-40 flex items-center justify-center"
                        underlayColor="rgba(0, 0, 0, 1)"
                    >
                        <Text className="text-white text-center text-lg font-black font-lusitana">
                            Airbus
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ScrollView>
    );
};

export default learn;

const styles = StyleSheet.create({});
