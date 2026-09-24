import type { ChipProps } from "tscircuit"

const bluetoothPins = {
  pin1: "DOUT", pin2: "BCLK", pin3: "WCLK", pin4: "DIN",
  pin5: "SPI_CLK", pin6: "SPI_MOSI", pin7: "SPI_MISO", pin8: "SPI_CSB",
  pin9: "RESET", pin10: "VDD_PADS", pin11: "GND1", pin12: "UART_RX",
  pin13: "UART_TX", pin14: "PIO0", pin15: "PIO1", pin16: "PIO2",
  pin17: "PIO6", pin18: "LED2", pin19: "LED0", pin20: "LED1",
  pin21: "GND2", pin22: "V1_8", pin23: "USB_DN", pin24: "USB_DP",
  pin25: "VBAT", pin26: "VCHG", pin27: "VREG", pin28: "PIO7",
  pin29: "PIO3", pin30: "GND3", pin31: "MIC_AN", pin32: "MIC_AP",
  pin33: "MIC_BIAS", pin34: "SPKR_BN", pin35: "SPKR_BP", pin36: "SPKR_AN",
  pin37: "SPKR_AP", pin38: "GND4", pin39: "RF_OUT", pin40: "GND5",
} as const

export const BluetoothModule = (props: ChipProps<typeof bluetoothPins>) => (
  <chip
    {...props}
    schHeight={2.2}
    manufacturerPartNumber="SJR-BTM875-E"
    footprint="qfn40_w10_h10_p0.8mm"
    pinLabels={bluetoothPins}
    pinAttributes={{
      VBAT: { requiresPower: true },
      VDD_PADS: { requiresPower: true },
      RF_OUT: { mustBeConnected: true },
    }}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["DOUT", "BCLK", "WCLK", "DIN", "SPI_CLK", "SPI_MOSI", "SPI_MISO", "SPI_CSB", "RESET", "GND4", "GND5"] },
      rightSide: { direction: "top-to-bottom", pins: ["RF_OUT", "PIO7", "PIO3", "PIO1", "PIO2", "VBAT", "VDD_PADS", "VREG", "GND1", "GND2", "GND3"] },
    }}
  />
)

const codecPins = {
  pin1: "MCLK", pin2: "BCLK", pin3: "WCLK", pin4: "DIN",
  pin5: "DOUT", pin6: "IOVDD", pin7: "IOVSS", pin8: "SCLK_MFP3",
  pin9: "SCL_SS", pin10: "SDA_MOSI", pin11: "MISO_MFP4", pin12: "SPI_SELECT",
  pin13: "IN1_L", pin14: "IN1_R", pin15: "IN2_L", pin16: "IN2_R",
  pin17: "AVSS", pin18: "REF", pin19: "MICBIAS", pin20: "IN3_L",
  pin21: "IN3_R", pin22: "LOL", pin23: "LOR", pin24: "AVDD",
  pin25: "HPL", pin26: "LDOIN_HPVDD", pin27: "HPR", pin28: "DVSS",
  pin29: "DVDD", pin30: "LDO_SELECT", pin31: "RESET", pin32: "GPIO_MFP5", pin33: "EP",
} as const

export const AudioCodec = (props: ChipProps<typeof codecPins>) => (
  <chip
    {...props}
    schHeight={2.2}
    manufacturerPartNumber="TLV320AIC3254IRHBR"
    footprint="qfn32_w5_h5_p0.5mm_thermalpad"
    pinLabels={codecPins}
    pinAttributes={{
      AVDD: { requiresPower: true },
      DVDD: { requiresPower: true },
      IOVDD: { requiresPower: true },
      RESET: { mustBeConnected: true },
    }}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["MCLK", "WCLK", "BCLK", "DIN", "DOUT", "SCLK_MFP3", "SCL_SS", "SDA_MOSI", "MISO_MFP4", "RESET"] },
      rightSide: { direction: "top-to-bottom", pins: ["LOL", "LOR", "HPL", "HPR", "IOVDD", "DVDD", "AVDD", "LDOIN_HPVDD", "IOVSS", "DVSS", "AVSS", "EP"] },
    }}
  />
)

