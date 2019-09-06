import {get, post } from '@/util'
const HEADER_JSON = { "content-type": "json" };

export async function apiTest(data) {
    return await get("/", data, HEADER_JSON);
}


export async function saveWxUserPhone(data) {
    return await post("/wx/saveWxUserPhone", data, HEADER_JSON);
}