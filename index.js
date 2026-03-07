// Login form message modal

let MainUserLoginForm = document.querySelector("#MainUserLoginForm");
let MainmessageModal = document.querySelector("#MainmessageModal");
let MainloginformModal = document.querySelector("#MainloginformModal");

MainUserLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginModal = bootstrap.Modal.getInstance(MainloginformModal);

  if (MainUserLoginForm) {
    loginModal.hide();
    document.querySelector("#UserName").value = "";
    document.querySelector("#Password").value = "";
  }

  if (MainmessageModal) {
    MainmessageModal.classList.remove("d-none");
  }

  setTimeout(() => {
    MainmessageModal.classList.add("d-none");
  }, 1500);
});

// Sign up message modal

let MainsignupMsgModal = document.querySelector("#MainsignupMsgModal");
let MainsignupFormModal = document.querySelector("#MainsignupformModal");

let MainsignupForm = document.querySelector("#MainsignupForm");

MainsignupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let signupModal = bootstrap.Modal.getInstance(MainsignupFormModal);

  if (MainsignupFormModal) {
    signupModal.hide();
    document.querySelector("#inputFirstName4").value = "";
    document.querySelector("#inputLastName4").value = "";
    document.querySelector("#inputEmail4").value = "";
    document.querySelector("#inputPassword4").value = "";
    document.querySelector("#inputCity").value = "";
    document.querySelector("#inputState").value = "";
    document.querySelector("#gridCheck").value = "";
    document.querySelector("#inputGender").value = "";
  }
  if (MainsignupMsgModal) {
    MainsignupMsgModal.classList.remove("d-none");
  }
  setTimeout(() => {
    MainsignupMsgModal.classList.add("d-none");
  }, 1500);
});

// Contact Us message modal
let contactusMsgModal = document.querySelector("#contactusMsgModal");
let ContactQueryForm = document.querySelector("#ContactQueryForm");

ContactQueryForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (contactusMsgModal) {
    contactusMsgModal.classList.remove("d-none");
  }

  setTimeout(() => {
    contactusMsgModal.classList.add("d-none");
  }, 1500);

  document.querySelector("#inputName").value = "";
  document.querySelector("#inputEmailc").value = "";
  document.querySelector("#inputAddress").value = "";
  document.querySelector("#inputAddress2").value = "";
  document.querySelector("#inputCity8").value = "";
  document.querySelector("#inputState8").value = "";
  document.querySelector("#inputZip").value = "";
});
