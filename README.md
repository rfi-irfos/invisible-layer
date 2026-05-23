# invisible layer

**Your phone is a military-grade sensor array. Most people have no idea.**

[![try it live →](https://img.shields.io/badge/try_it_live-→-00ff41?style=for-the-badge&labelColor=000000)](https://rfi-irfos.github.io/invisible-layer/)
[![experiments](https://img.shields.io/badge/experiments-25-22d3ee?style=flat-square&labelColor=000000)](https://rfi-irfos.github.io/invisible-layer/)
[![no install](https://img.shields.io/badge/no_install-browser_only-475569?style=flat-square&labelColor=000000)]()
[![license](https://img.shields.io/badge/license-MIT-475569?style=flat-square&labelColor=000000)]()

> Right now, the device in your pocket is collecting data from a dozen sensors simultaneously.
> Electromagnetic fields. Acoustic signatures. Motion. Light. Radio broadcasts from every device around you.
> This is what it sees — and what others can infer from it.

**[→ open on your phone now](https://rfi-irfos.github.io/invisible-layer/)**

---

## what this is

25 browser-based experiments that use your phone's built-in sensors to reveal hidden layers of physical reality. No app install. No account. No server. Just open the link on your phone.

Each experiment answers one question: *what is your phone already measuring that you didn't know about?*

## experiments

### electromagnetic & radio
| experiment | sensor | status |
|---|---|---|
| [BLE broadcast scanner](docs/experiments/ble/) | Bluetooth LE | live |
| [EM field detector](docs/experiments/em-field/) | magnetometer | live |
| [compass anomalies](docs/experiments/compass-anomaly/) | magnetometer | partial |
| [WiFi density map](docs/experiments/wifi-density/) | WiFi RSSI | soon |

### acoustic
| experiment | sensor | status |
|---|---|---|
| [full spectrum FFT](docs/experiments/acoustic/) | microphone | live |
| [mains hum detector](docs/experiments/mains-hum/) | microphone | live |
| [ultrasonic pest repellers](docs/experiments/ultrasonic/) | microphone | partial |
| [room size from echo](docs/experiments/room-acoustics/) | microphone | partial |
| [infrasound](docs/experiments/infrasound/) | microphone | partial |

### motion & structural
| experiment | sensor | status |
|---|---|---|
| [surface resonance](docs/experiments/motion/) | accelerometer | live |
| [gait biometric](docs/experiments/gait/) | accel + gyro | partial |
| [micro-seismic logger](docs/experiments/seismic/) | accelerometer | partial |
| [floor-by-floor altimeter](docs/experiments/barometer/) | barometer | partial |

### light & optical
| experiment | sensor | status |
|---|---|---|
| [LED flicker detector](docs/experiments/light-flicker/) | camera | live |
| [screen PWM dimming](docs/experiments/screen-pwm/) | camera | partial |
| [retroreflector finder](docs/experiments/retroreflector/) | camera + flash | partial |
| [sky polarization](docs/experiments/sky-polarization/) | camera | soon |

### the meta layer — what you reveal
| experiment | sensor | status |
|---|---|---|
| [your passive telemetry](docs/experiments/passive-telemetry/) | all sensors | live |
| [what apps infer from motion](docs/experiments/what-you-reveal/) | accel + gyro | partial |
| [network fingerprint](docs/experiments/network-fingerprint/) | navigator API | live |
| [urban canyon detector](docs/experiments/urban-canyon/) | GPS accuracy | partial |
| [human density from WiFi](docs/experiments/human-density/) | WiFi probes | soon |
| [the full picture](docs/experiments/the-meta/) | everything | partial |

## run locally

```bash
git clone https://github.com/rfi-irfos/invisible-layer
cd invisible-layer
python3 -m http.server 8080
# open http://localhost:8080 on your phone (same network)
```

HTTPS is required for sensor permissions. For local testing over USB:
```bash
adb reverse tcp:8080 tcp:8080
# then open http://localhost:8080 on your phone
```

## browser support

| feature | android chrome | ios safari | firefox |
|---|---|---|---|
| accelerometer/gyro | ✓ | ✓ (permission dialog) | ✓ |
| magnetometer | ✓ | partial | partial |
| microphone | ✓ | ✓ | ✓ |
| camera | ✓ | ✓ | ✓ |
| web bluetooth (BLE) | ✓ | — | — |
| barometer | ✓ | ✓ | — |

## contributing

Each experiment is a single self-contained HTML file in `docs/experiments/<name>/index.html`. Add one, open a PR.

Structure of an experiment:
```
docs/experiments/your-experiment/
  index.html     ← everything in one file
```

## license

MIT — use it, fork it, teach with it.

---

*made with [rfi-irfos](https://ternlang.com) · inspired by [phyphox](https://phyphox.org)*
