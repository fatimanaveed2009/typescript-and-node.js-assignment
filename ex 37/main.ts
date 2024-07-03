/*Large shirt: Modify the make_shirt()function so that shirts are large by default with message that read 
I love Typescript. Make a large shirt and amedium shirt with the message,and ashirt of any size with a 
different message.*/

function make_shirt(size: string ='large', text:string = 'I love Typescript'){
    console.log(`creating a ${size} shirt with the message: ${text}`);
    
} 
make_shirt()
make_shirt('medium')
make_shirt('small', 'I love Pakistan')