let todo=[];
let req = prompt("please enter your request");

while(true){
     
    if(req=="quit"){
        console.log("quiting app");
        break;
    }
    if (req=="list"){
        console.log("_____________");
        for(let i=0;i<=todo.length;i++){
            console.log(i,todo[i])
        }
    }
    
    else if(req=="add"){
        let task=prompt("pleast enter your task to add");
        todo.push(task);
        console.log("task added ")
    }     
    else if(req=="delete"){
            let idx = prompt("please enter the index of your task");
            todo.splice(idx,1);
            console.log("task deleted");
        } else {console.log("worng request");}
        req= prompt("please enter your request");
}