# Phaser Bun TypeScript Template - Packaged

This is a fork of the Phaser 3 project template using Vite and Bun. It is inteded to be used to publish your game to npm and hosted on another project. Original template project: https://github.com/phaserjs/template-bun.

## Requirements

[Bun](https://bun.sh) is required to install dependencies and run scripts via `bun`.

## Available Commands

| Command | Description |
|---------|-------------|
| `bun install` | Install project dependencies |
| `bun run dev` | Launch a development web server |
| `bun run build` | Create a production build in the `dist` folder |
| `bun publish` | Triggers the npm package publish flow. This builds the project, bumps the version, and publishes the package. |

## Template Project Structure

We have provided a default project structure to get you started. This is as follows:

| Path                         | Description                                                |
|------------------------------|------------------------------------------------------------|
| `index.html`                 | A basic HTML page to contain the game.                     |
| `public/assets`              | Game sprites, audio, etc. Served directly at runtime.      |
| `public/style.css`           | Global layout styles.                                      |
| `src/game`                   | Folder containing the game code.                           |
| `src/main.ts`                | Application bootstrap.                                     |
| `src/game/main.ts`           | Game entry point: configures and starts the game.          |
| `src/game/scenes`            | Folder with all Phaser game scenes.                        |

## Handling Assets

All assets must be bundled by Vite via JavaScript module `import` statements, as to be included in the npm package.

```js
import logoImg from './assets/logo.png'
```

To load static files such as audio files, videos, etc place them into the `public/assets` folder. Then you can use this path in the Loader calls within Phaser:

```js
preload ()
{
    //  This is an example of an imported bundled image.
    //  Remember to import it at the top of this file
    this.load.image('logo', logoImg);
}
```

When you issue the `bun run build` command, all static assets are automatically copied to the `dist/assets` folder.

## Deploying to Production

After you run the `bun run build` command, your code will be built into a single bundle and saved to the `dist` folder, along with any other assets your project imported, or stored in the public assets folder.

## Join the Phaser Community!

We love to see what developers like you create with Phaser! It really motivates us to keep improving. So please join our community and show-off your work 😄

**Visit:** The [Phaser website](https://phaser.io) and follow on [Phaser Twitter](https://twitter.com/phaser_)<br />
**Play:** Some of the amazing games [#madewithphaser](https://twitter.com/search?q=%23madewithphaser&src=typed_query&f=live)<br />
**Learn:** [API Docs](https://newdocs.phaser.io), [Support Forum](https://phaser.discourse.group/) and [StackOverflow](https://stackoverflow.com/questions/tagged/phaser-framework)<br />
**Discord:** Join us on [Discord](https://discord.gg/phaser)<br />
**Code:** 2000+ [Examples](https://labs.phaser.io)<br />
**Read:** The [Phaser World](https://phaser.io/community/newsletter) Newsletter<br />

Created by [Phaser Studio](mailto:support@phaser.io). Powered by coffee, anime, pixels and love.

The Phaser logo and characters are &copy; 2011 - 2025 Phaser Studio Inc.

All rights reserved.
