import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Helper function to get the initial theme safely on the client-side
const getInitialTheme = (): string => {
  // Guard against running this on the server
  if (typeof window === "undefined") {
    return "light"; // Default theme for server-side rendering
  }
  const savedTheme = localStorage.getItem("theme");
  // Ensure the saved theme is one of the valid values
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  // Optional: Check system preference if no theme is saved
  // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // return prefersDark ? 'dark' : 'light';

  // Fallback to light if nothing is saved or preference check isn't used
  return "light";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined); // Initialize with undefined for better error checking

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize state using the helper function
  // useState can accept a function that runs only on initial render
  const [theme, setTheme] = useState<string>(getInitialTheme);

  // Apply theme class to the document's root element when theme changes or on initial load (client-side)
  useEffect(() => {
    // No need for window check here if getInitialTheme handles server correctly,
    // but useEffect only runs client-side anyway. Adding for extra safety.
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    // Remove previous theme class before adding the new one
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Also save to local storage whenever the theme state changes
    // (handles both initial load setting and toggle)
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  }, [theme]); // Re-run this effect whenever the theme state changes

  // Toggle between light and dark themes
  // Use useCallback to memoize the function if needed, though likely not critical here
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    // Note: The useEffect above now handles saving to localStorage on theme change
  }, []); // No dependencies needed for toggle logic

  // The first useEffect (for initializing from localStorage) is no longer needed
  // as useState(getInitialTheme) handles it.

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // This error check is now more robust because the initial context value is undefined
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
