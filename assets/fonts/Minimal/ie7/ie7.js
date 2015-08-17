/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Minimal\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-image': '&#xe61a;',
		'icon-arrow-su': '&#xe600;',
		'icon-arrow-sr': '&#xe601;',
		'icon-arrow-sl': '&#xe602;',
		'icon-arrow-sd': '&#xe603;',
		'icon-arrow-lu': '&#xe604;',
		'icon-arrow-ll': '&#xe605;',
		'icon-arrow-ld': '&#xe606;',
		'icon-trash': '&#xe607;',
		'icon-timer': '&#xe608;',
		'icon-tick': '&#xe609;',
		'icon-tag': '&#xe60a;',
		'icon-remove': '&#xe60b;',
		'icon-profile': '&#xe60c;',
		'icon-profile-group': '&#xe60d;',
		'icon-profile-friend': '&#xe60e;',
		'icon-profile-add': '&#xe60f;',
		'icon-pencil': '&#xe610;',
		'icon-message2': '&#xe611;',
		'icon-message': '&#xe612;',
		'icon-map-marker': '&#xe613;',
		'icon-mail': '&#xe614;',
		'icon-magnify': '&#xe615;',
		'icon-magnify-plus': '&#xe616;',
		'icon-magnify-minus': '&#xe617;',
		'icon-lock-open': '&#xe618;',
		'icon-lock-closed': '&#xe619;',
		'icon-home': '&#xe61b;',
		'icon-heart': '&#xe61c;',
		'icon-hamburger': '&#xe61d;',
		'icon-flask': '&#xe61e;',
		'icon-eye': '&#xe61f;',
		'icon-doc-remove': '&#xe620;',
		'icon-doc-edit': '&#xe621;',
		'icon-doc-copy': '&#xe622;',
		'icon-doc-add': '&#xe623;',
		'icon-diamond': '&#xe624;',
		'icon-delete': '&#xe625;',
		'icon-cog': '&#xe626;',
		'icon-cloud': '&#xe627;',
		'icon-clock': '&#xe628;',
		'icon-card': '&#xe629;',
		'icon-camera': '&#xe62a;',
		'icon-calendar2': '&#xe62b;',
		'icon-calendar': '&#xe62c;',
		'icon-basket': '&#xe62d;',
		'icon-arrow-lr': '&#xe62e;',
		'icon-add': '&#xe62f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
