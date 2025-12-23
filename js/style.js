window.addEventListener("load", ()=>{
        
    setTimeout(()=>{
        const preloader=document.querySelector(".preloader")
        preloader.classList.add('remove')
    });

    const closedbtn=document.querySelector("#close")
    const rgba=document.querySelector(".rgbafornavphone")
    const ul=document.querySelector("ul")
    const bar=document.querySelector("#bar")
    bar.addEventListener("click", ()=>{
        ul.classList.add("displaybar")
        ul.classList.remove("close")
        rgba.classList.add("rgbafornavphoneVisible")
    })
    rgba.addEventListener("click", ()=>{
        ul.classList.remove("displaybar")
        ul.classList.add("close")
        rgba.classList.remove("rgbafornavphoneVisible")
    })
    closedbtn.addEventListener("click",()=>{
        ul.classList.remove("displaybar")
        ul.classList.add("close")
        rgba.classList.remove("rgbafornavphoneVisible")
    });
    const btnCommander=document.querySelectorAll(".btnCommander")
    btnCommander.forEach(btn => {
        const dialog=document.querySelector("dialog")
        const closeDialog=document.querySelector("#closecmdBtn")
        btn.addEventListener("click", ()=>{
            dialog.showModal()
            dialog.classList.add("dialogOpen")
            dialog.classList.remove("removeDialog")
        })
        closeDialog.addEventListener("click", ()=>{
            dialog.close()
            dialog.classList.add("removeDialog")
            dialog.classList.remove("dialogopen")
        })
    });
    

    
});


const observer=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("see")
                entry.target.classList.remove("notsee")
            }
            else{
                entry.target.classList.add("notsee")
                entry.target.classList.remove("see")
            }
        });
});
    const boxs=document.querySelectorAll(".scrollAnimation")
    boxs.forEach(box =>observer.observe(box))






