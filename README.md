# Chronicles of Myth Website

A responsive static website prepared for GitHub Pages.

## Files

- `index.html` — homepage
- `world.html` — setting and origin nations
- `chronikin.html` — Chronikin overview
- `play.html` — Core and Skirmish descriptions
- `downloads.html` — resource placeholders
- `about.html` — BlackMackMinis information and contact placeholders
- `style.css` — complete visual design
- `script.js` — mobile navigation and copyright year
- `assets/` — artwork extracted from the supplied rulebook
- `404.html` — GitHub Pages error page

## Preview locally

Open `index.html` in a browser.

For a more accurate local preview, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub organization for BlackMackMinis.
2. Create a public repository, for example `chronicles-of-myth-website`.
3. Upload all files and folders from this package to the repository root.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`.
7. Save. GitHub will provide a temporary website address.

## Connect a custom domain later

1. Rename `CNAME.example` to `CNAME`.
2. Replace `yourdomain.com` with the actual domain.
3. Configure DNS only after the GitHub Pages site works at its temporary address.

## Important placeholders

Search all files for:

- `hello@example.com`
- `Coming Soon`
- `href="#"`
- `yourdomain.com`

Replace those with final contact information, social links, PDF filenames, store links, and domain details.

## Adding PDF downloads

1. Create a folder named `downloads`.
2. Add PDF files.
3. Change a placeholder such as:

```html
<a href="#">Coming Soon</a>
```

to:

```html
<a href="downloads/core-quick-start.pdf">Download PDF</a>
```

## Artwork note

The included artwork was extracted from the supplied working rulebook. Confirm that every image is approved for public web publication before launch.
