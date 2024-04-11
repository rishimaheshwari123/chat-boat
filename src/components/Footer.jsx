import React from 'react'
import PaperClip from "../assets/Paperclip.png"
import Arrow from "../assets/Arrow.png"
import Logo from "../assets/Logo.svg"

function Footer() {
  return (
    <div className=" bg-gradient-to-r from-[#EFF3FD] to-white w-[360x] rounded-b-[20px] p-[10px] 
            h-[80px] flex flex-col gap-[10px] ">
        <div className="h-[40px] relative flex items-center gap-[10px]">
            <input placeholder="Type your message" className=" font-poppins pl-[10px] pr-[20px] text-[13px] h-[40px] rounded-[10px] w-[265px] border-[1px] border-[#E3ECFF]" type="text" />
            <img className="absolute right-[85px]" src={PaperClip} alt="" />
            <div className="w-[70px] h-[40px] bg-[#4C82EF] rounded-[10px] flex items-center justify-center">
                <img src={Arrow} alt="" />
            </div>
        </div>
        <div className="flex items-center justify-center gap-[5px] font-[400] font-poppins text-[13px]">
            <div className="text-[#B1B1B1] font-[400] font-poppins text-[13px]">Powered by</div>
            <div className="text-[#7A7F8C] font-[600]">Krunk.ai</div>
            <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Footer
