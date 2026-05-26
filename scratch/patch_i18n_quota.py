import re

with open('assets/js/i18n.js', 'r', encoding='utf-8') as f:
    i18n = f.read()

en_strings = """
      // experiment strings — storage-quota
      'exp.storage-quota.label': 'experiment · browser APIs',
      'exp.storage-quota.title': 'your free disk space<br>is a fingerprint.',
      'exp.storage-quota.desc': 'Browsers let websites know how much data they can store locally. But the formula used to calculate this "quota" is often based on a percentage of your total free disk space. This leaks the exact size of your hard drive and how much space is left — a highly unique identifier.',
      'exp.storage-quota.shock': '<strong>Your exact disk capacity and free space can identify you across sites.</strong> When you visit two different websites, they both see the exact same byte-for-byte storage quota. Because this number fluctuates as you download or delete files, it creates a continuously updating fingerprint that is unique to your physical device. No cookies required.',
      'exp.storage-quota.btn-start': '◉ measure disk',
      'exp.storage-quota.summary': '▶ how does this work?',
"""

de_strings = """
      // experiment strings — storage-quota
      'exp.storage-quota.label': 'Experiment · Browser-APIs',
      'exp.storage-quota.title': 'dein freier speicherplatz<br>ist ein fingerabdruck.',
      'exp.storage-quota.desc': 'Browser teilen Websites mit, wie viel Daten sie lokal speichern können. Aber die Formel zur Berechnung dieser "Quote" basiert oft auf einem Prozentsatz deines gesamten freien Speicherplatzes. Dies verrät die genaue Grösse deiner Festplatte und wie viel Platz noch frei ist — eine höchst eindeutige Kennung.',
      'exp.storage-quota.shock': '<strong>Deine genaue Festplattenkapazität und dein freier Speicherplatz können dich seitenübergreifend identifizieren.</strong> Wenn du zwei verschiedene Websites besuchst, sehen beide auf das Byte genau dieselbe Speicherquote. Da diese Zahl schwankt, wenn du Dateien herunterlädst oder löschst, entsteht ein sich kontinuierlich aktualisierender Fingerabdruck, der für dein physisches Gerät einzigartig ist. Keine Cookies erforderlich.',
      'exp.storage-quota.btn-start': '◉ speicher messen',
      'exp.storage-quota.summary': '▶ wie funktioniert das?',
"""

fr_strings = """
      // experiment strings — storage-quota
      'exp.storage-quota.label': 'expérience · APIs du navigateur',
      'exp.storage-quota.title': 'votre espace disque<br>est une empreinte.',
      'exp.storage-quota.desc': 'Les navigateurs indiquent aux sites web combien de données ils peuvent stocker localement. Mais la formule utilisée pour calculer ce "quota" est souvent basée sur un pourcentage de votre espace disque libre total. Cela révèle la taille exacte de votre disque dur et l\\'espace restant — un identifiant hautement unique.',
      'exp.storage-quota.shock': '<strong>La capacité exacte de votre disque et l\\'espace libre peuvent vous identifier d\\'un site à l\\'autre.</strong> Lorsque vous visitez deux sites web différents, ils voient tous les deux le même quota de stockage à l\\'octet près. Parce que ce nombre fluctue au fur et à mesure que vous téléchargez ou supprimez des fichiers, il crée une empreinte numérique continuellement mise à jour qui est unique à votre appareil physique. Aucun cookie requis.',
      'exp.storage-quota.btn-start': '◉ mesurer le disque',
      'exp.storage-quota.summary': '▶ comment ça marche ?',
"""

# Insert EN strings at the end of the EN block (before "de: {")
i18n = re.sub(r'(\s*)(de: \{)', r'\1' + en_strings + r'\1\2', i18n)

# Insert DE strings at the end of the DE block (before "fr: {")
i18n = re.sub(r'(\s*)(fr: \{)', r'\1' + de_strings + r'\1\2', i18n)

# Insert FR strings at the end of the FR block (before "};")
i18n = re.sub(r'(\s*)(\}\s*;\s*var SUPPORTED)', r'\1' + fr_strings + r'\1\2', i18n)

with open('assets/js/i18n.js', 'w', encoding='utf-8') as f:
    f.write(i18n)
