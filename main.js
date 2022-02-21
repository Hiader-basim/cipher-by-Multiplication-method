let alphabit = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let plane = document.querySelector(".planeText");
let key = document.querySelector(".planeKey");
let encryption = document.querySelector(".encryptionButton");

let resultOfEncryption = document.querySelector(".resultOfEncryption")


encryption.onclick = () =>{
    let planeText = Array.from(plane.value);
    let ciyperText = [];
    for (let i = 0 ; i < planeText.length; i++ ){
        for(let j = 0 ; j < alphabit.length; j++){
            if (planeText[i] === alphabit[j]) {
                let k = parseInt(key.value);
                let z = (j * k) % 26 ;
                ciyperText.push(alphabit[z]);
            }
        }
    }
    resultOfEncryption.innerHTML = ciyperText.join("") ;
}

let cypher = document.querySelector(".cypherText");
let decryption = document.querySelector(".decryptionButton");
let cypherkey = document.querySelector(".cypherKey");
let resultOfDecryption = document.querySelector(".resultOfDecryption");


decryption.onclick = () =>{
   let cypherText = Array.from(cypher.value);
    let planeText = [];
    for (let i = 0 ; i < cypherText.length; i++ ){
        for(let j = 0 ; j < alphabit.length; j++){
            if (cypherText[i] === alphabit[j]) {
                let k = parseInt(cypherkey.value);
                let abs = j * k;
                let z ;
                if (abs < 0){
                    z = abs + 26 ;
                }else if(abs > 0){
                    z = abs % 26 ;
                }else if (abs == 0){
                    z = 0 ;
                }
                planeText.push(alphabit[z]);
            }
        }
    }
    resultOfDecryption.innerHTML = planeText.join("");
}