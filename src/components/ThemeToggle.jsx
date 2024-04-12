import { useEffect } from 'react';
import SunIcon from './icons/Sun';
import MoonIcon from './icons/Moon';
import SystemIcon from './icons/System';
import '../style.css'

const THEMES = ["Light", "Dark", "System"];

export const ThemeToggle = () => {
  let remove = null;
  useEffect(() => {
  
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const themesMenu = document.getElementById("themes-menu");
  
    const getThemePreference = () => {
      if (typeof localStorage !== "undefined") {
        return localStorage.getItem("theme") ?? "system";
      }
  
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };
  
    const updateIcon = (themePreference) => {
      document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
        element.style.scale = element.id === themePreference ? "1" : "0";
      });
    };
  
    const updateTheme = () => {
      if (remove != null) {
        remove();
      }
      matchMedia.addEventListener("change", updateTheme);
      remove = () => {
        matchMedia.removeEventListener("change", updateTheme);
      };
  
      const themePreference = getThemePreference();
      const isDark =
        themePreference === "dark" ||
        (themePreference === "system" && matchMedia.matches);
  
      updateIcon(themePreference);
      document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    };
  
    updateTheme();
  
    document.addEventListener("click", () => themesMenu.classList.remove("open"));
  
    document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      const isClosed = !themesMenu.classList.contains("open");
      themesMenu.classList[isClosed ? "add" : "remove"]("open");
    });
  
    document.querySelectorAll(".themes-menu-option").forEach((element) => {
      element.addEventListener("click", (e) => {
        localStorage.setItem("theme", e.target.innerText.toLowerCase().trim());
        updateTheme();
      });
    });
  }, []);


  return (
    <div class="relative ml-1 mr-1">
    <button
      id="theme-toggle-btn"
      class="appearance-none border-none flex hover:scale-125 transition"
    >
      <span class="sr-only">Elige el tema</span>
      <SunIcon id="light" class="theme-toggle-icon size-5 transition-all" />
      <MoonIcon
        id="dark"
        class="theme-toggle-icon absolute size-5 transition-all"
      />
      <SystemIcon
        id="system"
        class="theme-toggle-icon absolute size-5 transition-all"
      />
    </button>
    <div
      id="themes-menu"
      class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md"
    >
      <ul>
        {
          THEMES.map((theme) => (
            <li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm">
              {theme}
            </li>
          ))
        }
      </ul>
    </div>
  </div>
  );
};

