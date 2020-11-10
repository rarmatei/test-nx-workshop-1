import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/angular', 'lib', {
      name: `feature-${schema.name}`,
      style: 'scss',
      directory: schema.directory === 'none' ? '' :  schema.directory,
      tags: `type:feature', scope:${schema.directory}`
    })
  ]);
}
