import Image from 'next/image'
import react3dIcon from '@/public/react_3d.jpeg'

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FS - Epic React Exercises!",
}

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 pb-48">
      <Image src={react3dIcon} alt="React in 3D" height={250} />
      <h1 className="text-primary text-5xl">
        Epic React Exercises!
      </h1>
      <p>
        Inspired by <a className="hover:text-primary transition-colors" href="https://epicreact.dev/" target='_blank'>Epic React by Kent C. Dodds</a>
      </p>
    </div>
  )
}
