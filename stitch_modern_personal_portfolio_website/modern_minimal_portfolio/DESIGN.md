---
name: Modern Minimal Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#00668a'
  on-secondary: '#ffffff'
  secondary-container: '#40c2fd'
  on-secondary-container: '#004d6a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  code:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a refined, architectural minimalism crafted specifically for modern personal profiles, portfolios, and personal editorial identities. It prioritizes clarity, deliberate spatial pacing, and absolute typographic hierarchy to establish immediate professional trust and technical authority.

### Target Audience & Emotional Intent
- **Audience:** Engineering leaders, design directors, tech recruiters, venture partners, and prospective clients looking for competence, attention to detail, and taste.
- **Emotional Tone:** Trustworthy, precise, elevated, and calm. The interface recedes cleanly to let creative work and written insights command the foreground.

### Visual Aesthetic
- **Movement:** Modern Minimalism with subtle tactile cues.
- **Characteristics:** Razor-thin low-contrast borders, expansive neutral canvas backdrops, selective high-chroma royal blue focal points, and fluid transitions. Surfaces rely on pure structural composition rather than decorative ornament.

## Colors

The palette is anchored by a high-contrast foundation of crystalline whites and deep slate, accentuated by a precise royal blue spectrum for primary actions and sky blue for secondary highlights.

### Functional Roles

- **Primary Canvas (`#FFFFFF`):** Base screen background, card elevated layers, and floating overlays.
- **Subtle Surface (`#F8FAFC`):** Grouped background sections, badge fills, code block containers, and inset panels.
- **Primary Ink (`#0F172A`):** High-contrast headlines, primary labels, and active navigation states.
- **Muted Ink (`#334155`):** Standard reading body text, secondary labels, and icon fills.
- **Subtle Ink (`#64748B`):** Metadata, timestamps, captions, placeholder states, and auxiliary badges.
- **Border / Hairline (`#E2E8F0`):** Ultra-fine structural lines, card framing, and list separators. Active or hover lines transition to `#CBD5E1`.
- **Primary Blue Accent (`#2563EB`):** High-priority calls to action, key project tags, active indicator dots, and primary hyperlinks. Hover state: `#1D4ED8`.
- **Sky Accent (`#38BDF8`):** Live badges, ambient accent glows, metric graphs, and secondary emphasis tags.

Avoid solid dark panels across large screen areas; preserve the pristine luminous canvas across all responsive viewpoints.

## Typography

The type hierarchy uses `Inter` across all structural layers for pure mechanical clarity, geometric rhythm, and cross-platform fidelity.

### Hierarchy & Composition Rules
- **Negative Tracking on Headlines:** Tighten letter spacing (`-0.03em` to `-0.01em`) on sizes above 20px to lock headlines into solid typographic blocks.
- **Editorial Legibility:** Body copy maintains a minimum `1.6x` line-height ratio for frictionless scanning across long project case studies and essays.
- **Micro-Labels:** Use `label-sm` with slight positive tracking (`+0.02em`) and medium weight for uppercase section chips, status tags, and timeline markers.

## Layout & Spacing

The layout is built around a disciplined 12-column grid anchored to a maximum container width of `1200px` for optimal viewing on desktop displays, paired with centered reading tracks capped at `720px` for case studies and writing sections.

### Breakpoints & Grid Scaling
- **Desktop (1024px+):** 12 columns, `1.5rem` (`24px`) gutters, `3rem` (`48px`) outer margin. Maximum canvas width `1200px`.
- **Tablet (768px – 1023px):** 8 columns, `1.25rem` (`20px`) gutters, `2rem` (`32px`) outer margin.
- **Mobile (Below 768px):** 4 columns, `1rem` (`16px`) gutters, `1.25rem` (`20px`) canvas margin. Multi-column project cards reflow into a clean single-column sequence.

### Vertical Rhythm
Section blocks adhere to an 8px base rhythm. Large portfolio showcase divisions require `5rem` to `7rem` (80px - 112px) vertical buffers on desktop, reducing to `3.5rem` (56px) on mobile viewports to preserve momentum while maintaining an airy, editorial feel.

## Elevation & Depth

Visual hierarchy uses flat surfaces framed by precise, hairline borders combined with soft ambient light falloffs.

### Depth Archetype: Hairline + Diffused Ambient Light
- **Flat Surface (Level 0):** Unbordered or segmented purely through `#F8FAFC` background contrasts. Used for base page bodies and section alternations.
- **Card Framing (Level 1):** Solid `#FFFFFF` fill with a crisp `1px solid #E2E8F0` border and a soft ambient shadow:
  - `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02);`
