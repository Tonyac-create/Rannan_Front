import React from 'react'

const InformationCard = (props) => {
    const { id, name } = props;
  return (
    <div key={id} className='informationCard flex flex-row content-center items-center justify-around bg-gray-200 rounded-md  gap-5 p-2 shadow-lg sm:gap-10'>
        <h3 className="scroll-m-20 text-l font-semibold tracking-tight w-2/3 sm:text-xl">{name}</h3>
        <div className='informationCard__actions flex flex-row  gap-1 w-1/3 sm:gap-5'>
            <div>ModifyBtn</div>
            <div>DeleteBtn</div>
        </div>   
    </div>
  )
}

export default InformationCard