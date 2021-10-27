const post = [
    { name: "post 1"},
    { name: "post 2"},
    { name: "post 3"},
  ];
  
  const listpost = () => {
    post.map((post) => {
      console.log(post.name);
    });
  };
  
  
  const addBook = (newpost) => {
    post.push(newpost)
}

addBook({ name: "post 4"})
listpost();