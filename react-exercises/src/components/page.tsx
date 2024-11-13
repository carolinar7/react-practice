import { Sidebar } from "./sidebar/sidebar";

interface PageProps {
  pageContent: React.ReactElement
}

export function Page({ pageContent }: PageProps): React.ReactElement {
  return (
    <div className="flex">
      <Sidebar />
      {pageContent}
    </div>
  )
}