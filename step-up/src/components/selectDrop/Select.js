import React, { useState } from 'react'
import '../selectDrop/select.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Select = () => {

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const [selectedItem, setselectedItem] = useState('categories');

    const openSelect=()=>{
        setisOpenSelect(!isOpenSelect);
    }

    const closeSelect=(index,name)=>{
        setselectedIndex(index);
        setisOpenSelect(false);
        setselectedItem(name);
    }    

    return (
        <div className='selectDrop cursor position-relative'>
            <span className='openSelect' onClick={openSelect}>{selectedItem} <KeyboardArrowDownIcon className='arrow'/></span>
            {
                isOpenSelect === true &&
                <div className='selectDrop1'>
                <div className='searchField'>
                    <input type='text' />
                </div>
                <ul className='searchResults'>
                    <li onClick={()=>closeSelect(0,'All')} className={`${selectedIndex===0 ? 'active' :''}`}>All</li>
                    <li onClick={()=>closeSelect(1,'Formals')} className={`${selectedIndex===1 ? 'active' :''}`}>Formals</li>
                    <li onClick={()=>closeSelect(2,'Casuals')} className={`${selectedIndex===2 ? 'active' :''}`}>Casuals</li>
                    <li onClick={()=>closeSelect(3,'Sports')} className={`${selectedIndex===3 ? 'active' :''}`}>Sports</li>
                    <li onClick={()=>closeSelect(4,'Sandals')} className={`${selectedIndex===4 ? 'active' :''}`}>Sandals</li>
                    <li onClick={()=>closeSelect(5,'Flip-Flops')} className={`${selectedIndex===5 ? 'active' :''}`}>Flip-Flops</li>
                    <li onClick={()=>closeSelect(6,'Clogs')} className={`${selectedIndex===6 ? 'active' :''}`}>Clogs</li>

                </ul>
            </div>
            }
            
        </div>

    )
}

export default Select
