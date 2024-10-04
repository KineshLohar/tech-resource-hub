'use client'

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const routes = [
  { id: '', name: 'Overview' },
  { id: 'getting-started', name: 'Getting Started' },
  { id: 'resources', name: 'Resources to Learn' },
  { id: 'tools', name: 'Tools and Ecosystem' },
  { id: 'coding-questions', name: 'Coding Questions' },
  { id: 'projects', name: 'Projects' },
  { id: 'roadmap', name: 'Roadmap' },
  { id: 'interview-questions', name: 'Interview Questions' },
  { id: 'community-links', name: 'Community Links' },
  { id: 'quizzes', name: 'Quizzes' },
  { id: 'best-practices', name: 'Best Practices' },
  { id: 'tutorials', name: 'Tutorials' },
];

export default function TechnologyNavbar() {
  const { technology } = useParams();
  const pathname = usePathname();
 

  return (
    <div className="relative pt-16 sm:pt-24 dark:bg-neutral-950 w-full flex flex-col items-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      </div>
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-800 dark:text-white">
          {technology.charAt(0).toUpperCase() + technology.slice(1)}
        </h1>

        <div className="mb-6 sm:mb-8 relative">
          <div className="overflow-x-auto custom-scrollbar pb-3 sm:pb-3 px-4"> {/* Added padding-bottom */}
            <nav className="flex flex-nowrap justify-start sm:justify-center gap-2 sm:gap-4 min-w-max" aria-label="Navigation">
              {routes.map((route) => (
                <Link
                  key={route.id}
                  href={`/${technology}${route.id ? `/${route.id}` : ''}`}
                  className={`${
                    pathname === `/${technology}${route.id ? `/${route.id}` : ''}`
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-50'
                      : 'text-black hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100'
                  } px-2 sm:px-3 py-1 sm:py-2 font-medium text-xs sm:text-sm rounded-md transition-all duration-200 whitespace-nowrap`}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-neutral-950 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
