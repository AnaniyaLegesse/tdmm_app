import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export function Barchart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget variance</CardTitle>
        <CardDescription>2007 - 2016 EC</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="budget" fill="var(--color-budget)" radius={4} />
            <Bar dataKey="cost" fill="var(--color-cost)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
        Showing project budget and utilized amount variation over the past 10 years.
        </div>
      </CardFooter>
    </Card>
  )
}
