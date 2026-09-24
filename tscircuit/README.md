# SMT-PBTS v4.0 — tscircuit recreation

This folder is a maintainable tscircuit migration of the original EasyEDA
speaker design. It preserves the v4.0 functional blocks, reference designators,
major IC pin names, board envelope (75 mm × 55 mm), connectors, the complete
resistor/capacitor BOM, and 91 nets recovered from the EasyEDA PCB pad data.

The source is an **engineering recreation**, not a fabrication-equivalent
conversion. The proprietary BTM875-E module and several exact manufacturer
footprints are represented by reviewable generic footprints. See
[`../ISSUES.md`](../ISSUES.md) before treating the output as manufacturable.

## Run

```sh
cd tscircuit
npm install
npm run typecheck
npx tsci check netlist index.circuit.tsx
npx tsci check schematic-placement index.circuit.tsx
npx tsci check placement index.circuit.tsx
npm run build -- index.circuit.tsx
npm run snapshot:update
```

Use `npm run dev -- index.circuit.tsx` for the interactive PCB/schematic viewer.

## Source map

- `index.circuit.tsx`: board, placement, rails, and signal topology
- `components.tsx`: named-pin models for the six IC families
- `bom.ts`: original v4.0 resistor and capacitor values
- `original-netlist.ts`: EasyEDA pad-net recovery with anonymous nets normalized
- `__snapshots__/`: generated PCB and schematic evidence

## Current validation boundary

- Passing: TypeScript, tscircuit netlist (0 errors / 0 warnings), schematic
  placement, and PCB component placement.
- Failing: fabrication DRC and short checking because the generic IC footprints
  are not exact exposed-pad land patterns; several connector/LED endpoints also
  remain unresolved.
- The DRC-disable flags in `tscircuit.config.json` exist only to generate the
  routed review snapshot. Do not export manufacturing files until the P0 item in
  `../ISSUES.md` is closed and all checks run with DRC enabled.
