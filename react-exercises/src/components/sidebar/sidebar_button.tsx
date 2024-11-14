'use client'

import Image from "next/image"

interface SidebarButtonProps {
  imageIcon: typeof import("*.svg")
}

export function SidebarButton({ imageIcon }: SidebarButtonProps): React.ReactElement {
  return (
    <button 
      className="max-w-fit h-50 rounded-full p-2 bg-primary hover:bg-secondary transition-colors"
      onClick={() => alert("yo")
    }>
      <Image src={imageIcon} alt="icon" width={50} height={50} />
    </button>
  )
}