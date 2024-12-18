import { ExtensionContext } from '@nxkit/style-dictionary/extensions';
import { Action, Dictionary, Platform } from 'style-dictionary';
import * as fs from 'fs-extra';
import * as path from 'path';

export function copyFilesAction(extensionContext: ExtensionContext): Action {
  const assetsPath = path.join(extensionContext.options.sourceRoot, 'assets');
  return {
    do: (dictionary: Dictionary, config: Platform) => {
      console.log('Copying assets directory to ' + config.buildPath + 'assets');
      fs.copySync(assetsPath, config.buildPath + 'assets');
    },
    undo: (dictionary: Dictionary, config: Platform) => {
      console.log('Removing assets directory from ' + config.buildPath + 'assets');
      fs.removeSync(config.buildPath + 'assets');
    },
  };
}
