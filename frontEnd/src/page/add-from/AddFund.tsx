import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; 



const formSchema = z.object({
    name: z.string().min(2, {
      message: " name must be at least 2 characters.",
    }),

    amount: z.coerce.number(), // Ensure amount is a positive number
    fund_type: z.enum(['restricted', 'unrestricted']),
  
  })


const AddFund = () => {
  const navigate = useNavigate();



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
        },
      })
    
      const onSubmit= async(values: z.infer<typeof formSchema>) =>{
              const response = await fetch("http://localhost:4000/api/funds", {
                method: "POST",
                body:JSON.stringify(values),
                headers:{
                  'Content-Type':'application/json'
                }  
              })

              

              if(response.ok){
                toast.success('New Fund added successfully')
                navigate("/funds");
              }  else {
                toast.error('Error adding new fund')
              }     
      }
      
      
    return ( 
      <div className="m-10 w-[50%]">
          <h1 className="text-xl font-semibold">Add new Fund here!</h1>
          <div className="mt-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="text-left space-y-8">

                {/* NAME FIELD */}
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your donner name." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                 />

                 {/* amount FIELD */}
                 <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the amount of donation." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                 />

                 {/* type FIELD */}
                 <FormField
                    control={form.control}
                    name="fund_type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fund Type</FormLabel>
                            <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Fund type" />
                              </SelectTrigger>
                              <SelectContent>
                              <SelectItem value="restricted">Restricted</SelectItem>
                              <SelectItem value="unrestricted">Unrestricted</SelectItem>
                              </SelectContent>
                            </Select>
                            </FormControl>
                        </FormItem>
                    )}
                 />


                 <Button type="submit">Submit</Button>
               </form>
            </Form>
          </div>
      </div>    
     );
}
 
export default AddFund;