import {get,post} from '@/util'

export async function  apiTest () {
   let str= await get("/demo/hello");
   console.log(str);
   return str;      
}