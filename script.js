document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const message = document.getElementById("form-message");

  if (form && message) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (form.checkValidity()) {
        message.textContent =
          "Thank you for subscribing! Welcome to the ÈLORA Club. ♡";

        form.reset();
      }
    });
  }
});
// Visa rätt artikel i Beauty Journal
const articles = {
  "everyday-glow": {
    title: "The Everyday Glow",
    intro: "Discover the secrets to radiant, effortless beauty.",
    image: "images/elora-journal-everyday-glow.png",
  },
  "perfect-lip": {
    title: "The Perfect Lip",
    intro: "Find your signature lip combination.",
    image: "images/elora-journal-perfect-lip.png",
  },
  "less-is-more": {
    title: "Less Is More",
    intro: "Explore the art of minimal makeup.",
    image: "images/elora-journal-less-is-more.png",
  },
};
// Visa rätt artikel i Beauty Journal
const params = new URLSearchParams(window.location.search);
const articleId = params.get("id");

if (articleId && articles[articleId]) {
  const article = articles[articleId];

  const title = document.getElementById("article-title");
  const intro = document.getElementById("article-intro");
  const image = document.getElementById("article-image");

  if (title && intro && image) {
    title.textContent = article.title;
    intro.textContent = article.intro;
    image.src = article.image;
    image.alt = article.title;
  }
}
// Olika texter till artiklarna i Beauty Journal
const articleContents = {
  "everyday-glow": `
    <h3>Beauty in its purest form</h3>
    <p>At ÈLORA, we believe that beauty begins with embracing your natural glow. A radiant makeup look doesn't have to be complicated.</p>
    <p>Start with hydrated skin and a lightweight base that enhances your natural complexion. Add a touch of soft blush to bring warmth and freshness to your face.</p>
    <p>Finish your look with a luminous highlighter and a glossy lip. The result is a fresh, effortless glow that feels like you.</p>
    <h3>Less makeup, more radiance</h3>
    <p>The secret to everyday beauty is keeping things simple. Choose products that enhance your features and let your natural beauty shine.</p>
  `,

  "perfect-lip": `
    <h3>The secret to the perfect lip</h3>
    <p>The perfect lip combination is all about finding shades that complement your natural beauty.</p>
    <p>Start with a soft nude or rosy lip liner to define your lips. Gently blend the colour inwards for a seamless, natural finish.</p>
    <p>Apply your favourite ÈLORA lip gloss for a beautiful shine that enhances your everyday look.</p>
    <h3>Your signature lip combination</h3>
    <p>Whether you prefer a subtle nude or a soft pink, the perfect lip is the one that makes you feel confident and effortlessly beautiful.</p>
  `,

  "less-is-more": `
    <h3>The beauty of simplicity</h3>
    <p>At ÈLORA, we believe that true beauty doesn't need to be complicated. Sometimes, less really is more.</p>
    <p>Choose a few essential products that enhance your natural features. A touch of blush, a luminous glow and a glossy lip can create a beautiful everyday look.</p>
    <p>Focus on healthy, radiant skin and soft colours that bring out your natural beauty.</p>
    <h3>Effortless beauty, every day</h3>
    <p>Minimal makeup is about feeling comfortable and confident in your own skin. Embrace your individuality and let your natural beauty shine.</p>
  `,
};

// Visa rätt artikeltext
if (articleId && articleContents[articleId]) {
  const content = document.getElementById("article-content");

  if (content) {
    content.innerHTML = articleContents[articleId];
  }
}
