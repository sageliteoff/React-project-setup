import { useEffect, useState } from 'react'

import { DI } from "../pages/index";
import { Fact } from '../respositories/fact-repository';


export default function FactComponet() {


  const [fact, setFact] = useState<Fact>({} as Fact)


//   useEffect(()=>{
//     DI.factService.getFact().then((res)=>{setFact(res.data)});
//   }, [])

  return (
    <>
    
      <main >
       <h1>
       {fact.text}
       </h1>

       <button
       onClick={()=>{
        DI.factService.getFact(3).then(res=>{
          setFact(res.data)

        }
        )

       }}
       > Get Random Fact</button>


  <button
       onClick={()=>{
        DI.factService.saveFact(fact)

       }}
       > SaveFact</button>
     
      </main>
    </>
  )
}
