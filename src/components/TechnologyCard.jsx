import Link from 'next/link'
import { FaCode } from 'react-icons/fa'

const TechnologyCard = ({ id, name, path }) => {
  return (
    <Link id={id} href={`/technology/${path}`} className="hover:scale-105 cursor-pointer transition-transform duration-200">
      <div className="border border-gray-400 dark:border-gray-800 rounded-lg px-4 py-2 hover:shadow-md transition-shadow duration-200 bg-white dark:bg-black/80">
        <div className="flex items-center">
          <FaCode className="text-blue-500 dark:text-blue-400 mr-2" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-slate-100">{name}</h3>
        </div>
        {/* <p className="text-gray-600 dark:text-gray-300">
          Explore resources, interview questions, projects, and more for {name}.
        </p> */}
      </div>
    </Link>
  )
}

export default TechnologyCard