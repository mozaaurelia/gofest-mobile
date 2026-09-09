import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SavedTicket } from "../constants/tickets-data";

const STORAGE_KEY = "saved_tickets";

type SavedTicketsContextType = {
  savedTickets: SavedTicket[];
  isSaved: (concertId: string) => boolean;
  toggleSave: (ticket: SavedTicket) => void;
};

const SavedTicketsContext = createContext<SavedTicketsContextType>({
  savedTickets: [],
  isSaved: () => false,
  toggleSave: () => {},
});

export function SavedTicketsProvider({ children }: { children: React.ReactNode }) {
  const [savedTickets, setSavedTickets] = useState<SavedTicket[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((raw) => {
      if (raw) setSavedTickets(JSON.parse(raw));
    });
  }, []);

  const persist = useCallback((tickets: SavedTicket[]) => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  }, []);

  const isSaved = useCallback(
    (concertId: string) => savedTickets.some((t) => t.concertId === concertId),
    [savedTickets],
  );

  const toggleSave = useCallback(
    (ticket: SavedTicket) => {
      setSavedTickets((prev) => {
        const exists = prev.some((t) => t.concertId === ticket.concertId);
        const next = exists
          ? prev.filter((t) => t.concertId !== ticket.concertId)
          : [...prev, ticket];
        persist(next);
        return next;
      });
    },
    [persist],
  );

  return (
    <SavedTicketsContext.Provider value={{ savedTickets, isSaved, toggleSave }}>
      {children}
    </SavedTicketsContext.Provider>
  );
}

export function useSavedTickets() {
  return useContext(SavedTicketsContext);
}
