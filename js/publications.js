document.getElementById('news-btn').addEventListener('click', function() {
    document.getElementById('news-btn').classList.add('active');
    document.getElementById('articles-btn').classList.remove('active');
});

document.getElementById('articles-btn').addEventListener('click', function() {
    document.getElementById('articles-btn').classList.add('active');
    document.getElementById('news-btn').classList.remove('active');
});