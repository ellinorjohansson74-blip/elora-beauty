# ÈLORA – AI Article Plugin

## Project

ÈLORA is a beauty website focused on makeup,
natural beauty and everyday elegance.

The website files are located in the Webbplats folder.

## Article creation

When asked to create a new article:

1. Follow the instructions in:
   .agents/skills/create-article/SKILL.md

2. Write an original beauty article in English.

3. Save the article as JSON in:
   artiklar/

4. Use the same JSON structure as:
   artiklar/test-artikel.json

5. Use a filename based on the article title:
   - Lowercase letters
   - Hyphens instead of spaces
   - No å, ä or ö

6. If the article includes an image:
   - Save the image in images/
   - Add src and alt in the JSON file.

7. Link the new article from the homepage using:
   artikel.html?id=artikelns-filnamn

## Important rules

- Do not overwrite existing articles.
- Do not modify existing website files without approval.
- Check that JSON is valid.
- Let a human review the article before publication.
- Do not include API keys or passwords.
