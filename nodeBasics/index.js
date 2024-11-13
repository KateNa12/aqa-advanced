import chalk from 'chalk';

import supportsColor from 'supports-color';

if (supportsColor.stdout) {
  console.log('Terminal stdout supports color');
}

if (supportsColor.stdout.has256) {
  console.log('Terminal stdout supports 256 colors');
}

if (supportsColor.stderr.has16m) {
  console.log('Terminal stderr supports 16 million colors (truecolor)');
}


console.log(chalk.red('Richard') + chalk.rgb(255, 136, 0).bold(' of') + chalk.yellow(' York') + chalk.green(' Gave') + chalk.cyan(' Battle') + chalk.blue(' in') + chalk.rgb(255,0,0).bold(' vain'));
//Richard (red) Of (orange) York (yellow) Gave (green) Battle (blue) In (indigo) Vain (violet)



