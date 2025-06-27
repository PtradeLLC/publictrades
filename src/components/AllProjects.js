import Link from "next/link";
import Image from "next/image";

export default function AllProjects({ projects, onBack }) {
  // Create a new array with only unique projects based on the project title
  // to prevent duplicates from showing up in the list.
  const uniqueProjects = projects.filter(
    (project, index, self) =>
      index === self.findIndex((p) => p.title === project.title)
  );

  return (
    <div className="bg-white py-8 sm:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Browse through all our innovative projects.
          </p>
          <button
            onClick={onBack}
            className="mt-4 rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            Back to Categories
          </button>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {uniqueProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  src={project.imageUrl}
                  alt=""
                  width={800}
                  height={600}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={project.datetime} className="text-gray-500">
                    {project.date}
                  </time>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {project.category.name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {project.preview}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    src={project.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                    width={40}
                    height={40}
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {project.author.name}
                    </p>
                    <p className="text-gray-600">{project.author.status}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
