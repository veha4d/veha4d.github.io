var e = ("main,article,aside,figcaption,figure,footer,header,hgroup,nav,section,time").split(',');
for (var i = 0; i < e.length; i++) {
	document.createElement(e[i]);
}

function setActiveMenuLink() {
	const header = document.querySelector('header');
	if (!header) return;

	const links = header.querySelectorAll('nav a');
	const path = location.pathname;

	links.forEach(link => {
		const href = link.getAttribute('href');

		if (path.endsWith(href)) {
			link.classList.add('active');
		}

		if (path.includes('/articles/') && href === '/articles.html') {
			link.classList.add('active');
		}
	});
}

async function loadPart(id, file, callback) {
	const res = await fetch(file);
	document.getElementById(id).innerHTML = await res.text();
	if (callback) callback();
}

loadPart('header', '/header.html', setActiveMenuLink);
loadPart('footer', '/footer.html');

document.addEventListener('DOMContentLoaded', () => {
	const tags = document.querySelectorAll('#tags a');
	const articles = document.querySelectorAll('article.article');

	function applyFilter(filter) {
		articles.forEach(article => {
			const categories = article.dataset.category.toLowerCase().split(',');
			if (filter === 'all' || categories.includes(filter)) {
				article.classList.remove('hidden');
			} else {
				article.classList.add('hidden');
			}
		});

		tags.forEach(t => t.classList.remove('active'));
		const activeTag = document.querySelector(`#tags a[data-filter="${filter}"]`);
		if (activeTag) activeTag.classList.add('active');
	}

	const params = new URLSearchParams(window.location.search);
	const filterFromURL = params.get('filter') ? params.get('filter').toLowerCase() : 'all';

	applyFilter(filterFromURL);

	tags.forEach(tag => {
		tag.addEventListener('click', e => {
			e.preventDefault();
			const filter = tag.dataset.filter.toLowerCase();
			applyFilter(filter);
		});
	});
});