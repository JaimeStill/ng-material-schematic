# Angular Material Schematic

Generates a standalone Angular (14.x) app with the following features:

* Angular Material
* Angular Material Icons
* Light / Dark Mode

## Usage

```
npm i -g @angular-devkit/schematics-cli @angular/cli npm-check-updates npm

schematics .:app {name} {options}

cd {new app directory}
npm run watch
npm run start
```

> Once started, navigate to http://localhost:{port} (default is http://localhost:3000)

![image](https://user-images.githubusercontent.com/14102723/118379040-bec8e400-b5a5-11eb-8e37-195719eb62e0.png)  

Option | Description | Type | Default | Required
-------|-------------|------|---------|---------
`name` | The name of the Angular workspace | `string` | N/A | Yes
`app` | The name of the application | `string` | N/A (defaults to `name` if not provided) | No
`port` | The port the app will run on | `number` | `3000` | No
`directory` | The root directory of the workspace | `string` | N/A (defaults to `name` if not provided) | No
`commit` | Initial git repository commit information | `boolean` | { name: string, email: string, message: string }` | true | No
`packageManager` | The package manager used to install dependencies | `string` | `npm` | No
`skipDirectory` | Whether to move the workspace into a directory | `boolean` | false | No
`skipInstall` | When set, do not install dependency packages | `boolean` | false | No
`skipGit` | When set, does not initialize a git repository | `boolean` | false | No
