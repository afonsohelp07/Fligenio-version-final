# Génère ../icons/icon-192.png et icon-512.png (logo GENIUS RAROS).
# Méthode recommandée : Node.js + Jimp (npm run icons depuis ce dossier).

$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Error "Node.js est requis. Installez Node, puis dans le dossier branding exécutez : npm install && npm run icons"
}

if (-not (Test-Path -LiteralPath (Join-Path $here "node_modules"))) {
    Write-Host "Installation des dépendances (jimp)..."
    npm install
}

npm run icons
