function start() {
    console.log('Requrst handle "start" was called');
}

function upload() {
    console.err('%c Requrst handle "upload" was called','color:#f33')
}

exports.start = start;
exports.upload = upload;