const posts =[
    { title: 'Post One', body:'this is post one'},
    { title: 'Post Two', body:'this is post two' }
   ];
   
   function getPosts(){
       setTimeout(() =>{
        let output ='';
        posts.forEach((post, index) => {
            output += `<li>${post.title} created .</li>`;
        });
        document.body.innerHTML = output;
       },1000);
   }
   
   function createPost(post){
     return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);
            const error=false;
            if (!error)
             {
                setTimeout(()=>{
                    UpdateUserLastActivity();
              },1000)
             resolve();
            }
            else{
                reject('Error:something went wrong');
            }
     },2000);
    });
}


function deletePost(){
    return new Promise((resolve,reject) =>{
        setTimeout( () => {

            if(posts.values !==0){
                resolve(posts.pop());
            }
            else{
                reject('array is empty now');
            }
        },1000);
    
    })
}

const UpdateUserLastActivity=()=>{
        const error=false;
        return new Promise((resolve,reject)=>{
            if(!error){
                setTimeout(()=>{
                    console.log(`User LastActivityTime=${new Date().getTime()}`);
                    
                     resolve();
                
                   },1000)
            }
            else{
                console.log('update user last activity not performed');
                reject()
            }
    
        })
    }

    createPost({ title:'Post Three', body:'This is post Three'})
.then(() => {
     
    getPosts();

    setTimeout(() => {
        deletePost();
    },5000)

    setTimeout(() => {
        getPosts();
    },7000)
}) 
.catch(err =>console.log(err));

 