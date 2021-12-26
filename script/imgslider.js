const img = document.querySelector("#img")
let images = ["./public/pix/ngo1.jpg","./public/pix/ngo2.jpg","./public/pix/ngo13.jpg","./public/pix/ngofb.jpg","./public/pix/ngo5.jpg","./public/pix/ngo6.jpg","./public/pix/ngo14.jpg"]
let num = 0

function transit(){
    num++;
    if(num<images.length){
        img.src = images[num]
        //alert(num)
    }

    else if(num==images.length){
        num = 0
        img.src = images[num]
        //alert(num)
    }
}                                               
window.setInterval(transit,2000)



function next(){
    num++;
    if(num==images.length){
        num = 0
        img.src = images[num]
        //alert(num)
    }
    img.src = images[num]

}

function prev(){
    num--;
    if(num==0){
        num=0
    }
    img.src = images[num]
}