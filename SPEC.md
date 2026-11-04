# Brand Studio decisions

This is the durable agreement between the learner and agent. Keep it concise and update it only with agreed choices or actual evidence. `Not chosen yet` is a valid status. Persona cards are hypotheses unless supported by real research.

[LEARNING.md](LEARNING.md) holds the short, reviewable record of learner explanations and help received. Keep the brand decisions and implementation evidence here; link rather than duplicate them.

## Current stage

- Stage: BRAND-001 kept; PR #2 merged into main and verified.
- Current feature: `BRAND-001` — first branded storefront and live style guide.
- Status: Kept after learner merge approval; verified merge commit 0d6ab0fafa9a2343af5ab16e67ad85692ff76a8b.
- Tracking issue: [BRAND-001 #1](https://github.com/Starlynn73/IS117007/issues/1). Pull request: [#2](https://github.com/Starlynn73/IS117007/pull/2).
- Next small decision: Optionally choose one small improvement and the visitor need it serves; none selected.

## Product boundary

The product is the same white T-shirt throughout the comparison. The baseline offers a size selector and temporary demo bag. No real orders, payment, accounts, or persistence. Keep product facts stable between directions; do not add unsupported claims about materials, manufacturing, sustainability, fit, delivery, scarcity, reviews, or sales.

## Audience hypotheses

The primary need guides the page. Give the secondary card one contrasting need to check that same page; keep both cards brief.

| Tiny card                             | Primary audience                                                                                                          | Secondary audience                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Person in a concrete situation        | College students going to a bar or casual hangout with friends                                                            | Student choosing a tee for class; AI proposal approved by learner |
| Goal or meaning they seek             | Feel comfortable and confident; have a go-to T-shirt they gravitate toward                                                | Easy everyday outfit ideas; AI proposal approved by learner       |
| Concern before choosing               | Tee feels too basic; doubts own styling ability compared with others; already owns plain clothes and may want more detail | Not chosen yet                                                    |
| What the page should help them decide | Learner proposes sneaker pairings and styling for different aesthetics that visitors can copy or take inspiration from    | Not chosen yet                                                    |
| Evidence or assumption                | Assumption; not validated                                                                                                 | Assumption; not validated                                         |

Comfort is the learner's desired experience, not a verified product claim. Audience needs above are learner hypotheses, not customer research.

## Early brand brief

| Decision                                 | Agreement                                                                                                                                                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand name                               | On the Go — proposed by learner and explicitly kept                                                                                                                                                 |
| One-sentence promise                     | Your go-to white tee for putting together a confident look, wherever your plans take you. — AI wording approved by learner                                                                          |
| Primary archetype: the brand's character | Everyperson — selected by learner from two AI-described options                                                                                                                                     |
| Three voice traits                       | Friendly, relaxed, encouraging — AI proposal approved by learner                                                                                                                                    |
| One example line in this voice           | AI-applied copy: "Use what you own; make it yours." Learner final page review pending.                                                                                                              |
| Learner's predicted audience effect      | After an AI outfit-example hint, learner proposed sneaker pairings and different aesthetics so visitors can copy looks or take inspiration. This is an anticipated benefit, not an observed result. |

First outfit example: streetwear, selected by learner from two AI-described options. Proposed styling uses relaxed jeans and statement sneakers; illustrations do not establish product details or items for sale.

## Visual decision

Compare two small hero previews before building the whole page. Hold the product, headline, supporting copy, and action identical. Use specific real design references and annotate visual choices, intended effect, and risk.

A simple original SVG wordmark is enough. Show small-size and one-color presentations; they may use the same asset when it works.

| Item                                              | Agreement or evidence                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared headline / support / action                | AI prototype: "Your plans. Your way." / approved promise / "Find your outfit". Identical in both previews; prototype headline/action not separately approved.                                                                                                                                              |
| Modernist preview, reference, and annotations     | [Preview A](public/explorations/modern.html), referencing Josef Müller-Brockmann, Musica Viva, 1958 in MoMA's catalogue; actual image inspected (printed event date 1959). Notes in preview.                                                                                                               |
| Postmodernist preview, reference, and annotations | [Preview B](public/explorations/postmodern.html), referencing Martine Bedin, Super lamp prototype, 1981, V&A; actual image inspected. Notes in preview.                                                                                                                                                    |
| Chosen direction and reason                       | B selected: learner likes the fonts and feels they elevate the website. Learner rejected cartoony clothing graphics and requested cool, effortless, gender-neutral chic, worn by a person. [Photographic revision](public/explorations/postmodern-photo.html) accepted with the v2 Black male model image. |
| Original SVG logo                                 | [Original wordmark proposal](public/assets/on-the-go-wordmark.svg): italic text with forward arrow. Approved by learner ("keep").                                                                                                                                                                          |
| Monochrome and small-size variants                | [Logo review](public/explorations/logo.html) uses the same one-ink SVG at 175 × 36px and larger on white.                                                                                                                                                                                                  |
| Logo review at actual use size                    | AI inspected legibility, silhouette and contrast at proposed navigation size and narrow layout; simple arrow supplies a recognizable ending. No trademark clearance claimed. Learner approved keeping the logo after the size and one-color presentations.                                                 |
| Shared palette, typography, spacing, and assets   | [styles.css](public/styles.css): warm paper, dark green ink, lime action, Georgia italic display, Arial body and shared spacing/components. Same SVG and generated outfit assets in store and guide. Final learner review pending.                                                                         |

## Ethical persuasion

Choose two applications that help the visitor make a voluntary, informed decision. Record their real implementation and mechanism rather than a principle name alone. Required size selection or validation alone does not establish consistency. Do not invent social proof, scarcity, authority, or product facts.

| Principle   | Actual copy or interaction                                                                                             | Visitor benefit / factual support                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reciprocity | Free sneaker and accessory pairings for streetwear and clean casual; no sign-up or purchase.                           | Learner selected free ideas and added accessories plus men/women. Earlier assisted benefit: people can copy or take inspiration. No conversion claim. |
| Consistency | Optional Save … for my plans opens a matching checklist and tee link. Removable; clears on refresh; never adds to bag. | Approved with "sure". Voluntary commitment is choosing an outfit for their plans; the next action follows that look. Size validation is separate.     |

## BRAND-001 — first branded storefront and live style guide

**Scope:** turn the working neutral storefront into the chosen brand's first coherent page. Keep the existing size selector and demo bag usable. Do not add checkout or all future features.

Keep when:

- The learner has chosen the audience hypotheses, brief, visual direction, and logo; the page visibly expresses those choices.
- Two annotated hero directions compare modernist/postmodernist thinking with the same content and real source links.
- The selected SVG logo works at small size and in one color; the presentations may share one asset.
- The storefront and live style guide share CSS variables, typography, components, and assets; they do not drift into separate identities.
- Two ethical persuasion applications are visible and their claims are supportable.
- Prepared checks pass, the agent has reviewed the slice and discussed one actual check, and the learner has reported a browser impression plus keyboard/mobile observations.
- The issue, branch, commit, and PR explain this feature in the learner's repository; agreed decisions and actual evidence are saved here. The learner has approved keeping and merging the change, and the merge into `main` is verified. Publishing is a separate choice.

## Evidence

Write a short result and link only evidence that exists. A passing browser check is evidence for its assertions, not customer research or proof of full accessibility.

| Spec ID   | Files                                                                                                                                                                                                                                      | Issue / PR                                                                                                                                                          | Actual checks and observations                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRAND-001 | [Store](public/index.html), [guide](public/styleguide.html), [styles](public/styles.css), [outfits](public/outfits.js), [browser test](tests/browser/outfits.spec.js), [explorations](public/explorations/), [renders](docs/explorations/) | [Issue #1](https://github.com/Starlynn73/IS117007/issues/1); [PR #2](https://github.com/Starlynn73/IS117007/pull/2); codex/brand-001; implementation commit eac0d78 | 2026-11-03: npm run check passed formatting/lint, 7 server tests, 11 browser tests. AI completed store, guide and studio desktop/390px visual reviews after browser recovery, with saved renders. Learner interpreted the saved-look check and supplied desktop, narrow-window and keyboard-focus observations; record accuracy approved ("no its good"); keeping approved; [PR #2 merge](https://github.com/Starlynn73/IS117007/commit/0d6ab0fafa9a2343af5ab16e67ad85692ff76a8b) verified. |

## Later

No follow-up is selected. `BRAND-001` is kept. One optional next cycle could be: perhaps a brand story, a supported fit guide, or richer demo-bag behavior. Agree its scope and add one new spec ID at that time.

Imagery clarification: learner wants a Black model, male or female; gender-neutral describes the clothing direction, not a requirement for the model. AI proposed a Black male adult in the revised photographic preview (on-the-go-streetwear-v2.png). Image accepted by learner ("perfect").

Learner checks: correctly identified accidental T-shirt addition as the bug caught by saving a look while expecting bag count 0. Desktop impression: model pose feels like a college student, color contrast works, simple chain adds a nice touch, and outfit feels casual/everyday. Narrow-window observation: learner reported elements appeared the same size but rearranged to accommodate the window. Keyboard observation after a concrete follow-up: learner saw a black outline around Find your outfit when reached with Tab.

Post-merge maintenance: .gitattributes preserves LF text line endings across Windows checkouts. npm run check rerun after local main synchronization: formatting/lint, 7 server tests and 11 browser tests passed.
