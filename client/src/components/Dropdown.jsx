import React, { useState } from "react"
import { useTransition, animated } from "react-spring"
import DropdownList from "./DropdownList"

const Dropdown = ({ def }) => {

    const [choice, setChoice] = useState(def)

    const [open, setOpen] = useState(false)
    const transition = useTransition(open, {
        from: { 
            position: 'absolute',
            top: '208px',
            left: '144px',
            opacity: 0, 
            transform: 'translate3d(0px,-5px,0px)',
            pointerEvents: 'none' 
        },
        enter: { opacity: 1, transform: 'translate3d(0,0px,0)', pointerEvents: 'auto'  },
        leave: { opacity: 0, transform: 'translate3d(0,-5px,0)', pointerEvents: 'none'  }
    })

    const switchChoice = (text) => {
        def = text
        setOpen(false)
        setChoice(text)
    }

    return (
        <div className="flex justify-center items-center">
            <button className="flex items-center space-x-2 transition duration-500 ease-in-out bg-dark hover:bg-dark-1 px-14 py-1 mt-2 rounded-full font-bold focus:outline-none shadow-md"
            onClick={() => setOpen(!open)}>
                <p>{choice}</p>
                <div style={downArrow}></div>
            </button>

            {transition((style, item) => item ? 
            <animated.div style={style}>
                <DropdownList onSwitch={switchChoice} />
            </animated.div> : '')}

        </div>
    )
}

const downArrow = {
    width: "0",
    height: "0",
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: "8px solid #fff",
}

export default Dropdown
