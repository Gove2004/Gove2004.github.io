const router = {
    currentView: null,
    views: {
        home: document.getElementById('home-view'),
        articles: document.getElementById('articles-view'),
        article: document.getElementById('article-view')
    },

    showView(viewName) {
        // 隐藏当前视图
        if (this.currentView) {
            this.currentView.style.display = 'none';
        }

        // 显示新视图
        const view = this.views[viewName];
        if (view) {
            view.style.display = 'block';
            this.currentView = view;
        }
    },

    showHome() {
        this.showView('home');
        document.title = 'Gove';
        history.pushState(null, null, '/');
    },

    showArticles() {
        this.showView('articles');
        document.title = '文章 - Gove';
        history.pushState(null, null, '#articles');
    },

    showArticle(articleId) {
        const article = blogData.getArticle(articleId);
        if (!article) return;

        this.showView('article');
        document.title = `${article.title} - Gove`;
        history.pushState(null, null, `#article/${articleId}`);
    },

    handleNavigation() {
        const hash = window.location.hash.slice(1);
        
        if (!hash) {
            this.showHome();
        } else if (hash === 'articles') {
            this.showArticles();
        } else if (hash.startsWith('article/')) {
            const articleId = hash.split('/')[1];
            this.showArticle(articleId);
        } else {
            this.showHome();
        }
    }
}; 