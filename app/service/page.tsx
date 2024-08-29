import { throws } from 'assert';
import React, { Suspense } from 'react'
import Loading from './loading'

async function Service() {



async function getService(){

      try{

        await new Promise (resolve=>setTimeout(resolve,4000))
        const users= await fetch('http://localhost:3000/api/testservice',{
          method:'GET'
          } )
          
          if(!users.ok){
          
            throw new Error('failed to fetch data')

          }
          

        return users.json()

}catch(error){
  console.log('errrrrror....................!')
}


}
  const Users= await getService()
  console.log(Users)
  return (
    <div>
     <h1> Hi Service.................! </h1>

     <Suspense fallback={<Loading />}>
      {Users.map((user:any)=>(
        
          <div key={user.id}>
              <h1>{user.id}</h1>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1><br />
          </div>
         
        ))} 
     
     </Suspense>


    </div>
  )
}

export default Service;
