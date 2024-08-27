import { useEffect, useState } from "react";
import { ProjectPageData, projectPageColumns } from "@/components/fund-table/columns";
import { DataTable } from "@/components/fund-table/data-table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
  data?: ProjectPageData[]; // Optional prop to pass data; if not provided, it will fetch its own
}

export default function ProjectPage({ data: initialData }: ProjectPageProps) {
  const [data, setData] = useState<ProjectPageData[]>(initialData || []);
  const [loading, setLoading] = useState<boolean>(!initialData); // State to track loading status

  useEffect(() => {
    if (!initialData) {
      const fetchData = async () => {
        setLoading(true); // Set loading to true before fetching data
        try {
          const response = await fetch("/api/projects");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false); // Set loading to false after data is fetched
        }
      };

      fetchData();
    }
  }, [initialData]);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Project page</h1>
        <Link to="/addproject" className="ml-1">
          <Button className="ml-1">Add Project</Button>
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p> // Display a loading message while data is being fetched
      ) : (
        <DataTable columns={projectPageColumns} data={data} />
      )}
    </div>
  );
}
