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

		if (path.includes('/articles/') && href === 'articles.html') {
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