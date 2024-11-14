import React from "react";
import { SidebarButton } from "./sidebar_button";
import { SidebarPopover } from "./sidebar_popover";
import reactSVG from "@/public/react.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type SidebarButtonType = {
  image: typeof import("*.svg"),
  alt: string,
  popoverContent: React.ReactElement
}

const buttons = [
  { image: reactSVG, alt: "React", popoverContent: <div className="w-48 h-48"> hey </div> },
  { image: reactSVG, alt: "React 1", popoverContent: <div>hey</div> },
  { image: reactSVG, alt: "React 2", popoverContent: <div>hey</div> },
] as SidebarButtonType[]

function createpopoverTrigger(button: SidebarButtonType): React.ReactElement {
  return <SidebarButton imageIcon={button.image} alt={button.alt}/>
}

function createPopoverComponent(button: SidebarButtonType) {
  const popoverContent = button.popoverContent
  const popoverTrigger = createpopoverTrigger(button) // <Button className="max-w-fit h-18 rounded-none p-2 m-1"><Image src={button.image} alt={button.alt} width={50} height={50}/></Button>
  return <SidebarPopover popoverContent={popoverContent} popoverTrigger={popoverTrigger} key={button.alt}/>
}

export function Sidebar(): React.ReactElement {
  return (
    <div className="flex flex-col h-screen w-fit bg-primary border-r border-r-border">
      {buttons.map((button) => (
        createPopoverComponent(button)
      ))}
    </div>
  )
}