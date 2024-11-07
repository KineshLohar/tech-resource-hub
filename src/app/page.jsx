import Link from 'next/link'
import SearchBar from '@/components/SearchBar'
import TechnologyCard from '@/components/TechnologyCard'
import { useDarkMode } from '@/components/DarkModeProvider'
import { featuredTechnologies, technologies, web3Technologies } from '@/data/technologies'
import React from 'react'
import { featuredRoles, roles } from '@/data/roles'

export default function Home() {

  return (
    <div className="relative h-full pt-40 w-full dark:bg-neutral-950 min-h-screen flex flex-col items-center justify-center bg-gray-100 transition-colors duration-200">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      </div>
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Welcome to Tech Resource Hub
        </h1>
        <h2 className="text-xl md:text-2xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Search your tech and discover resources
        </h2>
        <SearchBar />

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Featured </h2>
          <div className="flex flex-wrap gap-4  items-center">
            {featuredTechnologies.map((tech) => (
              <TechnologyCard key={tech.id} id={tech.id} name={tech.name} path={tech.path} />
            ))}
            {
              featuredRoles.map((role) => (
                <TechnologyCard key={role.id} id={role.id} name={role.name} path={role.path} />
              ))
            }
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">All Technologies</h2>
          <div className="flex flex-wrap gap-4 items-center">
            {technologies.map((tech) => (
                <TechnologyCard key={tech.id} id={tech.id} name={tech.name} path={tech.path} />   
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Web3 Technologies</h2>
          <div className="flex flex-wrap gap-4 items-center">
            {web3Technologies.map((tech) => (
                <TechnologyCard key={tech.id} id={tech.id} name={tech.name} path={tech.path} />
            ))}
          </div>
        </section>

        <section className="mt-16 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Role-Based Guidance</h2>
          <div className="flex flex-wrap gap-4  items-center">
            {roles.map((role, index) => (
                <TechnologyCard key={role.id} id={role.id} name={role.name} path={role.path} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}