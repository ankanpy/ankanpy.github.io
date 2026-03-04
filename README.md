# Ankan Ghosh — Personal Portfolio

> **Live site:** [ankanpy.github.io](https://ankanpy.github.io)

Personal portfolio and professional website for **Ankan Ghosh** — Senior ML Engineer, Computer Vision Researcher, and Technical Writer at [LearnOpenCV](https://learnopencv.com/author/ankan/).

Built on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template.

---

## Site Structure

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Interactive bio, experience/education tabs, featured writings |
| Writings | `/writings/` | All 26 LearnOpenCV articles |
| Talks | `/talks/` | VisionCraft (Indore) + TechX Bangalore workshops |
| CV | `/cv/` | Full curriculum vitae |

---

## Local Development with Docker (Recommended)

Docker Desktop must be running. The image is already built — this starts instantly:

```bash
docker compose up -d
```

Site is live at **http://localhost:4000**. Jekyll watch mode is enabled — save any file and it rebuilds automatically in ~2 seconds.

```bash
docker compose down       # stop
docker compose logs -f    # view live logs
docker compose restart    # needed after _config.yml changes
```

If you need to rebuild the image (only when `Gemfile` changes):

```bash
docker compose down
docker compose up --build
```

---

## Local Development without Docker (macOS)

```bash
# Install modern Ruby (system Ruby on macOS is too old)
brew install ruby
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export GEM_HOME="$HOME/.gem"
export PATH="$GEM_HOME/bin:$PATH"

gem install bundler
bundle install

bundle exec jekyll serve --livereload
```

---

## Deploy to GitHub Pages

```bash
git add .
git commit -m "your message"
git push origin master
```

GitHub Pages auto-builds on every push to `master`. Deployment takes 1–3 minutes.
Check status at: `https://github.com/ankanpy/ankanpy.github.io/actions`

---

## Key Files

| File | Purpose |
|------|---------|
| `_config.yml` | Site settings, author info, social links |
| `_pages/about.md` | Homepage — hero, tabs, featured writings |
| `_pages/writings.md` | All LearnOpenCV articles |
| `_pages/cv.md` | Full CV |
| `_data/navigation.yml` | Top nav links |
| `_talks/` | Talk/workshop entries |
| `images/` | Profile photo, org logos |
| `files/` | Resume PDF and other downloads |

---

## Assets to Add

- Profile photo → `images/profile.png`
- Resume PDF → `files/ankan_ghosh_resume.pdf`

---

## Important: Inline JavaScript in Pages

This repo uses HTML compression (`compress_html`) when `JEKYLL_ENV` is not `development`. When Docker Compose runs with `JEKYLL_ENV=docker`, the entire page is minified to a single line.

**Never use `//` single-line comments inside `<script>` blocks in `.md` pages.** They will break the script when compressed. Use `/* block comments */` instead.

---

<div align="center">

[![pages-build-deployment](https://github.com/ankanpy/ankanpy.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ankanpy/ankanpy.github.io/actions/workflows/pages/pages-build-deployment)
[![GitHub license](https://img.shields.io/github/license/ankanpy/ankanpy.github.io?color=blue)](https://github.com/ankanpy/ankanpy.github.io/blob/master/LICENSE)

</div>
