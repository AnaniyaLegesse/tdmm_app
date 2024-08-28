import  { useEffect, useState } from "react"
import { CostPageColumns, CostPageData } from "@/components/fund-table/columns"
import { DataTable } from "@/components/fund-table/data-table"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface CostPageProps {
  data?: CostPageData[] // Optional prop to pass data; if not provided, it will fetch its own
}

export  default function CostPage({ data: initialData }: CostPageProps) {
  const [data, setData] = useState<CostPageData[]>(initialData || [])

  useEffect(() => {
    if (!initialData) {
      async function fetchData() {
        const fetchedData = await getData()
        setData(fetchedData)
      }

      fetchData()
    }
  }, [initialData])

  async function getData(): Promise<CostPageData[]> {
    // Simulate an API call
    return [
      {
        id: "11kka",
        name: "Alemayehu",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Bereket",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Kirubel",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Daniel",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Chala",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Alemayehu",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Bereket",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Kirubel",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Daniel",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Chala",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Alemayehu",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Bereket",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Kirubel",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Daniel",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Chala",
        amount: 5000,
        project: "ristricted",
        date: new Date(),
      },
      
      // Additional dummy data
    ]
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Cost page</h1>
          <Link to="/addfund" className="ml-1">
            <Button  className="ml-1">Add Cost</Button>
          </Link>
      </div>      
      <DataTable columns={CostPageColumns} data={data} />
    </div>
  )
}
