import React from "react"
import {
  AudioCodec,
  BluetoothModule,
  BoostConverter,
  ClassABAmplifier,
  ClassDAmplifier,
  LinearRegulator,
  Regulator3V3,
} from "./components"
import { capacitorValues, resistorValues } from "./bom"
import { at } from "./pcb-placement"
import { originalNets } from "./original-netlist"

const resistors = Object.entries(resistorValues)
const capacitors = Object.entries(capacitorValues)

const passiveSchPosition = (index: number) => ({
  x: -20 + (index % 10) * 3,
  y: -10 - Math.floor(index / 10) * 2.4,
})

const clusteredCapacitors = [
  ["C3", { x: 12, y: -10 }], ["C28", { x: 13.2, y: -10 }], ["C29", { x: 14.4, y: -10 }], ["C30", { x: 15.6, y: -10 }],
  ["C37", { x: 12.45, y: -11 }], ["C38", { x: 13.65, y: -11 }], ["C39", { x: 14.85, y: -11 }], ["C46", { x: 16.05, y: -11 }],
  ["C47", { x: 12, y: -12 }], ["C48", { x: 13.2, y: -12 }], ["C49", { x: 14.4, y: -12 }], ["C50", { x: 15.6, y: -12 }],
  ["C51", { x: 12.45, y: -13 }], ["C58", { x: 13.65, y: -13 }], ["C59", { x: 14.85, y: -13 }], ["C60", { x: 16.05, y: -13 }],
  ...["C11", "C12", "C13", "C19", "C20"].map((name, index) => [name, { x: 12 + (index % 3) * 1.2 + (index >= 3 ? 0.6 : 0), y: -15 - Math.floor(index / 3) }] as const),
  ...["C21", "C22", "C23"].map((name, index) => [name, { x: 12 + index * 1.2, y: -17 }] as const),
]
const clusteredCapPosition = Object.fromEntries(clusteredCapacitors) as Record<string, { x: number; y: number }>

export default () => (
  <board width="75mm" height="55mm" layers={2} schAutoLayoutEnabled placementDrcChecksDisabled>
    <schematicsection name="Power" displayName="4S Battery, 17.5 V Boost and Regulators" />
    <schematicsection name="Digital" displayName="Bluetooth 5 and Audio DSP" />
    <schematicsection name="Tweeters" displayName="Three Class-AB Tweeter Channels" />
    <schematicsection name="Woofers" displayName="Dual PBTL Class-D Woofer Channels" />
    <schematicsection name="Passives" displayName="Original v4.0 BOM Passives" />

    <pcbnotetext pcbX={0} pcbY={25} text="SMT-PBTS v4.0 / tscircuit migration" fontSize={1.4} />
    <pcbnotetext pcbX={0} pcbY={-25} text="ENGINEERING RECREATION - REVIEW ISSUES.md BEFORE FAB" fontSize={1.1} />

    <pinheader name="PWR" pinCount={4} pitch="2.54mm" gender="female" pinLabels={["GND", "VBAT", "GND2", "VBAT2"]} showSilkscreenPinLabels {...at("PWR")} schWidth={0.675} schX={-22} schY={8} schSectionName="Power" />
    <BoostConverter name="U7" {...at("U7")} schX={-16} schY={8} schSectionName="Power" />
    <inductor name="L1" inductance="4.7uH" footprint="1210" {...at("L1")} schX={-19} schY={6} schSectionName="Power" />
    <LinearRegulator name="T1" {...at("T1")} schX={-10} schY={8} schSectionName="Power" />
    <Regulator3V3 name="U6" {...at("U6")} schX={-6} schY={8} schSectionName="Power" />

    <BluetoothModule name="U5" {...at("U5")} schX={0} schY={8} schSectionName="Digital" />
    <AudioCodec name="U4" {...at("U4")} schX={8} schY={8} schSectionName="Digital" />
    <pinheader name="E1" pinCount={4} pitch="1.27mm" gender="female" pinLabels={["NC", "RF", "GND1", "GND2"]} {...at("E1")} schWidth={0.58} schX={14} schY={8} schSectionName="Digital" />
    <pinheader name="ISP" pinCount={5} pitch="2.54mm" gender="female" pinLabels={["RESET", "SPI_CSB", "SPI_MISO", "SPI_MOSI", "SPI_CLK"]} {...at("ISP")} schWidth={0.96} schX={16} schY={5} schSectionName="Digital" />

    <ClassABAmplifier name="U1" {...at("U1")} schX={-15} schY={1} schSectionName="Tweeters" />
    <ClassABAmplifier name="U2" {...at("U2")} schX={-10} schY={1} schSectionName="Tweeters" />
    <ClassABAmplifier name="U3" {...at("U3")} schX={-5} schY={1} schSectionName="Tweeters" />
    <pinheader name="LEDS" pinCount={4} pitch="2.54mm" gender="female" pinLabels={["LED1", "LED0", "LED2", "GND"]} {...at("LEDS")} schWidth={0.58} schX={16} schY={1} schSectionName="Digital" />
    <pinheader name="SW" pinCount={2} pitch="2.54mm" gender="female" pinLabels={["MFB", "V3_3"]} {...at("SW")} schX={16} schY={-1} schSectionName="Digital" />
    <pinheader name="TWEETER" pinCount={6} pitch="2.54mm" gender="female" {...at("TWEETER")} schX={-21} schY={1} schSectionName="Tweeters" />

    <ClassDAmplifier name="U8" {...at("U8")} schX={1} schY={1} schSectionName="Woofers" />
    <ClassDAmplifier name="U9" {...at("U9")} schX={8} schY={1} schSectionName="Woofers" />
    {["L2", "L3", "L4", "L5"].map((name, index) => (
      <inductor key={name} name={name} inductance="6.8uH" footprint="1210" {...at(name)} schX={1 + index * 2.5} schY={-2} schSectionName="Woofers" />
    ))}
    <pinheader name="SUBL" pinCount={2} pitch="2.54mm" gender="female" {...at("SUBL")} schX={5} schY={-4} schSectionName="Woofers" />
    <pinheader name="SUBR" pinCount={2} pitch="2.54mm" gender="female" {...at("SUBR")} schX={10} schY={-4} schSectionName="Woofers" />

    <led name="D1" color="blue" footprint="0603" pcbX={-28.5} pcbY={-21.5} schX={15} schY={-6} schSectionName="Digital" />
    <transistor name="Q1" type="npn" footprint="sot23" {...at("Q1")} schX={-19} schY={-3} schSectionName="Tweeters" />

    {resistors.map(([name, resistance], index) => {
      const sch = passiveSchPosition(index)
      return <resistor key={name} name={name} resistance={resistance} footprint="0603" {...at(name)} schOrientation="vertical" schX={sch.x} schY={sch.y} schSectionName="Passives" />
    })}

    {capacitors.map(([name, spec], index) => {
      const sch = clusteredCapPosition[name] ?? passiveSchPosition(index + resistors.length)
      return <capacitor key={name} name={name} capacitance={spec.value} footprint={spec.footprint} {...at(name)} schOrientation="vertical" schX={sch.x} schY={sch.y} schSectionName="Passives" />
    })}

    {originalNets.flatMap(([netName, endpoints]) =>
      endpoints.map((endpoint, index) => (
        <React.Fragment key={`${netName}-${endpoint}`}>
          <trace name={`${netName}-${index + 1}`} from={endpoint as any} to={`net.${netName}` as any} />
        </React.Fragment>
      )),
    )}
  </board>
)
