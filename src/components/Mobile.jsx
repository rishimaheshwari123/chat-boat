import React, { useState } from 'react'
import ChatBot from "../assets/chatbot.png"
import Vector from "../assets/Vector.png"
import PaperClip from "../assets/Paperclip.png"
import Arrow from "../assets/Arrow.png"
import Logo from "../assets/Logo.svg"
import Header from './Header'
import Footer from './Footer'
import Messages from './Messages'
function Mobile() {

    const [online, setOnline]= useState(true);


  return (
    <div className="w-[360px] h-[800px] bg-white border-white rounded-[20px] border-[7px] relative m-auto flex flex-col justify-between">
      <div className="w-[100%] h-[80px] bg-[#EFF3FD] rounded-t-[20px] flex justify-between items-center p-[10px]">
            <Header />
        </div>
        <div>
            <Messages />
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Mobile
