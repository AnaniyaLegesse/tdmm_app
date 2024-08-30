import  { useEffect, useState } from "react"
import { FundPageColumns} from "@/components/fund-table/columns"
import { DataTable } from "@/components/fund-table/data-table"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"


type Fund={
  _id:string;
  id:string;
  name:string;
  amount:number; 
  fund_type:string;
};


const FundPage = ()=> {
  const [funds, setFunds] = useState<Fund[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/funds');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setFunds(json);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Fund page</h1>
          <Link to="/addfund" className="ml-1">
            <Button  className="ml-1">Add Fund</Button>
          </Link>
      </div>      
      <DataTable columns={FundPageColumns} data={funds} />
    </div>
  )
}


export  default FundPage;