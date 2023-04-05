let tempo = 0, updates = 0, starttime = 0, lasttime = 0;
const tap = document.getElementById("tap"), detail = document.getElementById("detail"), resetvalue = document.getElementById("resetvalue"), resets = document.getElementById("resets");
function update(){
    let time = new Date();
    if(updates == 0){
        starttime = time.getTime();
        detail.innerText = "再次点击以记录第一次间隔";
        lasttime = starttime;
    }
    else{
        let now = time.getTime();
        if((now - lasttime) / 1000 >= 60 / tempo * resetvalue.value){
            updates = -1;
            tempo = 0;
            tap.innerText = "TAP"
            detail.innerText = "已重置，点击TAP按钮以开始";
        }
        else{
            lasttime = now;
            tempo = 60 / ((now - starttime) / 1000 / updates);
            tap.innerText = Math.round(tempo);
            detail.innerText = tempo;
        }
    }
    updates++;
}
tap.addEventListener("contextmenu", e=>{
    e.preventDefault();
    updates = 0;
    tempo = 0;
    tap.innerText = "TAP";
    detail.innerText = "已重置，点击TAP按钮以开始";
});
function updatereset(){
    resets.innerText = resetvalue.value;
}