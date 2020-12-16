// Async Await

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
    }, 1000);
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        const error = false; // here you can change the error T/F
  
        if (!error) {
          resolve();
        } else {
          reject("Error: Something went wrong");
        }
      }, 2000);
    });
  }
  
  // write 'async' before the function and await inside the function 
 async function init () {  
   await createPost({title: 'Post Three', body: 'This is post 3'});

   getPost();  // you are waiting for createPost() and then you call getPost()
  }

  init();