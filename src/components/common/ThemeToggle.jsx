import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ variant = "default", size = "default" }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check for saved theme preference or default to system preference
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  // Size variants
  const sizeClasses = {
    small: "p-1.5",
    default: "p-2",
    large: "p-3",
  };

  const iconSizes = {
    small: "w-4 h-4",
    default: "w-5 h-5",
    large: "w-6 h-6",
  };

  // Style variants
  const variants = {
    // Default button style (used in Navbar)
    default: (
      <button
        onClick={toggleTheme}
        className={`${sizeClasses[size]} rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className={`${iconSizes[size]} text-yellow-500`} />
        ) : (
          <Moon className={`${iconSizes[size]} text-gray-700`} />
        )}
      </button>
    ),

    // Floating style with glow effect
    floating: (
      <button
        onClick={toggleTheme}
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className={`${iconSizes[size]}`} />
        ) : (
          <Moon className={`${iconSizes[size]}`} />
        )}
      </button>
    ),

    // Toggle switch style
    switch: (
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle theme"
      >
        <span
          className={`inline-flex h-6 w-6 items-center justify-center transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
            isDark ? "translate-x-7" : "translate-x-1"
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-blue-600" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-yellow-500" />
          )}
        </span>
      </button>
    ),

    // Minimal text style
    minimal: (
      <button
        onClick={toggleTheme}
        className={`${sizeClasses[size]} flex items-center space-x-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <>
            <Sun className={iconSizes[size]} />
            <span className="text-sm font-medium">Light</span>
          </>
        ) : (
          <>
            <Moon className={iconSizes[size]} />
            <span className="text-sm font-medium">Dark</span>
          </>
        )}
      </button>
    ),

    // Icon only with border
    bordered: (
      <button
        onClick={toggleTheme}
        className={`${sizeClasses[size]} rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className={`${iconSizes[size]} text-yellow-500`} />
        ) : (
          <Moon
            className={`${iconSizes[size]} text-gray-700 dark:text-gray-300`}
          />
        )}
      </button>
    ),

    // Animated rotation style
    animated: (
      <button
        onClick={toggleTheme}
        className={`${sizeClasses[size]} rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200`}
        aria-label="Toggle theme"
      >
        <div className="relative w-5 h-5">
          <Sun
            className={`absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-500 ${
              isDark ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <Moon
            className={`absolute inset-0 w-5 h-5 text-gray-300 transition-all duration-500 ${
              isDark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </div>
      </button>
    ),
  };

  return variants[variant];
};

export default ThemeToggle;
