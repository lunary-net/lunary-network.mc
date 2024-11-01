const fs = require('fs');

function setupSystem365() {
    const config = {
        "System365": {
            "title": "System365 ツ",
            "description": "LunarySystem365",
            "version": "v2.1",
            "developers": "Lunary Network staff team",
            "OS": "Windows 11 Pro",
            "languages": ["HTML", "CSS", "JavaScript", "JSON"],
            "system": "debugged"
        }
    };

    fs.writeFileSync('system365.json', JSON.stringify(config, null, 2));
    console.log("System365 configuration saved to system365.json");
}

function logSystem365(message) {
    const log = {
        timestamp: new Date().toISOString(),
        message: message
    };

    let logs = [];
    if (fs.existsSync('log365.json')) {
        logs = JSON.parse(fs.readFileSync('log365.json', 'utf8'));
    }
    logs.push(log);

    fs.writeFileSync('log365.json', JSON.stringify(logs, null, 2));
    console.log("Log message saved to log365.json");
}

setupSystem365();
logSystem365("System365 setup initialized");
