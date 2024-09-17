import { Areachart } from "@/components/areachart"
import { Barchart } from "@/components/barchart"





const HomePage = () => {
    return (         
        <div className="grid grid-cols-2 gap-4 p-5 rounded-lg  bg-white border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
            
                <Areachart />
                <Barchart/>                   
        </div>  
        
     );
}
 
export default HomePage;