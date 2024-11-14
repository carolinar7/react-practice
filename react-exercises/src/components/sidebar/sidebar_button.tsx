'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SidebarButtonProps {
  imageIcon: typeof import("*.svg")
  alt: string
}

export function SidebarButton({ imageIcon, alt }: SidebarButtonProps): React.ReactNode {
  return (
    <Button className="max-w-fit h-18 rounded-none p-2 m-1">
      <Image src={imageIcon} alt={alt} width={50} height={50} />
    </Button>
  )
}