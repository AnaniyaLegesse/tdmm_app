import  { useEffect, useState } from "react"
import { ProjectPageData , projectPageColumns } from "@/components/fund-table/columns"
import { DataTable } from "@/components/fund-table/data-table"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface ProjectPageProps {
  data?: ProjectPageData[] // Optional prop to pass data; if not provided, it will fetch its own
}

export default function ProjectPage({ data: initialData }: ProjectPageProps) {
  const [data, setData] = useState<ProjectPageData[]>(initialData || [])

  useEffect(() => {
    if (!initialData) {
      async function fetchData() {
        const fetchedData = await getData()
        setData(fetchedData)
      }

      fetchData()
    }
  }, [initialData])

  async function getData(): Promise<ProjectPageData[]> {
    // Simulate an API call
    return [
      {
        id: "11kka",
        name: "project 101",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 102",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 103",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 104",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 105",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 101",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 102",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 103",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 104",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 105",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 101",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 102",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 103",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 104",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      {
        id: "11kka",
        name: "project 105",
        budget: 5000,
        utlized_amount: 2000,
        variance: 3000,
        status: "at budget",
        date: new Date(),
      },
      
      // Additional dummy data
    ]
  }

  return (
    <div className="container mx-auto py-10">
       projects table
       <Link to="/addproject" className="ml-1">
          <Button variant="outline" className="ml-1">Add Project</Button>
        </Link>
      <DataTable columns={projectPageColumns} data={data} />
    </div>
  )
}
