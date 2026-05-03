# Fligenio · ERP PME (paquet prêt pour GitHub)

Interface web unique (`index.html`) + **un seul** fichier Apps Script (`Code.gs` : backend complet + plan de comptes SNC Portugal).

## Contenu

| Élément | Rôle |
|---------|------|
| `Code.gs` | Coller dans **un seul** fichier du projet Apps Script lié à votre Google Sheet. |
| `index.html` | Héberger sur **GitHub Pages**, ouvrir en local, ou intégrer dans Google Sites. |
| `manifest.webmanifest` / `sw.js` | PWA optionnelle (installable sur mobile / bureau). |
| `icons/` | Y placer `icon-192.png` et `icon-512.png` (voir `branding/README.md`). |

## Mise en service backend

1. Créer ou ouvrir une **Google Sheet**.
2. **Extensions → Apps Script** → remplacer le contenu de `Code.gs` par le fichier du dépôt.
3. Enregistrer. Exécuter **une fois** `installERP_v3` (sélection de la fonction → Exécuter).  
   - Crée les feuilles, dont **PlanoContas** (référentiel SNC), et le compte admin par défaut.
4. **Déployer → Nouvelle déploiement** → **Application web** : exécuter en tant que **Moi**, accès **Tout le monde**.
5. Copier l’URL se terminant par `/exec` et la coller dans l’interface (`NHALABENE_API_URL` ou écran Configuration).

**Identifiants par défaut** (à changer immédiatement) : `admin` / `Admin@ERP2024!`, PIN `000000`.

**Feuille déjà installée sans Plano** : ouvrir la page « Plano de contas » une fois connecté ; le backend appelle `_ensurePlanoContasSheet()` et peut créer/remplir la feuille. Sinon, réexécuter `installERP_v3` avec précaution (menu ERP du tableur).

## GitHub Pages

1. Pousser ce dossier dans un dépôt GitHub.
2. **Settings → Pages** : branche et dossier racine (ou `/docs`).
3. Ouvrir l’URL Pages ; configurer l’URL de l’API Web App dans l’app.

Les domaines `github.io` et `script.google.com` sont différents ; la Web App doit autoriser l’accès anonyme pour que `fetch` depuis le navigateur fonctionne (réglage « Tout le monde »).

## PWA et logo (GENIUS RAROS)

Les icônes **`icons/icon-192.png`** et **`icons/icon-512.png`** sont générées à partir du logo dans **`branding/genius-raros-logo.png`**. Pour les régénérer : `cd branding` puis `npm install` et **`npm run icons`** (voir `branding/README.md`). Le manifest utilise le navy `#0a1128` et l’or `#d4af37` pour cohérence avec la marque.

## Développement parallèle

Les sources « complètes » du même projet peuvent aussi exister en **deux fichiers** `.gs` dans Apps Script : `Nhalabene_Script_PRINCIPAL_COMPLETE.gs` + `Nhalabene_PlanoContas_PT.gs` (même logique, `SH.PLANO_CONTAS` et `getPlanoContas` sont dans le principal).
