import React from 'react';
import Image from 'next/image';

const SNSLink = ({src, hasBG = false,} : {src: string, hasBG?:boolean}) => {
  return (
    <div>
      <a href="" target="_blank" className={hasBG ? "bg-green-500 p-2 rounded inline-block" : ""}>
        <Image
            src={src} alt="SNSicon" width={24} height={24} />      
      </a>
    </div>
  )
}

export default SNSLink
