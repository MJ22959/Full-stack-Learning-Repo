function getUser(id, callback){
    setTimeout(()=> {
        console.log('Reading a user from a database...');
        callback({id: id, githubUsername: 'mosh'});
    }, 1000);
}

function getPost(id, callback){
    setTimeout(()=> {
        console.log('Reading a post from a database...');
        callback({id: id, title: 'Post'});
    }, 1000);
}

function getComment(Id, callback){
    setTimeout(()=> {
        console.log('Reading comment from a database...');
        callback({id: Id, text: 'This is a comment'});
    }, 1000);       
}

getUser(1, (user) => {
    if(!user) return console.log('User not found');
    console.log('User', user);
    getPost(1, (post) => {
        if(!post) return console.log('Post not found');
        console.log('Post', post);
        getComment(1, (comment) => {
            if(!comment) return console.log('Comment not found');
            console.log('Comment', comment);
        });
    });
});

