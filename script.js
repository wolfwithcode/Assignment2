const $ = document.querySelector.bind(document);
const messageVi = "Đã submit thành công!";
const messageEn = "Submit successfully!";
const errorVi = "Số điện thoại không hợp lệ!";
const errorEn = "Invalid international phone number!";

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
        let message = language === "vi" ? messageVi : messageEn;
        let error = language === "vi" ? errorVi : errorEn;
        if (!isPhone(inputPhone.value)) {
          alert(`${error} : ${inputPhone.value}`);
        } else {
          alert(`${message}`);
        }
      };
    },
  };
})();

app.init();
