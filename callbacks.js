//Callback
// call a post from a server

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000); // the GetPost is loads faster 
}

function createPost(post, callback){  // add callback function
    setTimeout(()=>{
posts.push(post)
callback(); // this will be in place of getPost();
    }, 2000); // the CreatePost is loading slower and it won´t show 
}

//getPost();

createPost({title: 'Post Three', body: 'This is post 3'}
, getPost); // the callback without parenthesis 

// with the callback the process lasts 3 sec = 2 sec createPost and after 1 sec getPost