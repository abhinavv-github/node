const {readFile, writeFile} = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {

      if(err)
      {
        console.log(err)        // will return buffer if utf8 is not applied 
        return 
      }
      const first = result

      readFile('./content/second.txt','utf8',(err, result) =>
      {
        if(err)
        {
          console.log(err)      
          return 
        }
        const second = result

        writeFile (
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`
            ,(err,result) => {
             if(err)
             {
                 console.log(err)
                 return 
             }
             console.log('done with the task')
        })
      })
})

console.log('starting next task')