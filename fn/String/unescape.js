const und = require('underscore');
const lod = require('lodash');

/**
 * unescape - Преобразует спецсимволы HTML &amp; &lt; &gt; &quot; &#39; в обычные
 */

// lodash
console.log("lod.unescape(\"&amp; &lt; &gt; &quot; &#39; текст text\")", lod.unescape("&amp; &lt; &gt; &quot; &#39; текст text"));

// es6
function unescape(str) {
	var map = {
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		"&quot;": "\"",
		"&#39;": "'"
	};
	return str.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, function(m) { return map[m]; });
}
console.log("unescape(\"&amp; &lt; &gt; &quot; &#39; текст text\")", unescape("&amp; &lt; &gt; &quot; &#39; текст text"));
