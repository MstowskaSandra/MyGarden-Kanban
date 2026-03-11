export const theme = {
  colors: {
    // tło - zielone garden
    background: "#F4F8EF",     // jasny yellow green tint
    surface: "#F9FBF5",        // bardzo jasna avocado/yellow green
    surfaceAlt: "#E8F0D8",     // tło kolumn (light yellow green)

    // tekst - zielone tony
    textPrimary: "#283B0A",    // pakistan green – główny tekst (mocny kontrast)
    textSecondary: "#5E891B",  // avocado – nagłówki kolumn
    textMuted: "#B8D062",      // yellow green – subtelny tekst

    // akcenty - wisteria tylko tu!
    primary: "#5F5AA5",        // ultra violet / wisteria – buttony, add card
    primaryDark: "#4A4678",    // ciemna wisteria
    primaryLight: "#BAACEB",   // jasna wisteria – hover/light states

    // zielone statusy / główne
    success: "#5e891b",        // avocado – in progress
    successDark: "#4A6D14",    // ciemne avocado
    secondary: "rgb(184, 208, 98)",      // yellow green – done
    secondaryDark: "#A0B850",  // ciemne yellow green
    darkGreen: "#283B0A",      // pakistan green – backlog, głębokie elementy

    // bordery - zielone
    border: "#D2E0B8",         // jasny yellow green border
    borderStrong: "#5E891B",        // avocado

    // feedback - zielone z wisterią tylko w danger
    warning: "#B8D062",        // yellow green
    danger: "#5F5AA5",         // wisteria dla błędów (rzadko używane)

    // toast - zielony
    toastBg: "#5E891B",        // avocado
    toastText: "#FFFFFF",
  },
  fonts: {
    body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.06)",
    md: "0 4px 8px rgba(0,0,0,0.08)",
    lg: "0 10px 25px rgba(0,0,0,0.12)"
    }
};