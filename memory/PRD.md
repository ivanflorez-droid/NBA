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
- 2026-09-25: Corrections round — (1) global color swap to Scholas teal palette (#0F4B4B deep bands, #1D8080 rules/numerals, #019791 bright display numerals ≥32px, #016F6B accent text, #017F7A button fills, white ground, #F2F7F6 soft bands, theme-color #0F4B4B); (2) leadership section reduced to two cards (Executive Director + Scholas Internship Team with hairline divider); (3) ask section rebuilt as two-year budget ($100k/yr, two tables with staff/direct-cost group rows). Note: the referenced "Section 11 Sustainability" sentence does not exist on this page, so "Year two funds that step directly" was not added.
- 2026-10-08 (round 2): Single-cohort realignment — program is now one cohort of 25 (March 2027 – February 2028). Program section rebuilt as three stages (Citizenship / Digital Media Apprenticeship / Career Navigation) with new path row; new "The year, month by month" calendar section and "Scholas is the employer" pay section ($17.00/40/$680/25 stats) inserted after the program; 14-school grid replaced by "Who this reaches" (five named Bronx/Brooklyn schools, stats row with [%] placeholders, 14-school secondary note); commitments list replaced (13 rows incl. $17,000 wages, 20 (80%) completions); ask rebuilt ($100,000, 0.4/0.4/0.35 FTE staffing, $19,200 wages line, 54% staff-costs note); skills table kept with updated deadline row and apprentice wording; hero eyebrow/subhead updated. Note: the "NBA team engagement section" referenced in item 12 does not exist on this page, so its bullet edits were not applied.

## Backlog (blocked on user data — P0)
- Fill every [CONFIRM: ...] / [STAT] / [SOURCE: ...] placeholder with verified figures (EIN, youth counts, demographic %, cohort details, mentor names, board list, budget variance explanation, diversification plan, site-visit date)
- Record the four testimonial quotes (student, principal, parent, institutional partner) + attributions
- Shoot and embed the Executive Director video (90–120s) and the hero photo (signed releases)
- Add confirmed contact email to both mailto buttons; link the "Download the full proposal" button to the final PDF

## Next tasks
1. Collect verified data from Scholas USA team and swap placeholders
2. Produce video/photo assets and embed (lazy-loaded)
3. Final accessibility pass (axe/Lighthouse) after real content lands
