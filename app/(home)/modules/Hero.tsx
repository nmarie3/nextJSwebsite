import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
            <div className='grid grid-cols-1 md:grid-cols-[1fr_24rem] gap-4 md:gap-12'>
                <div>
                    <h3 className="mb-4 text-green-500">
                        Hi testing this out
                    </h3>
                    <p className="text-netural-700 mb-8">
                        text here about me I guess
                    </p>
                    <div className="space-y-2 mb-8">
                        <div className="flex item-center gap-4">
                            <Image
                                src="/sparkle.png" 
                                alt="sparkle" 
                                width={24} 
                                height={24}
                            />
                            <p>do you like my sparkle png?</p>
                        </div>
                        <div className="flex item-center gap-4">
                            <div className="w-6 h-6 rounded-full bg-green-500"></div> {/*circle*/}
                            <p>the png won't appear damn</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>

    </section>
  )
}

export default Hero
