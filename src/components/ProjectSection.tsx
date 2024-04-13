import React from 'react';
// Importa el hook que acabas de crear
import { useSectionTitles } from './Titles'; // Asegúrate que la ruta sea la correcta

const ProjectSection = ({ id } : {id: number}) => { // Ahora ProjectSection acepta props
  // Usa el hook para obtener los títulos
  const sectionTitles = useSectionTitles();

  // Encuentra el título específico con el id proporcionado
  const sectionTitle = sectionTitles.find(title => title.id === id)?.title;

  return (
    <div>
      <h2>{sectionTitle}</h2>
      {/* Más contenido de la sección aquí, basado en el id */}
    </div>
  );
}

export default ProjectSection;