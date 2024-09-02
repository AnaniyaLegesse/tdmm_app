import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    name: z.string().min(2, {
      message: " name must be at least 2 characters.",
    }),
    amount: z.coerce.number(),
    project:z.coerce.string()

  })
const AddCost = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
        },
      })
    
      const onSubmit= async(values: z.infer<typeof formSchema>) =>{

              const response=await fetch('http://localhost:4000/api/costs',{
                method:'POST',
                body:JSON.stringify(values),
                headers:{
                  'Content-Type':'application/json'
                }
              })

              const json=await response.json()

              if(response.ok){
                console.log('new cost added successfully', json)
              }
               
      }
      
      
    return ( 
      <div className="mt-10 w-[50%]">
          <h1 className="text-xl font-semibold">Add new Cost!</h1>
          <div className="mt-10 ">
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
                                <Input placeholder="Enter your cost name." {...field} />
                            </FormControl>
                            <FormMessage />
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
                                <Input placeholder="Enter the amount." {...field} />
                            </FormControl>
                            <FormDescription>
                                 
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                 />

                 {/* type FIELD */}
                 <FormField
                    control={form.control}
                    name="project"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter which project it belongs." {...field} />
                            </FormControl>
                            <FormDescription>
                                 
                            </FormDescription>
                            <FormMessage />
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
 
export default AddCost;