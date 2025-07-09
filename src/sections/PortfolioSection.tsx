import { Section } from "../components/Section";

type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

const ProjectCard = ({
  data: { title, description, tags, image },
}: {
  data: ProjectType;
}) => {
  return (
    <div className="group flex flex-col gap-1 border border-neutral-200 bg-neutral-50 p-4 rounded-lg shadow-md">
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <h4 className="font-semibold group-hover:text-blue-900 text-lg">
        {title}
      </h4>
      <p className="text-neutral-500 font-thin">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 shadow text-blue-800 text-xs px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
// <div className="group flex flex-col items-center gap-4 border border-black">
//   <div className="bg-white rounded-lg p-6 shadow-md">
//     <div className="overflow-hidden rounded-md">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300"
//       />
//     </div>

//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-sm text-neutral-600 mb-4">{description}</p>

//     <div className="flex flex-wrap gap-2">
//       {tags.map((tag, tagIndex) => (
//         <span
//           key={tagIndex}
//           className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-md"
//         >
//           {tag}
//         </span>
//       ))}
//     </div>
//   </div>
// </div>

const PROJECTS: ProjectType[] = [
  {
    title: "Anto Plus",
    description:
      "Web desarrollada para una plataforma de aprendizaje en linea-",
    tags: ["React", "JavaScript", "Next.js", "Nest.js", "PostgreSQL"],
    image: "/Anato.png",
  },
  {
    title: "DrivexGo",
    description: "Web desarrollada para una plataforma de 'Car Sharing'.",
    tags: ["React", "JavaScript", "Next.js", "Nest.js", "PostgreSQL"],
    image: "/Drivex.png",
  },
  {
    title: "Delia Pilates",
    description:
      "Web desarrollada para poder agendar turnos para clases de pilates",
    tags: ["React", "TailwindCSS", "JavaScript"],
    image: "/Pilates.png",
  },
];

const PortfolioSection = () => {
  return (
    <Section title={["Nuestros", "Proyectos"]} id="portfolio">
      <div className="flex justify-center gap-8 mb-10 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-900">15+</p>
          <p className="text-sm text-neutral-600">Proyectos finalizados</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-900">10+</p>
          <p className="text-sm text-neutral-600">Clientes satisfechos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard data={project} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default PortfolioSection;
