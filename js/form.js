const submit = document.querySelector(".btn-success");
const responseForm = document.querySelector(".response_form");
submit.addEventListener("click", newForm);

async function newForm() {

    let res = [];
    Array.from(document.querySelectorAll('.form')).forEach(e => {
        res.push((Array.from(e.querySelectorAll('input,select')).map(e => e.value)));
    });

    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(res),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => {
            if (response.ok) {
                alert('response is ok!');
                return response.json();
            }
        })
        .then(json => {
            responseForm.innerHTML = 'response: ' + JSON.stringify(json);
        })
}