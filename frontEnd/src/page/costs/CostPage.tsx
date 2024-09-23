import  { useEffect, useState } from "react"
import { CostPageColumns, CostPageData } from "@/components/fund-table/columns"
import { DataTable } from "@/components/fund-table/data-table"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

type Cost={
  _id:string;
  id:string;
  name:string;
  amount:number;
  project:string;
  createdAt: string;
};

const CostPage = () => {
  const [costs, setCosts] = useState<Cost[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/costs');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setCosts(json);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex justify-between mt-4">
        <h1 className="text-xl font-semibold">Cost page</h1>
          <Link to="/addcost" className="ml-1">
            <Button  className="ml-1">Add Cost</Button>
          </Link>
      </div>      
      <DataTable columns={CostPageColumns} data={costs} />
    </div>
  )
}


export default CostPage;