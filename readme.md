# Angular Material Schematic

Generates a standalone Angular (12.x) app with the following features:

* Angular Library
    * See `projects/{library}/src/lib` for pre-configured features.
* Angular Material
* Angular Material Icons
* Fontawesome
* Light / Dark Mode

## Usage

```
yarn global add @angular-devkit/schematics-cli @angular/cli

schematics .:app {name} {options}
```

Option | Description | Type | Default | Required
-------|-------------|------|---------|---------
`name` | The name of the Angular workspace | `string` | N/A | Yes
`app` | The name of the application | `string` | N/A (defaults to `name` if not provided) | No
`library` | The name of the library | `string` | `core` | No
`port` | The port the app will run on | `number` | `3000` | No
`directory` | The root directory of the workspace | `string` | N/A (defaults to `name` if not provided) | No
`commit` | Initial git repository commit information | `boolean | { name: string, email: string, message: string }` | true | No
`packageManager` | The package manager used to install dependencies | `string` | `yarn` | No
`skipDirectory` | Whether to move the workspace into a directory | `boolean` | false | No
`skipInstall` | When set, do not install dependency packages | `boolean` | false | No
`skipGit` | When set, does not initialize a git repository | `boolean` | false | No
