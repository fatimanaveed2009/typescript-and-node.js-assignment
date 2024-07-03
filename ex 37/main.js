/*Large shirt: Modify the make_shirt()function so that shirts are large by default with message that read
I love Typescript. Make a large shirt and amedium shirt with the message,and ashirt of any size with a
different message.*/
function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love Typescript'; }
    console.log("creating a ".concat(size, " shirt with the message: ").concat(text));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I love Pakistan');
