
const currentYear = new Date().getFullYear()
import { useLanguageStore } from "../store";

export const Footer = () => {
  const { inSpanish } = useLanguageStore();
  return (
    <footer
  className="opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"
>
  <div
    className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"
  >
    <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90"
      >© {currentYear}
      <a href="https://midu.dev/" className="hover:underline"> arromero491</a>.
    </span>
    <ul
      className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"
    >
      <li>
        <a href="/#aboutme" className="hover:underline me-4 md:me-6">{inSpanish ? "Sobre mí" : "About me"}</a>
      </li>
      <li>
        <a id="contact" href="mailto:arromero0408@gmail.com" className="hover:underline"
          >{inSpanish ? "Contacto" : "Contact"}</a>
      </li>
    </ul>
  </div>
  </footer>
  )
}