const classDPins = {
  pin1: "MODSEL", pin2: "SDZ", pin3: "FAULTZ", pin4: "RINP",
  pin5: "RINN", pin6: "PLIMIT", pin7: "GVDD", pin8: "GAIN_SL",
  pin9: "GND1", pin10: "LINP", pin11: "LINN", pin12: "MUTE",
  pin13: "AM2", pin14: "AM1", pin15: "AM0", pin16: "SYNC",
  pin17: "AVCC1", pin18: "PVCC1", pin19: "PVCC2", pin20: "BSNL",
  pin21: "OUTNL", pin22: "GND2", pin23: "OUTPL", pin24: "BSPL",
  pin25: "GND3", pin26: "BSNR", pin27: "OUTNR", pin28: "GND4",
  pin29: "OUTPR", pin30: "BSPR", pin31: "PVCC3", pin32: "PVCC4", pin33: "EP",
} as const

export const ClassDAmplifier = (props: ChipProps<typeof classDPins>) => (
  <chip
    {...props}
    schHeight={3.4}
    manufacturerPartNumber="TPA3128D2DAPR"
    footprint="tssop32_p0.65mm_w6.1mm"
    pinLabels={classDPins}
    pinAttributes={{
      AVCC1: { requiresPower: true },
      PVCC1: { requiresPower: true },
      MUTE: { mustBeConnected: true },
    }}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["RINP", "RINN", "LINP", "LINN", "MUTE", "SDZ", "MODSEL", "FAULTZ", "PLIMIT", "GAIN_SL", "AM2", "AM1", "AM0", "SYNC", "GND3", "GND4"] },
      rightSide: { direction: "top-to-bottom", pins: ["OUTPR", "OUTNR", "OUTPL", "OUTNL", "AVCC1", "PVCC1", "PVCC2", "PVCC3", "PVCC4", "BSNL", "BSPL", "BSNR", "BSPR", "GVDD", "GND1", "GND2", "EP"] },
    }}
  />
)

const classABPins = {
  pin1: "SHDN", pin2: "BYPASS", pin3: "INP", pin4: "INM",
  pin5: "VOP", pin6: "VDD", pin7: "GND", pin8: "VOM", pin9: "EP",
} as const

export const ClassABAmplifier = (props: ChipProps<typeof classABPins>) => (
  <chip
    {...props}
    schHeight={1}
    manufacturerPartNumber="TPA6211A1TDGNRQ1"
    footprint="vssop8_p0.5mm"
    pinLabels={classABPins}
    pinAttributes={{ VDD: { requiresPower: true }, SHDN: { mustBeConnected: true } }}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["INP", "INM", "SHDN", "BYPASS", "EP"] },
      rightSide: { direction: "top-to-bottom", pins: ["VOP", "VOM", "VDD", "GND"] },
    }}
  />
)

const boostPins = {
  pin1: "FB", pin2: "COMP", pin3: "PGND", pin4: "SW1", pin5: "VOUT",
  pin6: "EN", pin7: "VIN", pin8: "BST", pin9: "SW2", pin10: "AGND", pin11: "VCC",
} as const

export const BoostConverter = (props: ChipProps<typeof boostPins>) => (
  <chip
    {...props}
    schHeight={1.2}
    manufacturerPartNumber="TPS61288LRQQR"
    footprint="qfn16_w3_h3_p0.5mm"
    pinLabels={boostPins}
    pinAttributes={{ VIN: { requiresPower: true }, VOUT: { providesPower: true }, EN: { mustBeConnected: true } }}
    schPinArrangement={{
      leftSide: { direction: "top-to-bottom", pins: ["FB", "COMP", "EN", "VIN", "AGND", "PGND"] },
      rightSide: { direction: "top-to-bottom", pins: ["SW1", "SW2", "BST", "VOUT", "VCC"] },
    }}
  />
)

const regulatorPins = { pin1: "VIN", pin2: "GND", pin3: "VOUT" } as const

export const LinearRegulator = (props: ChipProps<typeof regulatorPins>) => (
  <chip {...props} manufacturerPartNumber="BA7805FP-E2" footprint="sot223" pinLabels={regulatorPins} pinAttributes={{ VIN: { requiresPower: true }, VOUT: { providesPower: true } }} />
)

export const Regulator3V3 = (props: ChipProps<typeof regulatorPins>) => (
  <chip {...props} manufacturerPartNumber="ZSR330GTA" footprint="sot223" pinLabels={{ pin1: "VOUT", pin2: "GND1", pin3: "VIN", pin4: "GND2" }} pinAttributes={{ VIN: { requiresPower: true }, VOUT: { providesPower: true } }} />
)
