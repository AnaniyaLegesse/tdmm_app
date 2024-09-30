import { projectPageColumns } from "@/components/fund-table/columns";
import { DataTable } from "@/components/fund-table/data-table";
import { useState, useEffect } from "react";
import { AddProject } from "./add-from/AddProject";

type Project={
  _id:string;
  id:string;
  name:string;
  budget: number;
  utilized_amount: number;
  variance: number;
  status: string;
};

const ProjectPage = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setProjects(json);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return ( 
    <div className="flex flex-1 flex-col p-4 md:gap-4 md:p-8">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold ">Project page</h1>
        <AddProject/>
      </div>      
      <DataTable columns={projectPageColumns} data={projects} />
    </div>
   );
}
export default ProjectPage;