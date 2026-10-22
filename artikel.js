// Hämtar artikelns namn från webbadressen.
const articleParams = new URLSearchParams(window.location.search);
const testArticleId = articleParams.get("id");
async function loadArticle() {
  if (!testArticleId) return;

  try {
    // Läser in rätt JSON-fil från mappen artiklar.
    const response = await fetch(`artiklar/${testArticleId}.json`);

    if (!response.ok) {
      throw new Error("Artikeln kunde inte hittas.");
    }

    const article = await response.json();

    // Visar artikelns titel.
    document.getElementById("article-title").textContent = article.title;
    const articleImages = {
      "the-secret-to-soft-and-hydrated-lips": "images/soft-hydrated-lips.png",
      "the-art-of-everyday-makeup": "images/everyday-makeup-new.png",
      "the-everyday-glow": "images/elora-journal-everyday-glow.png",
      "the-perfect-lip": "images/elora-journal-perfect-lip.png",
      "less-is-more": "images/elora-journal-less-is-more.png",
      "how-to-achieve-a-natural-summer-glow": "images/summer-glow-new.png",
    };

    const articleImage = document.getElementById("article-image");

    if (articleImage && articleImages[testArticleId]) {
      articleImage.src = articleImages[testArticleId];
    }

    // Skapar innehållet utifrån JSON-filens block.
    const container = document.getElementById("article-content");
    container.innerHTML = "";

    article.content.forEach((block) => {
      let element;

      if (["h1", "h2", "h3", "p"].includes(block.type)) {
        element = document.createElement(block.type);
        element.textContent = block.text;
      } else if (block.type === "img") {
        element = document.createElement("img");
        element.src = block.src;
        element.alt = block.alt || "";
      } else if (block.type === "ul" || block.type === "ol") {
        element = document.createElement(block.type);

        (block.items || []).forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          element.appendChild(li);
        });
      }

      if (element) container.appendChild(element);
    });

    document.title = `${article.title} | ÉLORA`;
  } catch (error) {
    console.error(error);
    document.getElementById("article-content").textContent =
      "Artikeln kunde tyvärr inte laddas.";
  }
}

loadArticle();
