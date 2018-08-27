import { Command, flags } from '@oclif/command';

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
    this.log(`hello ${name} from ./src/commands/new.ts`);
    this.log(args.project);
    if (args.project && flags.force) {
      this.log(`you input --force and --file: ${args.project}`);
    }
  }
}
