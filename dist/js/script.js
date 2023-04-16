const button = document.querySelector("button");
const body = document.querySelector("tbody");

let newData = (nama, jumlah, tanggal, deskripsi) => {
  const newRow = document.createElement("tr");
  //newRow.classList.add("even:bg-gray-100");

  const newDataRemove = document.createElement("td");
  newDataRemove.classList.add("data", "text-center");
  const buttonRemove = document.createElement("button");
  const remove = document.createTextNode("❌");
  buttonRemove.appendChild(remove);
  newDataRemove.appendChild(buttonRemove);
  // ini anak tr
  newRow.appendChild(newDataRemove);

  const newDataNama = document.createElement("td");
  newDataNama.classList.add("data");
  newDataNama.innerHTML = nama;
  // ini anak tr
  newRow.appendChild(newDataNama);

  const newDataJumlah = document.createElement("td");
  newDataJumlah.classList.add("data");
  newDataJumlah.innerHTML = jumlah;
  // ini anak tr
  newRow.appendChild(newDataJumlah);

  const newDataTanggal = document.createElement("td");
  newDataTanggal.classList.add("data");
  newDataTanggal.innerHTML = tanggal;
  // ini anak tr
  newRow.appendChild(newDataTanggal);

  const newDataDesc = document.createElement("td");
  newDataDesc.classList.add("data", "whitespace-nowrap");
  newDataDesc.innerHTML = deskripsi;
  // ini anak tr
  newRow.appendChild(newDataDesc);

  // ini buat nambahin tr di bawah tbody
  const body = document.querySelector("tbody");
  body.appendChild(newRow);
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelectorAll("input");

  if (input[0].value != "" && input[1].value != "" && input[2].value != "" && input[3].value != "") {
    const nama = input[0].value;
    const tanggal = input[1].value;
    const jumlah = input[2].value;
    const deskripsi = input[3].value;

    newData(nama, jumlah, tanggal, deskripsi);
  } else {
    alert("mohon isikan inputan");
  }
});

body.addEventListener("click", (e) => {
  e.target.parentElement.parentElement.remove();
});
