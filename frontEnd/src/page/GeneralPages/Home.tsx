import {
  Activity,
  CreditCard,
  DollarSign,  
  Users,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Cost_Areachart } from "@/components/areachart"
import { Fund_Barchart } from "@/components/barchart"

const Home = () => {


  const CardData = [
    { title: "Projects", value: `100`, description: "Number of Projects", icon: <Users className="h-4 w-4 text-muted-foreground" /> },
    { title: "Total Cost", value: `902`, description: "Total amount of cost", icon: <CreditCard className="h-4 w-4 text-muted-foreground" /> },
    { title: "Funds", value: `746`, description: "Total amount of Fund", icon: <Activity className="h-4 w-4 text-muted-foreground" /> },
    { title: "Total Revenue", value: `553`, description: "Total amount of revenue", icon: <DollarSign className="h-4 w-4 text-muted-foreground" /> },
  ]

  return (
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {CardData.map((d) => (
            <Card key={d.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{d.title}</CardTitle>
                {d.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{d.value}</div>
                <p className="text-xs text-muted-foreground">{d.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">     
        <Cost_Areachart/>
        <Fund_Barchart/>
        </div>
      </div> 
  )
}

export default Home;
