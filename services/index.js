import {formatGithubEvent} from '../helper/index.js'
export async function fetchEvent(username){
    const res = await fetch(`https://api.github.com/users/${username}/events`)
    const data = await res.json()
    formatGithubEvent(data)
    
}