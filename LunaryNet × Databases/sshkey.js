const { exec } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

function generateSSHKey() {
    const keyPath = path.join(os.homedir(), '.ssh', 'id_rsa');
    const publicKeyPath = `${keyPath}.pub`;

    if (fs.existsSync(keyPath) || fs.existsSync(publicKeyPath)) {
        console.log('SSH key already exists. Skipping generation.');
        return;
    }

    exec(`ssh-keygen -t rsa -b 4096 -f ${keyPath} -N ""`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error generating SSH key: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log('SSH key generated successfully!');
        console.log(`Private key: ${keyPath}`);
        console.log(`Public key: ${publicKeyPath}`);
    });
}

generateSSHKey();
