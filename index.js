let Homescore=document.getElementById("homescore")
let Awayscore=document.getElementById("awayscore")
let homecount=0
let awaycount=0
function inc1(){
    homecount+=1
    Homescore.innerText=homecount
}
function inc2(){
    homecount=homecount+2
    Homescore.innerText=homecount
}
function inc3(){
    homecount=homecount+3
    Homescore.innerText=homecount
}
function Inc1(){
    awaycount+=1
    Awayscore.innerText=awaycount
}
function Inc2(){
    awaycount=awaycount+2
    Awayscore.innerText=awaycount
}
function Inc3(){
    awaycount=awaycount+3
    Awayscore.innerText=awaycount
}