Lich-cli
========

Standard Tooling for Lich.js Development

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/Lich-cli.svg)](https://npmjs.org/package/Lich-cli)
[![CircleCI](https://circleci.com/gh/dmoosocool/Lich-cli/tree/master.svg?style=shield)](https://circleci.com/gh/dmoosocool/Lich-cli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/dmoosocool/Lich-cli?branch=master&svg=true)](https://ci.appveyor.com/project/dmoosocool/Lich-cli/branch/master)
[![Codecov](https://codecov.io/gh/dmoosocool/Lich-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/dmoosocool/Lich-cli)
[![Downloads/week](https://img.shields.io/npm/dw/Lich-cli.svg)](https://npmjs.org/package/Lich-cli)
[![License](https://img.shields.io/npm/l/Lich-cli.svg)](https://github.com/dmoosocool/Lich-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g Lich-cli
$ Lich-cli COMMAND
running command...
$ Lich-cli (-v|--version|version)
Lich-cli/0.0.0 darwin-x64 node-v9.7.1
$ Lich-cli --help [COMMAND]
USAGE
  $ Lich-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`Lich-cli help [COMMAND]`](#lich-cli-help-command)
* [`Lich-cli init [PROJECT]`](#lich-cli-init-project)

## `Lich-cli help [COMMAND]`

display help for Lich-cli

```
USAGE
  $ Lich-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.0/src/commands/help.ts)_

## `Lich-cli init [PROJECT]`

descibe the command here.

```
USAGE
  $ Lich-cli init [PROJECT]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ Lich-cli init
  new project from ./src/init.ts!
```

_See code: [src/commands/init.ts](https://github.com/dmoosocool/Lich-cli/blob/v0.0.0/src/commands/init.ts)_
<!-- commandsstop -->
