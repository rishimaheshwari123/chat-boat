import React, { useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlueArrow from "../assets/Bluearrow.png"
import Bag from "../assets/Bag.png"
import Vector from "../assets/Vector.png"
import GrayArrow from "../assets/Grayarrow.png"
import FilterIcon from "../assets/filterIcon.png"
import Cross from "../assets/cross.png"

function Messages() {
    const tags=["Clutch", "Fabric Lining", "Baggit", "Multitouch", "Dress", "Casual Wear"]
 
        const [current, setCurrent] = useState(0);
        
        const carouselRef = useRef();
        const handlePrev = () => {
            setCurrent(current === 0 ?  3 : current - 1);
        };

        const handleNext = () => {
            setCurrent(current ===  1 ? 0 : current + 1);
        };

  return (
    <div className="relative font-poppins flex flex-col pl-[10px] pr-[10px] gap-[20px]">
        <div className="flex flex-col gap-[20px] ">
            <div className="flex flex-col gap-[0px]">
                <div className="bg-gradient-to-r from=[#E5EEFF] to-[#FAFCFF] w-[250px]  rounded-[15px] pt-[10px] text-left font-poppins font-[400] text-[13px] pl-[15px] pr-[15px] pb-[10px]">
                Hi Sam! I am your personal shopping assistant , how can i help you today ?
                </div>
                <div className="font-poppins text-[10px] font-[400] text-left pl-[10px] pr-[10px]">
                    4:45 PM
                </div>
            </div>

            <div className="flex flex-col gap-[0px] items-end right-0">
                <div className="bg-[#DCF7C5] w-[215px]  rounded-[15px] pt-[10px] text-left font-poppins font-[400] text-[13px] pl-[15px] pr-[15px] pb-[10px]">
                I am looking for a hand bag, with long strap .
                </div>
                <div className="font-poppins text-[10px] font-[400] text-right pl-[10px] pr-[10px]">
                    4:46 PM
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-[10px] ">
            <div className="text-[13px] text-[#949494] font-[400] text-left">Popular Tags for Handbag</div>
            <div className="flex w-[330px] gap-[5px] justify-between pr-[10px]">
                <div className="flex gap-[10px] w-[90%] overflow-hidden h-[30px] " >
                    {tags.slice(current, current + 4).map((tag, index) => (
                    <div key={index} className="bg-[#F2F7FF] pt-[5px] pb-[5px] pl-[10px] pr-[10px] border-[#4C82EF] border-[1px] rounded-[5px] text-[#4C82EF] text-[13px] font-[500] flex-nowrap text-nowrap">
                        {tag}
                    </div>
                    ))}
                </div>
                <button onClick={handleNext} className="">
                    <img src={BlueArrow} alt="" />
                </button>
            </div>
            </div>
            <div className="flex flex-col gap-[3px]">
                <div className=" bg-gradient-to-r from-[#E5EEFF] to-[#FAFCFF] w-[250px] h-[141px] p-[10px] rounded-[20px] flex flex-col gap-[10px]">
                    <div className="bg-white rounded-[10px] pt-[10px] pb-[10px] pl-[10px] pr-[10px] flex gap-[10px]">
                        <img src={Bag} alt="" />
                        <div className="flex flex-col gap-[10px] justify-between">
                            <div className="flex items-center justify-center gap-[5px]">
                                <div className="text-[13px] font-[500]">Bags on <span className="font-[600]">Timpu</span></div>
                                <img className="w-[15px] h-[15px]" src={Vector} alt="" />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-[12px]">1123 Products</div>
                                <img className="w-[6px] h-[12px]" src={GrayArrow} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-[13px] font-[400] text-left font-poppins">
                    Or set filter and help us choose the best bag for you.
                    </div>
                </div>
                <div className="text-[10px] text-left pl-[10px]">4:48pm</div>
            </div>

            <div className="flex flex-col gap-[5px]">
                <div className="flex justify-between text-[13px]">
                    <div className="text-[#949494]">Select Filters</div>
                    <div className="flex gap-[5px] items-center justify-center">
                        <img className="w-[15px] h-[15px]" src={FilterIcon} alt="" />
                        <div className="text-[#666666]">Filter</div>
                    </div>
                </div>
                <div className="flex gap-[10px] flex-wrap">
                    <Filters filter_name={"Strap - Long"}/>
                    <Filters filter_name={"Color"}/>
                    <Filters filter_name={"Size"}/>
                    <Filters filter_name={"Brand"}/>
                    <Filters filter_name={"Material"}/>
                </div>
            </div>
        
    </div>
  )
}


function Filters({filter_name}){
    return(
        <>
        <div className="bg-[#F6F9FF] border-[1px] border-[#4C82EF] rounded-[5px] text-[13px] text-[#4C82EF] flex gap-[5px] p-[2px] pl-[10px] pr-[10px]  ">
            <div>{filter_name}</div>
            <div className="flex items-center justify-center relative">
                <div className="w-[10px] h-[1px] border-[#4C82EF] border-[1px] rotate-[45deg]"></div>
                <div className="w-[10px] h-[1px] border-[#4C82EF] absolute border-[1px] rotate-[-45deg]"></div>
            </div>
        </div>
        </>
    )
}

export default Messages
