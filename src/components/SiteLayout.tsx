import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Menu, Music, X, Lock, LockOpen } from "lucide-react";
import { useState, type ReactNode } from "react";
import { EditProvider, useEdit } from "@/lib/edit-store";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/classes", label: "Classes" },
  { to: "/extracurriculars", label: "Extracurriculars" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Music className="h-4 w-4" />
          </span>
          CKSS Music
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => {
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
                {active && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-accent"
                activeProps={{ className: "rounded-lg px-3 py-3 text-sm font-medium text-primary bg-primary-soft" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { adminMode, toggleAdmin } = useEdit();
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="container-page flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CKSS Music Program. All rights reserved.
        </div>
        <div className="flex items-center gap-3">
          {adminMode && (
            <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-accent-foreground">
              Admin edit mode is ON
            </span>
          )}
          <button
            onClick={toggleAdmin}
            title={adminMode ? "Exit admin mode" : "Enter admin mode"}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary hover:text-foreground"
          >
            {adminMode ? <LockOpen className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5" />}
            {adminMode ? "Exit Admin" : "Staff"}
          </button>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <EditProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </EditProvider>
  );
}

export function SiteLayoutRoute() {
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  );
}
