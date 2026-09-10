import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSequence,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import TicketIcon from "./ticket-icon";
import { gfColors } from "../constants/gf-theme";

type AnimatedSplashScreenProps = {
  onFinish: () => void;
};

const PREMIUM_EASE = Easing.bezier(0.16, 1, 0.3, 1);

export default function AnimatedSplashScreen({ onFinish }: AnimatedSplashScreenProps) {
  const iconOpacity = useSharedValue(0);
  const iconScale = useSharedValue(0.88);
  const wordmarkOpacity = useSharedValue(0);
  const wordmarkTranslateY = useSharedValue(10);
  const containerOpacity = useSharedValue(1);

  useEffect(() => {
    // Icon: fade + scale, 0 -> 650ms
    iconOpacity.value = withTiming(1, { duration: 650, easing: PREMIUM_EASE });
    iconScale.value = withTiming(1, { duration: 650, easing: PREMIUM_EASE });

    // Wordmark: mulai di 500ms (overlap dikit sama icon), selesai di 1000ms
    wordmarkOpacity.value = withDelay(500, withTiming(1, { duration: 500, easing: PREMIUM_EASE }));
    wordmarkTranslateY.value = withDelay(500, withTiming(0, { duration: 500, easing: PREMIUM_EASE }));

    // Hold sampai 1650ms, lalu fade out container 350ms, lalu panggil onFinish
    containerOpacity.value = withDelay(
      1650,
      withTiming(0, { duration: 350, easing: Easing.inOut(Easing.ease) }, (finished) => {
        if (finished) runOnJS(onFinish)();
      })
    );
  }, []);

  const iconStyle = useAnimatedStyle(() => ({
    opacity: iconOpacity.value,
    transform: [{ scale: iconScale.value }],
  }));

  const wordmarkStyle = useAnimatedStyle(() => ({
    opacity: wordmarkOpacity.value,
    transform: [{ translateY: wordmarkTranslateY.value }],
  }));

  const containerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.View style={iconStyle}>
        <TicketIcon size={64} />
      </Animated.View>

      <Animated.Text style={[styles.wordmark, wordmarkStyle]}>Go fest!</Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gfColors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  wordmark: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: "800",
    color: gfColors.text,
    letterSpacing: 0.2,
  },
});