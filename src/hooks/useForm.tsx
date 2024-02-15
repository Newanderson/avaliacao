

import { ReactElement, FormEvent, useState } from "react";


export function useForm(steps: ReactElement[]){

    const [currentSteps , setCurrentSteps ] = useState(0)
    
    function changeStep(i:number ,e?:FormEvent){
        if(e)e.preventDefault()
        if(i < 0 || i >= steps.length)return

        setCurrentSteps(i);

    }



    return{
       changeStep,
       currentComponent: steps[currentSteps],
       currentSteps,
       isLastStep: currentSteps + 1 === steps.length ? true : false,
    };
}