
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,  
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Link } from "react-router-dom"

const CardData=[
  {title:"Total Revenue", value:"$45,231", description:"Total amount of revenue", icon:<DollarSign className="h-4 w-4 text-muted-foreground" />},
  {title:"Total Cost", value:"$25,998", description:"Total amount of cost", icon:<CreditCard className="h-4 w-4 text-muted-foreground" />},
  {title:"Funds", value:"$50,456", description:"Total amount of Fund", icon:<Activity className="h-4 w-4 text-muted-foreground" />},
  {title:"Projects", value:"+231", description:"Number of Projects", icon:<Users className="h-4 w-4 text-muted-foreground" />},
]

const RecentCosts=[
  {name:"travel", project:"project-564", amount:"$298"},
  {name:"Fuel", project:"project-297", amount:"$597"},
  {name:"Printing", project:"project-302", amount:"$839"},
  {name:"Training", project:"project-184", amount:"$746"},
]

const RecentFunds=[
  {name:"Abebe L", email:"your@gmail.com", amount:"+$298"},
  {name:"Kebed T", email:"your@gmail.com", amount:"+$597"},
  {name:"Alex B", email:"your@gmail.com", amount:"+$839"},
  {name:"Getachew G", email:"your@gmail.com", amount:"+$746"},
  {name:"Assefa A", email:"your@gmail.com", amount:"+$839"},
]



const Dashboard=()=> {
  return (
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {CardData.map((d) => (
              <Card x-chunk="dashboard-01-chunk-0" key={d.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {d.title}
                  </CardTitle>
                  {d.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{d.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {d.description}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {/* Recent Costs */}
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4" >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Costs</CardTitle>
                <CardDescription>
                  Recent Costs from finance.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link to="/costs">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cost</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {RecentCosts.map((d)=>(
                      <TableRow key={d.name}>
                      <TableCell>
                        <div className="font-medium">{d.name}</div> 
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {d.project}
                        </div> 
                      </TableCell>
                      <TableCell className="text-right">{d.amount}</TableCell>
                  </TableRow>
                  ))}
                  
                </TableBody>
              </Table>
            </CardContent>
          </Card>

            {/* Recent Funds */}
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Funds</CardTitle>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link to="/funds">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="grid gap-8">
              {RecentFunds.map((fund)=>(
                  <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      {fund.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {fund.email}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">{fund.amount}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    
  )
}
 export default Dashboard;