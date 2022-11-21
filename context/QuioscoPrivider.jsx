import { useState, useEffect, createContext } from "react";


const QuioscoContext = createContext();


const QuioscoPrivider = ({children}) => {

    
  return (
        <QuioscoContext.Provider
        value={{


        }}
        
        >

            {children}


        </QuioscoContext.Provider>
  )
}

export {
    QuioscoPrivider
}


export default QuioscoContext;
