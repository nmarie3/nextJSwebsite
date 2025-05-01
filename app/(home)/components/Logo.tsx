import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
        src="/images/logo.png" alt="logo"
        width={40} height={40}
        className="rounded"
    />
  );
}

export default Logo
