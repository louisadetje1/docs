(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{119:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),c=t.n(r),l=t(155),i=t.n(l),s=t(157),o=t(153),m=t(145),u=t(147),d=t(120),h=t.n(d),p=[{title:c.a.createElement(c.a.Fragment,null,"Machine Data"),imageUrl:"img/machine_data.png",description:c.a.createElement(c.a.Fragment,null,"Instantly access aggregated & standardized machine data from any brand or convert files directly within your app")},{title:c.a.createElement(c.a.Fragment,null,"Field Boundary Management"),imageUrl:"img/field_boundaries.png",description:c.a.createElement(c.a.Fragment,null,"Import, export, and sync field boundaries across 120+ AgTech platforms")},{title:c.a.createElement(c.a.Fragment,null,"Imagery"),imageUrl:"img/imagery.png",description:c.a.createElement(c.a.Fragment,null,"Receive imagery from all of your preferred satellite, airplane, and drone providers")}];function g(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(u.a)(a);return c.a.createElement("div",{className:i()("col col--4",h.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:h.a.featureImage,src:r,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}a.default=function(){var e=Object(m.a)().siteConfig,a=void 0===e?{}:e;return c.a.createElement(s.a,{title:"Hello from "+a.title,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:i()("hero hero--primary",h.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:h.a.buttons},c.a.createElement(o.a,{className:i()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(u.a)("docs/")},"Documentation")))),c.a.createElement("main",null,p&&p.length>0&&c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},p.map((function(e,a){return c.a.createElement(g,Object(n.a)({key:a},e))})))))))}},158:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(155),l=t.n(c),i=t(154),s=t(145);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(i.useHistory)(),m=Object(s.a)().siteConfig,u=(void 0===m?{}:m).baseUrl,d=function(){a.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(88),t.e(90)]).then(t.bind(null,160)),t.e(55).then(t.t.bind(null,159,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=u+t.url;document.createElement("a").href=n,o.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:c}))}}}]);