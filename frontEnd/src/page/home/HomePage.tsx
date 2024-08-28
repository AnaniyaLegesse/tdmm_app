import { Areachart } from "@/components/areachart"
import { Barchart } from "@/components/barchart"
import { Piechart } from "@/components/piechart"




const HomePage = () => {
    return ( 
        <div className="mt-10">
            Report page
        <div className="flex gap-4 ">
            <div className="flex-initial w-64">
                <Areachart />
            </div>

             <Piechart/> 
            
            <div className="flex-initial w-64">
                <Barchart/>  
            </div>
            
                
        </div>
         
        </div>
     );
}
 
export default HomePage;