import React, { useMemo, useRef, useState } from "react";
import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CALENDAR_EVENTS, getUniqueDates } from "../constants/calendar-data";
import CalendarHeader from "../components/calendar/calendar-header";
import DateStrip from "../components/calendar/date-strip";
import TicketDeck from "../components/calendar/ticket-deck";
import FilterModal from "../components/calendar/filter-modal";
import BottomNav from "../components/home/bottom-nav";
import { gfColors } from "../constants/gf-theme";

const HEADER_H = 44;
const DATE_STRIP_H = 96;
const BOTTOM_NAV_H = 112;

export default function CalendarScreen() {
  const { height: screenH } = useWindowDimensions();
  const [category, setCategory] = useState("Semua");
  const [filterVisible, setFilterVisible] = useState(false);
  const deckRef = useRef<FlatList>(null);

  const filteredEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayISO = today.toISOString().slice(0, 10);

    const upcomingOrCategory = CALENDAR_EVENTS.filter((e) => e.dateISO >= todayISO);
    if (category === "Semua") return upcomingOrCategory;
    return upcomingOrCategory.filter((e) => e.category === category);
  }, [category]);

  const uniqueDates = useMemo(() => getUniqueDates(filteredEvents), [filteredEvents]);
  const [activeDateISO, setActiveDateISO] = useState(filteredEvents[0]?.dateISO ?? "");

  const availableHeight = Math.max(
    280,
    screenH - HEADER_H - DATE_STRIP_H - BOTTOM_NAV_H
  );

  function handleSelectDate(dateISO: string) {
    setActiveDateISO(dateISO);
    const index = filteredEvents.findIndex((e) => e.dateISO === dateISO);
    if (index >= 0) deckRef.current?.scrollToIndex({ index, animated: true });
  }

  function handleApplyFilter(newCategory: string) {
    setCategory(newCategory);
    setFilterVisible(false);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <CalendarHeader onOpenFilter={() => setFilterVisible(true)} activeFilterCount={category !== "Semua" ? 1 : 0} />

      <DateStrip dates={uniqueDates} activeDateISO={activeDateISO} onSelectDate={handleSelectDate} />

      <View style={[styles.deckWrap, { height: availableHeight }]}>
        <TicketDeck
          events={filteredEvents}
          onActiveChange={setActiveDateISO}
          scrollRef={deckRef}
          cardHeight={availableHeight}
        />
      </View>

      <FilterModal
        visible={filterVisible}
        activeCategory={category}
        onClose={() => setFilterVisible(false)}
        onApply={handleApplyFilter}
      />

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  deckWrap: { justifyContent: "center" },
});