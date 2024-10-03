const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDirectory = path.join(process.cwd(), 'Logs');

// Function to remove log files and the Logs directory
function removeLogFiles() {
    if (fs.existsSync(logsDirectory)) {
        // Read files in the Logs directory
        const files = fs.readdirSync(logsDirectory);

        // Output the file names to delete
        files.forEach(file => {
            console.log(`Deleting: ${file}`);
            fs.unlinkSync(path.join(logsDirectory, file)); // Remove the file
        });

        // Remove the Logs directory
        fs.rmdirSync(logsDirectory);
        console.log(`Logs directory has been removed.`);
    } else {
        console.log('Logs directory does not exist.');
    }
}

// Execute the function
removeLogFiles();
