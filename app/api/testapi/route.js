
import { NextResponse } from "next/server"

export  function GET() {

 const users=[
     {id:1,
      name:'mohammed',
      username:'boureghida'


     },
     {
       id:2,
       name:'tahar',
       username:'boyreghida'
     },
     {
       id:5,
       name:'mouloud',
       username:'boyreghida'
     }
 ]
  //const users1=JSON.stringify(users)
 return NextResponse.json(users)


}