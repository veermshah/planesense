import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View, ActivityIndicator } from "react-native";

import { icons } from "../../constants";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
interface TabIconProps {
    icon: string;
    color: string;
    name: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
    return (
        <View
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                gap: 5,
            }}
        >
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                style={{ width: 20, height: 20 }}
            />
            <Text
                style={{ color: color }}
                className={
                    focused ? "font-psemibold text-xs" : "font-pregular text-xs"
                }
            >
                {name}
            </Text>
        </View>
    );
};

const TabLayout: React.FC = () => {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        const prepare = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500)); // Example delay
            setIsReady(true);
        };
        prepare();
    }, []);

    return (
        <>
            {!isReady ? (
                <View className="absolute top-0 left-0 right-0 bottom-0 bg-white justify-center items-center z-50">
                    <ActivityIndicator size="large" color="#249CD2" />
                    <Text className="mt-4">Loading...</Text>
                </View>
            ) : (
                ""
            )}

            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#249CD2",
                    tabBarInactiveTintColor: "#242D2D",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#FFFFFF",
                        borderTopWidth: 1,
                        borderTopColor: "#249CD2",
                        height: 84,
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="learn"
                    options={{
                        title: "Learn",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.newspaper}
                                color={color}
                                name="Learn"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="practice"
                    options={{
                        title: "practice",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                name="Practice"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="identify"
                    options={{
                        title: "Identify",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.search}
                                color={color}
                                name="Identify"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabLayout;
