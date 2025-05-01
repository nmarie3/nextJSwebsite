import React from 'react'
import Section from '../../../global_components/Section'
import Container from '../../../global_components/Container'
import SNSLink from '../components/SNSLink'

const Contact = () => {
  return (
    <Section id="contact" className="bg-neutral-950 text-white">
        <Container className="max-w-lg text-center">
            <h2 className="text-green-500 mb-4">Contact</h2>
            <p className="mb-8">
                Shoot(lol) me a message if you need some stealthy work done! 
            </p>
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                    <SNSLink src="/images/mail.png" hasBG />
                    <a href="mailto:fakeemail@lycoreco.com">
                        <h4>fakeemail@lycoreco.com</h4>
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <SNSLink src="/images/telephone.png" hasBG />
                    <a href="tel:5788+6">
                        <h4>DO NOT CALL THIS NUMBER</h4>
                    </a></div>
            </div>

        </Container>
    </Section>
  )
}

export default Contact
