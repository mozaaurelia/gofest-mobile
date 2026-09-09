import React, { useEffect, useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Rect } from "react-native-svg";
import TicketIcon from "./ticket-icon";
import { GfColors, useThemeColors } from "../constants/gf-theme";

type AnimatedSplashScreenProps = {
  onFinish: () => void;
};

export default function AnimatedSplashScreen({ onFinish }: AnimatedSplashScreenProps) {
  const c = useThemeColors();
  const styles = makeStyles(c);
  const [glowScale] = useState(() => new Animated.Value(1));
  const [glowOpacity] = useState(() => new Animated.Value(0.25));
  const [iconScale] = useState(() => new Animated.Value(0.7));
  const [iconOpacity] = useState(() => new Animated.Value(0));
  const [iconRotate] = useState(() => new Animated.Value(-10));
  const [wordmarkOpacity] = useState(() => new Animated.Value(0));
  const [wordmarkTranslateY] = useState(() => new Animated.Value(14));
  const [containerOpacity] = useState(() => new Animated.Value(1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(glowScale, { toValue: 1.3, duration: 1400, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(glowOpacity, { toValue: 0.4, duration: 1400, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(glowScale, { toValue: 1, duration: 1400, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(glowOpacity, { toValue: 0.25, duration: 1400, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        ]),
      ])
    ).start();

    Animated.parallel([
      Animated.spring(iconScale, { toValue: 1, friction: 6, tension: 60, useNativeDriver: true }),
      Animated.timing(iconOpacity, { toValue: 1, duration: 600, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      Animated.spring(iconRotate, { toValue: 0, friction: 6, tension: 60, useNativeDriver: true }),
    ]).start();

    Animated.sequence([
      Animated.delay(450),
      Animated.parallel([
        Animated.timing(wordmarkOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(wordmarkTranslateY, { toValue: 0, duration: 500, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]),
    ]).start();

    const timer = setTimeout(() => {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 400,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => onFinish());
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const iconRotateDeg = iconRotate.interpolate({ inputRange: [-10, 0], outputRange: ["-10deg", "0deg"] });

  return (
    <Animated.View style={[styles.container, { opacity: containerOpacity }]}>
      <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
        <Defs>
          <RadialGradient id="vignette" cx="50%" cy="42%" r="65%">
            <Stop offset="0%" stopColor={c.surface} stopOpacity={1} />
            <Stop offset="100%" stopColor={c.bg} stopOpacity={1} />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#vignette)" />
      </Svg>

      <Animated.View style={[styles.glow, { opacity: glowOpacity, transform: [{ scale: glowScale }] }]} />

      <Animated.View style={{ opacity: iconOpacity, transform: [{ scale: iconScale }, { rotate: iconRotateDeg }] }}>
        <TicketIcon size={68} />
      </Animated.View>

      <Animated.Text style={[styles.wordmark, { opacity: wordmarkOpacity, transform: [{ translateY: wordmarkTranslateY }] }]}>
        Go fest!
      </Animated.Text>
    </Animated.View>
  );
}

function makeStyles(c: GfColors) {
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: c.bg, alignItems: "center", justifyContent: "center" },
    glow: { position: "absolute", width: 220, height: 220, borderRadius: 110, backgroundColor: c.teal },
    wordmark: { marginTop: 22, fontSize: 26, fontWeight: "800", color: c.text, letterSpacing: 0.2 },
  });
}