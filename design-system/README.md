# Shared design tokens and component adapter

These files are generated from the OIKOS portfolio workbook. The workbook remains the source of brand assignments, layer colours and the three cross-format templates.

## Contract

- Resolve each output to a brand ID, integrity layer L1-L7 and template A/B/C.
- Use the shared navy/white/slate base; layer colours are accents.
- Use Astryx only for React-compatible targets. Do not introduce React into vanilla JS extensions, document renderers or other targets that do not need it.
- Map semantic component roles to verified Astryx exports. Do not guess package component names or assume that the neutral theme exposes a supported custom-theme API.
- Other renderers consume the same tokens through native CSS, SVG, Office, PDF, email, social and media adapters.
- Preserve asset IDs, lineage, existing stores and publication receipts.

## Current implementation state

REAL: source values extracted from the workbook into JSON and CSS; seven layers and three templates represented; workbook contains the integration and adapter contract.

PARTIAL: `t4h-portfolio-theme.tsx` is authored against Astryx's documented public `defineTheme` contract but has not yet been compiled with the pinned CLI version; typography and icon reconciliation, renderer wiring across existing factories, accessibility/contrast automation, and production render verification remain open.

## Astryx theme build procedure

Use the project-pinned `@astryxdesign/core` and matching `@astryxdesign/cli` versions. Run `npx @astryxdesign/cli docs theme` and `npx @astryxdesign/cli docs tokens` to retrieve the installed version's exact theme contract, then use `npx @astryxdesign/cli theme build` to generate a T4H theme from the semantic tokens above. Do not hand-author Astryx variable names from memory. Run `npx @astryxdesign/cli doctor --built .`, inspect component APIs with `npx @astryxdesign/cli component --list`, and validate a representative page in light and dark modes before marking the theme REAL.

## Keep it current

When the workbook changes, regenerate these files from its source sheets. When an upstream component framework or asset framework changes, compare its capabilities and compatibility against this contract, absorb useful improvements, and remove redundant adapters. Record the source delta, tests, receipt and outcome in the existing OIKOS change log and Runtime/Proof Pot evidence path. Do not create a second tracker.

## Files

- `portfolio-tokens.json`: machine-readable source-derived tokens and integration boundaries.
- `portfolio-tokens.css`: CSS variables for web and extension surfaces.
- `t4h-portfolio-theme.tsx`: candidate Astryx theme extending the neutral theme with workbook-derived light/dark semantic tokens and seven local layer tokens. It is source-only until built and visually verified with the pinned Astryx CLI.
