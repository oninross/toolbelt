# toolbelt

`toolbelt` is a CLI utility to speed up common frontend project tasks. It provides commands for generating LLM guidelines, scaffolding a Next.js + Storybook project, and running a component generator.

## Installation & Usage

You can run toolbelt directly with npx (no install required):

```sh
npx @oninross/toolbelt <command>
```

## Available Commands

| Command              | Description                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| `--llm-guide`        | Generate `llm.txt` in the project root with LLM guidelines                 |
| `--create-component` | Run `@oninross/create-component` to scaffold a new component               |
| `--scaffold`         | Scaffold a Next.js + Storybook project (with TypeScript, ESLint, and SCSS) |
| `--switch`, `-s`     | Interactively switch which SSH key is used for GitHub pushes               |
| `--help`             | List all available commands                                                |

## Examples

Generate LLM guidelines file:

```sh
npx @oninross/toolbelt --llm-guide
```

Run the component generator:

```sh
npx @oninross/toolbelt --create-component
```

Scaffold a Next.js + Storybook project:

```sh
npx @oninross/toolbelt --scaffold
```

Switch SSH key for GitHub pushes:

```sh
npx @oninross/toolbelt --switch
# or
npx @oninross/toolbelt -s
```

Show help:

```sh
npx @oninross/toolbelt --help
```

---

This tool is maintained by [oninross](https://github.com/oninross).
