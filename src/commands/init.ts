import { Command, flags } from '@oclif/command';
import * as inquirer from 'inquirer';

export default class New extends Command {
  static description = 'descibe the command here.';

  static examples = [
    `$ Lich-cli new
new project from ./src/new.ts!`
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'name to print' }),
    force: flags.boolean({ char: 'f' })
  };

  static args = [{ name: 'project' }];

  async run() {
    const { args, flags } = this.parse(New);
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
