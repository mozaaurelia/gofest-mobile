import React, { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CALENDAR_EVENTS } from "../constants/calendar-data";
import CalendarHeader from "../components/calendar/calendar-header";
import EventTimelineList from "../components/calendar/event-timeline-list";
import FilterModal from "../components/calendar/filter-modal";
import BottomNav from "../components/home/bottom-nav";
import { gfColors } from "../constants/gf-theme";

export default function CalendarScreen() {
  const [category, setCategory] = useState("Semua");
  const [filterVisible, setFilterVisible] = useState(false);

  const filteredEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayISO = today.toISOString().slice(0, 10);

    const upcomingOrCategory = CALENDAR_EVENTS.filter((e) => e.dateISO >= todayISO);
    if (category === "Semua") return upcomingOrCategory;
    return upcomingOrCategory.filter((e) => e.category === category);
  }, [category]);

  function handleApplyFilter(newCategory: string) {
    setCategory(newCategory);
    setFilterVisible(false);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <CalendarHeader onOpenFilter={() => setFilterVisible(true)} activeFilterCount={category !== "Semua" ? 1 : 0} />

      <EventTimelineList events={filteredEvents} />

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
});
