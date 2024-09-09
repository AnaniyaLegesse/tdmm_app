import { Areachart } from "@/components/areachart"
import { Barchart } from "@/components/barchart"
import { Piechart } from "@/components/piechart"




const HomePage = () => {
    return ( 
        <div className="">
            
        <div className="grid grid-cols-2 gap-4 pt-5">
            
                <Areachart />
                <Barchart/>  
            
                          
        </div>  
        </div>
     );
}
 
export default HomePage;