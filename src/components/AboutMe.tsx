
import { useLanguageStore } from "../store";
const personalImageAlt = "Andres Romero";

export const AboutMe = () => {
  const { inSpanish } = useLanguageStore();
  return (

    <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div
        className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"
      >
        <p>
          {inSpanish ? "Me llamo Andres. Empecé en la programación con Java cuando iba en la Universidad. " : "My name is Andres. I started programming with Java when I was in college. " }
          <strong>{inSpanish ? "Actualmente trabajando en redes y en una empresa nacional." : "Currently working in networking and with a national company"}</strong>
        </p>

        <p>
          {inSpanish ? "Algunos de mis éxitos incluyen " : "Some of my success stories include "}
          <strong>{inSpanish ? "colaborar con la automatización de proyectos en mi actual trabajo. " : "collaborate with project automation in my current job. "}</strong> 
          { inSpanish ? "Hoy en día estos reportes agilizan la entrega de información en tiempo y forma con los proveedores." : "Today, these reports streamline the delivery of information in a timely manner to contractors."}
        </p>

        <p>
          {inSpanish ? "Como creador de contenido, " : "As content creator, "}
          <strong>{inSpanish ? "aporto contenido en Español acerca de Dart, Flutter y React para " : "I'm providing content in Spanish about Dart, Flutter and React for "}
            <em className="italic">{inSpanish ?  "Desarrollo web y móvil en " : "Web and mobile development on "}</em> 
             Twitter, Threads, Instagram {inSpanish ? "y" : "and"} Tiktok</strong>. {inSpanish ? "Mi objetivo es crear una comunidad de Flutter en México." : "My goal is to create a Flutter community in Mexico."}
        </p>
      </div>

      <img
        id="aboutme-image"
        width="200"
        height="200"
        src="/projects/profile.jpg"
        alt={personalImageAlt}
        className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
        />
    </article>

  )
}
