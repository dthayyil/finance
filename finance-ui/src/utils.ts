import { format } from "date-fns";

 export const formatDate = (date: Date) => {
    return format(date, 'PP')
}
 
export const formatDecimal=(data:number) =>{
   return data?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const toFixedTwo=(data:number)=>{
  return  data.toFixed(2)
}