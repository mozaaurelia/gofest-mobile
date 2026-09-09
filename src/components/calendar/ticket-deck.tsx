import React from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { CalendarEvent } from "../../constants/calendar-data";
import TicketDeckCard from "./ticket-deck-card";
import { gfColors } from "../../constants/gf-theme";

type TicketDeckProps = {
  events: CalendarEvent[];
  onActiveChange: (dateISO: string) => void;
  scrollRef: React.RefObject<FlatList | null>;
  cardHeight: number;
};

const SIDE_PADDING = 20;

export default function TicketDeck({ events, onActiveChange, scrollRef, cardHeight }: TicketDeckProps) {
  const { width } = useWindowDimensions();
  const cardWidth = width - SIDE_PADDING * 2;

  function onMomentumScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const index = Math.round(e.nativeEvent.contentOffset.x / cardWidth);
    const event = events[index];
    if (event) onActiveChange(event.dateISO);
  }

  if (events.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Nggak ada event yang cocok sama filter kamu.</Text>
      </View>
    );
  }

  return (
    <FlatList
      ref={scrollRef}
      data={events}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToInterval={cardWidth}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: SIDE_PADDING }}
      style={{ height: cardHeight }}
      onMomentumScrollEnd={onMomentumScrollEnd}
      renderItem={({ item }) => <TicketDeckCard event={item} width={cardWidth} availableHeight={cardHeight} />}
    />
  );
}

const styles = StyleSheet.create({
  empty: { paddingHorizontal: 20, paddingVertical: 60, alignItems: "center" },
  emptyText: { fontSize: 13, color: gfColors.textMuted, textAlign: "center" },
});