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

// function MultiPage() {
//     return (
//         <div>
//             <form id="multi-step-form">
//     <div class="form-step" id="step-1">
//         <label for="name">Name:</label>
//         <input type="text" name="name" id="name">
//             </input>
//         <button class="next-btn">Next</button>
//     </div>
//     <div class="form-step" id="step-2">
//         <label for="email">Email:</label>
//         <input type="email" name="email" id="email">
//         </input>
//         <button class="prev-btn">Previous</button>
//         <button class="next-btn">Next</button>
//     </div>
//     <div class="form-step" id="step-3">
//         <label for="phone">Phone:</label>
//         <input type="tel" name="phone" id="phone">
//         </input>
//         <button class="prev-btn">Previous</button>
//         <button class="submit-btn">Submit</button>
//     </div>
// </form>
//         </div>
//     );
// };

// export default MultiPage