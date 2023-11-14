# Angular Material Schematic

Generates a standalone Angular (14.x) app with the following features:

* Angular Material
* Angular Material Icons
* Light / Dark Mode

## Usage

```bash
# fork or clone repo and open terminal to directory

# install dependencies and build schematic projects
npm i -g @angular-devkit/schematics-cli @angular/cli npm-check-updates npm
npm i
npm build

# or, simply run:
.\update.ps1

# generate the app
# this example assumes options are --skip-git --skip-install
schematics .:app {name} {options} --debug=false

# example
schematics .:app update --skip-git --skip-install --debug=false

mv {name} {directory}
cd {new app directory}
# install dependencies and run
npm i
npm run start:dev
```

> Once started, navigate to http://localhost:{port} (default is http://localhost:3000)

![image](https://github.com/JaimeStill/ng-material-schematic/assets/14102723/49a2c8b1-f743-4eb9-8361-7ccb04b63e7c)
 

Option | Description | Type | Default | Required
-------|-------------|------|---------|---------
`name` | The name of the Angular workspace | `string` | N/A | Yes
`app` | The name of the application | `string` | N/A (defaults to `name` if not provided) | No
`port` | The port the app will run on | `number` | `3000` | No
`directory` | The root directory of the workspace | `string` | N/A (defaults to `name` if not provided) | No
`commit` | Initial git repository commit information | `boolean` | `{ name: string, email: string, message: string }` | true | No
`package-manager` | The package manager used to install dependencies | `string` | `npm` | No
`skip-directory` | Whether to move the workspace into a directory | `boolean` | false | No
`skip-install` | When set, do not install dependency packages | `boolean` | false | No
`skip-git` | When set, does not initialize a git repository | `boolean` | false | No
