const spawn = require('child_process').spawn;
const path = require('path');

const scriptPath = path.resolve(__dirname, 'test.py'); // 절대 경로 사용
const process = spawn('python3', [scriptPath]); // Python 3 명령어 사용

process.stdout.on('data', function(data) {
    console.log(data.toString());
});

process.stderr.on('data', function(data) {
    console.error(data.toString());
});
