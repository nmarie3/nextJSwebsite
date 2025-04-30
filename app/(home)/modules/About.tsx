import React from 'react'
import Image from 'next/image'
import Section from '../components/Section'
import Container from '../components/Container'
import SNSLink from '../components/SNSLink'

const About = () => {
  return (

    <Section className="bg-neutral-950 text-white">
        {/*<div className="container mx-auto px-4"></div>*/}
        <Container className="lg:max-w-6xl">
            <h2 className="text-center text-green-500 mb-8 md:mb-12">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
                <div className="relative">
                    {/*below is the green shadow similar to shadow on image for large screen*/}
                    <div className="absolute w-full h-full top-4 left-4 rounded bg-green-500 z-0 hidden lg:block"></div> 
                    <Image 
                        src="/images/about.jpg" 
                        alt="about" 
                        layout="responsive" 
                        width={0} height={0} 
                        className="rounded-lg relative z-10 border-8 border-white"/>
                </div>
                <div>
                    <h4 className="mb-4">What I do for a living</h4>
                    <p>
                        <b>Coffee and film enthusiast with a talent for shooting. Up for any mission, but killing is off the table.</b>
                            <br/>
                            <br/>
                        Together with my trusty aibou, we kick bad guy butt.
                    </p>
                    <div className="flex items-center md:justify-start gap-4 mt-4">
                        <SNSLink src="/images/linkedin.png" hasBG/>
                        <SNSLink src="/images/youtube.png" hasBG/>
                        <SNSLink src="/images/github.png" hasBG/>
                    </div>
                </div>
            </div>
        </Container>

    </Section>
  )
}

export default About
