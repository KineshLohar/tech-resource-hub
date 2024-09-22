import Link from 'next/link'
import { FaCode } from 'react-icons/fa'

const TechnologyCard = ({ id, name, path }) => {
  return (
    <Link id={id} href={`/technology/${path}`} className=" hover:scale-105 cursor-pointer transition-transform duration-200">
      <div className="border border-gray-200 rounded-lg px-4 py-2  hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center">
          <FaCode className="text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        {/* <p className="text-gray-600">
          Explore resources, interview questions, projects, and more for {name}.
        </p> */}
      </div>
    </Link>
  )
}

export default TechnologyCard