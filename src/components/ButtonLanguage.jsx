import { useLanguageStore } from "../store"
import { motion } from "framer-motion";

export const ButtonLanguage = () => {
    const { inSpanish, changeLanguage } = useLanguageStore();
    return (
        <motion.button
            whileHover={{
                scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex justify-center rounded-xl text-text h-10 w-10 items-center font-semibold"
            type="button"
            title="ChangeLanguage"
            onClick={() => {
                changeLanguage();
            }}
        >
            <motion.p
                animate={inSpanish ? "open" : "closed"}
                variants={{
                    open: { opacity: [1, 0, 1], y: [0, -10, 0] },
                    closed: { opacity: [1, 0, 1], y: [0, -10, 0] },
                }}
                transition={{ duration: 0.3 }}
            >
                {inSpanish ? "ESP" : "ENG"}
            </motion.p>
        </motion.button>
    );
};