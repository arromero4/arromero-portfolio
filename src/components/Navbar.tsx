import { useEffect } from "react";
import { useLanguageStore } from "../store";
import { ButtonLanguage } from "./ButtonLanguage"
import '../style.css'
import ThemeToggle from "./ThemeToggle.astro";

export const NavbarMain = () => {
  const { inSpanish } = useLanguageStore();

  useEffect(() => {
    document.addEventListener("astro:page-load", () => {
      const sections = document.querySelectorAll("section")
      const navItems = document.querySelectorAll("header nav a")
    
      const callback = (entries: any[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navItems.forEach((item) => {
              if (item.getAttribute("aria-label") == entry.target.id) {
                item.classList.add("text-yellow-500")
              } else {
                item.classList.remove("text-yellow-500")
              }
            })
          }
        })
      }
    
      const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      })
    
      sections.forEach((section) => {
        observer.observe(section)
      })
    
      // Cleanup function
      document.onvisibilitychange = () => {
        if (document.visibilityState === "hidden") {
          observer.disconnect()
        } else {
          sections.forEach((section) => {
            observer.observe(section)
          })
        }
      }
    })

    
  }, [])
  

  const navItems = [
    {
      id: 1,
      title: inSpanish ?  "Experiencia" : "Experience",
      label: "experiencia",
      url: "/#experience",
    },
    {
      id: 2,
      title: inSpanish ?  "Proyectos" : "Projects",
      label: "proyectos",
      url: "/#projects",
    },
    {
      id: 3,
      title: inSpanish ?  "Sobre mi" : "About me",
      label: "sobre-mi",
      url: "/#aboutme",
    },
    {
      id: 4,
      title: inSpanish ?  "Contacto" : "Contact",
      label: "contacto",
      url: "mailto:arromero0408@gmail.com",
    },
  ]
return (
  <header
  className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2"
>
  <nav
  className="navItems flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center"
  >
    {
      
      navItems.map((link) => (


        <a
        key={link.id}
          className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
          aria-label={link.label}
          href={link.url}
          
        >
          {link.title}
        </a>
      
      )
    )      
    }
<ThemeToggle />
    <ButtonLanguage/>
  </nav>

</header>

)  
}





