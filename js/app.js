// Markdown 配置
marked.setOptions({
    breaks: true,
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    }
});

// DOM 元素
const elements = {
    articleList: document.getElementById('article-list'),
    articlesView: document.getElementById('articles-view'),
    articleView: document.getElementById('article-view'),
    articleContent: document.getElementById('article-content'),
    home: document.getElementById('home'),
    back: document.getElementById('back')
};

// 显示文章列表
function showList() {
    elements.articleView.style.display = 'none';
    elements.articlesView.style.display = 'block';
    window.scrollTo(0, 0);
    history.pushState(null, null, '#');
    document.title = 'Blog';
}

// 显示文章内容
function showArticle(id) {
    const article = blogData.articles.find(a => a.id === id);
    if (!article) return;

    // 渲染文章
    elements.articleContent.innerHTML = marked(article.content);
    
    // 高亮代码
    elements.articleContent.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block);
    });

    // 显示文章视图
    elements.articlesView.style.display = 'none';
    elements.articleView.style.display = 'block';
    
    // 更新标题和 URL
    document.title = `${article.title} - Blog`;
    history.pushState(null, null, `#${id}`);
    window.scrollTo(0, 0);
}

// 渲染文章列表
function renderList() {
    elements.articleList.innerHTML = blogData.articles.map(article => `
        <article class="article-item">
            <time>${article.date}</time>
            <h2><a href="#${article.id}">${article.title}</a></h2>
        </article>
    `).join('');
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 渲染文章列表
    renderList();

    // 处理文章链接点击
    elements.articleList.addEventListener('click', e => {
        const link = e.target.closest('a');
        if (link) {
            e.preventDefault();
            const id = link.hash.slice(1);
            showArticle(id);
        }
    });

    // 处理返回按钮点击
    elements.back.addEventListener('click', () => {
        showList();
    });

    // 处理主页链接点击
    elements.home.addEventListener('click', e => {
        e.preventDefault();
        showList();
    });

    // 处理浏览器前进后退
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            showArticle(hash);
        } else {
            showList();
        }
    });

    // 检查初始 URL
    const hash = window.location.hash.slice(1);
    if (hash) {
        showArticle(hash);
    }
}); 