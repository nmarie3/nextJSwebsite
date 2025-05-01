import React from 'react'
import Image from 'next/image'
import Container from '../../../global_components/Container'
import Section from '../../../global_components/Section'

const Experience = () => {
    const experiences = [
        {
            image: "/images/yt.png",
            title: "YouTube Creator",
            bulletList: [
                "movie reviews",
                "coffee tutorials"
            ],
            date: "2022 - present"
        },
        {
            image: "/images/kilo.jpeg",
            title: "Kilo?",
            bulletList: [
                "something cool",
                "i'll look it up later"
            ],
            date: "2022 - present"
        },
        {
            image: "/images/yt.png",
            title: "YT2",
            bulletList: [
                "movie reviews",
                "coffee tutorials"
            ],
            date: "2022 - present"
        }
    ]



  return (
    <Section id="experience" className="bg-neutral-950">
        <Container className="lg:max-w-6x1">
            <div className="mb-8 text-center text-white">
                <h2 className="text-green-500 mb-4">Experiences</h2>
                <p>
                    I've got TONS of experience!
                </p>
            </div>
            {experiences.map(exp => (
                <div key={exp.title} className="grid grid-cols-1 md:grid-cols-[30%_50%_20%] items-center bg-white rounded-lg shadow md:gap-12 gap-6 border-8 border-green-500 md:mb-8 mb-4 p-4">
                    <div className="flex items-center justify-start md:justify-center">
                        <Image 
                            src={exp.image} 
                            alt="experience" 
                            sizes= "100vw" 
                            width={0} height={0} 
                            className="h-auto w-full rounded max-h-32"/>
                    </div>
                    <div>
                        <h4 className="mb-4">{exp.title}</h4>
                        <ol className="md:list-disc space-y-1">
                            {exp.bulletList.map(bullet => (
                                <li key={bullet}>
                                    <p className="text-lg">{bullet}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <p className="text-lg text-neutral-500">{exp.date}</p>
                    </div>
                </div>
            ))}
        </Container>
    </Section>
  )
}

export default Experience
