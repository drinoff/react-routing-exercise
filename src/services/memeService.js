const url = 'http://localhost:3030';
const allMemesUrl = '/data/memes?sortBy=_createdOn%20desc';
const memeByIdUrl = '/data/memes/'

export const getAll =()=>{
    return fetch(url+allMemesUrl)
            .then(res => res.json())
    
}
export const getOne = (memeId)=>{
    return fetch(url+memeByIdUrl +memeId)
    .then(res=>res.json())
}