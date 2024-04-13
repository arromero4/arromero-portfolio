
import { NextJSIcon } from "./icons/NextJS";
import {TailwindIcon} from "./icons/Tailwind";
import {ReactJSIcon} from "./icons/ReactJS";
import {AstroIcon} from "./icons/AstroLogo";
import {DartIcon} from "./icons/Dart";
import {FirebaseIcon} from "./icons/Firebase";
import {FlutterIcon} from "./icons/Flutter";
import {GoogleIcon} from "./icons/Google";
import {MaterialUIIcon} from "./icons/MaterialUI";
import {MySQLIcon} from "./icons/MySQL";
import {NetlifyIcon} from "./icons/Netlify";
import {ViteJSIcon} from "./icons/ViteJS";
import {TypeScriptIcon} from "./icons/Typescript";

import GithubIcon from "./icons/GithubIcon";
import {LinkIcon} from "./icons/Link";
import { useLanguageStore } from "../store";


const TAGS = {
  ASTROICON: {
    name: "Astro",
    class: "bg-[#003159] text-white",
    icon: AstroIcon,
  },
  DART: {
    name: "Dart",
    class: "bg-[#003159] text-white",
    icon: DartIcon,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#003159] text-white",
    icon: FirebaseIcon,
  },
  FLUTTER: {
    name: "Flutter",
    class: "bg-[#003159] text-white",
    icon: FlutterIcon,
  },
  GOOGLE: {
    name: "Google Maps API",
    class: "bg-[#003159] text-white",
    icon: GoogleIcon,
  },
  GITHUB: {
    name: "Github",
    class: "bg-[#003159] text-white",
    icon: GithubIcon,
  },
  MATERIALUI: {
    name: "Material UI",
    class: "bg-[#003159] text-white",
    icon: MaterialUIIcon,
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-[#003159] text-white",
    icon: MySQLIcon,
  },
  NETLIFY: {
    name: "Netlify",
    class: "bg-[#003159] text-white",
    icon: NetlifyIcon,
  },
  NEXTJS: {
    name: "Next.js",
    class: "bg-[#003159] text-white",
    icon: NextJSIcon,
  },
  REACT: {
    name: "React JS",
    class: "bg-[#003159] text-white",
    icon: ReactJSIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: TailwindIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#003159] text-white",
    icon: TypeScriptIcon,
  },
  VITEJS: {
    name: "ViteJS",
    class: "bg-[#003159] text-white",
    icon: ViteJSIcon,
  },
};

export const Projects = () => {
  const { inSpanish } = useLanguageStore();

  const PROJECTS = [
    {
      id: 1,
      title: "Travel Advisor",
      description:
        inSpanish ? "Construí y desplegué una aplicación avanzada compañero de viaje utilizando Google Maps. Con Geolocalización, API de Google Maps, Búsqueda de lugares, Obtención de restaurantes, hoteles y atracciones basadas en la ubicación de las API Rapid especializadas, filtrado de datos y mucho más." 
        :
        "I built and deployed an advanced travel companion application using Google Maps. With Geolocation, Google Maps API, Location Search, Getting restaurants, hotels and attractions based on location from specialized Rapid APIs, data filtering and much more.",
      link: "https://travel-advisor-arromero.netlify.app/",
      github: "https://github.com/arromero4/travel-advisor",
      image: "/projects/project-portfolio-1.jpg",
      tags: [TAGS.REACT, TAGS.MATERIALUI, TAGS.NETLIFY, TAGS.GOOGLE],
    },
    {
      id: 2,
      title: "Shopping App",
      description: inSpanish ?
       "Aplicación construida usando Flutter, para manejar el estado con Provider, permitiendo añadir la compra al carrito y borrarla, esta aplicación se adapta a la versión web con la misma base de código."
       :
       "Application built using Flutter, to manage the status with Provider, allowing to add the purchase to the cart and delete it, this application is adapted to the web version with the same code base.",
      github: "https://github.com/arromero4/shopping_app",
      image: "/projects/project-portfolio-2.jpg",
      tags: [TAGS.FLUTTER, TAGS.DART],
    },
    {
      id: 3,
      title: "Valentine Day App",
      description:
        inSpanish ? 
        "App para construída para el día del amor y la amistad usando React con TypeScript, desplegada en Netlify."
        :
        "App built for Valentine's Day using React with TypeScript, deployed in Netlify.",
      link: "https://love-u-mfc.netlify.app/",
      github: "https://github.com/arromero4/valentines-day",
      image: "/projects/project-portfolio-5.jpg",
      tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.NETLIFY],
    },
    {
      id: 4,
      title: "Weather App",
      description: inSpanish ?
      "Aplicación construida usando Flutter, para consumir la API del clima de una ciudad especifica."
      :
      "Application built using Flutter, to consume the weather API of a specific city.",
      github: "https://github.com/arromero4/weather_app_flutter",
      image: "/projects/project-portfolio-4.jpg",
      tags: [TAGS.FLUTTER, TAGS.DART],
    },
    {
      id: 5,
      title: "Currency Converter App",
      description: inSpanish ? 
      "Aplicación construida usando Flutter, para realizar la conversión de Dolar a Peso Mexicano."
      :
      "Application built using Flutter, to perform the Dollar to Mexican Peso conversion." ,
      github: "https://github.com/arromero4/currency_converter",
      image: "/projects/project-portfolio-3.jpg",
      tags: [TAGS.FLUTTER, TAGS.DART],
    },
  
  ];
  return (
    <div className="flex flex-col gap-y-16">
      {
        PROJECTS.map(({ id, image, title, description, tags, link, github }) => (
          <article key={id} className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
            <div className="w-full md:w-1/2">
              <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img alt="Proyectos" className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src={image} />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {title}
              </h3>
              <div className="flex flex-wrap mt-2">
                <ul className="flex flex-row mb-2 gap-x-2">
                  {tags.map((tag, index) => (
                    <li key={index}>
                      <span
                        className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                      >
                        <tag.icon className="size-4" />
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 text-gray-700 dark:text-gray-400">{description}</div>
                <footer className="flex items-end justify-start mt-4 gap-x-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      role="link"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                    >
                      <GithubIcon className="size-4" />
                      {inSpanish ? "Código" : "Code"}
                    </a>


                  )}
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      role="link"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                    >
                      <LinkIcon className="size-4" />
                      {inSpanish ? "Vista Previa" : "Preview"}

                    </a>


                  )}
                </footer>
              </div>
            </div>
          </article>
        ))
      }
    </div>

  )
}

export default Projects;

