import { SidebarButton } from "./sidebar_button";
import reactSVG from "@/public/react.svg";


export function Sidebar(): React.ReactElement {
  return (
    <div className="flex flex-col h-screen w-fit rounded-3xl overflow-hidden gap-3 p-3">
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