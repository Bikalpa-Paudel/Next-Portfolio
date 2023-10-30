type Posts = {
    title: string;
    id: string;
    date:string;
}

let posts: Posts[] = [
    {
    title: "Second Blog",
    id: "1698658610204",
    date: "Mon Oct 30 2023 15:21:50 GMT+0545 (Nepal Time)" }
];

export function getPost(): Posts[]{
    return posts;
}
export function addPost(newItem: Posts){
    posts =  [...posts, newItem]
}