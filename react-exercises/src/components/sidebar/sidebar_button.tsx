'use client'

import Link from "next/link"

interface SidebarButtonProps {
  pageName: string
  href: string
}

export function SidebarButton({ pageName, href }: SidebarButtonProps): React.ReactElement {

  return (
    <Link
      className="text-primary hover:text-secondary transition-colors"
      href={href}
    >
      {pageName}
    </Link>
  )
}