const getTodos = (API) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                data.forEach((item) => {
                    let p = document.createElement("p");
                    p.innerHTML = `${item.name}<br> ${item.age}<br>${item.place}`;
                    document.body.appendChild(p);

                });

            } else if (request.readyState === 4) {
                reject("Ma'lumot kelmadi XATO !!!")
            }
        });

        request.open("GET", API);
        request.send();
    })
}

getTodos("/JSON/jasurjon.json")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);

    })