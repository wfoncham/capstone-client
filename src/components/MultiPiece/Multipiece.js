// const form = document.getElementById('multi-step-form');
// const formSteps = form.querySelectorAll('.form-step');
// const prevBtns = form.querySelectorAll('.prev-btn');
// const nextBtns = form.querySelectorAll('.next-btn');
// const submitBtn = form.querySelector('.submit-btn');

// let currentStep = 0;

// function showStep(step) {
//     formSteps[currentStep].classList.remove('active');
//     formSteps[step].classList.add('active');
//     currentStep = step;

//     if (currentStep === 0) {
//         prevBtns.forEach(btn => btn.style.display = 'none');
//     } else {
//         prevBtns.forEach(btn => btn.style.display = 'inline-block');
//     }

//     if (currentStep === formSteps.length - 1) {
//         nextBtns.forEach(btn => btn.style.display = 'none');
//         submitBtn.style.display = 'inline-block';
//     } else {
//         nextBtns.forEach(btn => btn.style.display = 'inline-block');
//         submitBtn.style.display = 'none';
//     }
// }
// nextBtns.forEach(btn, index); => {
//     btn
// };

// export default showStep