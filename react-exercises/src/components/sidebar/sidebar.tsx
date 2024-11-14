import { SidebarButton } from "./sidebar_button"
import reactSVG from "@/public/react.svg"
import fsLogo from "@/public/fs_logo.svg"
import Image from "next/image"

export function Sidebar(): React.ReactElement {
  return (
    <div className="m-4">
      <div className="flex flex-col items-center justify-between h-full w-fit p-3 border border-foreground rounded-[41px]">
        <div className="flex flex-col gap-3">
          <SidebarButton imageIcon={reactSVG} />
        </div>
        <a href={"https://www.fredericksantiago.com"} target={"_blank"}>
          <Image src={fsLogo} alt="logo" width={50} height={50} />
        </a>
      </div>
    </div>
  )
}