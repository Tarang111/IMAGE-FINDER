const client="jfTLjMFDRmLXEss0Vq2H8ZxMA-HnYyW_7wtedLo5ASI"
const load=document.getElementById("load")
const reset=document.getElementById("reset")
let page=1;
let data;
const update=(ress)=>{

 ress.results.map((data)=>{

         
             let bt= document.createElement("div");
              bt.setAttribute("class","box");
              bt.innerHTML=`
                       <div class="info">
                            <div class="photo">
                                <img id="ii"src=${data.user.profile_image.large} alt="">
                            </div>
                            <p>${data.user.name}</p>
                        </div>
                        <div class="i">
                            <img src="${data.urls.raw}" alt="">
                            
                        </div>
                         <p>${data.user.bio}</p> 
                   `
                document.getElementById("conten").appendChild(bt)

      })
     load.style.display="inline-block"
      reset.style.display="inline-block"


}
async function  api(val)
{
    
    let res= await fetch(`https://api.unsplash.com/search/photos?query=${val}&client_id=${client}&page=${page}`)
    let result=await res.json();
    update(result);

}



const keyword=document.getElementById("keyword");
const btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
         
     data=keyword.value
        document.getElementById("conten").innerHTML=" "
        api(data)
     
         
})
load.addEventListener("click",()=>{
            page++;
            api(data)

})
reset.addEventListener("click",()=>{
            page=1;
             document.getElementById("conten").innerHTML="";
              load.style.display="none"
      reset.style.display="none"
      keyword.value=""

})