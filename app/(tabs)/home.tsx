import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import {
    View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Image,
    TouchableHighlight,
} from "react-native";
import { styled } from "nativewind";

const home: React.FC = () => {
    const [filteredData, setFilteredData] = useState<string[]>([]);
    const [data, setData] = useState<string[]>([
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Elderberry",
        "Fig",
        "Grape",
        // ...more items
    ]);

    const handleSearch = (text: string) => {
        if (text) {
            const newData = data.filter((item) => {
                const itemData = item.toLowerCase();
                const textData = text.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
        } else {
            setFilteredData(data);
        }
    };

    return (
        <ScrollView>
            <View className="mt-10 rounded-full">
                <SearchBar onSearch={handleSearch} />
                {/* <FlatList
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text className="p-2 text-lg">{item}</Text>
                    )}
                /> */}
            </View>
            <View className="flex justify-center gap-6 items-center">
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/a320.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Airbus A320
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/737-800.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Boeing 737-800
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/737-max.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/737-max.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Boeing 737 MAX
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/a350.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Airbus A350
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/boeing-787-dreamliner.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Boeing 787 Dreamliner
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/747-400.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Boeing 747
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/boeing-757.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Boeing 757
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/a220.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Airbus A220
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/a330.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Airbus A330
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/a380.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Airbus A380
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/ATR-72-600.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            ATR 72-600
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/bombardier-crj-series.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Bombardier CRJ Series
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/bombardier-dash-8(Q series).jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Bombardier Dash 8
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                        const image = require("../../assets/images/a320.jpg");
                        const title = "Airbus A320";
                        const description =
                            "The Airbus A320 family consists of short- to medium-range, narrow-body, commercial passenger twin-engine jet airliners by Airbus. The family includes the A318, A319, A320 and A321, and the ACJ business jet.";
                        const price = 100000000;
                        const seats = 150;
                        const year = 2020;
                        const howToIdentify =
                            "The A320 has a distinctive sharklet wingtip device.";
                        // Handle the press event
                    }}
                    underlayColor="rgba(0, 0, 0, 1)"
                    className="rounded-2xl"
                >
                    <View className="rounded-2xl bg-primary w-80 h-60">
                        <Image
                            source={require("../../assets/images/a350.jpg")}
                            className="w-80 h-48 rounded-t-2xl"
                        />
                        <Text className="text-white text-xl px-5 py-2 font-bold">
                            Airbus A350
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View className="h-24"></View>
        </ScrollView>
    );
};

export default home;
