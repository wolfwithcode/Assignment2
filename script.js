const $ = document.querySelector.bind(document);

const app = (() => {
  const submitBtm = $("#submit");

  return {
    init() {
      submitBtm.onclick = () => {
        alert("test");
      };
    },
  };
})();

app.init();
