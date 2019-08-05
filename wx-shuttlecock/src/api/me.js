import {get,post} from '@/util'
const HEADER_JSON={"content-type":"json"};

export async function  apiTest (data) {
   return await get("/",data,HEADER_JSON);     
}