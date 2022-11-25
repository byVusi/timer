export function format(output, value) {
  if (value >= 10) {
    output.innerText = value;
  } else {
    output.innerText = `0${value}`;
  }
}

export function setFormat(input, output) {
  input.addEventListener("change", () => {
    let value = input.value;
    if (
      value == "" ||
      value == "+" ||
      value == "++" ||
      value == "-" ||
      value == "--" ||
      value < 0
    ) {
      output.innerText = `00`;
    } else if (value >= 0 && value < 24) {
      format(output, value);
    } else {
      output.innerText = `00`;
    }
  });
}
