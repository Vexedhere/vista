const view = document.getElementById("view");
const address = document.getElementById("address");
const form = document.getElementById("address-form");

function navigate(value) {
  const input = value.trim();
  if (!input) return;

  let target;
  try {
    target = new URL(input.includes("://") ? input : "https://" + input).toString();
  } catch {
    target = "https://www.google.com/search?q=" + encodeURIComponent(input);
  }
  view.loadURL(target);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  navigate(address.value);
});

document.getElementById("back").addEventListener("click", () => {
  if (view.canGoBack()) view.goBack();
});
document.getElementById("forward").addEventListener("click", () => {
  if (view.canGoForward()) view.goForward();
});
document.getElementById("reload").addEventListener("click", () => view.reload());
document.getElementById("home").addEventListener("click", () => view.loadURL("https://www.google.com"));

view.addEventListener("did-navigate", (event) => {
  address.value = event.url;
});
view.addEventListener("did-navigate-in-page", (event) => {
  address.value = event.url;
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "l") {
    event.preventDefault();
    address.focus();
    address.select();
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "r") {
    event.preventDefault();
    view.reload();
  }
});
