let errorModal=document.querySelector(".modal--error"),submitModal=document.querySelector(".modal--submit"),modalContainerError=document.querySelector(".modal-container--error"),modalContainerSubmit=document.querySelector(".modal-container--submit"),inputsText=document.querySelectorAll(".input-text:not(.input-text--emotions)");const applicantForm=document.getElementById("review");function handleFormSubmit(e){e.preventDefault();for(let e of inputsText)if(0===e.value.length)return errorModal.classList.remove("modal--hidden"),modalContainerError.classList.remove("modal-container--hidden"),!1;return submitModal.classList.remove("modal--hidden"),modalContainerSubmit.classList.remove("modal-container--hidden"),!0}applicantForm.addEventListener("submit",handleFormSubmit);let submitClose=document.getElementById("submitClose");submitClose.addEventListener("click",(function(){submitModal.classList.add("modal--hidden"),modalContainerSubmit.classList.add("modal-container--hidden")}));let errorClose=document.getElementById("errorClose");errorClose.addEventListener("click",(function(){errorModal.classList.add("modal--hidden"),modalContainerError.classList.add("modal-container--hidden")}));