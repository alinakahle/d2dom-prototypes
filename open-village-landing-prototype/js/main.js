(function () {
  const quiz = document.querySelector("[data-quiz]");

  if (!quiz) {
    return;
  }

  const form = quiz.querySelector("form");
  const steps = Array.from(quiz.querySelectorAll(".ov-quiz-step"));
  const successScreen = quiz.querySelector("[data-quiz-success]");
  const actions = quiz.querySelector("[data-quiz-actions]");
  const prevButton = quiz.querySelector('[data-action="prev"]');
  const nextButton = quiz.querySelector('[data-action="next"]');
  const submitButton = quiz.querySelector('[data-action="submit"]');
  const currentStepNode = quiz.querySelector("[data-step-current]");
  const totalStepsNode = quiz.querySelector("[data-step-total]");
  const progressBar = quiz.querySelector("[data-progress-bar]");
  let currentStep = 0;

  totalStepsNode.textContent = String(steps.length);

  function getCompletionRatio(stepIndex) {
    return ((stepIndex + 1) / steps.length) * 100;
  }

  function stepIsValid(stepIndex) {
    const step = steps[stepIndex];

    if (!step) {
      return false;
    }

    if (stepIndex === 0 || stepIndex === 1 || stepIndex === 2) {
      return Boolean(step.querySelector('input[type="radio"]:checked'));
    }

    if (stepIndex === 3) {
      const nameInput = step.querySelector('input[name="name"]');
      const phoneInput = step.querySelector('input[name="phone"]');
      return Boolean(nameInput.value.trim() && phoneInput.value.trim());
    }

    return true;
  }

  function updateControls() {
    currentStepNode.textContent = String(currentStep + 1);
    progressBar.style.width = `${getCompletionRatio(currentStep)}%`;
    prevButton.disabled = currentStep === 0;

    const onLastStep = currentStep === steps.length - 1;
    nextButton.hidden = onLastStep;
    submitButton.hidden = !onLastStep;

    if (onLastStep) {
      submitButton.disabled = !stepIsValid(currentStep);
    } else {
      nextButton.disabled = !stepIsValid(currentStep);
    }
  }

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      const isActive = index === stepIndex;
      step.hidden = !isActive;
      step.classList.toggle("is-active", isActive);
    });

    updateControls();
  }

  function goToStep(stepIndex) {
    currentStep = Math.max(0, Math.min(stepIndex, steps.length - 1));
    showStep(currentStep);
  }

  function handleInteractiveChange(event) {
    const target = event.target;

    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {
      return;
    }

    updateControls();
  }

  prevButton.addEventListener("click", function () {
    goToStep(currentStep - 1);
  });

  nextButton.addEventListener("click", function () {
    if (!stepIsValid(currentStep)) {
      return;
    }

    goToStep(currentStep + 1);
  });

  form.addEventListener("input", handleInteractiveChange);
  form.addEventListener("change", handleInteractiveChange);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!stepIsValid(currentStep)) {
      updateControls();
      return;
    }

    const payload = Object.fromEntries(new FormData(form).entries());
    console.info("Open Village quiz prototype payload:", payload);

    steps.forEach((step) => {
      step.hidden = true;
      step.classList.remove("is-active");
    });

    actions.hidden = true;
    successScreen.hidden = false;
    progressBar.style.width = "100%";
    currentStepNode.textContent = String(steps.length);
  });

  showStep(currentStep);
})();
