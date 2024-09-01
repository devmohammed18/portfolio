export default function validate(value){

    const errors={};
    
    if(value.name===""){
        errors.name="Name Required"
    }
    if(value.email===""){
        errors.email="Email Required"
    }
    if(value.object===""){
        errors.object="object required"
    }

    if(value.message===""){
        errors.message="Message required"
    }
    return  errors    
}