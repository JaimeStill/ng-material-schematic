import {
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  apply,
  chain,
  mergeWith,
  move,
  noop,
  template,
  url
} from '@angular-devkit/schematics';

import {
  NodePackageInstallTask,
  RepositoryInitializerTask
} from '@angular-devkit/schematics/tasks';

import { strings } from '@angular-devkit/core';
import { validateProjectName } from '@schematics/angular/utility/validation';
import { Schema } from './schema';

export function spacify(str: string): string {
  return strings.dasherize(str)
    .split('-')
    .map((part) => strings.capitalize(part))
    .join(' ');
}

export default function (options: Schema): Rule {
  if (!options.name)
    throw new SchematicsException(`Invalid options, "name" is required.`);

  validateProjectName(options.name);

  if (!options.directory)
    options.directory = options.name;

  if (!options.app)
    options.app = options.name;

  const templateSource = apply(url('./files'), [
    template({
      spacify,
      ...strings,
      ...options
    }),
    options.skipDirectory
      ? noop
      : options.directory
        ? move(options.directory)
        : move(options.name)
  ]);

  return chain([
    mergeWith(templateSource),
    (_host: Tree, context: SchematicContext) => {
      let packageTask;

      if (!options.skipInstall) {
        packageTask = context.addTask(
          new NodePackageInstallTask({
            workingDirectory: options.directory,
            packageManager: options.packageManager
          })
        );
      }

      if (!options.skipGit) {
        const commit = typeof options.commit === 'object'
          ? options.commit
          : (!!options.commit ? {} : false);

        context.addTask(
          new RepositoryInitializerTask(
            options.directory,
            commit
          ),
          packageTask ? [packageTask] : []
        )
      }
    }
  ]);
}
