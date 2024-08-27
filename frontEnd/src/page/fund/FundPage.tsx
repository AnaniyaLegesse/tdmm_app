import  { useEffect, useState } from "react"
import { FundPageColumns, FundPageData } from "@/components/fund-table/columns"
import { DataTable } from "@/components/fund-table/data-table"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface FundPageProps {
  data?: FundPageData[] // Optional prop to pass data; if not provided, it will fetch its own
}

export  default function FundPage({ data: initialData }: FundPageProps) {
  const [data, setData] = useState<FundPageData[]>(initialData || [])

  useEffect(() => {
    if (!initialData) {
      async function fetchData() {
        const fetchedData = await getData()
        setData(fetchedData)
      }

      fetchData()
    }
  }, [initialData])

  async function getData(): Promise<FundPageData[]> {
    // Simulate an API call
    return [
      {
        id: "11kka",
        name: "Alemayehu",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Bereket",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Kirubel",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Daniel",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Chala",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Alemayehu",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Bereket",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Kirubel",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Daniel",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Chala",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Alemayehu",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Bereket",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Kirubel",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Daniel",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "Chala",
        amount: 5000,
        fund_type: "ristricted",
        date: new Date(),
      },
      
      // Additional dummy data
    ]
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Fund page</h1>
          <Link to="/addfund" className="ml-1">
            <Button  className="ml-1">Add Fund</Button>
          </Link>
      </div>      
      <DataTable columns={FundPageColumns} data={data} />
    </div>
  )
}
