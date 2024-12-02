const baseURL = 'http://localhost:5000/api/posts'

document.getElementById('create-form').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const title = document.getElementById('create-title').value;
    const content = document.getElementById('create-content').value;

    const response = await fetch(baseURL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({title,content}),
    });

    const result = await response.json();
    alert(`Created post : ${result.title}`);
});


document.getElementById('load-posts').addEventListener('click',async()=>{
    const response = await fetch(baseURL);
    const posts = await response.json();

    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = ""

    posts.forEach(post=>{
        const li = document.createElement('li');
        li.textContent = `ID : ${post.id} | title : ${post.title} | content : ${post.content}`;
        postsList.appendChild(li);
    });
});

document.getElementById('delete-form').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const id = document.getElementById('delete-id').value;

    const response = await fetch(`${baseURL}/${id}`,{method:'DELETE'});
    const result  = await response.json();
    alert(result.message)
});



document.getElementById('update-form').addEventListener('submit',async (e)=>{
    e.preventDefault();
    const id = document.getElementById('update-id').value;
    const title = document.getElementById('update-title').value;
    const content = document.getElementById('update-content').value;

    const response = await fetch(`${baseURL}/${id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({title,content})
    });
    const result = await response.json();
    alert(`Updated post ${result.title}`)
});