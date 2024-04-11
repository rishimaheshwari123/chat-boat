import React, { useEffect, useState } from 'react'
import ChatBot from "../assets/chatbot.png"
import Vector from "../assets/Vector.png"

function Header() {
    const [online, setOnline]= useState(true);
  return (
    <div className="flex items-between justify-between gap-[10px] w-[360px]">
                <div className="flex gap-[10px]">
                    <img src={ChatBot} alt="" />
                    {online&&
                    <div className="w-[8px] h-[8px] bg-[#3FE225] rounded-full absolute top-[55px] left-[47px]"></div>
                    }
                    <div className="flex w-[100%]  items-center justify-start font-poppins font-[600] text-[#4C82EF] text-[18px] flex-col">
                        <div className="flex w-[100%] gap-[10px] items-center justify-start font-[600] text-[18px]">
                            Timpu
                            <img className="" src={Vector} alt="" />
                        </div>
                        <div className="text-[15px] font-[500]">
                            Chat Assistant
                        </div>
                </div>
                </div>
                {
                    online&& <div className="text-[#4C82EF] relative flex items-end text-[15px] font-[500]">
                        <div className="w-[8px] h-[8px] bg-[#3FE225] rounded-full absolute top-[35px] left-[-14px]"></div>
                        Online
                    </div>
                }
            </div>
  )
}

export default Header
