
import { Fund_Barchart } from "@/components/barchart"
import { Cost_Linechart } from "@/components/linechart"
import { Cost_Areachart} from "@/components/areachart"
import { FundTypeChart } from "@/components/Fundtypechart"


export function AnalyticsPage() {
  return (
    <div className="chart-wrapper grid grid-cols-3 gap-4 p-6">
      <div className="col-span-2">
        <Fund_Barchart/>
      </div>

      <div className="grid w-full flex-initial  gap-6 lg:max-w-[20rem]">
       <FundTypeChart/>
      </div>
  
      <div className="col-span-2">
        <Cost_Areachart/>
      </div>
      
      <div className="grid w-full flex-initial  gap-6 lg:max-w-[20rem]">
       <Cost_Linechart/>
      </div>
    </div>
  )
}
