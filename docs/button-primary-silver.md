# Primary CTA button (`.btn-primary-silver`)

Defined in [`src/index.css`](../src/index.css) (`@layer components`). Class name is historical; the control uses the same **ERP blue** as the nav wordmark (**`erp`** in [`tailwind.config.js`](../tailwind.config.js), **`#1e70d6`**). Used for **`Request a briefing`** ([`Header.tsx`](../src/components/Header.tsx), [`Hero.tsx`](../src/components/Hero.tsx), mobile nav) and **`Email our solutions team`** ([`ContactCTA.tsx`](../src/components/ContactCTA.tsx)).

**Brand blue** fill (**`bg-erp`**), **`text-white`**, soft blue lift shadow, **`ring-erp/40`**, hover **`bg-erp-600`** with a slightly stronger shadow, active **`translateY(1px)`**. Add spacing/size with utilities, e.g. **`px-4 py-2.5 text-sm`**, **`px-8 py-3.5`**.

**`accent`** / **`accent-light`** remain for silver-toned UI (logo-adjacent rails, metallic surfaces); warm **`organ`** neutrals stay on body copy.
