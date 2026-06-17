import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Store = Record<string, string>;
const STORAGE_KEY = "ckss-edit-store-v1";
const ADMIN_KEY = "ckss-admin-mode-v1";

interface Ctx {
  adminMode: boolean;
  toggleAdmin: () => void;
  get: (key: string, fallback: string) => string;
  set: (key: string, value: string) => void;
}

const EditCtx = createContext<Ctx | null>(null);

export function EditProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<Store>({});
  const [adminMode, setAdminMode] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setStore(JSON.parse(raw));
      setAdminMode(localStorage.getItem(ADMIN_KEY) === "1");
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(store)); } catch {}
  }, [store, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(ADMIN_KEY, adminMode ? "1" : "0"); } catch {}
    if (typeof document !== "undefined") {
      document.body.dataset.adminMode = adminMode ? "on" : "off";
    }
  }, [adminMode, hydrated]);

  const get = useCallback((key: string, fallback: string) => {
    return store[key] ?? fallback;
  }, [store]);

  const set = useCallback((key: string, value: string) => {
    setStore(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleAdmin = useCallback(() => {
    if (adminMode) {
      setAdminMode(false);
      return;
    }
    const pwd = typeof window !== "undefined" ? window.prompt("Enter admin password") : null;
    if (pwd === "ckss2026") {
      setAdminMode(true);
    } else if (pwd !== null) {
      window.alert("Incorrect password");
    }
  }, [adminMode]);

  const value = useMemo(() => ({ adminMode, toggleAdmin, get, set }), [adminMode, toggleAdmin, get, set]);

  return <EditCtx.Provider value={value}>{children}</EditCtx.Provider>;
}

export function useEdit() {
  const ctx = useContext(EditCtx);
  if (!ctx) throw new Error("useEdit must be used inside EditProvider");
  return ctx;
}
