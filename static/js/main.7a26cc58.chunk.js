(this["webpackJsonptoastie-splash"]=this["webpackJsonptoastie-splash"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),o=t.n(l),i=(t(10),t(1)),s=(t(11),[/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i]);function c(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logoWrapper"},r.a.createElement("img",{src:"/images/favicon.png",className:"logo",alt:"logo"})),function(){var e=navigator.userAgent||navigator.vendor||"";return!!s[0].test(e)||!!s[1].test(e.substr(0,4))}()?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nameWrapper"},r.a.createElement("div",{className:"name"},r.a.createElement("span",{className:"bold"},"Tournament")," by Oxford Chess Development")),r.a.createElement("div",{className:"buttonContainer"},["Home","Features","Preview","Downloads","About"].map((function(a){return"Preview"===a?r.a.createElement("a",{className:"button",href:"http://beta.oxfordchess.co.uk",target:"_blank",rel:"nooopener noreferrer"},a):r.a.createElement("a",{className:"button",onClick:function(){return e.setID(a)}},a)})))))}function m(e){for(var a=Object(n.useState)(0),t=Object(i.a)(a,2),l=t[0],o=t[1],s=Object(n.useReducer)((function(e,a){return a&&setTimeout((function(){return d(!1)}),1e4),a}),!1),c=Object(i.a)(s,2),m=c[0],d=c[1],u=e.children?e.children.length:0,p=[],h=e.children||[],g=function(e){p.push(r.a.createElement("span",{className:["dot",e===l?"dotSelected":""].join(" "),onClick:function(){o(e),d(!0)}}))},f=0;f<h.length;f++)g(f);var b=Object(n.useCallback)((function(){var a;if(e.autoAdvance)return m||(a=setTimeout((function(){return o((l+1)%u)}),e.autoAdvance)),function(){clearTimeout(a)}}),[l,u,e.autoAdvance,m]);return Object(n.useEffect)(b,[b]),r.a.createElement("div",{className:"textGallery"},r.a.createElement("div",{className:"stage",style:{left:"calc(-100% * ".concat(l,")")}},h.map((function(e){return r.a.createElement("div",null,e)}))),r.a.createElement("div",{className:"selection"},p))}var d=t(2);var u=function(){var e=window.location.hash.slice(1),a=Object(n.useState)(e),t=Object(i.a)(a,2),l=t[0],o=t[1],s=document.getElementsByTagName("BODY")[0];return Object(n.useEffect)((function(){!function(e){var a=e.id;if("home"===a.toLowerCase()?window.location.hash="":window.location.hash="#"+a.toLowerCase(),document.getElementsByTagName("BODY")[0]){var t=document.getElementById("section-"+a.toLowerCase());t&&window.scrollTo({top:t.offsetTop-.12*window.innerHeight,left:0,behavior:"smooth"})}}({id:l})}),[l,s]),r.a.createElement("div",{className:"App"},r.a.createElement(c,{setID:o}),r.a.createElement("div",{id:"section-home",className:"section",style:{backgroundColor:"#111111"}},r.a.createElement("div",{className:"subheader"}),r.a.createElement("div",{className:"imageWrapper"},r.a.createElement("img",{className:"homeImage",src:"/images/cover-plain.jpg",alt:"Tournament by Oxford Chess Development"}))),r.a.createElement("div",{id:"section-features",className:"section",style:{backgroundColor:"rgb(44, 85, 19)"}},r.a.createElement("div",{className:"subheader"},"Features"),r.a.createElement("div",{className:"subsection"},r.a.createElement("ul",null,r.a.createElement("li",null,"Fully-featured Desktop app for instant and intuitive results and pairing management"),r.a.createElement("li",null,"Lightning-fast swiss system implementation"),r.a.createElement("li",null,r.a.createElement("span",{className:"bold"},"Mobile app")," allowing players to submit their results themselves"),r.a.createElement("li",null,"And many more standard functions that make your life easier, like:",r.a.createElement("ul",null,r.a.createElement("li",null,"Support for both teams and individuals"),r.a.createElement("li",null,"Match points and game points submission"),r.a.createElement("li",null,"Support for players joining and leaving tournaments"),r.a.createElement("li",null,"Changing points scored for wins, losses, draws, and byes"),r.a.createElement("li",null,"Performance rating and 'expected score' calculators via the ELO and FIDE systems"))))),r.a.createElement(m,{autoAdvance:3e3},r.a.createElement("div",null,r.a.createElement("h3",null,"Modern"),r.a.createElement("p",null,"Built with the latest front-end technologies and constantly updated. Designed to work on any platform, cross-platform. ")),r.a.createElement("div",null,r.a.createElement("h3",null,"Functional"),r.a.createElement("p",null,"Gone are the days of a single-use single-method platform. Tournament seeks to let tournament creators run things the way they want, providing as many different options and variations as possible to suit their needs.")),r.a.createElement("div",null,r.a.createElement("h3",null,"Intuitive"),r.a.createElement("p",null,"Tournament seeks to place everything right where you expect. Any feature you might be looking for there is there, right when you need it.")))),r.a.createElement("div",{id:"section-downloads",className:"section",style:{backgroundColor:"#2d132c"}},r.a.createElement("div",{className:"subheader"},"Downloads"),r.a.createElement("div",{className:"subsection"},r.a.createElement("h3",null,"Desktop App"),r.a.createElement("p",null,"The desktop (organiser) app of this software is available to beta test."),r.a.createElement("div",{className:"installer"},r.a.createElement("img",{src:"/images/online.png",alt:"linux"}),r.a.createElement("a",{className:"downloadLink",href:"http://beta.oxfordchess.co.uk/"},r.a.createElement("div",{className:"downloadTitle"},"View online beta"),r.a.createElement("div",null,"Chrome, Safari, Edge"))),r.a.createElement("div",{className:"installer"},r.a.createElement("img",{src:"/images/linux.png",alt:"linux"}),r.a.createElement("a",{className:"downloadLink",href:"http://repo.oxfordchess.co.uk/latest/ubuntu.html"},r.a.createElement("div",{className:"downloadTitle"},"\u21a7 .deb"),r.a.createElement("div",null,"Debian, Ubuntu")))),r.a.createElement("div",{className:"subsection"},r.a.createElement("h3",null,"Mobile App"),r.a.createElement("p",null,"The design of the mobile (player) app of this software has been published online on ",r.a.createElement("a",{className:"inlineLink",href:"https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile",target:"_blank",rel:"noopener noreferrer"},"Figma"),"."),r.a.createElement("div",{className:"installer"},r.a.createElement("a",{className:"downloadLink mobile",href:"https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile"},r.a.createElement("div",null,"View mobile design")))),r.a.createElement("div",{className:"subsection"},r.a.createElement("p",null,"View all versions or download directly at our ",r.a.createElement("a",{className:"inlineLink",href:"http;//repo.oxfordchess.co.uk",target:"_blank",rel:"noopener noreferrer"},"Releases page")))),r.a.createElement("div",{id:"section-about",className:"section",style:{backgroundColor:"rgb(80, 5, 5)"}},r.a.createElement("div",{className:"subheader"},"About"),r.a.createElement("p",null,'Aloysius Lip is a 2nd-year undergraduate student at the University of Oxford and the current President of the Oxford University Chess Club. He reads Philosophy, Politics, and Economics, specialising in Microeconomics, Public Economics, and Game Theory. He enjoys programming in his free time, having won the "OxfordHack" international coding competition in 2018. His previous projects in the world of chess development have included:'),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"inlineLink",href:"http://users.ox.ac.uk/~chess",target:"_blank",rel:"noopener noreferrer"},"Oxford University Chess Club")," - the official website for the university society"),r.a.createElement("li",null,r.a.createElement("a",{className:"inlineLink",href:"https://npmjs.com/package/ecf",target:"_blank",rel:"noopener noreferrer"},"ECF.JS")," - the JavaScript wrapper for the ECF grading database that makes it really easy to download rating data from the ECF for any player or club"),r.a.createElement("li",null,r.a.createElement("a",{className:"inlineLink",href:"https://npmjs.com/package/lichess",target:"_blank",rel:"noopener noreferrer"},"Lichess.JS")," - the JavaScript wrapper for the Lichess API"),r.a.createElement("li",null,r.a.createElement("a",{className:"inlineLink",href:"https://github.com/theLAZYmd/LAZYbot",target:"_blank",rel:"noopener noreferrer"},"LAZYbot")," - a Discord bot designed for chess servers")),r.a.createElement("p",null,"Leave any feedback from the beta deployment of Tournament on ",r.a.createElement("a",{className:"inlineLink",href:"https://github.com/Oxford-Chess-Development/toastie-desktop-build/issues",target:"_blank",rel:"noopener noreferrer"},"GitHub"),". It's super easy to make a GitHub account and you can track the progress on your requests as they're handled! Alternatively, contact Aloysius using one of the below links.")),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"https://facebook.com/oxfordchess",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,null)),r.a.createElement("a",{href:"https://linkedin.com/in/aloysiuslip",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.b,null)),r.a.createElement("a",{href:"https://aloysiuslip.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/icons/website.png"})),r.a.createElement("a",{href:"http://beta.oxfordchess.co.uk/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/icons/desktop.png"})),r.a.createElement("a",{href:"https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/icons/mobile.png"})),r.a.createElement("a",{href:"mailto:aloysius.lip@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/icons/email.png"}))),r.a.createElement("div",{className:"author"},"Copyright 2020, Aloysius Lip")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.7a26cc58.chunk.js.map