const {fetchEvent} = require('./services/index')

function main(){
    const [,,command,username] = process.argv;
    if(command !== 'github-activity'){
        process.exit(1)
    }
    fetchEvent(username)
}

main()