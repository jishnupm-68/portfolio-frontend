
import { useSelector } from 'react-redux';

import Marquee from "react-fast-marquee";
import useFetchModule from '../../hooks/useFetchModule';
const NpmModule = () => {
    useFetchModule()
    const npmModule = useSelector((store)=>store.npmModule)
    if(!npmModule) return null
    const helpers = npmModule.map((item)=>item.helperName)
    const totalHelpers = [].concat(...helpers)

  return (
    <Marquee>
      {
        totalHelpers.map((item)=>{
          return(
            <div className='btn btn-dash btn-primary   mx-1     hover:bg-indigo-500  dark:text-white'>{item}</div>
          )
        })
      }
    </Marquee>
  )
}

export default NpmModule