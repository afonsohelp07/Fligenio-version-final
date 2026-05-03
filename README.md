# Logo Nhalabene / Fligenio et icônes PWA

## Fichiers

| Fichier | Rôle |
|--------|------|
| **`nhalabene-logo-master.png`** | Logo source carré HD (généré depuis le kit `Marque-Entreprise-Nhalabene`, ou votre export). |
| **`../icons/icon-192.png`** | Icône PWA 192×192 (install + favicon Apple). |
| **`../icons/icon-512.png`** | Icône PWA 512×512 (splash / haute résolution). |

`index.html` référence ces icônes (`rel="icon"`, `apple-touch-icon`). Le `manifest.webmanifest` pointe vers `icons/`.

## Obtenir le logo maître et les icônes

1. À la racine du projet : dossier **`Marque-Entreprise-Nhalabene`** — lancez **`generer-les-png.cmd`** ou `scripts/npm run png`.  
   Cela remplit `png/`, copie **`nhalabene-logo-master.png`** ici et met à jour **`../icons/`**.

2. Si vous changez le logo : remplacez **`nhalabene-logo-master.png`**, puis dans **`branding/`** :

   ```bash
   npm install
   npm run icons
   ```

   Sous Windows : **`.\build-pwa-icons.ps1`**

Le script **`generate-pwa-icons.mjs`** recadre le logo en **carré** (`cover`) puis exporte 192 et 512 px.

## Charte (interface)

- Marine : `#0D2137` … `#1B4F72`
- Or : `#C9A84C`, `#E8CC80`

Vérifiez après déploiement : Chrome → F12 → **Application** → Manifest.
