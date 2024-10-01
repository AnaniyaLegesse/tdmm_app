"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
  { date: "2024-04-01", restricted: 222, unrestricted: 150 },
  { date: "2024-04-02", restricted: 97, unrestricted: 180 },
  { date: "2024-04-03", restricted: 167, unrestricted: 120 },
  { date: "2024-04-04", restricted: 242, unrestricted: 260 },
  { date: "2024-04-05", restricted: 373, unrestricted: 290 },
  { date: "2024-04-06", restricted: 301, unrestricted: 340 },
  { date: "2024-04-07", restricted: 245, unrestricted: 180 },
  { date: "2024-04-08", restricted: 409, unrestricted: 320 },
  { date: "2024-04-09", restricted: 59, unrestricted: 110 },
  { date: "2024-04-10", restricted: 261, unrestricted: 190 },
  { date: "2024-04-11", restricted: 327, unrestricted: 350 },
  { date: "2024-04-12", restricted: 292, unrestricted: 210 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  restricted: {
    label: "restricted",
    color: "hsl(var(--chart-1))",
  },
  unrestricted: {
    label: "unrestricted",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Fund_Barchart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("restricted")

  const total = React.useMemo(
    () => ({
      restricted: chartData.reduce((acc, curr) => acc + curr.restricted, 0),
      unrestricted: chartData.reduce((acc, curr) => acc + curr.unrestricted, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Donners - Interactive</CardTitle>
          <CardDescription>
            Showing total Funds for the last 10 years
          </CardDescription>
        </div>
        <div className="flex">
          {["restricted", "unrestricted"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
