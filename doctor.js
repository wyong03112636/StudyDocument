const shell = require('shelljs')
const command = `echo "${true}"> .doctor.log`
shell.exec(command);