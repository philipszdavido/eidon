let paths = process.env.PATH.split(path.delimiter)
paths.forEach((path) => {
    console.log('\x1b[36m%s\x1b[4m', path)
    console.log('\x1b[33m%s\x1b[0m', path)
    console.log('\x1b[32m', path)
    console.log('\x1b[4m', path)
})