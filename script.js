let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")
let box1_img = document.getElementById("box1-img")
let box2_img = document.getElementById("box2-img")
let box3_img = document.getElementById("box3-img")
let box4_img = document.getElementById("box4-img")
let box5_img = document.getElementById("box5-img")
let box6_img = document.getElementById("box6-img")
let box7_img = document.getElementById("box7-img")
let box8_img = document.getElementById("box8-img")
let box9_img = document.getElementById("box9-img")
let o = document.getElementById("o")
let x = document.getElementById("x")
let selectionImg = document.getElementById("selectionImg")
let line1 = document.getElementById("line1")





function selectionImgChange() {

    x.addEventListener("click", function () {

        selectionImg.src = "x.png"

    })

    o.addEventListener("click", function () {

        selectionImg.src = "o.png"

    })

}





function draw() {

    function box1func() {
        box1.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box1_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box1_img.src = "x.png"


            }

            audioKnife.play()
            setTimeout(()=>{
                if ((box1_img.src === o.src) && (box2_img.src === o.src) && (box3_img.src === o.src) || (box1_img.src === x.src) && (box2_img.src === x.src) && (box3_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                  
            
                }

                 if ((box1_img.src === o.src) && (box4_img.src === o.src) && (box7_img.src === o.src) || (box1_img.src === x.src) && (box4_img.src === x.src) && (box7_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box1_img.src === o.src) && (box5_img.src === o.src) && (box9_img.src === o.src) || (box1_img.src === x.src) && (box5_img.src === x.src) && (box9_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }
    
            },200)
        })

        

    }
    function box2func() {

        box2.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box2_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box2_img.src = "x.png"


            }
            audioKnife.play()
            setTimeout(()=>{
                if ((box1_img.src === o.src) && (box2_img.src === o.src) && (box3_img.src === o.src) || (box1_img.src === x.src) && (box2_img.src === x.src) && (box3_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box2_img.src === o.src) && (box5_img.src === o.src) && (box8_img.src === o.src) || (box2_img.src === x.src) && (box5_img.src === x.src) && (box8_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }
    
            },200)

        })

       

    }

    function box3func() {

        box3.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box3_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box3_img.src = "x.png"


            }

            audioKnife.play()
            setTimeout(()=>{
            if ((box1_img.src === o.src) && (box2_img.src === o.src) && (box3_img.src === o.src) || (box1_img.src === x.src) && (box2_img.src === x.src) && (box3_img.src === x.src)){

                win.style.display = "inline"
                youWinGif.style.display = "inline"
                showAudio.play()
                
            }

            if ((box3_img.src === o.src) && (box6_img.src === o.src) && (box9_img.src === o.src) || (box6_img.src === x.src) && (box6_img.src === x.src) && (box9_img.src === x.src)){
    
                win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
        
            }

            if ((box3_img.src === o.src) && (box5_img.src === o.src) && (box7_img.src === o.src) || (box3_img.src === x.src) && (box5_img.src === x.src) && (box7_img.src === x.src)){
    
                win.style.display = "inline"
                youWinGif.style.display = "inline"
                showAudio.play()
               
            }

        },200)
        })

       

    }
    function box4func() {

        box4.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box4_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box4_img.src = "x.png"


            }

            audioKnife.play()

            setTimeout(()=>{
                if ((box1_img.src === o.src) && (box4_img.src === o.src) && (box7_img.src === o.src) || (box1_img.src === x.src) && (box4_img.src === x.src) && (box7_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box4_img.src === o.src) && (box5_img.src === o.src) && (box6_img.src === o.src) || (box4_img.src === x.src) && (box5_img.src === x.src) && (box6_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }
    
            },200)

            
        })

    }
    function box5func() {

        box5.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box5_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box5_img.src = "x.png"


            }

            audioKnife.play()

            setTimeout(()=>{
             

             

                if ((box1_img.src === o.src) && (box5_img.src === o.src) && (box9_img.src === o.src) || (box1_img.src === x.src) && (box5_img.src === x.src) && (box9_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
                }

                if ((box3_img.src === o.src) && (box5_img.src === o.src) && (box7_img.src === o.src) || (box3_img.src === x.src) && (box5_img.src === x.src) && (box7_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box2_img.src === o.src) && (box5_img.src === o.src) && (box8_img.src === o.src) || (box2_img.src === x.src) && (box5_img.src === x.src) && (box8_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box4_img.src === o.src) && (box5_img.src === o.src) && (box6_img.src === o.src) || (box4_img.src === x.src) && (box5_img.src === x.src) && (box6_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
                }
    
    
            },200)
        })

    }
    function box6func() {

        box6.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box6_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box6_img.src = "x.png"


            }
            audioKnife.play()

            setTimeout(()=>{
            

                if ((box3_img.src === o.src) && (box6_img.src === o.src) && (box9_img.src === o.src) || (box3_img.src === x.src) && (box6_img.src === x.src) && (box9_img.src === x.src)){
    
                    win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box4_img.src === o.src) && (box5_img.src === o.src) && (box6_img.src === o.src) || (box4_img.src === x.src) && (box5_img.src === x.src) && (box6_img.src === x.src)){
    
                      win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }
    
    
            },200)

        })

    }
    function box7func() {

        box7.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box7_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box7_img.src = "x.png"


            }
            audioKnife.play()

            setTimeout(()=>{
                if ((box1_img.src === o.src) && (box4_img.src === o.src) && (box7_img.src === o.src) || (box1_img.src === x.src) && (box4_img.src === x.src) && (box7_img.src === x.src)){
    
                   win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box7_img.src === o.src) && (box8_img.src === o.src) && (box9_img.src === o.src) || (box7_img.src === x.src) && (box8_img.src === x.src) && (box9_img.src === x.src)){
    
                   win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box3_img.src === o.src) && (box5_img.src === o.src) && (box7_img.src === o.src) || (box3_img.src === x.src) && (box5_img.src === x.src) && (box7_img.src === x.src)){
    
                   win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }
    
            },200)

        })

    }
    function box8func() {

        box8.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box8_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box8_img.src = "x.png"


            }

            audioKnife.play()
            
            setTimeout(()=>{
             

                if ((box7_img.src === o.src) && (box8_img.src === o.src) && (box9_img.src === o.src) || (box7_img.src === x.src) && (box8_img.src === x.src) && (box9_img.src === x.src)){
    
                   win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box2_img.src === o.src) && (box5_img.src === o.src) && (box8_img.src === o.src) || (box2_img.src === x.src) && (box5_img.src === x.src) && (box8_img.src === x.src)){
    
                   win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }
    
            },200)
        })

    }
    function box9func() {

        box9.addEventListener("click", function () {

            if (selectionImg.src === o.src) {

                box9_img.src = "o.png"

            } else if (selectionImg.src === x.src) {

                box9_img.src = "x.png"


            }
            audioKnife.play()

            setTimeout(()=>{
            

                if ((box7_img.src === o.src) && (box8_img.src === o.src) && (box9_img.src === o.src) || (box7_img.src === x.src) && (box8_img.src === x.src) && (box9_img.src === x.src)){
    
                   win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                if ((box3_img.src === o.src) && (box6_img.src === o.src) && (box9_img.src === o.src) || (box3_img.src === x.src) && (box6_img.src === x.src) && (box9_img.src === x.src)){
    
                   win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }

                
                if ((box1_img.src === o.src) && (box5_img.src === o.src) && (box9_img.src === o.src) || (box1_img.src === x.src) && (box5_img.src === x.src) && (box9_img.src === x.src)){
    
                   win.style.display = "inline"
                    youWinGif.style.display = "inline"
                    showAudio.play()
                   
            
                }
    
            },200)

        })

    }








    box1func()
    box2func()
    box3func()
    box4func()
    box5func()
    box6func()
    box7func()
    box8func()
    box9func()

  

}
   

    




selectionImgChange()
draw()

