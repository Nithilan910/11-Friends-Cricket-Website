# 11 Friends Cricket Team Website

A responsive static website for 11 Friends Cricket Team.

## Files
- `index.html` — website content
- `style.css` — design and responsive layout
- `script.js` — mobile menu, reveal animations, current year
- `assets/team-photo.jpg` — uploaded team group photo
- `assets/logo.png` — uploaded 11 Friends logo

## Run locally
Open `index.html` directly in a browser, or use VS Code Live Server.

## Deploy with GitHub Pages
1. Create a GitHub repository, e.g. `11-friends-website`.
2. Upload all files and the `assets` folder.
3. In GitHub: Settings → Pages.
4. Under Build and deployment choose:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. Save. GitHub will provide your live website URL.

## Deploy with Vercel
1. Push this folder to GitHub.
2. Sign in to Vercel.
3. Add New Project → import the GitHub repository.
4. Framework preset: Other (or leave auto-detected).
5. Build command: leave empty.
6. Output directory: leave empty.
7. Deploy.

## Updating players
The player list is inside `index.html`. Each player card can later be expanded with:
- photo
- jersey number
- role
- batting/bowling style
- short bio

## Important
The current site uses the 27 names supplied by the team. Roles and individual photos were not supplied, so player cards intentionally use the player's initial until those details are added.
