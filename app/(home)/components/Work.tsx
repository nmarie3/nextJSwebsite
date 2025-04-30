import React from 'react'
import Image from 'next/image'
import Section from './Section'
import Container from './Container'

const Work = () => {
    const work = [
        {
            image: "/images/stachy.png",
            title: "Stachy Codes",
            description: (
                <>
                kari for now
                <br/>
                <br/>
                kari kari kari
                </>
            ),
            techUsed: [
                "Typescript",
                "React",
                "NextJS",
                "TailwindCSS",
            ]
        },
        {
            image: "/images/chisatogun.png",
            title: "More Kari",
            description: (
                <>
                kari for now
                <br/>
                <br/>
                kari kari kari
                </>
            ),
            techUsed: [
                "Typescript",
                "React",
                "NextJS",
                "TailwindCSS",
            ]
        },
    ]


  return (
    <Section>
        <Container>
            <div className="text-center mb-8">
                <h2 className="text-green-500 mb-4">Work</h2>
                <p>Some stuff I've done</p>
            </div>
            <div className="space-y-4 lg:space-y-6">
                {work.map(workItem => (
                    <div 
                        key={workItem.title}
                        className="grid grid-cols-1 md:grid-cols-2 shadow-lg rounded overflow-hidden"
                    >
                        <div className="relative bg-neutral-100">
                            <Image 
                                src={workItem.image} 
                                alt="work image"
                                layout="responsive" 
                                width={0} height={0}
                            />
                        </div>
                        <div className="p-4 md:p-12">
                            <h4 className="mb-4">{workItem.title}</h4>
                            <p className="text-neutral-700 max-w-lg mb-4">{workItem.description}</p>
                            <div className="flex flex-wrap gap-4 text-white max-w-lg">
                                {workItem.techUsed.map(tech => (
                                    <div 
                                        className="px-2 py-2 rounded bg-green-500"
                                        key={tech}
                                    >
                                        <p className="text-sm">{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </Container>
    </Section>
  )
}

export default Work
