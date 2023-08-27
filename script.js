const getcolor = () => {
    const RandomNumber = Math.floor(Math.random() * 16777215)
    const Randomcode = "#" + RandomNumber.toString(16);
    document.getElementById("minicolorbox").style.backgroundColor = Randomcode;
    document.getElementById("h2").innerHTML = Randomcode
    document.getElementById("btn").style.backgroundColor=Randomcode
    document.getElementById("copy").style.backgroundColor=Randomcode


    let copy = document.getElementById("copy")
    copy.addEventListener("click", function () {
        navigator.clipboard.writeText(Randomcode)
        copy.innerText="Copied"
    })
    document.getElementById("copy").innerText="Copy"
}
document.getElementById("btn").addEventListener("click", getcolor);
getcolor();


