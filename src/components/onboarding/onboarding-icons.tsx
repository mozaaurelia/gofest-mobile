import React from "react";
import Svg, { Path, Circle, Rect } from "react-native-svg";

type IconProps = { size?: number; color?: string };

export function SearchEventIcon({ size = 72, color = "#10151D" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <Path d="M10 20 15 15a3 3 0 0 1 4.2 0L31 26.8a3 3 0 0 1 0 4.2L26 36 8 18a3 3 0 0 1 2-4Z" stroke={color} strokeWidth={2} strokeLinejoin="round" opacity={0.5} />
      <Circle cx="36" cy="34" r="11" stroke={color} strokeWidth={2.6} />
      <Path d="M44 42 50 48" stroke={color} strokeWidth={2.6} strokeLinecap="round" />
    </Svg>
  );
}

export function TicketsStackIcon({ size = 72, color = "#10151D" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <Rect x="8" y="12" width="32" height="20" rx="4" stroke={color} strokeWidth={2} opacity={0.45} transform="rotate(-6 24 22)" />
      <Rect x="14" y="20" width="34" height="22" rx="4" stroke={color} strokeWidth={2.6} />
      <Path d="M14 31 h34" stroke={color} strokeWidth={2} strokeDasharray="3 3" />
      <Circle cx="14" cy="31" r="2.6" fill={color} opacity={0.9} />
      <Circle cx="48" cy="31" r="2.6" fill={color} opacity={0.9} />
    </Svg>
  );
}

export function QrCheckoutIcon({ size = 72, color = "#10151D" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <Rect x="9" y="9" width="16" height="16" rx="2.5" stroke={color} strokeWidth={2.4} />
      <Rect x="31" y="9" width="16" height="16" rx="2.5" stroke={color} strokeWidth={2.4} />
      <Rect x="9" y="31" width="16" height="16" rx="2.5" stroke={color} strokeWidth={2.4} />
      <Rect x="14.5" y="14.5" width="5" height="5" rx="1" fill={color} />
      <Rect x="36.5" y="14.5" width="5" height="5" rx="1" fill={color} />
      <Rect x="14.5" y="36.5" width="5" height="5" rx="1" fill={color} />
      <Rect x="33" y="33" width="14" height="14" rx="3" stroke={color} strokeWidth={2.4} />
      <Path d="M37 40 39.5 42.5 44 37" stroke={color} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}