import React from 'react'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'
import Image from 'next/image'
const Companies = ({ title, list }) => (
  <div className="prose prose-invert flex h-12 flex-wrap justify-between">
    {title && <h4 className="mb-4 w-full lg:mb-0 lg:w-auto">{title}</h4>}
    {/*  {list &&
      list.map(({ icon }, i) => (
        <Reveal key={i} animation="fade-in zoom-in" delay={i * 250}>
          {icon && <Icon {...icon} className="h-12 w-36 fill-current text-omega-500" />}
        </Reveal>
      ))} */}

    <div className="flex flex-wrap">
      <Image src="/badges/badge3.png" alt="badge 1" height="130" width="130" className="px-2" />
      <Image src="/badges/badge8.png" alt="badge 1" height="130" width="130" className="px-2" />
      <Image src="/badges/badge4.png" alt="badge 1" height="130" width="130" className="px-2" />
      <Image src="/badges/badge5.png" alt="badge 1" height="130" width="130" className="px-2" />
      <Image src="/badges/badge6.png" alt="badge 1" height="130" width="130" className="px-2" />
      <Image src="/badges/badge1.png" alt="badge 1" height="130" width="130" className="px-2" />
      <Image src="/badges/badge2.png" alt="badge 1" height="130" width="130" className="px-2" />
      <Image src="/badges/badge9.png" alt="badge 1" height="130" width="130" className="px-2" />
    </div>
  </div>
)

export default Companies
