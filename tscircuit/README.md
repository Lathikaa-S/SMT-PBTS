# SMT-PBTS v4.0 — minimal tscircuit reproduction

This folder reproduces the original EasyEDA speaker board in tscircuit. It
preserves the reference designators, 75 mm × 55 mm board outline, component
placement, BOM values, and 91 nets recovered from the PCB pad data.

This is a review reproduction, not a fabrication-ready conversion. Several
manufacturer footprints are represented by generic substitutes.

## Run

```sh
cd tscircuit
npm install
npm test
npm run dev -- index.circuit.tsx
```

`npm test` is the single reproduction test. It checks that tscircuit can load
the circuit and recover its netlist without errors or warnings.

## Source map

- `index.circuit.tsx`: board, placement, rails, and signal topology
- `components.tsx`: named-pin models for the six IC families
- `bom.ts`: original v4.0 resistor and capacitor values
- `original-netlist.ts`: EasyEDA pad-net recovery with anonymous nets normalized
- `__snapshots__/index.circuit-pcb.png`: the single committed PCB snapshot

## Known limitation

The generic IC footprints are not exact production land patterns. Do not export
manufacturing files from this reproduction.
