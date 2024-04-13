import { useLanguageStore } from "../store";

export const HeroPresentation = () => {
  const { inSpanish,  } = useLanguageStore();
return (
<>
<h1
    className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white"
    >
      {inSpanish ? "Hey, soy Andrés Romero" : "Hi, I'm Andrés Romero"}
    </h1>


<p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
  {inSpanish? "+2 años de experiencia y un background en redes." : "+2 years of experience and background in networking."}
  <strong> {inSpanish ? "Desarrollador de Software" : "Software Developer."}</strong> {inSpanish ? "De Ciudad de México. Enfocado en desarrollo de aplicaciones web y móviles." : 
  "From Mexico City. Focused on web and mobile application development."}
</p>
</>
  
)
}