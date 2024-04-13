
import { useLanguageStore } from "../store";
import ExperienceItem from "./ExperienceItem"
import '../style.css'

export const Experience = () => {
  const { inSpanish } = useLanguageStore();

  const EXPERIENCIE = [
    {
      date: inSpanish ? "Enero 2023 - Actualmente" : "January 2023 - Current",
      title: inSpanish ? "Ingeniero de Software Freelance" : "Software Developer Freelance",
      company: inSpanish ? "Independiente" : "Freelance",
      description:
        inSpanish ? "Soy un desarrollador altamente motivado con una base en Estructuras de Datos y Algoritmos, Flutter y React. Mi viaje en la programación comenzó en 2021, y desde entonces, he estado constantemente mejorando mis habilidades a través del aprendizaje autodirigido. Como desarrollador independiente especializado en las tecnologóas mencionadas, he participado activamente en el campo desde 2023, aprovechando estas poderosas tecnologías para crear aplicaciones. Además de compartir mi aprendizaje en redes sociales para aportar conocimiento a la comunidad."
          :
          "I am a highly motivated developer with a background in Data Structures and Algorithms, Flutter and React. My journey in programming started in 2021, and since then, I have been constantly improving my skills through self-directed learning. As a freelance developer specializing in the aforementioned technologies, I have been actively involved in the field since 2023, leveraging these powerful technologies to create applications. In addition to sharing my learning on social networks to bring knowledge to the community.",
      link: "https://www.linkedin.com/in/arromero491/",
    },
    {
      date: inSpanish ? "Mayo 2016 - Actualmente" : "May 2016 - Current",
      title: inSpanish ? "Ingeniero de Construcción y Mantenimiento Staff" : "Construction and Maintenance Engineer Staff",
      company: "Uninet S.A. de C.V.",
      description:
        inSpanish ?
          "Crear documentación técnica, procedimientos e informes utilizando mis conocimientos de programación para entregar a tiempo las facturas de los contratistas. Tiempo reducido de 7 días a 1 día. Responsable del soporte técnico y operación de sucursales Telmex que proporciona servicios internos en CDMX, Estado de México y Guerrero (+190 sucursales). Ejecutar ventanas de mantenimiento e intervenciones en coordinación con contratistas (2 a 4 personas por actividad). Comunicación efectiva con contratistas internos y externos. Revisiones preventivas de la infraestructura de TI para asegurar la disponibilidad del servicio."
          :
          "Create technical documentation, procedures and reports using my programming skills to deliver contractor invoices on time. Reduced time from 7 days to 1 day. Responsible for technical support and operation of Telmex branches providing internal services in CDMX, State of Mexico and Guerrero (+190 branches). Execute maintenance windows and interventions in coordination with contractors (2 to 4 people per activity). Effective communication with internal and external contractors. Preventive reviews of IT infrastructure to ensure service availability.",
    },
  ]

  return (


    <ol class="relative mt-16">
      {
        EXPERIENCIE.map(experience => (
          <li class="">
            <ExperienceItem 
              date={experience.date}
              title={experience.title}
              company={experience.company} 
              description={experience.description}
              link={experience?.link}
            />
          </li>
        ))
      }

    </ol>
  )

}
