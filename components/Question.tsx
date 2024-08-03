import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import { useGlobalSearchParams } from "expo-router";

// Ensure images are statically imported
const images = {
    a320: require("../assets/images/a320.jpg"),
    a330: require("../assets/images/a330.jpg"),
    a350: require("../assets/images/a350.jpg"),
    b737800: require("../assets/images/737-800.jpg"),
};

interface QuestionProps {
    image: keyof typeof images;
    options: string[];
}

const Question: React.FC<QuestionProps> = ({ image, options }) => {
    const [answered, setAnswered] = useState(false);

    return (
        <View>
            <Image
                source={images[image]}
                className="justify-center rounded-xl w-80 h-52"
            />
            <TouchableHighlight
                className="bg-secondary rounded-lg p-4 mt-12 mb-2"
                underlayColor="rgba(0, 0, 0, 1)"
                onPress={() => {
                    setAnswered(true);
                }}
            >
                <Text className="text-white text-xl font-bold">
                    {options[0]}
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
                className="bg-secondary rounded-lg p-4  mb-2"
                underlayColor="rgba(0, 0, 0, 1)"
                onPress={() => {
                    setAnswered(true);
                }}
            >
                <Text className="text-white text-xl font-bold">
                    {options[1]}
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
                className="bg-secondary rounded-lg p-4 mb-2"
                underlayColor="rgba(0, 0, 0, 1)"
                onPress={() => {
                    setAnswered(true);
                }}
            >
                <Text className="text-white text-xl font-bold">
                    {options[2]}
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
                className="bg-secondary rounded-lg p-4 mb-2"
                underlayColor="rgba(0, 0, 0, 1)"
                onPress={() => {
                    setAnswered(true);
                }}
            >
                <Text className="text-white text-xl font-bold">
                    {options[3]}
                </Text>
            </TouchableHighlight>
            <View className="flex-row mt-8 justify-evenly">
                <TouchableHighlight
                    className="bg-secondary rounded-lg p-4 mb-2"
                    underlayColor="rgba(0, 0, 0, 1)"
                    onPress={() => {
                        //something
                    }}
                >
                    <View className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[20px] border-r-white mr-1" />
                </TouchableHighlight>
                <TouchableHighlight
                    className="bg-secondary rounded-lg p-4 mb-2"
                    underlayColor="rgba(0, 0, 0, 1)"
                    onPress={() => {
                        //something
                    }}
                >
                    <View className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-white ml-1" />
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default Question;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    image: {
        width: 320,
        height: 192,
        borderRadius: 16,
    },
    button: {
        backgroundColor: "#FF6347", // Replace this with your desired color
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    text: {
        fontSize: 20,
        color: "white",
    },
});
