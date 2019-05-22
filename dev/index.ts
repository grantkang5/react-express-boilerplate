const chalk = require('chalk')
const path = require('path')
const dockerCompose = require('docker-compose');

const startDocker = async () => {
  console.log(chalk.green('Starting docker-compose...'));
  console.log(chalk.green('Creating postgres database linked to port 5432'));
  console.log(chalk.red('Make sure to specify typeorm database configs appropriately and create a local database accordingly'))
  const upResult = await dockerCompose.upAll({ cwd: path.join(__dirname) });
  console.log(chalk.blue(upResult.out || upResult.err || "").trim()); 
}

startDocker();