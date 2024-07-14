import React, { ReactNode } from "react";

interface CommonLayoutProps{
    children:ReactNode
}
const CommonLayout:React.FC<CommonLayoutProps> = ({children})=>{
  return(
    <>
    {children}
    </>
    ); 
} 
 export default CommonLayout