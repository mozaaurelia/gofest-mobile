import { StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, FontWeights, ThemeColor, Typography } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? 'text'] },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'linkPrimary' && styles.linkPrimary,
        type === 'code' && styles.code,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    ...Typography.bodyMedium,
  },
  smallBold: {
    ...Typography.bodyMedium,
    fontWeight: FontWeights.bold,
  },
  default: {
    ...Typography.bodyMedium,
  },
  title: {
    ...Typography.display,
  },
  subtitle: {
    ...Typography.h1,
  },
  link: {
    ...Typography.bodyMedium,
  },
  linkPrimary: {
    ...Typography.bodyMedium,
    color: '#3c87f7',
  },
  code: {
    ...Typography.label,
    fontFamily: Fonts.mono,
    fontWeight: FontWeights.semibold,
  },
});
