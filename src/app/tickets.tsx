import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TicketsHeader from "../components/tickets/tickets-header";
import TicketsTabs, { TicketsTab } from "../components/tickets/tickets-tabs";
import SavedTicketCard from "../components/tickets/saved-ticket-card";
import PurchasedTicketCard from "../components/tickets/purchased-ticket-card";
import BottomNav from "../components/home/bottom-nav";
import { SAVED_TICKETS, PURCHASED_TICKETS } from "../constants/tickets-data";
import { gfColors } from "../constants/gf-theme";

export default function TicketsScreen() {
  const [tab, setTab] = useState<TicketsTab>("saved");

  return (
    <SafeAreaView style={styles.safe}>
      <TicketsHeader />
      <TicketsTabs active={tab} onChange={setTab} />

      {tab === "saved" ? (
        <FlatList
          data={SAVED_TICKETS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <SavedTicketCard ticket={item} />}
        />
      ) : (
        <FlatList
          data={PURCHASED_TICKETS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => <PurchasedTicketCard ticket={item} />}
        />
      )}

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  list: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 120 },
});