import { SidebarButton } from "./sidebar_button";
import reactSVG from "@/public/react.svg";


export function Sidebar(): React.ReactElement {
  return (
    <div className="flex flex-col h-screen w-fit border-r">
      <SidebarButton imageIcon={reactSVG} />
      <SidebarButton imageIcon={reactSVG} />
      <SidebarButton imageIcon={reactSVG} />
      <SidebarButton imageIcon={reactSVG} />
      <SidebarButton imageIcon={reactSVG} />
      <SidebarButton imageIcon={reactSVG} />
      <SidebarButton imageIcon={reactSVG} />
      <SidebarButton imageIcon={reactSVG} />
    </div>
  )
}