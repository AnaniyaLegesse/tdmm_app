import { CoordinatorsPageColumns } from "@/components/fund-table/columns";
import { DataTable } from "@/components/fund-table/data-table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Coordinators=[
  { id: "728ed52f",name:"Abenezer Amare",phone: "098877509",location:"Argoba",status: "Available",},
  { id: "728ed52j",name:"Mikyas Belete",phone: "098877509",location:"Hammer",status: "Available",},
  { id: "728ed53f",name:"Kaleb Haile",phone: "098877509",location:"Sodo",status: "Available",},
  { id: "728ed52i",name:"Binyam Mogess",phone: "098877509",location:"Shashmene",status: "Available",},
  { id: "728ed52p",name:"Yakob Solomon",phone: "098877509",location:"Asela",status: "Available",},

]
 



const CoordinatorsPage = () => {
 
  return (
      <div className="flex flex-1 flex-col p-4 md:gap-4 md:p-8">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold ">Coordinators</h1>
          <Link to="/addproject" className="ml-1">
              <Button  className="ml-1">Add New Coordinator</Button>
            </Link>
        </div>      
        <DataTable columns={CoordinatorsPageColumns} data={Coordinators} />
      </div>
   );
}
export default CoordinatorsPage;