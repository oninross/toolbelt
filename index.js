#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);

// ✅ 1. Generate llm.txt
if (args.includes("--llm-guide")) {
  const targetFile = path.resolve(process.cwd(), "llm.txt");

  if (fs.existsSync(targetFile)) {
    console.log("⚠️  llm.txt already exists. Skipping.");
  } else {
    fs.writeFileSync(
      targetFile,
      `# LLM Guidelines

## Markup guides

\```
<div className="block">
  <div className="block__element block__element--modifier">
</div>
\```

## Styling Guide

### SCSS Module

\```
.block {
  &__element {
    &--modifier {}
  }
}
\```

### Styled Components

\```
import styled from "styled-components";

export const FeatureBanner = styled.div\`
  &__element {
    &--modifier {}
  }\`;
\```
`,
      "utf8"
    );
    console.log("✅ Generated llm.txt");
  }
}

// ✅ 2. Run @oninross/create-component
else if (args.includes("--create-component")) {
  try {
    execSync("npx @oninross/create-component", { stdio: "inherit" });
  } catch (error) {
    console.error("❌ Failed to run create-component:", error.message);
    process.exit(1);
  }
}

// ✅ 3. Scaffold Next.js + Tailwind + Storybook
else if (args.includes("--scaffold")) {
  const cmds = [
    "npx create-next-app@latest . --app --typescript --eslint --tailwind",
    "npm install -D sass-embedded",
    "npx storybook@latest init",
  ];

  try {
    cmds.forEach((cmd) => {
      console.log(`▶ Running: ${cmd}`);
      execSync(cmd, { stdio: "inherit" });
    });
    console.log("✅ Scaffold complete!");
  } catch (error) {
    console.error("❌ Scaffold failed:", error.message);
    process.exit(1);
  }
}

// ✅ 4. Help text
else {
  console.log(`
Usage:
  npx @masterbuilder/toolbelt --llm-guide        Generate llm.txt in the project root
  npx @masterbuilder/toolbelt --create-component Run @oninross/create-component
  npx @masterbuilder/toolbelt --scaffold         Scaffold Next.js + Tailwind + Storybook

Examples:
  npx @masterbuilder/toolbelt --llm-guide
  npx @masterbuilder/toolbelt --create-component
  npx @masterbuilder/toolbelt --scaffold
  `);
}
