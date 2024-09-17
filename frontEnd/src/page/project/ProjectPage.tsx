import { projectPageColumns } from "@/components/fund-table/columns";
import { DataTable } from "@/components/fund-table/data-table";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type Project={
  _id:string;
  id:string;
  name:string;
  budget: number;
  utlized_amount: number;
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
    <div className="container bg-white mx-auto rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
      <div className="flex justify-between mt-4">
        <h1 className="text-xl font-semibold ">Project page</h1>
          <Link to="/addproject" className="ml-1">
            <Button  className="ml-1">Add project</Button>
          </Link>
      </div>      
      <DataTable columns={projectPageColumns} data={projects} />
    </div>
   );
}
export default ProjectPage;