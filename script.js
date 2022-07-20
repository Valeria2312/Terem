const block1 = document.querySelector(".top_text");
const block2 = document.querySelector(".left");
const block3 = document.querySelector(".center");
const Modal = document.querySelector(".modal");
const modalToForm = document.querySelector(".btn-primary");
const btnText = document.querySelector(".btn-warning");
const btnBlocks = document.querySelector(".btn-success");
const BtnCloseModal = document.querySelector(".btn-secondary");
btnText.addEventListener("click", changeBlockOne);
btnBlocks.addEventListener("click", shiftBlocksToSecondRow);
BtnCloseModal.addEventListener("click", handleCloseModal);
modalToForm.addEventListener("click", openingToForm)

function changeBlockOne() {
    const display = block1.style.display;
    if(display==='none'){
        block1.style.display='block';
    } else {
        block1.style.display = 'none';
    }
}
function shiftBlocksToSecondRow() {
    block2.classList.toggle('left_toggle');
    block3.classList.toggle('center_toggle');
}

function handleCloseModal() {
    Modal.classList.remove("_active");
}

function openingToForm() {
    handleCloseModal();
    window.location.href = "form.html";
}