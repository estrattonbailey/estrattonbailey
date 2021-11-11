!(async function (global) {
  const { contents } = await fetch(
    "https://api.are.na/v2/channels/every-thing/contents?&per=100"
  ).then((res) => res.json());

  const history = document.getElementById("history");

  history.innerHTML = "";

  contents.reverse().map((item) => {
    const { generated_title, source } = item;
    const { url } = source;
    history.innerHTML += `<a href="${url}" target="_blank">${
      generated_title || url.replace(/https?:\/\//, "")
    }</a>`;
  });
})(window);
