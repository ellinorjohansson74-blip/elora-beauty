# ÉLORA – Beauty Website

## Om projektet

ÉLORA är en fiktiv skönhetswebbplats som jag har skapat som en individuell inlämningsuppgift under min utbildning till Digital Marketing Specialist på IHM Business School.

Syftet med projektet är att skapa en stilren, användarvänlig och responsiv webbplats med fokus på skönhet, makeup och inspiration.

## Webbplatsens innehåll

Webbplatsen innehåller:

- En startsida med presentation av ÉLORA.
- Produktsektioner med fokus på läppar, rouge och glow.
- En Beauty Journal med artiklar om skönhet och makeup.
- En sida med information om varumärket.
- Navigering mellan webbplatsens olika sidor.

## Teknik

Webbplatsen är byggd med:

- **HTML** för struktur och innehåll.
- **CSS** för design, layout och responsiv anpassning.
- **JavaScript** för interaktiva funktioner och dynamisk visning av artiklar.
- **JSON** för att lagra och läsa in artikelinnehåll.

## AI och automation
Jag har använt AI som stöd under utvecklingen av webbplatsen, bland annat för idéer, textförslag, bilder och hjälp med HTML, CSS och JavaScript.

### AI-automation för artiklar

Jag har skapat en AI-stödd lösning för att producera artiklar till ÉLORAs Beauty Journal. I projektmappen finns en AI-skill i `.agents/skills/create-article/SKILL.md` som innehåller instruktioner för hur AI ska skapa nya artiklar.

Automationen utgår från ett valt ämne och hjälper till att skapa en artikel med rubrik, introduktion, underrubriker och brödtext. Artikeln följer webbplatsens JSON-struktur och sparas i mappen `artiklar`. JavaScript används sedan för att läsa in och visa artikelinnehållet på webbplatsen.

### Mänsklig granskning

AI-genererat innehåll behöver alltid granskas innan det publiceras. Jag kontrollerar att informationen är korrekt, att språket passar ÉLORAs varumärke och att artikeln är relevant för målgruppen.

Jag granskar även bilder, stavning och artikelns struktur. Vid behov ändrar jag innehållet innan det publiceras på webbplatsen.

### Feedback och förbättring

Genom att granska resultatet kan jag identifiera vad AI gör bra och vad som behöver förbättras. Om artiklarna exempelvis blir för generella eller inte passar varumärkets tonalitet kan instruktionerna i AI-skillen justeras.

På så sätt kan feedback användas för att förbättra framtida artiklar och göra processen mer effektiv, samtidigt som den mänskliga kontrollen finns kvar.
