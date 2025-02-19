

document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("my-form") as HTMLFormElement;
    const cardNumberInput = document.getElementById("cardNumber") as HTMLInputElement;
    const cardHolderInput = document.getElementById("cardHolder") as HTMLInputElement;
    const expDateInput  = document.getElementById("exp-date") as HTMLInputElement;

    const displayCardNumber = document.getElementById("display-card-number") as HTMLParagraphElement;
    const displayCardHolder = document.getElementById("display-card-holder") as HTMLParagraphElement;
    const displayExpDate = document.getElementById("display-exp-date") as HTMLParagraphElement;

    form.addEventListener("submit",(event:Event)=>{
        event.preventDefault();

        displayCardNumber.textContent =cardNumberInput.value.trim() || "#### #### #### ####";
        displayCardHolder.textContent = cardHolderInput.value.trim() || "FULL NAME";
        displayExpDate.textContent = expDateInput.value.trim() || "MM/YY";
    });
});