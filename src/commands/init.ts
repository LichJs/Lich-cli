import { Command, flags } from '@oclif/command';
import * as inquirer from 'inquirer';

export default class Init extends Command {
  static description = 'init a Lich.js boilerplate from github.';

  static examples = [
    `$ Lich-cli init
new project from ./src/init.ts!`
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'name to print' }),
    force: flags.boolean({ char: 'f' })
  };

  static args = [{ name: 'project' }];

  async run() {
    const { args, flags } = this.parse(Init);
    const name = flags.name || 'world';
    this.log(name);
    let questions = [
      {
        type: 'input',
        name: 'projectName',
        message: 'what\'s your project name?',
        default: args.project
      }
    ];
    inquirer.prompt(questions);
  }
}
