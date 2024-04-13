import { useLanguageStore } from "../store";
export const ExperienceItem = ({
  date,
  title,
  company,
  description,
  link,

}: {
  date: string
  title: string,
  company: string,
  description: string,
  link?: string,

}) => {

  const { inSpanish } = useLanguageStore();

  return (
    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span>
          <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
          <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{company}</h4>
          <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{date}</time>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
        {description}
        {link && (
          <a href={link} role="link" className="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700">
            {inSpanish ? "Saber más" : "Read more"}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 icon icon-tabler icon-tabler-chevron-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem; // Exporting as default (if applicable)
