$(document).ready(function () {
  SetDefaults();
  SetEventListeners();
  SetAutoChangeInputs();
});

const guest = [
  {
    inviteCode: "909651",
    guestName: "Guilherme Maier e Família",
    inviteNmb: 3,
  },
  {
    inviteCode: "707944",
    guestName: "Alexandre Dalla Pozza",
    inviteNmb: 2,
  },
  {
    inviteCode: "365144",
    guestName: "Gabriel Lago e Família",
    inviteNmb: 2,
  },
];

let codeArray = [...document.querySelectorAll(".code_input")];
const nameField = document.getElementById("guestName");
const warningMessage = document.querySelector(".wrong_number");
const select = document.getElementById("slct");
const selectDiv = document.getElementsByClassName("disabled");
const optPessoas = [
  "Uma Pessoa",
  "Duas Pessoas",
  "Três Pessoas",
  "Quatro Pessoas",
  "Cinco Pessoas",
  "Seis Pessoas",
];

function SetDefaults() {
  nameField.disabled = true;
  select.disabled = true;
  $("#slct").find("option").not("#escolha").remove();
  $(".select").addClass("disabled");
}

function SetEventListeners() {
  $("#code_verify").click(DoEverything);
}

function SetAutoChangeInputs() {
  const inputElements = [...document.querySelectorAll("input.code_input")];

  inputElements.forEach((ele, index) => {
    ele.addEventListener("keydown", (e) => {
      if (e.keyCode === 8 && e.target.value === "")
        inputElements[Math.max(0, index - 1)].focus();
    });
    ele.addEventListener("input", (e) => {
      const [first, ...rest] = e.target.value;
      e.target.value = first ?? "";
      if (index !== inputElements.length - 1 && first !== undefined) {
        inputElements[index + 1].focus();
        inputElements[index + 1].value = rest.join("");
        inputElements[index + 1].dispatchEvent(new Event("input"));
      }
    });
  });
}

function DoEverything() {
  var newArray = [];

  for (let codeNmb of codeArray) {
    newArray.push(codeNmb.value);
  }
  let codeJoin = newArray.join("");

  if (guest.some((individual) => individual.inviteCode === codeJoin)) {
    if (warningMessage.classList.contains("wrong_number_warning")) {
      warningMessage.classList.remove("wrong_number_warning");
    }
    nameField.disabled = false;

    var codeInvite = guest.filter(
      (current) => current.inviteCode === codeJoin
    )[0].guestName;

    nameField.value = codeInvite;

    select.disabled = false;

    $("#slct").find("option").not("#escolha").remove();
    $(".select").removeClass("disabled");

    let inviteNmbrs = guest.filter(
      (current) => current.inviteCode === codeJoin
    )[0].inviteNmb;

    for (let i = 0; i < inviteNmbrs; i++) {
      $("#slct").append(
        $("<option>")
          .val(i + 1)
          .text(optPessoas[i])
      );
    }
  } else {
    warningMessage.classList.add("wrong_number_warning");
    if ($("#slct").prop("disabled", false)) {
      $("#slct").find("option").not("#escolha").remove();
      $(select).attr("disabled", true);
      $(nameField).attr("disabled", true);
      $(".select").addClass("disabled");
      nameField.value = "Digite seu nome aqui...";
    }
  }
}
