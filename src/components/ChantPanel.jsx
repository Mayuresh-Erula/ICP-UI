import React from 'react'
import { FaMicrophone } from "react-icons/fa6";

function ChatBubble({children, small}) {
  return (
    <div className={`rounded-xl p-6 ${small ? "text-base text-gray-500" : "text-lg font-medium"}`}>
      {children}
    </div>
  );
}

const ChantPanel = () => {
  return (
    <div className="bg-white shadow p-8 min-h-[68vh] flex flex-col rounded-tl-2xl rounded-bl-2xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-2xl font-semibold">✨ Oslo chat</div>
      </div>

      <div className="space-y-6 flex-1">
        <div className='text-gray-400'>
          <ChatBubble small> 
            Hello I'm Oslo. Tell me what's on your mind 
          </ChatBubble>
        </div>

        <div className="flex items-center">
          <button className="px-5 py-2 bg-gray-100 rounded-md text-sm ml-215">Create leads on Tech targets</button>
        </div>

        <ChatBubble small>
          <p>ICP updated to target Tech Companies. If you want to specify roles,</p>
            <p>locations, or other criteria for decision-makers, please let me know</p></ChatBubble>
      </div>

      <div className="mt-6">
        <div className="flex items-center bg-gray-50 rounded-full p-2 shadow-sm">
          <input className="flex-1 bg-transparent outline-none px-4" />
          <div className=" grid place-items-center text-amber-400"><FaMicrophone/></div>
        </div>
      </div>
    </div>
  )
}

export default ChantPanel