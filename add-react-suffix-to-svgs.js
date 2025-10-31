import fs from "fs";
import path from "path";

// Caminho do arquivo de ícones — ajuste se o seu estiver em outro lugar
const iconsIndexPath = path.resolve("./src/components/Icon/index.ts");

// Lê o conteúdo atual do arquivo
let content = fs.readFileSync(iconsIndexPath, "utf-8");

// Substitui todos os imports de SVG que ainda não têm o "?react"
const updated = content.replace(
  /from\s+['"](.+\.svg)(?!\?react)['"]/g,
  (match, p1) => `from '${p1}?react'`
);

// Salva o resultado de volta no arquivo
fs.writeFileSync(iconsIndexPath, updated, "utf-8");

console.log("✅ Sufixo ?react adicionado com sucesso aos imports de SVG!");
