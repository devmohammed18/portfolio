'use client'

import { useState,useEffect } from "react"


function ToggleTheme() {

    const [theme,setTheme]=useState('light')
    
    const handlethem=(e)=>{

   if(e.ctrlkey && e.key==='a'){
     
    setTheme('dark');
   }
   handlethem()

    }

    useEffect(()=>{
    const theme=localStorage.getItem("theme")
    if(theme) setTheme(theme);
    else if(window.matchMedia("(perfers-color-scheme:dark)").matches)  
        setTheme("dark")  
    },[])

    useEffect(()=>{

        if(theme==='dark'){
            localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark")
        }else{
            localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark")
        }
        
    },[theme])






  return (
    <>

{ theme==='dark' && (<button  onClick={()=>{setTheme('light'), console.log('dark')}}>
       <svg className='fill-white w-5 h-5'
                width="172" height="172" viewBox="0 0 172 172" 
                xmlns="http://www.w3.org/2000/svg">
                
                <path d="M157.569 100.4C152.905 103.444 147.863 105.867 
                    142.572 107.605C122.927 114.134 100.694 110.562 84.4284 
                    97.7531C80.4253 94.5556 76.7912 90.9219 73.5934 86.9192C60.7846
                    70.6529 57.2128 48.4192 63.7411 28.7721C65.4795 23.4814 67.9026 
                    18.4409 70.9488 13.779C71.9945 12.2524 72.5327 10.4352 72.4868
                    8.58543C72.441 6.73563 71.8134 4.9473 70.6933 3.47447C69.5732 
                    2.00163 68.0176 0.919183 66.2473 0.380838C64.4769 -0.157507 
                    62.582 -0.124369 60.8316 0.475564C46.5401 5.05141 33.6652 13.2251 23.4436 
                    24.2116C13.2219 35.1981 5.99687 48.6282 2.46234 63.2122C-1.07218 77.7962 -0.797447 
                    93.044 3.26019 107.491C7.31783 121.938 15.022 135.099 25.6329
                    145.711C36.2437 156.322 49.4047 164.026 63.8517 168.084C78.2988 
                    172.142 93.5466 172.417 108.131 168.883C122.715 165.349 136.145 
                    158.124 147.132 147.903C158.119 137.682 166.293 124.807 170.869 
                    110.516C171.47 108.765 171.504 106.87 170.966 105.1C170.428 103.329
                    169.346 101.773 167.873 100.653C166.4 99.5324 164.612 98.9049
                    162.762 98.8596C160.912 98.8142 159.095 99.3532 157.569 100.4Z" />
        </svg>

       </button>)}
       {theme==='light' && (<button type='btton' onClick={()=>{setTheme('dark'),console.log('dark')}}>
        <svg width="290" height="290" viewBox="0 0 290 290" 
       xmlns="http://www.w3.org/2000/svg"
       className='fill-white w-5 h-5'>
                <path d="M144.671 210.437C180.915 210.437 210.296 181.056 210.296 144.812C210.296 108.568 180.915 79.187 144.671 79.187C108.427 79.187 79.0459 108.568 79.0459 144.812C79.0459 181.056 108.427 210.437 144.671 210.437Z" />
                <path d="M144.671 48.562C148.152 48.5619 151.49 47.179 153.951 44.7176C156.413 42.2562 157.796 38.9179 157.796 35.437V13.562C157.796 10.081 156.413 6.74265 153.952 4.28123C151.49 1.81982 148.152 0.437012 144.671 0.437012C141.19 0.437012 137.852 1.81982 135.39 4.28123C132.929 6.74265 131.546 10.081 131.546 13.562V35.437C131.546 38.9179 132.929 42.2562 135.39 44.7176C137.852 47.179 141.19 48.5618 144.671 48.562Z" />
                <path d="M58.051 76.7519C59.2697 77.9706 60.7164 78.9373 62.3087 79.5968C63.901 80.2564 65.6075 80.5958 67.331 80.5958C69.0545 80.5958 70.761 80.2564 72.3533 79.5968C73.9456 78.9373 75.3923 77.9706 76.611 76.7519C77.8297 75.5333 78.7964 74.0865 79.4559 72.4942C80.1154 70.902 80.4549 69.1954 80.4549 67.4719C80.4549 65.7485 80.1154 64.0419 79.4559 62.4496C78.7964 60.8574 77.8297 59.4106 76.611 58.1919L61.1442 42.726C58.683 40.2649 55.3449 38.8823 51.8643 38.8823C48.3836 38.8824 45.0456 40.2651 42.5844 42.7263C40.1233 45.1875 38.7407 48.5256 38.7407 52.0062C38.7408 55.4869 40.1235 58.8249 42.5847 61.286L58.051 76.7519Z" />
                <path d="M48.4209 144.812C48.4207 141.331 47.0378 137.993 44.5765 135.531C42.1151 133.07 38.7768 131.687 35.2959 131.687H13.4209C9.93993 131.687 6.60154 133.07 4.14012 135.531C1.67871 137.993 0.295898 141.331 0.295898 144.812C0.295898 148.293 1.67871 151.631 4.14012 154.093C6.60154 156.554 9.93993 157.937 13.4209 157.937H35.2959C38.7768 157.937 42.1151 156.554 44.5765 154.093C47.0379 151.631 48.4207 148.293 48.4209 144.812Z" />
                <path d="M58.0509 212.873L42.5846 228.343C41.366 229.562 40.3993 231.009 39.7397 232.601C39.0802 234.193 38.7407 235.9 38.7407 237.623C38.7407 239.347 39.0802 241.053 39.7397 242.645C40.3993 244.238 41.366 245.684 42.5846 246.903C45.0458 249.364 48.3839 250.747 51.8646 250.747C53.5881 250.747 55.2947 250.408 56.8869 249.748C58.4792 249.089 59.926 248.122 61.1446 246.903L76.6109 231.433C77.8296 230.214 78.7963 228.767 79.4558 227.175C80.1154 225.583 80.4549 223.876 80.4549 222.153C80.4549 220.429 80.1155 218.723 79.456 217.13C78.7965 215.538 77.8298 214.091 76.6112 212.873C75.3925 211.654 73.9458 210.687 72.3536 210.028C70.7613 209.368 69.0548 209.029 67.3314 209.029C65.6079 209.029 63.9014 209.368 62.3091 210.028C60.7169 210.687 59.2696 211.654 58.0509 212.873Z" />
                <path d="M144.671 241.062C141.19 241.062 137.852 242.445 135.39 244.906C132.929 247.368 131.546 250.706 131.546 254.187V276.062C131.546 279.543 132.929 282.881 135.39 285.343C137.852 287.804 141.19 289.187 144.671 289.187C148.152 289.187 151.49 287.804 153.952 285.343C156.413 282.881 157.796 279.543 157.796 276.062V254.187C157.796 250.706 156.413 247.368 153.951 244.906C151.49 242.445 148.152 241.062 144.671 241.062Z" />
                <path d="M231.291 212.872C230.072 211.654 228.625 210.687 227.033 210.027C225.441 209.368 223.734 209.028 222.011 209.028C220.287 209.028 218.581 209.368 216.988 210.027C215.396 210.687 213.949 211.654 212.731 212.872C211.512 214.091 210.545 215.538 209.886 217.13C209.226 218.722 208.887 220.429 208.887 222.152C208.887 223.876 209.226 225.582 209.886 227.175C210.545 228.767 211.512 230.214 212.731 231.432L228.197 246.903C229.416 248.121 230.862 249.088 232.455 249.748C234.047 250.407 235.753 250.747 237.477 250.747C239.2 250.747 240.907 250.407 242.499 249.748C244.091 249.088 245.538 248.121 246.757 246.903C247.976 245.684 248.942 244.237 249.602 242.645C250.261 241.053 250.601 239.346 250.601 237.623C250.601 235.899 250.261 234.193 249.602 232.601C248.942 231.008 247.976 229.562 246.757 228.343L231.291 212.872Z" />
                <path d="M289.046 144.812C289.046 141.331 287.663 137.993 285.201 135.531C282.74 133.07 279.402 131.687 275.921 131.687H254.046C250.565 131.687 247.227 133.07 244.765 135.531C242.304 137.993 240.921 141.331 240.921 144.812C240.921 148.293 242.304 151.631 244.765 154.093C247.227 156.554 250.565 157.937 254.046 157.937H275.921C279.402 157.937 282.74 156.554 285.202 154.093C287.663 151.631 289.046 148.293 289.046 144.812Z" />
                <path d="M222.011 80.5967C223.735 80.5988 225.442 80.2602 227.035 79.6003C228.627 78.9404 230.074 77.9723 231.291 76.7515L246.757 61.2852C249.219 58.824 250.601 55.4859 250.601 52.0052C250.601 48.5246 249.219 45.1865 246.757 42.7253C244.296 40.264 240.958 38.8813 237.477 38.8813C233.997 38.8813 230.659 40.264 228.197 42.7253L212.731 58.1919C210.896 60.0275 209.647 62.366 209.14 64.9118C208.634 67.4575 208.894 70.0963 209.887 72.4943C210.88 74.8923 212.562 76.942 214.721 78.3842C216.879 79.8265 219.416 80.5964 222.011 80.5967Z" />
        </svg>

        </button>)}



    </>
  )
}

export default ToggleTheme
