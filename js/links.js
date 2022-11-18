// const links = {
//   //
//   1: "https://elzero.org/category/assignments/javascript-bootcamp-assignments/",
//   2: "احذف الكلام وحط رابط وحط الرقم يلي تبيه",
//   4:  "  ملاحظة : الكلام يكون داخل النقطتين النصية  ",
//   3: "https://www.youtube.com/watch?v=PgxrG7AeM_g&list=PLDoPjvoNmBAyvm7f--dc6XqkpfDcen_vQ&index=10",
// };

// const links = {
//   100: "https://elzero.org/category/assignments/javascript-bootcamp-assignments/",
//   3: "https://www.youtube.com/",
//   12: "https://www.tabnine.com/academy/javascript/how-to-get-an-objects-keys-and-values/",
// };

let input = document.querySelector("#link_number");

input.oninput = function () {
  let localData = JSON.parse(localStorage.data);
  for (dat of localData) {
    //   console.log(dat.data[0]);
    if (dat.data[0] == input.value) {
      window.location.assign(dat.data[1]);
    } else {
      console.log(Error("wrong"));
    }
  }
};
