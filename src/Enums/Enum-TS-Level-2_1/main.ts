enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

function showHtmlError()  {
  let randomValue = Math.floor(Math.random() * 6);

  let expression =
    randomValue <= 2
      ? console.log(HtmlError.OK)
      : randomValue === 3
      ? console.log(HtmlError.Redirect)
      : randomValue === 4
      ? console.log(HtmlError.BadRequest)
      : console.log(HtmlError.InternalServerError);

      return expression;
}

showHtmlError();
