const {readFile, writeFile} = require('fs')

readFile('./content/subfolder/first.txt', 'utf8',(err,result)=>{
    if(err){
        return 0;
    }

    const first = result;

readFile('./content/subfolder/first.txt', 'utf8',(err,result)=>{
        if(err){
            return 0;
        }

        const second= result

        writeFile('./content/subfolder/result-async.txt',`here is the result : ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
            }

            console.log(result)
        })

    })
})