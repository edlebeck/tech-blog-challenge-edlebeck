const createPost = async(event) => {
    event.preventDefault();

    document.location.replace('/dashboard/new')
}


document.querySelector('#create-new-post').addEventListener('click', createPost);
