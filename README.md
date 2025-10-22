# 🪶 @joana23a/styled-lib

Biblioteca de componentes estilizados criada para padronizar e acelerar o desenvolvimento de interfaces em aplicações React.  
Atualmente, a lib inclui **botões**, **inputs**, **ícones** e outros componentes reutilizáveis, sendo atualizada continuamente conforme as necessidades dos projetos.

---

## 🚀 Instalação

```bash
npm install @joana23a/styled-lib
# ou
yarn add @joana23a/styled-lib
```

⚠️ Certifique-se de ter o React, React DOM e React Router DOM instalados no projeto, pois são dependências peer:
```
npm install react react-dom react-router-dom

```

## 🧩 Componentes disponíveis
| Componente | Descrição                                                   |
| ---------- | ----------------------------------------------------------- |
| `Button`   | Botão estilizado com variações (primário, secundário, etc.) |
| `Input`    | Campo de entrada com estilos consistentes                   |
| `Icon`     | Conjunto de ícones prontos para uso                         |
| `Select`   | Select personalizado utilizando `react-select`              |

(Mais componentes serão adicionados conforme a evolução da lib.)

## 🪄 Exemplo de uso
```
import { Button, Input } from "@joana23a/styled-lib";

export function Exemplo() {
  return (
    <div className="flex flex-col gap-4 w-64">
      <Input placeholder="Digite algo..." />
      <Button variant="primary" onClick={() => alert("Clicado!")}>
        Enviar
      </Button>
    </div>
  );
}

```
🧭 Roadmap

  - [x]Componentes básicos (botão, input, ícones)

  - [ ]Sistema de temas (cores e tipografia)

  - [X]Documentação completa no Storybook

  - [X]Novos componentes (modal, card, navbar)

  - [x]Publicação automatizada via CI/CD

## 🧑‍💻 Desenvolvimento local

Se quiser contribuir ou testar localmente:
```
git clone https://github.com/joana23a/styled-lib.git
cd styled-lib
npm install
npm run dev
```

Para visualizar os componentes no Storybook:
```
npm run storybook
```

## 📦 Build

Para gerar a versão final da biblioteca:
```
npm run build

```
Os arquivos compilados ficam disponíveis em /dist.

## 🌱 Observações
A biblioteca está em constante evolução.
Novos componentes e ajustes serão adicionados conforme as necessidades dos projetos que utilizam a lib.
