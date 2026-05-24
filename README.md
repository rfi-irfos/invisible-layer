# invisible layer

**"Is it too late?" — that is the wrong question. It has been past that since 2020.**

The right question is: *now that you see it, what do you do?*

[![try it live →](https://img.shields.io/badge/open_on_your_phone_%E2%86%92-rfi--irfos.github.io%2Finvisible--layer-22d3ee?style=for-the-badge&labelColor=0f172a&color=22d3ee)](https://rfi-irfos.github.io/invisible-layer/)

![experiments](https://img.shields.io/badge/experiments-25-22d3ee?style=flat&labelColor=0f172a)
![sensors](https://img.shields.io/badge/sensors-25%2B-a78bfa?style=flat&labelColor=0f172a)
![fingerprints](https://img.shields.io/badge/fingerprints_exposed-yours-ef4444?style=flat&labelColor=0f172a)
![languages](https://img.shields.io/badge/languages-EN_%C2%B7_DE-f59e0b?style=flat&labelColor=0f172a)
![install](https://img.shields.io/badge/install-none-4ade80?style=flat&labelColor=0f172a)
![data collected](https://img.shields.io/badge/data_collected-zero-4ade80?style=flat&labelColor=0f172a)
![runs on](https://img.shields.io/badge/runs_on-your_phone-f97316?style=flat&labelColor=0f172a)
![license](https://img.shields.io/badge/license-MIT-60a5fa?style=flat&labelColor=0f172a)

---

> *"Wenn du siehst, dass ein Blinder auf einen Brunnen zugeht,*
> *ist es eine Sünde, still zu bleiben."*
>
> — Saadi Shirazi, *Golestan* (Persia, 13th century)
>
> *"If you see a blind man walking toward a well — it is a sin to stay silent."*

The same weight sits in scripture across traditions. Silence in the face of visible harm is not neutrality. It is complicity — and accountability for that silence does not disappear because the harm is digital.

Data collection has reached dimensions that were not conceivable in 2015. Four hundred and fifty million data points per user per day. Behavioral models precise enough to predict your next purchase, your political lean, your emotional state — before you consciously form the thought. Digital twins updated in milliseconds. None of it required your signature. Just your attention.

The entities doing this know exactly what they are building. The people it is being built on, mostly do not.

**invisible layer is our answer to the question nobody is asking loud enough.**

Not an app. Not a product. Not a company with a privacy policy nobody reads. A mirror. Open it on your phone, and for the first time you see what has been running silently this entire time.

[![try it live →](https://img.shields.io/badge/open_on_your_phone_%E2%86%92-rfi--irfos.github.io%2Finvisible--layer-22d3ee?style=for-the-badge&labelColor=0f172a&color=22d3ee)](https://rfi-irfos.github.io/invisible-layer/)

**open on your phone. no install. no account. no data collected. just the truth.**

---

## what this is

25 browser-based experiments that use your phone's built-in sensors to reveal the hidden layers of physical reality — and one profile page that shows you exactly how you look to the systems that are watching.

No app install. No account. No server. Everything runs locally in your browser.

Each experiment answers one question: *what is your phone already measuring that you didn't know about?*

The profile page answers a different question: *what do they already know about you?*

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

---

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

```
docs/experiments/your-experiment/
  index.html     ← everything in one file
```

## license

MIT — use it, fork it, teach with it. The only thing we ask is that you keep pointing people toward the delete buttons.

---

*built by [rfi-irfos](https://ternlang.com) · no VC funding · no data collected · no regrets*

*The data brokers have a 450-million-point behavioral model on you.*
*You now have one URL to start deleting it.*
*Seems like a fair trade.*
