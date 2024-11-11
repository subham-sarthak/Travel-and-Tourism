Array.from(document.getElementsByTagName('input')).forEach((e , i)=>{
    e.addEventListener('keyup',(el)=>{
        if (e.value.lenghth > 0)
        {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        }
        else
        {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(-180deg)";
        }
    })
})