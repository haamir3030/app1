import React from 'react'
import "./listitem.css"
import {AiOutlineCheck} from 'react-icons/ai'
import {ImBin} from 'react-icons/im'



const Listitem = ( {text,deleteTo,isChecked,toggleChecked} ) => {
  return (
    <div className='todo'>
      <div className={`${isChecked ? "todo_radio" :"todo_radio_unchecked"}`} onClick={toggleChecked}>
            {isChecked && <AiOutlineCheck/>}
      </div>

      <div className={`${isChecked ? "todo_text_checked" : "todo_text"}`}>
            {text}
      </div>
      <div className='todo_delete' onClick={deleteTo}>
            <ImBin/>
      </div>


    </div>
  )
}

export default Listitem