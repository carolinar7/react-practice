import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface SidebarPopoverProps {
  popoverTrigger: React.ReactNode
  popoverContent: React.ReactNode
}

export function SidebarPopover({popoverTrigger, popoverContent}: SidebarPopoverProps): React.ReactElement {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {popoverTrigger}
      </PopoverTrigger>
      <PopoverContent className="w-80 h-80 bg-red-700">
        {popoverContent}
      </PopoverContent>
    </Popover>
  )
}