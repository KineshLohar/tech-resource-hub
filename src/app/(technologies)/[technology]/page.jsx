// import { getTechnologyOverview } from '@/lib/api'; // Commented out for now

export default function TechnologyPage({ params }) {
  const { technology } = params;
  // const overview = await getTechnologyOverview(technology); // Commented out for now

  // Sample data for React
  const overview = {
    description: "React is a popular JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer for web and mobile apps.",
    keyPoints: [
      "Developed and maintained by Facebook",
      "Uses a virtual DOM for efficient rendering",
      "Component-based architecture",
      "Unidirectional data flow",
      "Large ecosystem and community support"
    ]
  };

  return (
    <div className="relative min-h-screen dark:bg-neutral-950 flex flex-col items-center justify-start">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none">
      </div>
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-black bg-transparent">
        <h1 className="text-3xl font-bold mb-4">{technology} Overview</h1>
        <p className="mb-4">{overview.description}</p>
        <ul className="list-disc list-inside">
          {overview.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
