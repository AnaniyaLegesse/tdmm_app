import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define the shape of your data
export type ProjectPageData = {
  id: string
  name: string
  budget: number
  utilized_amount: number
  variance: number
  status: string
}

export const projectPageColumns: ColumnDef<ProjectPageData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
   
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Project name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("name")}
            </div>)
    },
  },
  {
    accessorKey: "budget",
    header: () => <div className="text-left">Budget</div>,
    cell: ({ row }) => {
      const budget = parseFloat(row.getValue("budget"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(budget)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "utilized_amount",
    header: () => <div className="text-left">Utlized Amount</div>,
    cell: ({ row }) => {
      const utilized_amount = parseFloat(row.getValue("utilized_amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(utilized_amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "variance",
    header: () => <div className="text-left">Variance</div>,
    cell: ({ row }) => {
      const variance = parseFloat(row.getValue("variance"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(variance)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
        const status=row.getValue("status")

        switch(status){
          case "Under Budget":
            return (
              <Button variant="outline_success" size="sm">
                {status}
              </Button>
            );
          case "Over Budget":
            return (
              <Button variant="outline_danger" size="sm">
                {status}
              </Button>
            )
        }

    },
  },
  
    
  {
    id: "actions",
    header: () => <div className="text-left">More</div>,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]


export type FundPageData = {
  id: string
  name: string
  amount: number
  fund_type: String
  createdAt: string
}

export const FundPageColumns: ColumnDef<FundPageData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
   
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Donner name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("name")}
            </div>)
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  
  {
    accessorKey: "fund_type",
    header: () => <div className="text-left">Fund type</div>,
    cell: ({ row }) => {
      const fundType=row.getValue("fund_type");
      if(fundType==="restricted"){
        return(
          <Button variant="outline_danger" size="sm">Restricted</Button>
        )
      }else{
        return(
          <Button variant="outline_success" size="sm">Unrestricted</Button>
        )
      }
    },
  },
  {
    header: () => <div className="text-left">Date</div>,
    accessorKey: 'createdAt',
    cell: ({ row }) => {
      
      return (
          <div className="text-left font-medium">
            {new Date(row.getValue("createdAt")).toLocaleDateString()}
            </div>)
    },
  },
  {
    id: "actions",
    header: () => <div className="text-left">More</div>,
    cell: ({ row }) => {
      const payment = row.original
    

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)} className="text-blue-500 gap-2">
              <Pencil size={17}/> Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 gap-2">
              <Trash2 size={17}/> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  
]


export type CostPageData = {
  id: string
  name: string
  amount: number
  project: string
  createdAt: string
}

export const CostPageColumns: ColumnDef<CostPageData>[] = [
 
  {
    accessorKey: "name",
   
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("name")}
            </div>)
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  
  {
    accessorKey: "project",
    header: () => <div className="text-left">Project</div>,
    cell: ({ row }) => {
      
      return (
          <div className="text-left font-medium">
            {row.getValue("project")}
            </div>)
    },
  },
  
  {
    header: () => <div className="text-left">Date</div>,
    accessorKey: 'createdAt',
    cell: ({ row }) => {
      
      return (
          <div className="text-left font-medium">
            {new Date(row.getValue("createdAt")).toLocaleDateString()}
            </div>)
    },
  },
    
  {
    id: "actions",
    header: () => <div className="text-left">More</div>,
    cell: ({ row }) => {
      const payment = row.original
    

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)} className="text-blue-500 gap-2">
              <Pencil size={17}/> Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 gap-2">
              <Trash2 size={17}/> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  
  
]



export type CoordinatorsPageData = {
  id: string
  name: string
  phone: string
  location: string
  status: string
}
export const CoordinatorsPageColumns: ColumnDef<CoordinatorsPageData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
   
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Project name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("name")}
            </div>)
    },
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-left">Phone_No</div>,
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("phone")}
            </div>)
    },
  },
  {
    accessorKey: "location",
    header: () => <div className="text-left">Location</div>,
    cell: ({ row }) => {
      
      return (
          <div className="text-left ml-5 font-medium">
            {row.getValue("location")}
            </div>)
    },
  },
  

  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
        const status=row.getValue("status")

        switch(status){
          case "Available":
            return (
              <Button variant="outline_success" size="sm">
                {status}
              </Button>
            );
          case "Not Available":
            return (
              <Button variant="outline_danger" size="sm">
                {status}
              </Button>
            )
        }

    },
  },
  
    
  {
    id: "actions",
    header: () => <div className="text-left">More</div>,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]