function roomIdGenerate(){
    const letter:string="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let result:string=""

    for(let i=0;i<=6;i++){
        const randomIndex = Math.floor(Math.random() * letter.length);
        result+=letter[randomIndex]
    }
    return result;
}

export default roomIdGenerate