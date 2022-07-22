const fs = require('fs/promises');
const path = require('path');

export async function getSortedPostData(){
    const postsPath =  path.join(process.cwd(), 'posts');
    let allPosts = [];
    try {
        const files = await fs.readdir(postsPath);
        for(const file of files){
            const filePath = path.join(process.cwd(), 'posts', file);
            const content = await fs.readFile(filePath, 'utf-8');
            allPosts.push(JSON.parse(content));
        }    
        return allPosts;
    } catch (error) {
        console.error(error);
    }
}

export async function getPostById(id){
    const posts = await getSortedPostData();
    const post = posts.filter((post)=>post.id == id);
    return {
        ...post[0]
    }
}

