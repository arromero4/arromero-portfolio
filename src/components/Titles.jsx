// Importa el hook para usarlo en el store
import { useLanguageStore } from "../store";

// Función que retorna los títulos de las secciones
export const useSectionTitles = () => {
  const { inSpanish } = useLanguageStore();

  const sectionTitles = [
    { id: 1, title: inSpanish ? "Experiencia Laboral" : "Work Experience" },
    { id: 2, title: inSpanish ? "Proyectos" : "Projects" },
    { id: 3, title: inSpanish ? "Sobre mi" : "About me" }
  ];

  return sectionTitles;
}