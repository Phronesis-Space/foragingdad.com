Foraging Dad — first draft of foragingdad.com
=============================================

A static site (plain HTML, CSS, and a little JavaScript). No build step.
Open index.html or serve the folder:

    python3 -m http.server 8080

Pages
-----
- index.html        Home
- recipes.html      Recipes
- processing.html   Processing Wild Foods (traditional methods)
- find.html         How to Find Them (field guide, seasons, Tennessee focus)
- safety.html       Foraging Safety & Ethics (linked from How to Find Them)
- about.html        About + contact
- credits.html      Wikimedia Commons photo credits

Placeholders to replace
-----------------------
- About biography (yellow box on about.html)
- A real portrait, if you want one
- Contact email (hello@foragingdad.com is a placeholder mailto)
- Optional: your own field and kitchen photos in place of the Commons images

Hosting
-------
This folder can be uploaded as a whole to GitHub Pages, Netlify, or Cloudflare Pages,
or adapted into Squarespace code blocks. The domain foragingdad.com is already
registered through Squarespace; DNS will need to be pointed at whatever host you choose.


Seasonal homepage
-----------------
index.html is the Seasonal layout: What's Wild Right Now, with Spring/Summer/Fall/Winter
tabs (JavaScript; defaults to the current meteorological season; late November is Fall).
The circular badge on the homepage is a temporary placeholder (logo badge #1). Replace
images/logo-badge.png when the final logo is ready.
