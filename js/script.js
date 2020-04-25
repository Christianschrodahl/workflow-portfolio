var breadCrumbs = document.getElementById("breadcrumbs");

var getPage = location.pathname.match(/\b[a-z]+/ig);
var link = getPage[0]!== "index" ? '<li><a href="/'+getPage[0]+'">'+getPage[0]+'</a></li>' : '';
    breadCrumbs.innerHTML = '<ul><li><a href="/">Home</a></li> / '+link+'</ul>';

