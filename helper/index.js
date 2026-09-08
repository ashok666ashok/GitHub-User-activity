export function formatGithubEvent(data){
    if(data.status){
        console.log("No User Found");
        process.exit(1)
    }
    if(data.length===0){
        console.log("No Events")
        process.exit(1)
    }
    let result = {}
    data.forEach((e)=>{
        const repoName = e.repo.name;
        const event = e.type;
        result[repoName] = result[repoName] || {};
        result[repoName][event] = (result[repoName][event] || 0) + 1;        
    })
    // console.log(Object.keys(result))
    Object.keys(result).forEach((t)=>{
        const repo = result[t]
        
        if(repo.PushEvent){
            console.log(`- Pushed ${repo.PushEvent} commits to ${t}`)
        }
        if(repo.CreateEvent){
            console.log(`- Create a new branch/repo in ${t}`)
        }
        if(repo.IssueEvent){
            console.log(`- Opened isuue in ${t} `)
        }
        if(repo.WatchEvent){
            console.log(`- Starred ${t}`)
        }
    })  
}


