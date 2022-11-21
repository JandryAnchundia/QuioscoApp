import { useContext } from "react/cjs/react.development";
import { QuioscoContext } from "../context/QuioscoPrivider";


const useQuiosco = ()=>{
    
    return useContext(QuioscoContext)
}

export default useQuiosco;