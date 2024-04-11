import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
    persist(
        (set) => ({
            inSpanish: true,
            changeLanguage: () =>
                set((state) => ({
                    inSpanish: !state.inSpanish,
                })),
        }),
        {
            name: "language",
        },
    ),
);