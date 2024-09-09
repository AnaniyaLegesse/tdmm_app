
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "2007", budget: 305, cost: 200 },
  { month: "2008", budget: 237, cost: 120 },
  { month: "2009", budget: 73, cost: 190 },
  { month: "2010", budget: 209, cost: 130 },
  { month: "2011", budget: 214, cost: 140 },
  { month: "2012", budget: 186, cost: 80 },
  { month: "2013", budget: 305, cost: 200 },
  { month: "2014", budget: 237, cost: 120 },
  { month: "2015", budget: 73, cost: 190 },
  { month: "2016", budget: 209, cost: 130 },
]

const chartConfig = {
  budget: {
    label: "Budget",
    color: "hsl(var(--chart-1))",
  },
  cost: {
    label: "Cost",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Areachart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 ">Budget vs Utilized</CardTitle>
        <CardDescription className="flex items-center gap-2 ">
          Showing project budget and utilized amount variation over the past 10 years.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="cost"
              type="natural"
              fill="var(--color-cost)"
              fillOpacity={0.4}
              stroke="var(--color-cost)"
              stackId="a"
            />
            <Area
              dataKey="budget"
              type="natural"
              fill="var(--color-budget)"
              fillOpacity={0.4}
              stroke="var(--color-budget)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              2007 - 2016 EC
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
