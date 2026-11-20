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

PARTIAL: Astryx package/export/theme binding, typography and icon reconciliation, renderer wiring across existing factories, accessibility/contrast automation, and production render verification.

## Keep it current

When the workbook changes, regenerate these files from its source sheets. When an upstream component framework or asset framework changes, compare its capabilities and compatibility against this contract, absorb useful improvements, and remove redundant adapters. Record the source delta, tests, receipt and outcome in the existing OIKOS change log and Runtime/Proof Pot evidence path. Do not create a second tracker.

## Files

- `portfolio-tokens.json`: machine-readable source-derived tokens and integration boundaries.
- `portfolio-tokens.css`: CSS variables for web and extension surfaces.
