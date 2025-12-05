import React from 'react'
import { experience } from '../data/experience'

const Experience = () => {
    return (
        <div>
            {experience.map((e, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <p className="text-zinc-400 text-sm">
                        {e.company} • {e.duration}
                    </p>
                    <p className="mt-2 text-zinc-300 text-sm">{e.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Experience