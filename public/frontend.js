// Initial page load - if someone visites our URL directly
// instead of clicking our buttons/links
const startingLocation = window.location.pathname;

const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const contactBtn = document.getElementById("contact");
const contentSection = document.getElementById("content");

switch (startingLocation) {
  case "/":
    renderHome();
    break;
  case "/about":
    renderAbout();
    break;
  case "/contact":
    renderContact();
    break;
  default:
    renderError();
}

// If someone clicks our buttons/links
homeBtn.addEventListener("click", () => {
  history.pushState({ page: "home" }, null, "/");
  renderHome();
});

aboutBtn.addEventListener("click", () => {
  history.pushState({ page: "about" }, null, "about");
  renderAbout();
});

contactBtn.addEventListener("click", () => {
  history.pushState({ page: "contact" }, null, "contact");
  renderContact();
});

// When someone uses the browser back/forward buttons
window.onpopstate = function (event) {
  if (event.state.page === "home") renderHome();
  if (event.state.page === "about") renderAbout();
  if (event.state.page === "contact") renderContact();
};

// The actual functions that modify the DOM
function renderHome() {
  const pageContent = `
  <h2>Homepage</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit ipsa minus eos voluptate eaque quasi sunt distinctio magni praesentium laboriosam tempore. Accusamus eaque consectetur officia aspernatur dolor dicta sequi!</p>
  `;

  contentSection.innerHTML = pageContent;
}

function renderAbout() {
  const pageContent = `
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit ipsa minus eos voluptate eaque quasi sunt distinctio magni praesentium laboriosam tempore. Accusamus eaque consectetur officia aspernatur dolor dicta sequi!</p>
  `;

  contentSection.innerHTML = pageContent;
}

function renderContact() {
  const pageContent = `
  <h2>Contact Page</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sit ipsa minus eos voluptate eaque quasi sunt distinctio magni praesentium laboriosam tempore. Accusamus eaque consectetur officia aspernatur dolor dicta sequi!</p>
  `;

  contentSection.innerHTML = pageContent;
}

function renderError() {
  const pageContent = `
  <h2>Error</h2>
  <p>You've done something very wrong to get here!</p>
  `;

  contentSection.innerHTML = pageContent;
}
