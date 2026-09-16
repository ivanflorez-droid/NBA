# Scholas NY Career Pathways — Funder Landing Page

## Original problem statement
Build a single-page, funder-facing landing page for Scholas USA (501(c)(3) founded by Pope Francis, 2013, partnered with the Archdiocese of New York) presenting "Scholas NY Career Pathways" — a school-to-career program for youth ages 14–24 in the Bronx and Brooklyn — to the NBA Foundation. A program officer must be able to skim it in under 60 seconds on a phone and judge eligibility and credibility. Static, no backend, no database, no forms; noindex/nofollow; anchor links only (#program, #director); accessible (4.5:1 contrast, 44px+ touch targets, semantic headings); all unverified data rendered visibly as muted placeholders ([CONFIRM], [STAT], [SOURCE], [QUOTE TO RECORD], [NAME], [HERO PHOTO]); exact design system (Newsreader 500 display / Public Sans body, #FBFAF7 / #F2EEE5 / #14171F / #0F2A43 / #C2571F / #A8491A palette, 1120px container, 96/56px section rhythm, 3–4px radius, hairline rules, inline stroke SVG icons only).

## User personas
- NBA Foundation program officer (primary): skims on phone, checks eligibility criteria, credibility markers, budget discipline
- NBA team community-relations staff (secondary): reached via outreach link

## Core requirements (static)
- 15 sections in exact specified order + footer, alternating band rhythm
- Placeholder convention: never fabricate stats, names, quotes, dates, or figures
- Dashed-border boxes for [HERO PHOTO] and [EXECUTIVE DIRECTOR VIDEO] (no stock imagery, no real embed)
- No "Donate now" language, no urgency/countdown, no gradients/shadows/emoji/icon circles

## Architecture
- React static single page: /app/frontend/src/App.js + /app/frontend/src/components/landing/*.jsx (16 section components + Bits.jsx for Ph/ArrowRight/PlayIcon)
- Styling: /app/frontend/src/App.css (design tokens as CSS variables, mobile-first breakpoints at 1000px/768px)
- /app/frontend/public/index.html: noindex/nofollow meta, Google Fonts (Newsreader + Public Sans), title/description
- Backend untouched (not used)

## Implemented
- 2026-09-16: Full page, all 15 sections with verbatim copy and placeholder convention; responsive tables that stack with field labels on mobile; 48px touch-target buttons; verified at 1920px and 390px via screenshots; fixed mobile table column-width bug.

## Backlog (blocked on user data — P0)
- Fill every [CONFIRM: ...] / [STAT] / [SOURCE: ...] placeholder with verified figures (EIN, youth counts, demographic %, cohort details, mentor names, board list, budget variance explanation, diversification plan, site-visit date)
- Record the four testimonial quotes (student, principal, parent, institutional partner) + attributions
- Shoot and embed the Executive Director video (90–120s) and the hero photo (signed releases)
- Add confirmed contact email to both mailto buttons; link the "Download the full proposal" button to the final PDF

## Next tasks
1. Collect verified data from Scholas USA team and swap placeholders
2. Produce video/photo assets and embed (lazy-loaded)
3. Final accessibility pass (axe/Lighthouse) after real content lands
