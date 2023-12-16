let comments = [
    {
        name: "Miroslav Novotný",
        date: 10.4,
        text: "miragay"
    },
    {
        name: "Filip Másilko",
        date: 10.4,
        text: "Filip is wery sexi man"
    },
    {
        name: "Vito Kraus",
        date: 10.4,
        text: "I love how sexi Filip is"
    }
]

let resultDiv = document.getElementById("result");

for (const comentar of comments) {
    let div = document.createElement("div");
    div.className = "comentar"
    let myname = document.createElement("h1")
    h1.className = "mynameis"
    let date = document.createElement("p")
    p.className = "mydate"
    let text = document.createElement("p");
    text.innerText = comment.text
    let div2 = document.createElement("div");
    div2.className = "commentInfo"
    let img = document.createElement("img");
    img.src = <img src="img.png" alt="profilovafotka"/>
    div2.appendChild(img);
    div2.appendChild(jmeno);
    div2.appendChild(datum);
    div.appendChild(div2);
    div.appendChild(text);
    resultDiv.appendChild(div);
}
