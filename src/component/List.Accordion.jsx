import React,{useState} from 'react'
import "./List.css"
import { HiArrowCircleUp , HiArrowCircleDown } from "react-icons/hi";


const ListAccordion = ({txtTitle,txtDetail}) => {

    const [show,setShow] = useState(false);

const handleClick = () => {
    setShow(!show);
}

    return (
        <div className={show ? 'accordion-opened accordion-item':'accordion-item'} onClick={handleClick}>
            <div className='accordion-title'>
            <h5>{txtTitle}</h5>
            <p>{show ? < HiArrowCircleUp size='20'/> : < HiArrowCircleDown  size='20'/>}</p>
            </div>
            
            {show && <p>{txtDetail}</p>}
            
        </div>
    )
}

export default ListAccordion