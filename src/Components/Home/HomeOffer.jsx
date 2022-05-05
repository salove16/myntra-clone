

import offerimg from "./Home_images/top1.jpeg"
import dealimg from "./Home_images/top2.jpeg"
import "./HomeOffer.css"
import  {Carousel} from "./HomeSlide"


export const HomeOffer=()=>{



return (
    <div>
    <Carousel ></Carousel>
    
        <div className="offerdiv">
            <img src={offerimg} alt=""   className="offerimg"></img>
        </div>
        <div className="offerdiv">
           <img src={dealimg} alt="" className="dealimg"></img>
        </div>
    </div>
)
}