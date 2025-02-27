enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

function showHtmlError() {
  let randomValue = Math.floor(Math.random() * 6);

  let expression =
    randomValue <= 2
      ? console.log(`Error ${HtmlError.OK} (OK)`)
      : randomValue === 3
      ? console.log(`Error ${HtmlError.Redirect} (Redirect)`)
      : randomValue === 4
      ? console.log(`Error ${HtmlError.BadRequest} (BadRequest)`)
      : console.log(
          `Error ${HtmlError.InternalServerError} (InternalServerError)`
        );

  return expression;
}

showHtmlError();
