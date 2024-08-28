import { useEffect, useState } from "react";
import { ProjectPageData, projectPageColumns } from "@/components/fund-table/columns";
import { DataTable } from "@/components/fund-table/data-table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
  data?: ProjectPageData[]; // Optional prop to pass data; if not provided, it will fetch its own
}

export default function ProjectPage({ data: initialData }: ProjectPageProps) {
  const [data, setData] = useState<ProjectPageData[]>(initialData || [])

  useEffect(() => {
    if (!initialData) {
      async function fetchData() {
        
          const response = await fetch('/api/projects'); 
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

         const fetchedData = await response.json();
         setData(fetchedData)
      }

      fetchData()
    }
  }, [initialData])


  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Project page</h1>
        <Link to="/addproject" className="ml-1">
          <Button className="ml-1">Add Project</Button>
        </Link>
      </div> 
        <DataTable columns={projectPageColumns} data={data} /> 
    </div>
  );
}
