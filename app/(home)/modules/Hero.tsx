import Image from 'next/image'
import React from 'react'
import SNSLink from '../components/SNSLink'
import Section from '../components/Section'
import Container from '../components/Container'


const Hero = () => {
  return (
    //<section className="py-8 md:py-16">
    //<div className="container mx-auto px-4">
    <Section>
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_24rem] items-center gap-4 md:gap-12'>
                <div className="order-2 md:order-1">
                    <h3 className="mb-4 text-green-500">
                        Wasabi Noriko
                    </h3>
                    <p className="text-netural-700 mb-8">
                        Super secret special agent.
                    </p>
                    <div className="space-y-2 mb-8">
                        <div className="flex item-center gap-4">
                            <Image
                                src="/images/location.png" 
                                alt="location" 
                                width={24} 
                                height={24}
                            />
                            <p>Kinshicho, Tokyo</p>
                        </div>
                        <div className="flex item-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-green-500"></div> {/*circle*/}
                            <p>Avaliable for work</p>

                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <SNSLink src="/images/linkedin.png"/>
                        <SNSLink src="/images/youtube.png"/>
                        <SNSLink src="/images/github.png"/>

                    </div>
                </div>
                <div className="relative md:order-2 order-1">
                    <div className="absolute h-full w-full bg-green-500 rounded-lg top-4 left-4 z-[-1] hidden lg:block"></div>
                    <Image 
                        src="/images/noriko.jpg" 
                        alt="hero" 
                        // sizes="100vw" 
                        layout="responsive"
                        width={0} height={0}
                        className="rounded-lg"
                        priority
                        />

                </div>
            </div>
        </Container>
    </Section>
    //</div>
    //</section>
  )
}

export default Hero
