document.addEventListener("DOMContentLoaded", () => {
  const formFields = document.getElementById("form-fields");
  const formSuccess = document.getElementById("form-success");
  const submitButton = document.getElementById("submit-form");
  const nameInput = document.getElementById("f-name");
  const phoneInput = document.getElementById("f-phone");

  const submitForm = () => {
    const phone = phoneInput?.value.trim() ?? "";
    const name = nameInput?.value.trim() ?? "";

    if (!name || !phone) {
      window.alert("Пожалуйста, заполните имя и телефон");
      return;
    }

    if (formFields) {
      formFields.style.display = "none";
    }

    if (formSuccess) {
      formSuccess.style.display = "block";
    }
  };

  if (submitButton) {
    submitButton.addEventListener("click", submitForm);
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetSelector = anchor.getAttribute("href");

      if (!targetSelector) {
        return;
      }

      const target = document.querySelector(targetSelector);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      let value = phoneInput.value.replace(/\D/g, "");

      if (value.startsWith("8")) {
        value = `7${value.slice(1)}`;
      }

      if (!value) {
        phoneInput.value = "";
        return;
      }

      if (!value.startsWith("7")) {
        value = `7${value}`;
      }

      const match = value.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

      if (!match) {
        return;
      }

      phoneInput.value =
        "+7" +
        (match[2] ? ` (${match[2]}` : "") +
        (match[3] ? `) ${match[3]}` : "") +
        (match[4] ? `-${match[4]}` : "") +
        (match[5] ? `-${match[5]}` : "");
    });
  }
});
