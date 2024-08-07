import {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import React from "react";
import Question from "@/components/Question";

const practice = () => {
    return (
        <>
            <View className="flex-1 mt-20 mx-5">
                <TouchableHighlight
                    onPress={() => {
                        //dosmthing
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className=" bg-blue-300 rounded-2xl mb-4"
                >
                    <View className="flex-row items-center justify-evenly py-8 px-2">
                        <Text className="text-white text-2xl pr-2 py-2 font-bold">
                            Question Of The Day
                        </Text>
                        <Image
                            source={require("../../assets/icons/rightWhiteArrow.png")}
                            className="w-8 h-8"
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        //dosmthing
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className=" bg-blue-500 rounded-2xl mb-4"
                >
                    <View className="flex-row items-center justify-between py-8 px-2">
                        <Text className="text-white text-2xl pl-4 pr-2 py-2 font-bold">
                            Normal
                        </Text>
                        <Image
                            source={require("../../assets/icons/rightWhiteArrow.png")}
                            className="w-8 h-8"
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        //dosmthing
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className=" bg-blue-700 rounded-2xl mb-4"
                >
                    <View className="flex-row items-center justify-between py-8 px-2">
                        <Text className="text-white text-2xl pl-4 pr-2 py-2 font-bold">
                            Survival
                        </Text>
                        <Image
                            source={require("../../assets/icons/rightWhiteArrow.png")}
                            className="w-8 h-8"
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        //dosmthing
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className=" bg-blue-900 rounded-2xl mb-4"
                >
                    <View className="flex-row items-center justify-between py-8 px-2">
                        <Text className="text-white text-2xl pl-4 pr-2 py-2 font-bold">
                            Flashcards
                        </Text>
                        <Image
                            source={require("../../assets/icons/rightWhiteArrow.png")}
                            className="w-8 h-8"
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        //dosmthing
                    }}
                    underlayColor="rgba(0, 0, 0, 0)"
                    className=" bg-black rounded-2xl mb-4"
                >
                    <View className="flex-row items-center justify-between py-8 px-2">
                        <Text className="text-white text-2xl pl-4 pr-2 py-2 font-bold">
                            Stats
                        </Text>
                        <Image
                            source={require("../../assets/icons/rightWhiteArrow.png")}
                            className="w-8 h-8"
                        />
                    </View>
                </TouchableHighlight>
            </View>
        </>
    );
};

export default practice;

const styles = StyleSheet.create({});
