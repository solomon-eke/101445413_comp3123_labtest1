const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDirectory = path.join(process.cwd(), 'Logs');

// Function to create log files
function createLogFiles() {
    // Create the Logs directory if it does not exist
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
        console.log('Created Logs directory.');
    }

    // Change the current working directory to the Logs directory
    process.chdir(logsDirectory);

    // Create 10 log files and write some text into each
    for (let i = 1; i <= 10; i++) {
        const logFileName = `log${i}.txt`;
        fs.writeFileSync(logFileName, `This is log file number ${i}.`);
        console.log(`Created: ${logFileName}`);
    }
}

// Execute the function
createLogFiles();
