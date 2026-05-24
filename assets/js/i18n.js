(function() {
  var STRINGS = {
    en: {
      // nav / header
      'nav.title': 'invisible layer',
      'nav.github': 'GitHub',
      'nav.filter.all': 'all',
      'nav.filter.rf': 'rf & radio',
      'nav.filter.acoustic': 'acoustic',
      'nav.filter.motion': 'motion',
      'nav.filter.light': 'light',
      'nav.filter.meta': 'meta layer',

      // hero
      'hero.h1': 'your phone<br>is <em>already</em><br>watching.',
      'hero.sub': 'Right now, your device is reading a dozen physical layers of reality simultaneously — electromagnetic fields, acoustic signatures, motion, radio broadcasts from every device around you. Most people have no idea. 25 experiments that change that.',
      'hero.cta.meta': '⊙ open meta layer',
      'hero.cta.ble': 'BLE scanner',
      'hero.mobile-prompt': 'This site works best on a mobile device. The experiments use sensors your phone has but your laptop doesn\'t — camera, gyroscope, magnetometer, barometer.',

      // sensor strip
      'sc.motion': 'tap an experiment',
      'sc.geo.idle': 'not requested',

      // section headers
      'section.rf': 'rf & radio',
      'section.acoustic': 'acoustic',
      'section.motion': 'motion & position',
      'section.light': 'light & optics',
      'section.meta': 'the meta layer',

      // exp header
      'exp.back': 'invisible layer',
      'exp.theme': 'toggle theme',

      // meta layer start screen
      'meta.eyebrow.suffix': 'meta layer',
      'meta.title': 'this is what<br>AI sees.',
      'meta.sub': 'Every invisible signal, field, and force around you — rendered on the world.',
      'meta.sub.strong': 'Sound waves. Magnetic fields. Gravity. RF broadcasts. Atmospheric pressure. All at once.',
      'meta.btn': '⊙ open all sensors',
      'meta.warn': 'grants camera, microphone, and motion access. all processing stays on-device.',

      // drawer links
      'drawer.profile': 'your digital profile',
      'drawer.agb': 'terms of use',
      'drawer.privacy': 'privacy policy',

      // shared experiment buttons / status
      'btn.stop': '■ stop',

      // ── experiment strings ──

      'exp.acoustic.label': 'experiment 03 · microphone · all browsers',
      'exp.acoustic.title': 'what the air<br>is carrying right now.',
      'exp.acoustic.desc': 'The full acoustic spectrum of your environment — from infrasound rumble to near-ultrasonic. Mains hum at 50 or 60&thinsp;Hz. HVAC resonance. The unique acoustic fingerprint of every room. Sounds you cannot hear but your phone already captures.',
      'exp.acoustic.shock': '<strong>your room has a unique acoustic signature.</strong> Reflection patterns, resonant frequencies, background hum — combined, they can identify a specific room with &gt;90% accuracy. Advertisers have used ultrasonic beacons embedded in TV ads to detect which room you\'re in across multiple devices simultaneously.',
      'exp.acoustic.summary': '▶ how does this work?',
      'exp.acoustic.btn-start': '◉ enable microphone',

      'exp.barometer.label': 'experiment 09 · barometer',
      'exp.barometer.title': 'your phone knows<br>which floor you\'re on.',
      'exp.barometer.desc': 'Air pressure drops by about 1.2&thinsp;hPa for every 10 metres of altitude. That\'s roughly 1&thinsp;hPa per floor. Your phone\'s barometric sensor is sensitive enough to detect this — and sensitive enough to detect you walking up a flight of stairs.',
      'exp.barometer.shock': '<strong>every ride-hailing app tracks which floor of a building you\'re on.</strong> Uber, Lyft, and Google Maps use the barometer to know whether you\'re in the lobby or on the 12th floor — so the car meets you at the right entrance. Insurance apps use the same data to detect whether you\'re in a hospital. None of this requires GPS.',
      'exp.barometer.summary': '▶ how does this work?',
      'exp.barometer.btn-start': '◉ start sensor',

      'exp.ble.label': 'experiment 01 · bluetooth le',
      'exp.ble.title': 'everything around you<br>is screaming.',
      'exp.ble.desc': 'Every Bluetooth device within ~10 meters is continuously broadcasting its presence — phones, headphones, watches, trackers, medical devices. Each one sends packets into the air up to 10 times per second, whether connected to anything or not.',
      'exp.ble.shock': '<strong>this is how retail stores track your path through the building.</strong> Fixed BLE scanners log your MAC address as you pass each aisle. Dwell time at each product is recorded. No app required on your end.',
      'exp.ble.summary': '▶ how does this work?',
      'exp.ble.btn-start': '◉ scan live',

      'exp.compass-anomaly.label': 'experiment 03 · magnetometer',
      'exp.compass-anomaly.title': 'the compass<br>knows what\'s hiding.',
      'exp.compass-anomaly.desc': 'Walk slowly through a room while watching the compass heading. When you pass steel beams, rebar in the floor, electrical panels, or hidden pipes — the needle jumps. The magnetometer in your phone is sensitive enough to map the skeleton of a building just by walking through it.',
      'exp.compass-anomaly.shock': '<strong>the rebar grid inside every concrete building is magnetic.</strong> Construction companies use magnetometers to locate rebar and pipes before drilling. Security services use the same principle to map unknown buildings from the outside. Your phone does this passively.',
      'exp.compass-anomaly.summary': '▶ how does this work?',
      'exp.compass-anomaly.btn-start': '◉ start compass',

      'exp.em-field.label': 'experiment 02 · magnetometer',
      'exp.em-field.title': 'the field<br>bends around everything.',
      'exp.em-field.desc': 'Earth\'s magnetic field is ~50&thinsp;µT — steady, invisible, everywhere. Your phone\'s magnetometer reads it 40 times a second. Metal objects, power lines, and electrical equipment warp this field. Your phone sees the warp.',
      'exp.em-field.shock': '<strong>hidden camera detectors cost $30.</strong> Your phone\'s magnetometer does the same thing for free. Sweep it slowly near a wall — a spike above 200&thinsp;µT means metal or a powered device behind the plaster. Hotel rooms. Airbnb. Dressing rooms. This is how it works.',
      'exp.em-field.summary': '▶ how does this work?',
      'exp.em-field.btn-start': '◉ start sensor',

      'exp.gait.label': 'experiment · motion biometric',
      'exp.gait.title': 'the way you walk<br>is uniquely yours.',
      'exp.gait.desc': 'Walk across the room with your phone in your pocket or hand. The accelerometer measures your step cadence, stride length, vertical bounce, and lateral sway. Together these form a gait signature — a biometric fingerprint that stays stable across sessions, even as you change shoes, bags, or how you\'re carrying the phone.',
      'exp.gait.shock': '<strong>You can be identified from 100 metres of walking with 95% accuracy — no camera needed.</strong> Academic gait recognition using phone accelerometers achieves better than fingerprint recognition at identifying individuals across a crowd. Chinese street cameras now routinely use gait recognition as a backup when faces are covered.',
      'exp.gait.summary': '▶ what makes a gait biometric unique?',
      'exp.gait.btn-start': '◉ start walking',

      'exp.human-density.label': 'experiment · passive signals',
      'exp.human-density.title': 'how many people<br>are around you right now?',
      'exp.human-density.desc': 'Your phone constantly receives signals from every device in range — WiFi probes, Bluetooth advertisements, and RF noise. The density of these signals correlates with the number of people nearby. Each person carries 1–4 wireless devices that are continuously broadcasting.',
      'exp.human-density.shock': '<strong>Retailers pay companies to count shoppers by tracking their phones\' WiFi probes.</strong> Every phone constantly sends "probe requests" — broadcast signals looking for known WiFi networks. Companies place sensors in shops that count and track unique devices moving through the store, measuring dwell time and path through each section. No app, no knowledge, no consent.',
      'exp.human-density.summary': '▶ how can a phone estimate crowd density?',
      'exp.human-density.btn-start': '◉ start reading',

      'exp.infrasound.label': 'experiment · microphone',
      'exp.infrasound.title': 'sounds you can\'t<br>hear are everywhere.',
      'exp.infrasound.desc': 'Below 20&thinsp;Hz, sound becomes infrasound — below the threshold of human hearing. But your microphone doesn\'t care. Earthquakes, storms, industrial machinery, traffic rumble, HVAC systems — all of it sits down here in the infrasonic band, constantly shaking the air and your walls.',
      'exp.infrasound.shock': '<strong>Infrasound at 18.98&thinsp;Hz has been linked to feelings of unease, dread, and "presence".</strong> In 1998, Vic Tandy found that a lab he worked in produced 18.98&thinsp;Hz standing waves from a fan — staff reported ghost sightings and nausea. The frequency matches the resonant frequency of the human eyeball. Military researchers have explored infrasound as a non-lethal weapon.',
      'exp.infrasound.summary': '▶ why can microphones hear what we can\'t?',
      'exp.infrasound.btn-start': '◉ start listening',

      'exp.led-quality.label': 'experiment · camera',
      'exp.led-quality.title': 'not all light<br>is the same light.',
      'exp.led-quality.desc': 'Cheap LED bulbs flood the room with light — but half the colours in the visible spectrum may be missing entirely. A good LED fills in the gaps; a bad one doesn\'t, and your brain pays the cost in eye strain, colour distortion, and disturbed sleep.',
      'exp.led-quality.shock': '<strong>The blue light spike in cheap LEDs disrupts melatonin production more than any other artificial light.</strong> Most LED lighting peaks sharply at 450&thinsp;nm (deep blue) with a drop-off across the rest of the spectrum. This blue spike suppresses melatonin by up to 85% compared to incandescent light. A CRI below 80 means 20%+ of colour information is missing.',
      'exp.led-quality.summary': '▶ what is CRI and why does it matter?',
      'exp.led-quality.btn-start': '◉ analyse light',

      'exp.light-flicker.label': 'experiment · camera',
      'exp.light-flicker.title': 'lights that flicker<br>faster than you can see.',
      'exp.light-flicker.desc': 'Most LED bulbs and fluorescent tubes flicker at 50 or 100&thinsp;Hz — too fast to see, but your phone\'s camera captures it frame by frame. Sustained exposure to invisible flicker causes headaches, eye strain, and migraines in sensitive people.',
      'exp.light-flicker.shock': '<strong>cheap LED bulbs can flicker up to 120 times per second.</strong> Offices lit with LED panels commonly run at 100% flicker depth — the light actually goes completely off between pulses. EEG studies show this disrupts alpha waves in the brain even when subjects report no discomfort.',
      'exp.light-flicker.summary': '▶ why does flicker matter?',
      'exp.light-flicker.btn-start': '◉ start camera',

      'exp.mains-hum.label': 'experiment 05 · acoustic',
      'exp.mains-hum.title': 'the grid<br>hums in your walls.',
      'exp.mains-hum.desc': 'Every room with electrical wiring has a 50&thinsp;Hz or 60&thinsp;Hz hum — radiated by cables, transformers, and fluorescent lights. Your phone\'s microphone picks it up even through silence. This is how forensic labs date audio recordings.',
      'exp.mains-hum.shock': '<strong>every recording carries its location in the hum.</strong> EU mains = 50&thinsp;Hz. US/Japan = 60&thinsp;Hz. ENF (Electric Network Frequency) analysis compares a recording\'s hum against historical grid frequency logs — accurate to within minutes. Police forensic labs date recordings this way. No timestamp required.',
      'exp.mains-hum.summary': '▶ how does this work?',
      'exp.mains-hum.btn-start': '◉ listen',

      'exp.motion.label': 'experiment · accelerometer',
      'exp.motion.title': 'every surface<br>has a voice.',
      'exp.motion.desc': 'Place your phone face-down on any surface and tap it. The accelerometer captures the vibration decay. Different materials — wood, glass, concrete, metal — resonate at different frequencies. Your phone can tell them apart.',
      'exp.motion.shock': '<strong>this is how seismologists detect underground structures.</strong> Surface wave analysis reveals what\'s underneath — soil type, water table depth, void spaces. Oil companies sweep terrain with sensors like this to find reservoirs. Your phone\'s MEMS accelerometer does the same thing at human scale.',
      'exp.motion.summary': '▶ how does this work?',
      'exp.motion.btn-start': '◉ start sensor',

      'exp.network-fingerprint.label': 'experiment 10 · browser APIs',
      'exp.network-fingerprint.title': 'you already<br>told them everything.',
      'exp.network-fingerprint.desc': 'You haven\'t clicked anything. No login. No form. But your browser has already sent dozens of data points that, combined, identify you uniquely among billions of users. This is what you leak on every page load.',
      'exp.network-fingerprint.shock': '<strong>77% of the web uses browser fingerprinting.</strong> Unlike cookies, it doesn\'t need storage — it can\'t be cleared. A VPN changes your IP. It doesn\'t change your GPU, your fonts, your timezone offset, your screen resolution, or how your browser renders a canvas. These form a fingerprint that persists across sessions.',
      'exp.network-fingerprint.summary': '▶ how does this work?',
      'exp.network-fingerprint.btn-start': '',

      'exp.passive-telemetry.label': 'experiment 11 · all sensors',
      'exp.passive-telemetry.title': 'this is what<br>gets collected.',
      'exp.passive-telemetry.desc': 'You haven\'t installed anything. You haven\'t agreed to any terms. But right now, every app on your phone with background access is packaging and uploading a profile of your life — where you are, how you move, what network you\'re on, when your battery is low. This is what that looks like, live.',
      'exp.passive-telemetry.shock': '<strong>the average smartphone sends data to 1,400 different servers per day.</strong> Most of it happens in the background while you sleep. Apps legally collect your precise location, motion patterns, battery level, network identity, and device fingerprint — then sell it to data brokers. A data broker profile knows where you work, where you sleep, where you pray, and whether you\'re pregnant before your family does.',
      'exp.passive-telemetry.summary': '',
      'exp.passive-telemetry.btn-start': '◉ show my telemetry',

      'exp.retroreflector.label': 'experiment · camera',
      'exp.retroreflector.title': 'hidden cameras<br>betray themselves with light.',
      'exp.retroreflector.desc': 'Hidden camera lenses are coated in glass with a specific property: they retroreflect light back toward its source. When your phone\'s flashlight illuminates a room, a concealed camera lens will glow with a bright, distinctive dot — while everything else scatters light in all directions.',
      'exp.retroreflector.shock': '<strong>Hidden cameras are found in Airbnbs, hotel rooms, and changing rooms every week.</strong> In 2019, a couple in South Korea found 1,600 guests had been livestreamed from hidden cameras in motels. In 2023, a camera disguised as a smoke detector in an Irish Airbnb recorded guests for months.',
      'exp.retroreflector.summary': '▶ the physics of retroreflection',
      'exp.retroreflector.btn-start': '◉ start sweep',

      'exp.room-acoustics.label': 'experiment · acoustic',
      'exp.room-acoustics.title': 'a clap reveals<br>the room around you.',
      'exp.room-acoustics.desc': 'Sound bounces off walls and decays. How long it takes to go quiet — the reverb time — depends directly on room size and what the surfaces are made of. A clap in a bathroom echoes differently than in a bedroom. Your phone can hear the difference and estimate which one you\'re in.',
      'exp.room-acoustics.shock': '<strong>forensic audio analysts can determine where a recording was made from its echo signature.</strong> The reverb fingerprint of a room is unique — walls, furniture, carpet, and ceiling height all leave a signature in the sound. Intelligence agencies use this to geolocate recordings.',
      'exp.room-acoustics.summary': '▶ how does this work?',
      'exp.room-acoustics.btn-start': '◉ start listening',

      'exp.screen-pwm.label': 'experiment · camera',
      'exp.screen-pwm.title': 'your screen flickers.<br>you can\'t see it.',
      'exp.screen-pwm.desc': 'Most screens dim their brightness not by reducing voltage, but by turning on and off very rapidly — called PWM (pulse-width modulation). At 60&thinsp;Hz or higher, your eyes blend it into steady light. But your brain still processes the flicker.',
      'exp.screen-pwm.shock': '<strong>PWM flicker is linked to eye strain, headaches, and migraines — even when you feel fine.</strong> Manufacturers rarely disclose PWM frequencies. Budget screens often flicker at 240&thinsp;Hz or even 60&thinsp;Hz. Premium OLED screens use DC dimming at mid-to-high brightness, but switch to PWM at low brightness — typically below 50%.',
      'exp.screen-pwm.summary': '▶ how does PWM work, and why does it matter?',
      'exp.screen-pwm.btn-start': '◉ start camera',

      'exp.seismic.label': 'experiment 08 · accelerometer',
      'exp.seismic.title': 'the ground<br>is never still.',
      'exp.seismic.desc': 'Lay your phone flat on a desk or floor and watch. Every truck that drives past, every footstep in the corridor, every distant train — your phone picks it up. This is the same principle behind professional seismograph networks. Your MEMS accelerometer is sensitive to about 0.001&thinsp;m/s² — enough to detect vibrations from 50 metres away.',
      'exp.seismic.shock': '<strong>researchers have tracked people through walls using only phone accelerometers.</strong> A study at Stanford showed that your walking gait — measured by an accelerometer — is as unique as a fingerprint. Footstep vibrations through floor and furniture can reveal which room you\'re in, how many people are present, and whether you\'re sitting or standing.',
      'exp.seismic.summary': '▶ how does this work?',
      'exp.seismic.btn-start': '◉ start sensor',

      'exp.sky-polarization.label': 'experiment · camera + orientation',
      'exp.sky-polarization.title': 'sunlight is polarized.<br>bees navigate by it. you can too.',
      'exp.sky-polarization.desc': 'When sunlight scatters through the atmosphere, it becomes polarized — the light waves align in predictable patterns relative to the sun\'s position. Bees, ants, and migrating birds use this "skylight compass" to navigate even when the sun is hidden.',
      'exp.sky-polarization.shock': '<strong>The Viking "sunstone" is now confirmed to be a real navigation tool — a calcite crystal that detects sky polarization.</strong> In 2013, researchers found a calcite crystal in a Tudor-era shipwreck matching the optical properties of legendary Norse sunstones. Tests showed the stone could locate the sun within ±1° — accurate enough to navigate the North Atlantic on overcast days.',
      'exp.sky-polarization.summary': '▶ how does sky polarization navigation work?',
      'exp.sky-polarization.btn-start': '◉ start sky scan',

      'exp.surface-resonance.label': 'experiment · accelerometer',
      'exp.surface-resonance.title': 'tap the table.<br>your phone knows what it\'s made of.',
      'exp.surface-resonance.desc': 'Every material has a natural resonant frequency — the note it prefers to vibrate at. Steel rings at a different pitch than wood, which sounds different to glass. Lay your phone flat, give the surface a sharp tap, and the accelerometer captures the echo.',
      'exp.surface-resonance.shock': '<strong>Smart home devices may be able to map your floor plan from acoustic vibrations alone.</strong> Research at MIT showed that by analysing surface-conducted sound from a phone placed on different surfaces, it\'s possible to estimate room dimensions, identify furniture arrangements, and detect wall materials — without a microphone.',
      'exp.surface-resonance.summary': '▶ how does surface resonance identification work?',
      'exp.surface-resonance.btn-start': '◉ start sensor',

      'exp.ultrasonic.label': 'experiment 06 · microphone',
      'exp.ultrasonic.title': 'signals you<br>can\'t hear.',
      'exp.ultrasonic.desc': 'Above 17&thinsp;kHz, human hearing falls off — but microphones don\'t. Ultrasonic beacons are embedded in TV ads, retail stores, and websites to track you across all your devices at once. Your phone hears them.',
      'exp.ultrasonic.shock': '<strong>your TV is telling your phone when you\'re home.</strong> A technique called ultrasonic cross-device tracking (uXDT) hides beacons in TV ads. Your phone\'s microphone — even if the screen is off — hears the beacon and reports back to the same ad server. Silverpush, Lisnr, and SilentSense all deployed this commercially.',
      'exp.ultrasonic.summary': '▶ how does this work?',
      'exp.ultrasonic.btn-start': '◉ listen',

      'exp.urban-canyon.label': 'experiment · GPS',
      'exp.urban-canyon.title': 'tall buildings<br>break GPS.',
      'exp.urban-canyon.desc': 'In the open sky, GPS is accurate to 2–5 metres. Walk into a city street lined with glass towers and watch that number jump to 50 or 200 metres. The signal bounces off buildings before reaching your phone — and the reflection looks exactly like a direct signal.',
      'exp.urban-canyon.shock': '<strong>GPS spoofing attacks on ships cause them to appear hundreds of miles off course.</strong> In 2017, ships in the Black Sea reported GPS positions 32&thinsp;km inland. In 2019, dozens of vessels near Shanghai were falsely positioned in the middle of Pudong airport. No hardware needed — just a signal transmitter and a laptop.',
      'exp.urban-canyon.summary': '▶ what causes urban canyon GPS error?',
      'exp.urban-canyon.btn-start': '◉ start GPS',

      'exp.what-you-reveal.label': 'experiment · motion inference',
      'exp.what-you-reveal.title': 'your movement<br>is a confession.',
      'exp.what-you-reveal.desc': 'Apps don\'t need a camera to know what you\'re doing. The way you walk, type, drive, or sleep — all of it shows up in the accelerometer. Walk around for a few seconds and watch what can be inferred in real time, without any special permission or any awareness from you.',
      'exp.what-you-reveal.shock': '<strong>your typing rhythm is as unique as a fingerprint.</strong> Research at MIT and Stanford showed that accelerometer data — collected silently by apps in the background — can identify you with 99% accuracy from how you hold your phone while typing. The same data predicts your age, gender, health conditions, and emotional state.',
      'exp.what-you-reveal.summary': '▶ what can really be inferred from motion?',
      'exp.what-you-reveal.btn-start': '◉ start reading me',

      'exp.wifi-density.label': 'experiment · WiFi scanning',
      'exp.wifi-density.title': 'every network you<br>can see is a data point.',
      'exp.wifi-density.desc': 'Your phone can see dozens of WiFi networks at once — each one a little radio beacon broadcasting its name and signal strength from a fixed location. The number of networks, their signal strengths, and their names tell you a lot about where you are.',
      'exp.wifi-density.shock': '<strong>Google and Apple have mapped the location of every WiFi network on Earth using their users\' phones.</strong> Every time a phone does a location lookup, it scans nearby WiFi networks and reports their signal strengths to a central server — along with your GPS coordinates. Apple has over 100 million access points in its database.',
      'exp.wifi-density.summary': '▶ what does WiFi density tell you?',
      'exp.wifi-density.btn-start': '◉ start live scan',

      // footer
      'footer.rights': '© 2025 rfi-irfos. open source.',
    },

    de: {
      // nav / header
      'nav.title': 'invisible layer',
      'nav.github': 'GitHub',
      'nav.filter.all': 'alle',
      'nav.filter.rf': 'HF & Radio',
      'nav.filter.acoustic': 'Akustik',
      'nav.filter.motion': 'Bewegung',
      'nav.filter.light': 'Licht',
      'nav.filter.meta': 'Meta-Ebene',

      // hero
      'hero.h1': 'Dein Handy<br><em>beobachtet</em><br>schon längst.',
      'hero.sub': 'Gerade jetzt liest dein Gerät ein Dutzend physikalische Schichten der Realität — elektromagnetische Felder, akustische Signaturen, Bewegung, Funksignale von allen Geräten um dich herum. Die meisten Menschen wissen das nicht. 25 Experimente ändern das.',
      'hero.cta.meta': '⊙ Meta-Ebene öffnen',
      'hero.cta.ble': 'BLE-Scanner',
      'hero.mobile-prompt': 'Diese Seite funktioniert am besten auf einem Mobilgerät. Die Experimente nutzen Sensoren deines Handys, die dein Laptop nicht hat — Kamera, Gyroskop, Magnetometer, Barometer.',

      // sensor strip
      'sc.motion': 'Experiment antippen',
      'sc.geo.idle': 'nicht angefordert',

      // section headers
      'section.rf': 'HF & Radio',
      'section.acoustic': 'Akustik',
      'section.motion': 'Bewegung & Position',
      'section.light': 'Licht & Optik',
      'section.meta': 'Die Meta-Ebene',

      // meta layer start screen
      'meta.eyebrow.suffix': 'Meta-Ebene',
      'meta.title': 'So sieht<br>KI die Welt.',
      'meta.sub': 'Jedes unsichtbare Signal, Feld und jede Kraft um dich herum — auf die Welt projiziert.',
      'meta.sub.strong': 'Schallwellen. Magnetfelder. Schwerkraft. Funksignale. Luftdruck. Alles auf einmal.',
      'meta.btn': '⊙ Alle Sensoren öffnen',
      'meta.warn': 'benötigt Kamera-, Mikrofon- und Bewegungszugriff. alle Berechnungen bleiben auf dem Gerät.',

      // exp header
      'exp.back': 'invisible layer',
      'exp.theme': 'Design wechseln',

      // drawer links
      'drawer.profile': 'Dein digitales Profil',
      'drawer.agb': 'Nutzungsbedingungen',
      'drawer.privacy': 'Datenschutz',

      // shared experiment buttons / status
      'btn.stop': '■ Stopp',

      // ── Experiment-Strings ──

      'exp.acoustic.label': 'Experiment 03 · Mikrofon · alle Browser',
      'exp.acoustic.title': 'was die Luft<br>gerade trägt.',
      'exp.acoustic.desc': 'Das vollständige Frequenzspektrum deiner Umgebung — vom Infraschall-Grollen bis zum Ultraschallbereich. Netzbrummen bei 50 oder 60&thinsp;Hz. Klimaanlagen-Resonanz. Der einzigartige akustische Fingerabdruck jedes Raums. Geräusche, die du nicht hörst, aber dein Handy bereits aufnimmt.',
      'exp.acoustic.shock': '<strong>dein Zimmer hat eine einzigartige akustische Signatur.</strong> Reflexionsmuster, Resonanzfrequenzen, Hintergrundrauschen — zusammen können sie einen bestimmten Raum mit über 90% Genauigkeit identifizieren. Werbetreibende haben Ultraschallsignale in TV-Spots eingebettet, um zu erkennen, in welchem Zimmer du dich befindest — auf mehreren Geräten gleichzeitig.',
      'exp.acoustic.summary': '▶ wie funktioniert das?',
      'exp.acoustic.btn-start': '◉ Mikrofon aktivieren',

      'exp.barometer.label': 'Experiment 09 · Barometer',
      'exp.barometer.title': 'dein Handy weiss,<br>in welchem Stockwerk du bist.',
      'exp.barometer.desc': 'Der Luftdruck fällt um etwa 1,2&thinsp;hPa pro 10 Meter Höhe. Das sind grob 1&thinsp;hPa pro Etage. Der Luftdrucksensor deines Handys ist empfindlich genug, das zu messen — und empfindlich genug, um zu erkennen, wenn du eine Treppe hochläufst.',
      'exp.barometer.shock': '<strong>jede Ride-Hailing-App verfolgt, in welchem Stockwerk du dich befindest.</strong> Uber, Lyft und Google Maps nutzen das Barometer, um zu wissen, ob du in der Lobby oder im 12. Stockwerk bist — damit dich das Auto am richtigen Eingang abholen kann. Versicherungs-Apps nutzen dieselben Daten, um festzustellen, ob du in einem Krankenhaus bist. GPS ist dafür nicht nötig.',
      'exp.barometer.summary': '▶ wie funktioniert das?',
      'exp.barometer.btn-start': '◉ Sensor starten',

      'exp.ble.label': 'Experiment 01 · Bluetooth LE',
      'exp.ble.title': 'alles um dich herum<br>schreit.',
      'exp.ble.desc': 'Jedes Bluetooth-Gerät in rund 10 Metern Entfernung sendet ununterbrochen seine Anwesenheit aus — Handys, Kopfhörer, Uhren, Tracker, medizinische Geräte. Jedes sendet bis zu 10 Mal pro Sekunde Pakete in die Luft, egal ob verbunden oder nicht.',
      'exp.ble.shock': '<strong>so verfolgen Einzelhändler deinen Weg durch das Geschäft.</strong> Fest installierte BLE-Scanner protokollieren deine MAC-Adresse, wenn du jeden Gang passierst. Die Verweildauer an jedem Produkt wird aufgezeichnet. Keine App erforderlich.',
      'exp.ble.summary': '▶ wie funktioniert das?',
      'exp.ble.btn-start': '◉ Live-Scan starten',

      'exp.compass-anomaly.label': 'Experiment 03 · Magnetometer',
      'exp.compass-anomaly.title': 'der Kompass<br>weiss, was sich verbirgt.',
      'exp.compass-anomaly.desc': 'Geh langsam durch einen Raum und beobachte die Kompassrichtung. Wenn du an Stahlträgern, Bewehrungseisen, Verteilerkästen oder versteckten Rohren vorbeigehst, springt die Nadel. Das Magnetometer deines Handys ist empfindlich genug, das Skelett eines Gebäudes allein durch Begehung zu kartieren.',
      'exp.compass-anomaly.shock': '<strong>das Bewehrungseisen in jedem Betongebäude ist magnetisch.</strong> Bauunternehmen nutzen Magnetometer, um vor dem Bohren Eisen und Rohre zu orten. Sicherheitsdienste wenden dasselbe Prinzip an, um unbekannte Gebäude von aussen zu kartieren. Dein Handy tut das passiv.',
      'exp.compass-anomaly.summary': '▶ wie funktioniert das?',
      'exp.compass-anomaly.btn-start': '◉ Kompass starten',

      'exp.em-field.label': 'Experiment 02 · Magnetometer',
      'exp.em-field.title': 'das Feld<br>beugt sich um alles.',
      'exp.em-field.desc': 'Das Erdmagnetfeld beträgt rund 50&thinsp;µT — konstant, unsichtbar, überall. Das Magnetometer deines Handys liest es 40 Mal pro Sekunde. Metallgegenstände, Stromleitungen und elektrische Geräte verzerren dieses Feld. Dein Handy sieht die Verzerrung.',
      'exp.em-field.shock': '<strong>versteckte Kameradetektoren kosten 30 Euro.</strong> Das Magnetometer deines Handys macht dasselbe kostenlos. Führe es langsam an einer Wand entlang — ein Ausschlag über 200&thinsp;µT bedeutet Metall oder ein eingeschaltetes Gerät hinter dem Putz. Hotelzimmer. Airbnb. Umkleidekabinen.',
      'exp.em-field.summary': '▶ wie funktioniert das?',
      'exp.em-field.btn-start': '◉ Sensor starten',

      'exp.gait.label': 'Experiment · Bewegungsbiometrie',
      'exp.gait.title': 'dein Gang<br>ist einzigartig.',
      'exp.gait.desc': 'Geh mit dem Handy in der Tasche oder Hand durch den Raum. Der Beschleunigungssensor misst Schrittkadenz, Schrittlänge, vertikales Wippen und seitliches Schwingen. Zusammen bilden sie eine Gangsignatur — einen biometrischen Fingerabdruck, der über Sitzungen hinweg stabil bleibt.',
      'exp.gait.shock': '<strong>du kannst nach 100 Metern Gehen mit 95% Genauigkeit identifiziert werden — ohne Kamera.</strong> Akademische Gangerkennung per Handy-Beschleunigungssensor übertrifft Fingerabdruckerkennung in Menschenmassen. Chinesische Strassenkameras nutzen Gangerkennung routinemässig als Backup, wenn Gesichter verdeckt sind.',
      'exp.gait.summary': '▶ was macht einen Gang-Fingerabdruck einzigartig?',
      'exp.gait.btn-start': '◉ Gehen starten',

      'exp.human-density.label': 'Experiment · passive Signale',
      'exp.human-density.title': 'wie viele Menschen<br>sind gerade um dich?',
      'exp.human-density.desc': 'Dein Handy empfängt ununterbrochen Signale von jedem Gerät in Reichweite — WLAN-Probes, Bluetooth-Werbungen und HF-Rauschen. Die Dichte dieser Signale korreliert mit der Anzahl der Personen in der Nähe. Jeder Mensch trägt 1–4 Geräte, die ständig senden.',
      'exp.human-density.shock': '<strong>Einzelhändler bezahlen Unternehmen dafür, Kunden anhand ihrer WLAN-Probes zu zählen.</strong> Jedes Handy sendet ständig Probe-Requests — Broadcast-Signale, die nach bekannten Netzwerken suchen. Unternehmen platzieren Sensoren in Geschäften, die Geräte zählen, Verweildauer und Wege messen. Keine App, kein Wissen, keine Einwilligung.',
      'exp.human-density.summary': '▶ wie kann ein Handy Menschendichte schätzen?',
      'exp.human-density.btn-start': '◉ Messung starten',

      'exp.infrasound.label': 'Experiment · Mikrofon',
      'exp.infrasound.title': 'Geräusche, die du nicht<br>hören kannst, sind überall.',
      'exp.infrasound.desc': 'Unterhalb von 20&thinsp;Hz wird Schall zum Infraschall — unter der Schwelle des menschlichen Gehörs. Aber das Mikrofon kümmert das nicht. Erdbeben, Stürme, Industriemaschinen, Verkehrslärm, Klimaanlagen — all das erschüttert ständig die Luft und deine Wände.',
      'exp.infrasound.shock': '<strong>Infraschall bei 18,98&thinsp;Hz wurde mit Unwohlsein, Beklemmung und dem Gefühl einer Anwesenheit in Verbindung gebracht.</strong> 1998 entdeckte Vic Tandy, dass ein Labor 18,98-Hz-Stehwellen durch einen Ventilator erzeugte — Mitarbeiter berichteten von Geistgesichten und Übelkeit. Die Frequenz entspricht der Resonanzfrequenz des menschlichen Augapfels.',
      'exp.infrasound.summary': '▶ warum hören Mikrofone, was wir nicht hören?',
      'exp.infrasound.btn-start': '◉ Hören starten',

      'exp.led-quality.label': 'Experiment · Kamera',
      'exp.led-quality.title': 'nicht jedes Licht<br>ist dasselbe Licht.',
      'exp.led-quality.desc': 'Billige LED-Lampen fluten den Raum mit Licht — aber die Hälfte der Farben im sichtbaren Spektrum fehlt möglicherweise komplett. Eine gute LED füllt die Lücken; eine schlechte nicht, und dein Gehirn zahlt den Preis in Augenbelastung, Farbverzerrung und gestörtem Schlaf.',
      'exp.led-quality.shock': '<strong>der Blaulicht-Spike in billigen LEDs stört die Melatonin-Produktion stärker als jedes andere künstliche Licht.</strong> Die meisten LED-Beleuchtungen haben einen starken Spitzenwert bei 450&thinsp;nm (tiefblau). Dieser Spike unterdrückt die Melatonin-Produktion um bis zu 85%. Ein CRI unter 80 bedeutet, dass über 20% der Farbinformation fehlt.',
      'exp.led-quality.summary': '▶ was ist CRI und warum ist er wichtig?',
      'exp.led-quality.btn-start': '◉ Licht analysieren',

      'exp.light-flicker.label': 'Experiment · Kamera',
      'exp.light-flicker.title': 'Lichter, die schneller flimmern,<br>als du sehen kannst.',
      'exp.light-flicker.desc': 'Die meisten LED-Lampen und Leuchtstoffröhren flimmern mit 50 oder 100&thinsp;Hz — zu schnell zum Sehen, aber deine Handykamera erfasst es Bild für Bild. Anhaltende Exposition gegenüber unsichtbarem Flimmern verursacht bei empfindlichen Menschen Kopfschmerzen und Migräne.',
      'exp.light-flicker.shock': '<strong>billige LED-Lampen können bis zu 120 Mal pro Sekunde flimmern.</strong> Mit LED-Panels beleuchtete Büros arbeiten häufig mit 100% Flimmertiefe — das Licht geht zwischen den Pulsen tatsächlich vollständig aus. EEG-Studien zeigen, dass dies Alpha-Wellen im Gehirn stört, auch wenn Probanden kein Unbehagen melden.',
      'exp.light-flicker.summary': '▶ warum ist Flimmern wichtig?',
      'exp.light-flicker.btn-start': '◉ Kamera starten',

      'exp.mains-hum.label': 'Experiment 05 · Akustik',
      'exp.mains-hum.title': 'das Stromnetz<br>summt in deinen Wänden.',
      'exp.mains-hum.desc': 'Jeder Raum mit Elektroinstallation hat ein 50-Hz- oder 60-Hz-Summen — abgestrahlt von Kabeln, Transformatoren und Leuchtstofflampen. Das Mikrofon deines Handys nimmt es selbst durch die Stille auf. So datieren forensische Labore Tonaufnahmen.',
      'exp.mains-hum.shock': '<strong>jede Aufnahme trägt ihren Entstehungsort im Summen.</strong> EU-Netz = 50&thinsp;Hz. USA/Japan = 60&thinsp;Hz. ENF-Analyse vergleicht das Summen einer Aufnahme mit historischen Netzfrequenzprotokollen — auf Minuten genau. Polizeiliche Forensiklabore datieren Aufnahmen auf diese Weise. Kein Zeitstempel nötig.',
      'exp.mains-hum.summary': '▶ wie funktioniert das?',
      'exp.mains-hum.btn-start': '◉ Hören',

      'exp.motion.label': 'Experiment · Beschleunigungssensor',
      'exp.motion.title': 'jede Oberfläche<br>hat eine Stimme.',
      'exp.motion.desc': 'Lege dein Handy mit der Vorderseite nach unten auf eine beliebige Oberfläche und klopfe. Der Beschleunigungssensor erfasst den Schwingungsabfall. Verschiedene Materialien — Holz, Glas, Beton, Metall — resonieren bei unterschiedlichen Frequenzen. Dein Handy kann sie unterscheiden.',
      'exp.motion.shock': '<strong>so erkennen Seismologen unterirdische Strukturen.</strong> Oberflächenwellenanalyse zeigt, was sich darunter befindet — Bodentyp, Grundwassertiefen, Hohlräume. Ölkonzerne durchqueren Gelände mit solchen Sensoren, um Lagerstätten zu finden. Der MEMS-Beschleunigungssensor deines Handys macht dasselbe im menschlichen Massstab.',
      'exp.motion.summary': '▶ wie funktioniert das?',
      'exp.motion.btn-start': '◉ Sensor starten',

      'exp.network-fingerprint.label': 'Experiment 10 · Browser-APIs',
      'exp.network-fingerprint.title': 'du hast ihnen<br>bereits alles gesagt.',
      'exp.network-fingerprint.desc': 'Du hast nichts angeklickt. Kein Login. Kein Formular. Aber dein Browser hat bereits Dutzende Datenpunkte gesendet, die zusammen dich unter Milliarden Nutzern eindeutig identifizieren. Das ist, was du bei jedem Seitenaufruf preisgibst.',
      'exp.network-fingerprint.shock': '<strong>77% des Webs nutzen Browser-Fingerprinting.</strong> Im Gegensatz zu Cookies benötigt es keinen Speicher — es kann nicht gelöscht werden. Ein VPN ändert deine IP. Es ändert nicht deine GPU, deine Schriften, deinen Zeitzonen-Offset oder wie dein Browser eine Canvas rendert. Diese bilden einen Fingerabdruck, der über Sitzungen hinweg bestehen bleibt.',
      'exp.network-fingerprint.summary': '▶ wie funktioniert das?',
      'exp.network-fingerprint.btn-start': '',

      'exp.passive-telemetry.label': 'Experiment 11 · alle Sensoren',
      'exp.passive-telemetry.title': 'das wird<br>gesammelt.',
      'exp.passive-telemetry.desc': 'Du hast nichts installiert. Du hast keinen Bedingungen zugestimmt. Aber gerade jetzt verpackt und lädt jede App auf deinem Handy mit Hintergrundberechtigungen ein Profil deines Lebens hoch — wo du bist, wie du dich bewegst, was für ein Netz du nutzt, wann dein Akku leer ist.',
      'exp.passive-telemetry.shock': '<strong>das durchschnittliche Smartphone sendet täglich Daten an 1.400 verschiedene Server.</strong> Das meiste passiert im Hintergrund, während du schläfst. Apps erheben legal deinen genauen Standort, Bewegungsmuster, Akkustand und Geräte-Fingerabdruck — und verkaufen ihn an Datenhändler. Ein Datenbroker-Profil weiss, wo du arbeitest, schläfst und betest — bevor es deine Familie weiss.',
      'exp.passive-telemetry.summary': '',
      'exp.passive-telemetry.btn-start': '◉ Meine Telemetrie anzeigen',

      'exp.retroreflector.label': 'Experiment · Kamera',
      'exp.retroreflector.title': 'versteckte Kameras<br>verraten sich mit Licht.',
      'exp.retroreflector.desc': 'Verborgene Kameraobjektive sind mit Glas beschichtet, das Licht zurück zur Quelle reflektiert. Wenn die Taschenlampe deines Handys einen Raum beleuchtet, leuchtet ein verstecktes Objektiv mit einem hellen Punkt auf — während alles andere Licht in alle Richtungen streut.',
      'exp.retroreflector.shock': '<strong>Versteckte Kameras werden wöchentlich in Airbnbs, Hotelzimmern und Umkleidekabinen gefunden.</strong> 2019 wurden in Südkorea 1.600 Hotelgäste aus versteckten Kameras gestreamt. 2023 nahm eine als Rauchmelder getarnte Kamera in einem irischen Airbnb monatelang Gäste auf.',
      'exp.retroreflector.summary': '▶ die Physik der Retroreflexion',
      'exp.retroreflector.btn-start': '◉ Suche starten',

      'exp.room-acoustics.label': 'Experiment · Akustik',
      'exp.room-acoustics.title': 'ein Klatschen enthüllt<br>den Raum um dich.',
      'exp.room-acoustics.desc': 'Schall prallt von Wänden ab und klingt ab. Wie lange es dauert — die Nachhallzeit — hängt direkt von Raumgrösse und Oberflächenmaterial ab. Ein Klatschen im Bad klingt anders als im Schlafzimmer. Dein Handy hört den Unterschied.',
      'exp.room-acoustics.shock': '<strong>forensische Audioanalysten können anhand der Echo-Signatur bestimmen, wo eine Aufnahme gemacht wurde.</strong> Der Nachhall-Fingerabdruck eines Raums ist einzigartig — Wände, Möbel, Teppich und Deckenhöhe hinterlassen alle eine Signatur. Geheimdienste nutzen dies zur Geolokalisierung von Aufnahmen.',
      'exp.room-acoustics.summary': '▶ wie funktioniert das?',
      'exp.room-acoustics.btn-start': '◉ Hören starten',

      'exp.screen-pwm.label': 'Experiment · Kamera',
      'exp.screen-pwm.title': 'dein Bildschirm flimmert.<br>du siehst es nicht.',
      'exp.screen-pwm.desc': 'Die meisten Bildschirme dimmen ihre Helligkeit nicht durch Spannungsreduzierung, sondern durch sehr schnelles Ein- und Ausschalten — PWM (Pulsweitenmodulation). Bei 60&thinsp;Hz oder höher verschmelzen deine Augen es zu gleichmässigem Licht. Dein Gehirn verarbeitet das Flimmern trotzdem.',
      'exp.screen-pwm.shock': '<strong>PWM-Flimmern wird mit Augenbelastung, Kopfschmerzen und Migräne in Verbindung gebracht — auch wenn du dich gut fühlst.</strong> Hersteller legen PWM-Frequenzen selten offen. Günstige Bildschirme flimmern oft bei 240&thinsp;Hz oder sogar 60&thinsp;Hz. OLED-Bildschirme wechseln bei niedriger Helligkeit zu PWM — typischerweise unter 50%.',
      'exp.screen-pwm.summary': '▶ wie funktioniert PWM und warum ist es wichtig?',
      'exp.screen-pwm.btn-start': '◉ Kamera starten',

      'exp.seismic.label': 'Experiment 08 · Beschleunigungssensor',
      'exp.seismic.title': 'der Boden<br>ist nie still.',
      'exp.seismic.desc': 'Lege dein Handy flach auf einen Schreibtisch oder Boden und beobachte. Jeder vorbeifahrende LKW, jeder Schritt auf dem Flur, jeder ferne Zug — dein Handy nimmt es wahr. Das ist dasselbe Prinzip wie bei professionellen Seismographen. Dein MEMS-Sensor ist empfindlich bis ~0,001&thinsp;m/s².',
      'exp.seismic.shock': '<strong>Forscher haben Menschen durch Wände nur mit Handy-Beschleunigungssensoren verfolgt.</strong> Eine Stanford-Studie zeigte, dass dein Gang — gemessen mit einem Beschleunigungssensor — so einzigartig wie ein Fingerabdruck ist. Fussschrittvibrationen können zeigen, in welchem Zimmer du bist, wie viele Menschen anwesend sind und ob du sitzt oder stehst.',
      'exp.seismic.summary': '▶ wie funktioniert das?',
      'exp.seismic.btn-start': '◉ Sensor starten',

      'exp.sky-polarization.label': 'Experiment · Kamera + Orientierung',
      'exp.sky-polarization.title': 'Sonnenlicht ist polarisiert.<br>Bienen navigieren damit. du auch.',
      'exp.sky-polarization.desc': 'Wenn Sonnenlicht durch die Atmosphäre streut, wird es polarisiert — die Lichtwellen richten sich relativ zur Sonnenposition aus. Bienen, Ameisen und Zugvögel nutzen diesen Himmelslicht-Kompass zur Navigation, selbst wenn die Sonne verdeckt ist.',
      'exp.sky-polarization.shock': '<strong>Der wikingische Sonnenstein ist nun als echtes Navigationsinstrument bestätigt — ein Kalkspat-Kristall, der Himmelspolarisation erkennt.</strong> 2013 fanden Forscher in einem Tudor-Wrack einen Kristall mit den optischen Eigenschaften legendärer nordischer Sonnensteine. Tests zeigten: Sonnenortung auf ±1 Bogengrad bei bedecktem Himmel.',
      'exp.sky-polarization.summary': '▶ wie funktioniert Himmels-Polarisations-Navigation?',
      'exp.sky-polarization.btn-start': '◉ Himmels-Scan starten',

      'exp.surface-resonance.label': 'Experiment · Beschleunigungssensor',
      'exp.surface-resonance.title': 'klopf auf den Tisch.<br>dein Handy weiss, woraus er besteht.',
      'exp.surface-resonance.desc': 'Jedes Material hat eine natürliche Resonanzfrequenz. Stahl klingt anders als Holz, das sich anders anhört als Glas. Lege dein Handy flach, gib der Oberfläche einen scharfen Klopfer — der Beschleunigungssensor erfasst das Echo.',
      'exp.surface-resonance.shock': '<strong>Smart-Home-Geräte könnten den Grundriss deiner Wohnung allein aus Schwingungen kartieren.</strong> MIT-Forschungen zeigten, dass durch Analyse von oberflächenleitenden Geräuschen Raumgrössen, Möbelanordnungen und Wandmaterialien erkannt werden können — ohne Mikrofon.',
      'exp.surface-resonance.summary': '▶ wie funktioniert Oberflächen-Resonanzerkennung?',
      'exp.surface-resonance.btn-start': '◉ Sensor starten',

      'exp.ultrasonic.label': 'Experiment 06 · Mikrofon',
      'exp.ultrasonic.title': 'Signale, die du<br>nicht hören kannst.',
      'exp.ultrasonic.desc': 'Über 17&thinsp;kHz lässt das menschliche Gehör nach — aber Mikrofone nicht. Ultraschallsignale sind in TV-Spots, Einzelhandel und Websites eingebettet, um dich über alle deine Geräte gleichzeitig zu verfolgen. Dein Handy hört sie.',
      'exp.ultrasonic.shock': '<strong>dein Fernseher sagt deinem Handy, wann du zu Hause bist.</strong> Ultraschall-Cross-Device-Tracking (uXDT) versteckt Signale in TV-Spots. Das Mikrofon deines Handys — selbst bei ausgeschaltetem Bildschirm — hört das Signal und meldet es zurück an denselben Werbeserver. Silverpush, Lisnr und SilentSense haben das kommerziell eingesetzt.',
      'exp.ultrasonic.summary': '▶ wie funktioniert das?',
      'exp.ultrasonic.btn-start': '◉ Hören',

      'exp.urban-canyon.label': 'Experiment · GPS',
      'exp.urban-canyon.title': 'hohe Gebäude<br>zerstören GPS.',
      'exp.urban-canyon.desc': 'Im freien Himmel ist GPS auf 2–5 Meter genau. Geh in eine von Glastürmen gesäumte Strasse und sieh, wie diese Zahl auf 50 oder 200 Meter springt. Das Signal prallt von Gebäuden ab — und die Reflexion sieht genauso aus wie ein direktes Signal.',
      'exp.urban-canyon.shock': '<strong>GPS-Spoofing-Angriffe auf Schiffe lassen sie Hunderte von Kilometern vom Kurs abweichen.</strong> 2017 meldeten Schiffe im Schwarzen Meer GPS-Positionen 32&thinsp;km im Landesinneren. 2019 wurden Dutzende von Schiffen nahe Shanghai mitten auf dem Pudong-Flughafen verortet. Kein spezielles Gerät nötig — nur ein Signalsender und ein Laptop.',
      'exp.urban-canyon.summary': '▶ was verursacht GPS-Fehler in Stadtschluchten?',
      'exp.urban-canyon.btn-start': '◉ GPS starten',

      'exp.what-you-reveal.label': 'Experiment · Bewegungsinferenz',
      'exp.what-you-reveal.title': 'deine Bewegung<br>ist ein Geständnis.',
      'exp.what-you-reveal.desc': 'Apps brauchen keine Kamera, um zu wissen, was du tust. Die Art, wie du gehst, tippst, fährst oder schläfst — all das zeigt sich im Beschleunigungssensor. Geh ein paar Sekunden umher und sieh, was in Echtzeit abgeleitet werden kann, ohne dein Wissen.',
      'exp.what-you-reveal.shock': '<strong>dein Tipp-Rhythmus ist so einzigartig wie ein Fingerabdruck.</strong> Forschungen am MIT und Stanford zeigten, dass Beschleunigungssensor-Daten — still im Hintergrund gesammelt — dich mit 99% Genauigkeit erkennen können. Dieselben Daten sagen Alter, Geschlecht, Gesundheitszustand und Gemütszustand voraus.',
      'exp.what-you-reveal.summary': '▶ was kann wirklich aus Bewegung abgeleitet werden?',
      'exp.what-you-reveal.btn-start': '◉ Mich lesen starten',

      'exp.wifi-density.label': 'Experiment · WLAN-Scanning',
      'exp.wifi-density.title': 'jedes Netzwerk, das du<br>siehst, ist ein Datenpunkt.',
      'exp.wifi-density.desc': 'Dein Handy kann gleichzeitig Dutzende von WLAN-Netzwerken sehen — jedes ein kleines Radio-Leuchtfeuer mit festem Standort. Anzahl, Signalstärken und Namen der Netzwerke verraten viel darüber, wo du bist.',
      'exp.wifi-density.shock': '<strong>Google und Apple haben mit den Handys ihrer Nutzer den Standort jedes WLAN-Netzwerks auf der Erde kartiert.</strong> Jedes Mal, wenn ein Handy eine Standortabfrage macht, meldet es nahegelegene Netzwerke zusammen mit GPS-Koordinaten. Apple hat über 100 Millionen Access Points in seiner Datenbank. 2010 sammelten Googles Street-View-Fahrzeuge auch Paketdaten aus offenen Netzwerken.',
      'exp.wifi-density.summary': '▶ was sagt WLAN-Dichte aus?',
      'exp.wifi-density.btn-start': '◉ Live-Scan starten',

      // footer
      'footer.rights': '© 2025 rfi-irfos. Open Source.',
    }
  };

  var SUPPORTED = ['en', 'de'];

  function detectLang() {
    var saved = localStorage.getItem('il-lang');
    if (saved && SUPPORTED.indexOf(saved) >= 0) return saved;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (nav.indexOf('de') === 0) return 'de';
    return 'en';
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) < 0) lang = 'en';
    var strings = STRINGS[lang];
    document.documentElement.lang = lang;
    localStorage.setItem('il-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) {
        el.innerHTML = strings[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (strings[key] !== undefined) el.placeholder = strings[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-title');
      if (strings[key] !== undefined) el.title = strings[key];
    });

    // update lang toggle button label
    var btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';
  }

  window.IL_I18N = {
    detect: detectLang,
    apply: applyLang,
    strings: STRINGS,
    toggle: function() {
      var cur = localStorage.getItem('il-lang') || detectLang();
      applyLang(cur === 'de' ? 'en' : 'de');
    }
  };

  // auto-apply on load
  applyLang(detectLang());
})();
