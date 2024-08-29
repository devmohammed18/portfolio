

export  function GET() {

    const usersfemme=[
        {"id":3,
         "name":"Roumaissa",
         "username":"rouibah"
        },
        {
          "id":4,
          "name":"khadija",
          "username":"boyreghida"
        }
   
    ]
   
    return Response.json(usersfemme)
   
   
   }