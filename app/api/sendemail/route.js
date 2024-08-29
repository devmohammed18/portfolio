
// import nodemailer from 'nodemailer'

// import { NextRequest,NextResponse } from "next/server"
export async function POST(request,response) {
 // console.log('---------------appppppppiiiiiii-------------------')
 
// if(req.method==='POST'){
//   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
//         const {name,email,object,message}=req.body


//         // Creation a tronsport
//         let transport=nodemailer.createTransport({
//           service:'GMAIL' ,
//           auth:{
//             user:process.env.EMAIL, // YOUR EMAIL
//             pass:process.env.EMAIL_PASS, //YOUR PASSWORD OR APPLICATION-SPECIFC PASS

//           },
//         })

//       try {
//         // send email
//         let info= await transport.sendMail({
//         from:process.env.EMAIL,
//         name:name,
//         email:email,
//         object:object,
//         message:message,
            
//         })
//         console.log('message send ',info.messageId)
//         res.status(200).json({success:true})
        
//       } catch (error) {

//         console.log('Error sendig email:',error)
//         res.status(500).json({success:false,error:error.message})
//       }




// }else{
//   res.status(405).json({message:'Method not allowedccccc'})
// console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
// }
}
