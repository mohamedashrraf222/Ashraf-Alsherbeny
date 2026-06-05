# Ashraf Mohamed — Professional Profile Page

A clean, mobile-first digital profile card for **Ashraf Mohamed**, Egyptian lawyer and workers' rights advocate at the Center for Trade Union and Workers Services (CTUWS). Designed to be shared via QR code at international events.

---

## What This Is

A single-page, static HTML/CSS/JS website that acts as a digital business card. Visitors can:

- Learn who Ashraf is and what he does
- Contact him via WhatsApp, Email, or Facebook
- Save his contact information as a `.vcf` file
- Copy his phone number or email to clipboard with a single tap

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main entry point — the full page |
| `styles.css` | All styling (mobile-first, responsive) |
| `script.js` | Contact save (VCF), clipboard copy, toast notifications |
| `README.md` | This documentation |

---

## How to Open Locally

No build tools or server needed. Just open the file in any browser:

```
Double-click index.html
```

Or via terminal:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

---

## How to Publish on GitHub Pages

1. **Create a GitHub repository** (e.g. `ashraf-profile`)
2. **Push this folder's contents** to the `main` branch:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ashraf-profile.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository → **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose `main` branch, `/ (root)` folder
   - Click **Save**

4. Your page will be live at:
   ```
   https://YOUR_USERNAME.github.io/ashraf-profile/
   ```

> The entry point is `index.html` at the root — GitHub Pages will serve it automatically.

---

## Features

- Responsive design: mobile, tablet, desktop
- WhatsApp, Email, Facebook quick-action buttons
- Save Contact downloads a `.vcf` file compatible with all phones
- Tap-to-copy for phone number and email
- ILO event badge in the header
- Language note (Arabic native, limited English)
- Organization section (CTUWS description)
- Accessible: semantic HTML, ARIA labels, focus states, readable contrast
- No frameworks, no dependencies, no backend

---

## Assumptions

- No profile photo provided; initials avatar ("AM") is used instead
- WhatsApp number: +20 122 662 5198
- Email: ashrafforhelp@gmail.com
- Facebook: https://www.facebook.com/ashraf.forhelp
- The ILO event context is Geneva, Switzerland (standard ILO HQ location)
