import { SidebarButton } from "./sidebar_button"
import fsLogo from "@/public/fs_logo.svg"
import Image from "next/image"

const pages = [
  { pageName: "Home", href: "/" },
  { pageName: "Fundamentals", href: "/fundamentals" },
  { pageName: "Hooks", href: "/hooks" }
]

export function Sidebar(): React.ReactElement {
  return (
    <div className="h-screen max-w-32">
      <div className="flex flex-col items-center justify-between h-full w-fit p-3 border-r border-r-foreground">
        <div className="flex flex-col gap-3">
          {pages.map(({pageName, href}, index) => (
            <SidebarButton pageName={pageName} href={href} key={index}/>
          ))}
        </div>
        <a href={"https://www.fredericksantiago.com"} target={"_blank"}>
          <Image src={fsLogo} alt="logo" width={50} height={50} />
        </a>
      </div>
    </div>
  )
}