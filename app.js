
const ekranEl =document.querySelector("#ekran")
const sifreUzEL =document.querySelector("#ekran")
const upperEl =document.querySelector("#upper")
const lowerEl =document.querySelector("#lower")
const sayiEl =document.querySelector("#sayi")
const sembolEl =document.querySelector("#sembol")
const uretEl =document.querySelector("#uret")



/* büyük-küçük harf, sayı ve sembolleri bir değere atayalım */
const buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarf = "abcdefghijklmnopqrstuvwxyz";
const sayi = "0123456789";
const sembol = "!@#$%^&*()_+=";


// random olarak küçük harf getiren fonksiyon

const getLowerCase = () =>{
    return kucukHarf[Math.floor(Math.random()*kucukHarf.length)]
}


// random olarak büyük harf getiren fonksiyon
const getUpperCase = () =>{
    return buyukHarf[Math.floor(Math.random()*buyukHarf.length)]
}

// random olarak sayı getiren fonksiyon
const getNumber = () =>{
    return sayi[Math.floor(Math.random()*sayi.length)]
}
// random olarak sembol getiren fonksiyon
const getsembol = () =>{
    return sembol[Math.floor(Math.random()*sembol.length)]
}

// şifre üren bir fonksiyon

const sifreUret = () =>{

    const inputUZ = sifreUzEL.value

let password="";


if(upperEl.checked){
    password += getUpperCase()
}

if(lowerEl.checked){
    password += getLowerCase()
}

if(sayiEl.checked){
    password += getNumber()
}

if(sembolEl.checked){
    password += getsembol()
}

for(let i=password.length;i<inputUZ;i++){
    password+= tamamla()
}

ekranEl.innerHTML = password;

}

const tamamla = ()=>{

    const tamamlaArr=[]
if(upperEl.checked){
    tamamlaArr.push(getUpperCase())
}
if(lowerEl.checked){
    tamamlaArr.push(getLowerCase())
}
if(sayiEl.checked){
    tamamlaArr.push(getNumber())
}
if(sembolEl.checked){
    tamamlaArr.push(getsembol())
}

if(tamamlaArr.length ==0) return "";


return tamamlaArr[Math.floor(Math.random()*tamamlaArr.length)]



}
uretEl.addEventListener("click",sifreUret);