'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SidebarButtonProps {
  imageIcon: typeof import("*.svg")
}

export function SidebarButton({ imageIcon }: SidebarButtonProps): React.ReactElement {
  return (
    <Button className="max-w-fit h-18 rounded-none p-2 m-1" onClick={() => alert("yo")}>
      <Image src={imageIcon} alt="icon" width={50} height={50} />
    </Button>
  )
}