import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <div className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Tamworth Spartans Volleyball Club
                    </h2>
                    <p className="mt-5 text-xl text-gray-400">
                        Local volleyball club for the Tamworth area.
                    </p>
                </div>
                {/* <div className="mt-10 w-full max-w-xs">
                    <label htmlFor="PastEvents" className="block text-base font-medium text-gray-300">
                        Past Events
                    </label>
                    <div className="mt-1.5 relative">
                        <select className="block form-select w-full pl-3 pr-10 py-2 text-base leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                            <option>Select an event</option>
                            <option>Event 1</option>
                            <option>Event 2</option>
                            <option>Event 3</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <ChevronDownIcon className="h-5 w-5" />
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}

export default Header
