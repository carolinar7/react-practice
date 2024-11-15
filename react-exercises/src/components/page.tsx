import { Sidebar } from "./sidebar/sidebar";

interface PageProps {
  children: React.ReactNode
}

export function Page({ children }: PageProps): React.ReactNode {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  )
}