- **Elevated Hover / Floating Dock (Level 2):** Applied when cards are hovered or to sticky navigation headers:
  - `box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.03);`
  - Border transitions gently to `#CBD5E1`.
- **Interactive Modals & Lightbox (Level 3):**
  - `box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.12);`
  - Paired with a backdrop blur: `backdrop-filter: blur(12px); background-color: rgba(255, 255, 255, 0.82);`

Heavy multi-colored drop shadows and dark skeumorphic gradients are strictly avoided. Depth is always subtle, light-weight, and natural.

## Shapes

The design system utilizes smooth geometry (`roundedness: 2`), applying `1rem` (16px) and `1.5rem` (24px) corner radii to project cards, navigation capsules, and interactive modules.

### Radius Distribution
- **Cards & Showcase Modules:** `rounded-2xl` (`1.5rem` / `24px`) for large portfolio cards, case study featured panels, and modal dialogs.
- **Interactive Inputs & Nested Containers:** `rounded-xl` (`0.75rem` - `1rem` / `12px` - `16px`) for form fields, code previews, and buttons.
- **Micro-Badges & Filter Pills:** `rounded-full` (`9999px`) for skill chips, status badges, and floating action triggers.

## Components

### Buttons
- **Primary Button:** `#2563EB` background with `#FFFFFF` text. Height of `44px` on desktop and mobile for comfortable touch targets. Padding: `0.75rem 1.5rem`. Border radius: `rounded-xl` (`12px`). Transitions to `#1D4ED8` on hover.
- **Secondary / Ghost Button:** Transparent background, `1px solid #E2E8F0` border, `#0F172A` text. Hover state: background `#F8FAFC`, border `#CBD5E1`.
- **Icon Button:** `44x44px` square touch target, `rounded-xl`, subtle border (`1px solid #E2E8F0`), center-aligned icon with `#334155` default fill, shifting to `#0F172A` on hover.

### Cards & Project Showcase
- **Case Study Card:** `#FFFFFF` background, `rounded-2xl` (`24px`), `1px solid #E2E8F0`, subtle shadow. Padding `1.5rem` to `2rem`.
- **Media Previews:** Aspect ratio `16:10`, nested within the card with an inner radius of `16px` (`rounded-xl`), framed with `1px solid rgba(15, 23, 42, 0.04)`.
- **Hover Micro-interaction:** Subtle `-2px` vertical translate on desktop hover, accompanied by elevation shift to Level 2 and an active title color transition to `#2563EB`.

### Chips & Badges
- **Tech Stack & Skill Chips:** `rounded-full`, height `28px`, padding `0.25rem 0.75rem`. Fill `#F8FAFC`, border `1px solid #E2E8F0`, text `label-sm` in `#334155`.
- **Live Status Indicator:** Pill badge with a pulsing `#38BDF8` or `#2563EB` 6px dot, text in `#0F172A`, surface fill `#F0F9FF`, border `1px solid #BAE6FD`.

### Form Controls
- **Input Fields & Textareas:** Height `44px` (inputs), `rounded-xl` (`12px`), border `1px solid #E2E8F0`, background `#FFFFFF`. Focus ring: `2px solid #2563EB` with `0 0 0 4px rgba(37, 99, 235, 0.1)`. Placeholder styled in `#64748B`.
- **Checkboxes & Radios:** `20x20px` target with `rounded-md` (checkbox) or `rounded-full` (radio). Inactive state: `1px solid #CBD5E1`. Checked state: background `#2563EB` with `#FFFFFF` check mark icon.

### Navigation Header
- **Floating Pill Bar:** Centered floating navigation container, `rounded-full`, backdrop blur `16px`, background `rgba(255, 255, 255, 0.85)`, border `1px solid #E2E8F0`. Padding `0.5rem 1.25rem`. Height `52px`. Links styled in `label-md` (`#334155`) with active state highlighted in `#0F172A` over a soft `#F1F5F9` capsule fill.

### List & Timeline View
- **Experience Timeline:** Continuous vertical line `1px solid #E2E8F0` positioned along the left edge. Timeline milestones marked by an `8x8px` solid circular anchor (`#2563EB` for ongoing roles, `#CBD5E1` for completed terms), accompanied by title, organization, and metadata in `#64748B`.