document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.posts li a');
    posts.forEach(post => {
        post.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Post link clicked: ' + post.textContent);
        });
    });
});
