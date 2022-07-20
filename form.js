const submit = document.querySelector(".btn-success");
const responseForm = document.querySelector(".response_form");


submit.addEventListener("click", newForm);


async function newForm() {

    let selectOne = document.querySelector(".one").value;
    let selectTwo = document.querySelector(".two").value;
    let selectThree = document.querySelector(".three").value;
    let selectFour = document.querySelector(".four").value;
    let selectFive = document.querySelector(".five").value;
    let inputOne = document.querySelector(".input_one").value;
    let inputTwo = document.querySelector(".input_two").value;

     await fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
        body: JSON.stringify({
            choice1: selectOne,
            choice2: selectTwo,
            choice3: selectThree,
            choice4: selectFour,
            choice5: selectFive,
            form1: inputOne,
            form2: inputTwo
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
         .then(response => {
             if (response.ok) {
                 alert('response is ok!');
                 return response.json()
             }
         })
        // .then(response => response.json())
        .then(json => {
            responseForm.innerHTML = 'response: ' + JSON.stringify(json);
        })
}
