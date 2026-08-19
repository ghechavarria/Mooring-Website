# Mixed light-section styles

Light marketing bands share **type, ERP blue, and copy**. Surfaces mix web-design languages so the page is not one treatment.

| Section | Language | Surface |
| --- | --- | --- |
| Production Glance | **Neumorphism** | Clay `#e6ebf2`, dual-shadow `.neu-pad` |
| Features | **Glassmorphism** | Cool wash, hanging-file drawer: offset tabs, stacked sheets, ghost `01`–`04`; product mock sits on the wash |
| LO Personal Assistant | **Neumorphism** | Same clay pads as Production Glance |
| End to end | **Swiss / International** | White, hairline rules, oversized numerals |
| LOS | **Glass seal** | Tilted circular MISMO 3.4 stamp beside copy — solid white fill, opaque `#0075ff` rings, no blur |
| Team | **Neumorphism** | Clay band, `.neu-pad` portrait frames |

Dark bands (hero, problem, pipeline, memory, blueprint band, contact, footer) and in-product mocks are unchanged.

## CSS (`src/index.css`)

`.section-neu` · `.neu-pad` · `.section-glass` · `.glass-folder` · `.glass-stamp` · `.section-swiss` · `.swiss-rail`

Mid-page bands use extra vertical padding for breathing room (`.section-marketing` is `py-36 sm:py-44`; per-section overrides add more). Hero and the contact band (`#contact`) keep their original spacing.
