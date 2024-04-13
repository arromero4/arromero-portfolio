import { useEffect, useState } from 'react';
import SunIcon from './icons/Sun';
import MoonIcon from './icons/Moon';
import SystemIcon from './icons/System';
import '../style.css';

const THEMES = ["Light", "Dark", "System"];



export const ThemeToggle = () => {
  let remove = null;
  const [currentTheme, setCurrentTheme] = useState('system');

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    
    const getThemePreference = () => {
      if (typeof localStorage !== "undefined") {
        return localStorage.getItem("theme") ?? "system";
      }
      return matchMedia.matches ? "dark" : "light";
    };
    
    const updateTheme = () => {
      if (remove != null) {
        remove();
      }
      matchMedia.addEventListener("change", updateTheme);
      remove = () => matchMedia.removeEventListener("change", updateTheme);

      const themePreference = getThemePreference();
      setCurrentTheme(themePreference);
      const isDark = themePreference === "dark" || (themePreference === "system" && matchMedia.matches);
      document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    };
    
    updateTheme();
    
    const themesMenu = document.getElementById("themes-menu");

    document.addEventListener("click", () => themesMenu?.classList.remove("open"));
    
    document.getElementById("theme-toggle-btn")?.addEventListener("click", (e) => {
      e.stopPropagation();
      themesMenu?.classList.toggle("open");
    });

    document.querySelectorAll(".themes-menu-option").forEach((element) => {
      element.addEventListener("click", (e) => {
        const newTheme = e.target?.innerText.toLowerCase().trim();
        localStorage.setItem("theme", newTheme);
        updateTheme();
      });
    });

    return () => {
      remove?.();
    };
  }, []);

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
      >
        <span className="sr-only">Elige el tema</span>
        {currentTheme === 'light' && <SunIcon className="theme-toggle-icon size-5 transition-all" />}
        {currentTheme === 'dark' && <MoonIcon className="theme-toggle-icon size-5 transition-all" />}
        {currentTheme === 'system' && <SystemIcon className="theme-toggle-icon size-5 transition-all" />}
      </button>
      <div
        id="themes-menu"
        className="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
      >
        <ul>
          {THEMES.map((theme, index) => (
            <li key={index} className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
