(function () {
	window.addEventListener("load", init);

	function init() {
        let splideObjs = qsa(".splide");
        for(const obj of splideObjs) {
            new Splide(obj, {
                type: "loop",
                gap: "2em",
                arrows: true,
                fixedWidth: "32%",
                perPage: 3,
                trimSpace: true,
            }).mount();
        }
	}

    /////////////////////////////////////////////////////

	function id(idName) {
		return document.getElementById(idName);
	}
	function qs(selector) {
    	return document.querySelector(selector);
  	}
	function qsa(selector) {
		return document.querySelectorAll(selector);
	}
	function gen(tagName) {
		return document.createElement(tagName);
	}
	
})();