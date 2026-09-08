import React from "react";
import { StyleSheet, View } from "react-native";
import { CircleHelp, MapPin, Megaphone, Ticket, TicketCheck } from "lucide-react-native";
import { TKey, useI18n } from "../../constants/i18n";
import DetailListItem from "./detail-list-item";

const ITEMS: { icon: React.ComponentType<{ size: number; color: string; strokeWidth: number }>; titleKey: TKey; subtitleKey: TKey; showBadge: boolean }[] = [
  { icon: Ticket, titleKey: "detailSales", subtitleKey: "detailSalesSub", showBadge: true },
  { icon: MapPin, titleKey: "detailSeatMap", subtitleKey: "detailSeatMapSub", showBadge: true },
  { icon: TicketCheck, titleKey: "detailWristband", subtitleKey: "detailWristbandSub", showBadge: true },
  { icon: CircleHelp, titleKey: "detailQuestions", subtitleKey: "detailQuestionsSub", showBadge: true },
  { icon: Megaphone, titleKey: "detailGuide", subtitleKey: "detailGuideSub", showBadge: true },
];

export default function DetailList() {
  const { t } = useI18n();
  return (
    <View style={styles.wrap}>
      {ITEMS.map((item) => (
        <DetailListItem
          key={item.titleKey}
          icon={item.icon}
          title={t(item.titleKey)}
          subtitle={t(item.subtitleKey)}
          showBadge={item.showBadge}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 20, marginTop: 20 },
});