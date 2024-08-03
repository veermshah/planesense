import { Stack, SplashScreen } from "expo-router";
import "react-native-reanimated";
import {
    useFonts,
    Inter_100Thin,
    Inter_900Black,
} from "@expo-google-fonts/inter";
import {
    Lusitana_700Bold,
    Lusitana_400Regular,
} from "@expo-google-fonts/lusitana";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        interThin: Inter_100Thin, // <- mapping key
        Inter_900Black, // <- equivalent to Inter_900Black: Inter_900Black
        Lusitana_700Bold,
        lusitana: Lusitana_400Regular,
    });

    const router = useRouter();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Simulate some async work (e.g., fetching data, loading resources)
        const prepare = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Example delay
            setIsReady(true);
        };

        prepare();
    }, []);

    useEffect(() => {
        if (isReady) {
            SplashScreen.hideAsync(); // Hide splash screen when ready
        }
    }, [isReady]);

    if (!fontsLoaded || !isReady) {
        return null; // or a loading indicator
    }

    return (
        <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    );
}
