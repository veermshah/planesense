import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Question from "@/components/Question";

const practice = () => {
    return (
        <View className="flex-1 items-center mt-24">
            <Question
                image={"a320"}
                options={["a320", "a330", "a340", "a350"]}
            />
        </View>
    );
};

export default practice;

const styles = StyleSheet.create({});
