import { useState, useEffect } from "react"
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

const Dashboard = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [totalFunds, setTotalFunds] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [recentCosts, setRecentCosts] = useState([]); // Store recent costs
  const [recentFunds, setRecentFunds] = useState([]); // Store recent funds
  const totalRevenue = totalFunds - totalCost;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch costs
        const costResponse = await fetch("http://localhost:4000/api/costs");
        const costs = await costResponse.json();
        const totalCostAmount = costs.reduce((total: any, cost: any) => total + cost.amount, 0);
        setTotalCost(totalCostAmount);
        setRecentCosts(costs.slice(0, 3)); // Get last 3 recent costs

        // Fetch funds
        const fundsResponse = await fetch("http://localhost:4000/api/funds");
        const funds = await fundsResponse.json();
        const totalFundsAmount = funds.reduce((total: any, fund: any) => total + fund.amount, 0);
        setTotalFunds(totalFundsAmount);
        setRecentFunds(funds.slice(0, 3)); // Get last 3 recent funds

        // Fetch projects
        const projectsResponse = await fetch("http://localhost:4000/api/projects");
        const projects = await projectsResponse.json();
        setProjectCount(projects.length);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const CardData = [
    { title: "Projects", value: `+${projectCount}`, description: "Number of Projects", icon: <Users className="h-4 w-4 text-muted-foreground" /> },
    { title: "Total Cost", value: `$${totalCost.toLocaleString()}`, description: "Total amount of cost", icon: <CreditCard className="h-4 w-4 text-muted-foreground" /> },
    { title: "Funds", value: `$${totalFunds.toLocaleString()}`, description: "Total amount of Fund", icon: <Activity className="h-4 w-4 text-muted-foreground" /> },
    { title: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, description: "Total amount of revenue", icon: <DollarSign className="h-4 w-4 text-muted-foreground" /> },
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
        {/* Recent Costs */}
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Costs</CardTitle>
              <CardDescription>Recent Costs from finance.</CardDescription>
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
              <TableBody>
                {recentCosts.map((cost: any) => (
                  <TableRow key={cost._id}>
                    <TableCell>
                      <div className="font-medium">{cost.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">{cost.project}</div>
                    </TableCell>
                    <TableCell className="text-right">${cost.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Funds */}
        <Card>
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
            {recentFunds.map((fund: any) => (
              <div className="flex items-center gap-4" key={fund._id}>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">{fund.name}</p>
                  <p className="text-sm text-muted-foreground">{fund.fund_type}</p>
                </div>
                <div className="ml-auto font-medium">+${fund.amount}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard;
