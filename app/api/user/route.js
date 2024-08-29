import { NextRequest } from "next/server"

export function POST(request){
 const data =  request.json();

return NextRequest.json({data,})

}