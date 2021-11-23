const $ = document.querySelector.bind(document);
const messageVi = "Số điện thoại không hợp lệ!";
const messageEn = "Invalid international phone number!";

const app = (() => {
  const submitBtm = $("#submit");
  const inputPhone = $("#inputPhone");

  function isPhone(phone) {
    console.log(phone);
    const result = /^\+(?:[0-9] ?){6,14}[0-9]$/.test(phone);
    console.log(result);
    return result;
  }

  return {
    init() {
      submitBtm.onclick = () => {
        var language =
          window.navigator.userLanguage || window.navigator.language;

        if (!isPhone(inputPhone.value)) {
          let message = language === "vi" ? messageVi : messageEn;
          alert(`${message} : ${inputPhone.value}`);
        }
      };
    },
  };
})();

app.init();
