let comments = [
    {
        name: "Miroslav Novotný",
        date: new Date('2023-12-12T12:34:56Z'),
        text: "Filip is soo hot"
    },
    {
        name: "Filip Másilko",
        date: new Date('2023-12-12T12:34:56Z'),
        text: "Filip is wery handsome"
    },
    {
        name: "Vito Kraus",
        date: new Date('2023-12-12T12:34:56Z'),
        text: "I love how handsome filip is"
    }
]



let resultDiv = document.getElementById("result");

for (const comment of comments) {
    let div = document.createElement("div");
    div.className = "comentar";
    let jmeno = document.createElement("h4");
    jmeno.innerText = comment.name;
    let datum = document.createElement("h5");
    datum.innerText = comment.date.toLocaleString();
    let text = document.createElement("p");
    text.innerText = comment.text;
    let div2 = document.createElement("div");
    div2.className = "commentInfo";
    let img = document.createElement("img");
    img.src = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    div2.appendChild(img);
    div2.appendChild(jmeno);
    div2.appendChild(datum);
    div.appendChild(div2);
    div.appendChild(text);
    resultDiv.appendChild(div);
}