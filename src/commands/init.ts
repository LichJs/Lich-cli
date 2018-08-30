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
    name: flags.string({ char: 'n', description: 'set your project name.' }),
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
        message: 'set your porject name',
        default: args.project
      },
      {
        type: 'input',
        name: 'projectPort',
        message: 'set your project prot',
        validate: (input: string) => {
          let reg = /\d\.\d\.\d/;
          if (reg.test(input)) {
            return true;
          }
          return 'please set version number';
        },
        default: '0.0.1'
      }
    ];
    let answers = await inquirer.prompt(questions);
    this.log(JSON.stringify(answers));
  }
}
