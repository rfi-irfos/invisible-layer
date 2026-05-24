# invisible layer

![experiments](https://img.shields.io/badge/experiments-40-22d3ee?style=flat&labelColor=0f172a)
![sensors](https://img.shields.io/badge/sensors-25%2B-a78bfa?style=flat&labelColor=0f172a)
![fingerprints](https://img.shields.io/badge/fingerprints_exposed-yours-ef4444?style=flat&labelColor=0f172a)
![languages](https://img.shields.io/badge/languages-EN_%C2%B7_DE_%C2%B7_FR-f59e0b?style=flat&labelColor=0f172a)
![install](https://img.shields.io/badge/install-none-4ade80?style=flat&labelColor=0f172a)
![data collected](https://img.shields.io/badge/data_collected-zero-4ade80?style=flat&labelColor=0f172a)
![runs on](https://img.shields.io/badge/runs_on-your_phone-f97316?style=flat&labelColor=0f172a)
![license](https://img.shields.io/badge/license-MIT-60a5fa?style=flat&labelColor=0f172a)

**"Is it too late?" — that is the wrong question. It has been past that since 2020.**

The right question is: *now that you see it, what do you do?*

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

[![open on your phone](https://img.shields.io/badge/open_on_your_phone_%E2%86%92-rfi--irfos.github.io%2Finvisible--layer-8b5cf6?style=for-the-badge&labelColor=0f172a&color=8b5cf6&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xMSAxSDVhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTF6TTggMTRhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyeiIvPjwvc3ZnPg==&logoColor=white)](https://rfi-irfos.github.io/invisible-layer/)

**open on your phone. no install. no account. no data collected. just the truth.**

---

## what this is

37 browser-based experiments that use your phone's built-in sensors and browser APIs to reveal the hidden layers of physical reality — and one profile page that shows you exactly how you look to the systems that are watching.

No app install. No account. No server. Everything runs locally in your browser.

Each experiment answers one question: *what is your phone already measuring that you didn't know about?*

The profile page answers a different question: *what do they already know about you?*

<table>
  <tr>
    <td align="center"><img src="docs/assets/screenshots/meta-layer-ar.png" width="200" alt="meta layer AR overlay"/></td>
    <td align="center"><img src="docs/assets/screenshots/home-screen-de.png" width="200" alt="home screen DE"/></td>
    <td align="center"><img src="docs/assets/screenshots/experiments-de.png" width="200" alt="experiments list DE"/></td>
    <td align="center"><img src="docs/assets/screenshots/deletion-linktree.png" width="200" alt="deletion linktree"/></td>
  </tr>
</table>

## experiments

### electromagnetic & radio
| experiment | sensor | status |
|---|---|---|
| [BLE broadcast scanner](docs/experiments/ble/) | Bluetooth LE | live |
| [EM field detector](docs/experiments/em-field/) | magnetometer | live |
| [compass anomalies](docs/experiments/compass-anomaly/) | magnetometer | partial |
| [WiFi density map](docs/experiments/wifi-density/) | WiFi RSSI | live |

### acoustic
| experiment | sensor | status |
|---|---|---|
| [full spectrum FFT](docs/experiments/acoustic/) | microphone | live |
| [mains hum detector](docs/experiments/mains-hum/) | microphone | live |
| [ultrasonic pest repellers](docs/experiments/ultrasonic/) | microphone | live |
| [room size from echo](docs/experiments/room-acoustics/) | microphone | live |
| [infrasound](docs/experiments/infrasound/) | microphone | live |

### motion & structural
| experiment | sensor | status |
|---|---|---|
| [surface resonance](docs/experiments/motion/) | accelerometer | live |
| [surface resonance v2](docs/experiments/surface-resonance/) | accelerometer | partial |
| [gait biometric](docs/experiments/gait/) | accel + gyro | live |
| [micro-seismic logger](docs/experiments/seismic/) | accelerometer | live |
| [floor-by-floor altimeter](docs/experiments/barometer/) | barometer | live |
| [keystroke timing biometric](docs/experiments/keyboard-timing/) | keyboard events | live |
| [touch biometric](docs/experiments/touch-biometric/) | touch events | live |

### light & optical
| experiment | sensor | status |
|---|---|---|
| [LED flicker detector](docs/experiments/light-flicker/) | camera | live |
| [LED quality meter](docs/experiments/led-quality/) | camera | partial |
| [screen PWM dimming](docs/experiments/screen-pwm/) | camera | live |
| [retroreflector finder](docs/experiments/retroreflector/) | camera + flash | live |
| [sky polarization](docs/experiments/sky-polarization/) | camera | live |

### the meta layer — what you reveal
| experiment | sensor | status |
|---|---|---|
| [your passive telemetry](docs/experiments/passive-telemetry/) | all sensors | live |
| [what apps infer from motion](docs/experiments/what-you-reveal/) | accel + gyro | live |
| [network fingerprint](docs/experiments/network-fingerprint/) | navigator API | live |
| [urban canyon detector](docs/experiments/urban-canyon/) | GPS accuracy | live |
| [human density from WiFi](docs/experiments/human-density/) | WiFi probes | live |
| [font enumeration](docs/experiments/font-enumeration/) | font API | live |
| [network timing](docs/experiments/network-timing/) | fetch timing | live |
| [the full picture](docs/experiments/the-meta/) | everything | live |

### digital fingerprint
| experiment | sensor | status |
|---|---|---|
| [device identity](docs/experiments/device-identity/) | navigator API | live |
| [canvas fingerprint](docs/experiments/canvas-fingerprint/) | canvas API | live |
| [GPU identity](docs/experiments/gpu-identity/) | WebGL API | live |
| [audio fingerprint](docs/experiments/audio-fingerprint/) | AudioContext | live |
| [installed voices](docs/experiments/installed-voices/) | speech API | live |
| [codec map](docs/experiments/codec-map/) | media API | live |
| [WebRTC IP leak](docs/experiments/webrtc-ip-leak/) | WebRTC | live |
| [battery API](docs/experiments/battery-api/) | battery API | live |
| [storage quota fingerprint](docs/experiments/storage-quota/) | storage API | live |
| [clipboard access](docs/experiments/clipboard-access/) | clipboard API | live |
| [WebRTC TURN leak](docs/experiments/webrtc-turn/) | WebRTC | live |

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

## WARNING — we are showing you a fraction

**invisible layer covers ~8 of the sensors in your pocket. Your phone has dozens more.**

This is not the full picture. This is the tip.

Every sensor listed below can be read — by apps, by browsers (with or without asking), by the OS itself, and by data brokers whose entire business model is stitching these streams together into a behavioral model with your name on it.

### what your phone can actually sense

**motion & position**
- Accelerometer — 3-axis, 100–800 Hz sampling, detects typing rhythm, heartbeat, sleep position, transport mode
- Gyroscope — 3-axis rotation, used for gait signature, identity from walk pattern alone
- Magnetometer — compass + EM field, maps your indoor position to specific rooms
- Barometer — floor-level altitude, knows which floor of which building you are on
- GPS — sub-3m outdoor, combined with cell/WiFi → sub-1m indoor triangulation
- Step counter / pedometer — continuous, no permission needed on Android
- Gravity sensor, linear acceleration, rotation vector — all derived, all logged
- Significant motion detector — wakes apps when you start moving without your knowledge

**radio & proximity**
- WiFi scanner — sees every access point in range, maps your physical location to a building, room, crowd density; probe requests broadcast your device's movement history
- Bluetooth LE — passive scanner sees every BLE beacon in range; your own BLE broadcasts are heard by every receiver you walk past
- Cell tower — carrier, tower ID, signal strength; triangulates without GPS, works indoors, works with airplane mode off
- NFC — contactless payment logs, transit card reads, location inference from NFC tags
- UWB (Ultra-Wideband) — iPhone 11+, Pixel 6+: centimeter-precision ranging between devices

**optical & environmental**
- Camera (rear + front) — full resolution, video, IR on some devices; background access possible with certain permissions
- LiDAR — iPhone 12 Pro+, iPad Pro: full 3D point-cloud scan of every room you enter
- Ambient light sensor — reads your screen content indirectly; detects TV programs you watch, monitors you face
- Proximity sensor — knows when phone is at your ear, infers calls without microphone
- Thermometer — CPU/battery temperature leaks ambient temperature and physical activity
- Humidity sensor (select models) — present in Samsung flagships, some Xiaomi

**biometric & audio**
- Microphone — continuous background access possible; ultrasonic beacons (17–22 kHz, inaudible) are broadcast in retail stores, airports, stadiums to track your movement between zones silently
- Fingerprint scanner — biometric template stored on-device, but authentication events are logged
- Face ID / depth camera — TrueDepth maps 30,000 infrared dots onto your face 30× per second
- Heart rate sensor (select models) — Samsung Galaxy Watch, Pixel Watch: continuous

**software-layer sensors (no hardware permission needed)**
- Touch pressure, touch area, touch coordinates — continuous, sampled at input rate
- Screen orientation, screen state, screen brightness
- Battery level, voltage, temperature, charge current, charging source
- Clipboard contents — accessible to any app in focus (and in the background on older OS versions)
- Keyboard timing patterns — latency between keystrokes is a biometric; identifies you without reading the content
- App usage patterns — foreground/background events; which apps, how long, in what sequence
- Network request timing — SSL/TLS fingerprint, HTTP/2 stream patterns; identifies you at the network layer even with VPN
- Canvas fingerprint — GPU renders a scene; the sub-pixel result is unique per device
- WebGL fingerprint — GPU model, driver version, shader precision; device identity without cookies
- AudioContext fingerprint — DAC characteristics, speaker resonance; unique per hardware unit
- Font enumeration — what fonts are installed narrows your OS, region, corporate profile
- Speech synthesis voices — installed voices reveal locale, accessibility settings, enterprise config
- Installed codecs — media format support list is a partial device fingerprint
- Storage quota — available disk space correlates with device model and usage patterns

**what invisible layer covers: accelerometer · gyroscope · magnetometer · barometer · microphone · camera · BLE · GPS accuracy · navigator fingerprint**

That is 9 streams out of the above list.

**To see the full sensor stack on your own device:** download [Phyphox](https://phyphox.org) (open source, RWTH Aachen University). It exposes every hardware sensor your phone physically has, with live graphs, raw data export, and no data collection. It is the honest version of what every data broker does silently.

> The difference between Phyphox and a data broker is one thing: Phyphox shows you the data. The broker sells it.

---

*built by [rfi-irfos](https://ternlang.com) · no VC funding · no data collected · no regrets*

*The data brokers have a 450-million-point behavioral model on you.*
*You now have one URL to start deleting it.*
*Seems like a fair trade.*
