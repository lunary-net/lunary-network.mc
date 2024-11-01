const fs = require('fs');

function logMessage(message) {
    const log = {
        timestamp: new Date().toISOString(),
        message: message
    };

    let logs = [];
    if (fs.existsSync('log.json')) {
        logs = JSON.parse(fs.readFileSync('log.json', 'utf8'));
    }
    logs.push(log);

    fs.writeFileSync('log.json', JSON.stringify(logs, null, 2));
    console.log("Log message saved to log.json");
}

logMessage("LunaryNet setup initialized");
