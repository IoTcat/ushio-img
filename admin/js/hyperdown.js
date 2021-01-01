(function(){var b,a=[].slice;b=(function(){var h,g,e,j,f,d,c;c=function(k){return(k.charAt(0)).toUpperCase()+k.substring(1)};j=function(k){return k.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")};f=function(t,k,s){var q,o,n,r,p,m;if(t instanceof Array){if(k instanceof Array){for(q=o=0,r=t.length;o<r;q=++o){m=t[q];s=f(m,k[q],s)}}else{for(n=0,p=t.length;n<p;n++){m=t[n];s=f(m,k,s)}}}else{t=j(t);s=s.replace(new RegExp(t,"g"),k)}return s};e=function(k){return k.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};d=function(p,n){var q,m,k,o,l;if(n==null){n=null}if(n!=null){l="";for(m=k=0,o=n.length-1;0<=o?k<=o:k>=o;m=0<=o?++k:--k){q=n[m];q=j(q);l+=q}l="["+l+"]*";return p.replace(new RegExp("^"+l),"").replace(new RegExp(l+"$"),"")}else{return p.replace(/^\s*/,"").replace(/\s*$/,"")}};h=function(n){var q,p,o,m,l;l=[];if(n instanceof Array){for(o=p=0,m=n.length;p<m;o=++p){q=n[o];l.push(o)}}else{for(o in n){l.push(o)}}return l};g=function(m){var p,o,l,k,n;k=[];if(m instanceof Array){for(o=0,l=m.length;o<l;o++){n=m[o];k.push(n)}}else{for(p in m){n=m[p];k.push(n)}}return k};function i(){this.commonWhiteList="kbd|b|i|strong|em|sup|sub|br|code|del|a|hr|small";this.specialWhiteList={table:"table|tbody|thead|tfoot|tr|td|th"};this.hooks={};this.html=false}i.prototype.makeHtml=function(l){var k;this.footnotes=[];this.definitions={};this.holders={};this.uniqid=(Math.ceil(Math.random()*10000000))+(Math.ceil(Math.random()*10000000));this.id=0;l=this.initText(l);k=this.parse(l);k=this.makeFootnotes(k);return this.call("makeHtml",k)};i.prototype.enableHtml=function(k){this.html=k!=null?k:true};i.prototype.hook=function(l,k){if(this.hooks[l]==null){this.hooks[l]=[]}return this.hooks[l].push(k)};i.prototype.makeHolder=function(l){var k;k="|\r"+this.uniqid+this.id+"\r|";this.id+=1;this.holders[k]=l;return k};i.prototype.initText=function(k){return k.replace(/\t/g,"    ").replace(/\r/g,"")};i.prototype.makeFootnotes=function(l){var k,m;if(this.footnotes.length>0){l+='<div class="footnotes"><hr><ol>';k=1;while(m=this.footnotes.shift()){if(typeof m==="string"){m+=' <a href="#fnref-'+k+'" class="footnote-backref">&#8617;</a>'}else{m[m.length-1]+=' <a href="#fnref-'+k+'" class="footnote-backref">&#8617;</a>';m=m.length>1?this.parse(m.join("\n")):this.parseInline(m[0])}l+='<li id="fn-'+k+'">'+m+"</li>";k+=1}l+="</ol></div>"}return l};i.prototype.parse=function(v){var n,l,o,q,r,p,s,x,k,w,m,t,u;x=[];l=this.parseBlock(v,x);r="";for(p=0,s=l.length;p<s;p++){n=l[p];t=n[0],m=n[1],o=n[2],u=n[3];q=x.slice(m,o+1);k="parse"+c(t);q=this.call("before"+c(k),q,u);w=this[k](q,u);w=this.call("after"+c(k),w,u);r+=w}return r};i.prototype.call=function(){var m,q,l,k,o,n,p;n=arguments[0],m=2<=arguments.length?a.call(arguments,1):[];p=m[0];if(this.hooks[n]==null){return p}o=this.hooks[n];for(l=0,k=o.length;l<k;l++){q=o[l];p=q.apply(this,m);m[0]=p}return p};i.prototype.releaseHolder=function(m,k){var l;if(k==null){k=true}l=0;while((m.indexOf("\r"))>=0&&l<10){m=f(h(this.holders),g(this.holders),m);l+=1}if(k){this.holders={}}return m};i.prototype.parseInline=function(m,l,k,n){if(l==null){l=""}if(k==null){k=true}if(n==null){n=true}m=this.call("beforeParseInline",m);m=m.replace(/(^|[^\\])(`+)(.+?)\2/mg,(function(o){return function(){var p;p=1<=arguments.length?a.call(arguments,0):[];return p[1]+o.makeHolder("<code>"+(e(p[3]))+"</code>")}})(this));m=m.replace(/\\(.)/g,(function(o){return function(){var q,p;p=1<=arguments.length?a.call(arguments,0):[];q=e(p[1]);q=q.replace(/\$/g,"&dollar;");return o.makeHolder(q)}})(this));m=m.replace(/<(https?:\/\/.+)>/ig,(function(o){return function(){var q,r,p;r=1<=arguments.length?a.call(arguments,0):[];p=o.cleanUrl(r[1]);q=o.call("parseLink",r[1]);return o.makeHolder('<a href="'+p+'">'+q+"</a>")}})(this));m=m.replace(/<(\/?)([a-z0-9-]+)(\s+[^>]*)?>/ig,(function(o){return function(){var p;p=1<=arguments.length?a.call(arguments,0):[];if((("|"+o.commonWhiteList+"|"+l+"|").indexOf("|"+p[2].toLowerCase()+"|"))>=0){return o.makeHolder(p[0])}else{return e(p[0])}}})(this));m=f(["<",">"],["&lt;","&gt;"],m);m=m.replace(/\[\^((?:[^\]]|\\\]|\\\[)+?)\]/g,(function(o){return function(){var q,p;p=1<=arguments.length?a.call(arguments,0):[];q=o.footnotes.indexOf(p[1]);if(q<0){q=o.footnotes.length+1;o.footnotes.push(o.parseInline(p[1],"",false))}return o.makeHolder('<sup id="fnref-'+q+'"><a href="#fn-'+q+'" class="footnote-ref">'+q+"</a></sup>")}})(this));m=m.replace(/!\[((?:[^\]]|\\\]|\\\[)*?)\]\(((?:[^\)]|\\\)|\\\()+?)\)/g,(function(o){return function(){var r,q,p;q=1<=arguments.length?a.call(arguments,0):[];r=e(o.escapeBracket(q[1]));p=o.escapeBracket(q[2]);p=o.cleanUrl(p);return o.makeHolder('<img src="'+p+'" alt="'+r+'" title="'+r+'">')}})(this));m=m.replace(/!\[((?:[^\]]|\\\]|\\\[)*?)\]\[((?:[^\]]|\\\]|\\\[)+?)\]/g,(function(o){return function(){var r,q,p;q=1<=arguments.length?a.call(arguments,0):[];r=e(o.escapeBracket(q[1]));p=o.definitions[q[2]]!=null?'<img src="'+o.definitions[q[2]]+'" alt="'+r+'" title="'+r+'">':r;return o.makeHolder(p)}})(this));m=m.replace(/\[((?:[^\]]|\\\]|\\\[)+?)\]\(((?:[^\)]|\\\)|\\\()+?)\)/g,(function(o){return function(){var r,q,p;q=1<=arguments.length?a.call(arguments,0):[];r=o.parseInline(o.escapeBracket(q[1]),"",false,false);p=o.escapeBracket(q[2]);p=o.cleanUrl(p);return o.makeHolder('<a href="'+p+'">'+r+"</a>")}})(this));m=m.replace(/\[((?:[^\]]|\\\]|\\\[)+?)\]\[((?:[^\]]|\\\]|\\\[)+?)\]/g,(function(o){return function(){var r,q,p;q=1<=arguments.length?a.call(arguments,0):[];r=o.parseInline(o.escapeBracket(q[1]),"",false,false);p=o.definitions[q[2]]!=null?'<a href="'+o.definitions[q[2]]+'">'+r+"</a>":r;return o.makeHolder(p)}})(this));m=this.parseInlineCallback(m);m=m.replace(/<([_a-z0-9-\.\+]+@[^@]+\.[a-z]{2,})>/ig,'<a href="mailto:$1">$1</a>');if(n){m=m.replace(/(^|[^"])((https?):[x80-xff_a-z0-9-\.\/%#!@\?\+=~\|\,&\(\)]+)($|[^"])/ig,(function(o){return function(){var p,q;q=1<=arguments.length?a.call(arguments,0):[];p=o.call("parseLink",q[2]);return q[1]+'<a href="'+q[2]+'">'+p+"</a>"+q[4]}})(this))}m=this.call("afterParseInlineBeforeRelease",m);m=this.releaseHolder(m,k);m=this.call("afterParseInline",m);return m};i.prototype.parseInlineCallback=function(k){k=k.replace(/(\*{3})((?:.|\r)+?)\1/mg,(function(l){return function(){var m;m=1<=arguments.length?a.call(arguments,0):[];return"<strong><em>"+(l.parseInlineCallback(m[2]))+"</em></strong>"}})(this));k=k.replace(/(\*{2})((?:.|\r)+?)\1/mg,(function(l){return function(){var m;m=1<=arguments.length?a.call(arguments,0):[];return"<strong>"+(l.parseInlineCallback(m[2]))+"</strong>"}})(this));k=k.replace(/(\*)((?:.|\r)+?)\1/mg,(function(l){return function(){var m;m=1<=arguments.length?a.call(arguments,0):[];return"<em>"+(l.parseInlineCallback(m[2]))+"</em>"}})(this));k=k.replace(/(\s+|^)(_{3})((?:.|\r)+?)\2(\s+|$)/mg,(function(l){return function(){var m;m=1<=arguments.length?a.call(arguments,0):[];return m[1]+"<strong><em>"+(l.parseInlineCallback(m[3]))+"</em></strong>"+m[4]}})(this));k=k.replace(/(\s+|^)(_{2})((?:.|\r)+?)\2(\s+|$)/mg,(function(l){return function(){var m;m=1<=arguments.length?a.call(arguments,0):[];return m[1]+"<strong>"+(l.parseInlineCallback(m[3]))+"</strong>"+m[4]}})(this));k=k.replace(/(\s+|^)(_)((?:.|\r)+?)\2(\s+|$)/mg,(function(l){return function(){var m;m=1<=arguments.length?a.call(arguments,0):[];return m[1]+"<em>"+(l.parseInlineCallback(m[3]))+"</em>"+m[4]}})(this));k=k.replace(/(~{2})((?:.|\r)+?)\1/mg,(function(l){return function(){var m;m=1<=arguments.length?a.call(arguments,0):[];return"<del>"+(l.parseInlineCallback(m[2]))+"</del>"}})(this));return k};i.prototype.parseBlock=function(A,k){var E,o,x,p,r,C,F,J,D,G,w,u,z,B,n,v,s,t,y,H,q,I;s=A.split("\n");for(F=0,G=s.length;F<G;F++){z=s[F];k.push(z)}this.blocks=[];this.current="normal";this.pos=-1;q=(h(this.specialWhiteList)).join("|");p=0;for(J=D=0,w=k.length;D<w;J=++D){z=k[J];x=this.getBlock();if(x!=null){x=x.slice(0)}if(!!(n=z.match(/^(\s*)(~|`){3,}([^`~]*)$/i))){if(this.isBlock("code")){C=x[3][2];if(C){this.combineBlock().setBlock(J)}else{(this.setBlock(J)).endBlock()}}else{C=false;if(this.isBlock("list")){H=x[3];C=(H>0&&n[1].length>=H)||n[1].length>H}this.startBlock("code",J,[n[1],n[3],C])}continue}else{if(this.isBlock("code")){this.setBlock(J);continue}}if(this.html){if(!!(n=z.match(/^(\s*)!!!(\s*)$/i))){if(this.isBlock("shtml")){this.setBlock(J).endBlock()}else{this.startBlock("shtml",J)}continue}else{if(this.isBlock("shtml")){this.setBlock(J);continue}}}if(!!(n=z.match(new RegExp("^\\s*<("+q+")(\\s+[^>]*)?>","i")))){I=n[1].toLowerCase();if(!(this.isBlock("html",I))&&!(this.isBlock("pre"))){this.startBlock("html",J,I)}continue}else{if(!!(n=z.match(new RegExp("</("+q+")>\\s*$","i")))){I=n[1].toLowerCase();if(this.isBlock("html",I)){this.setBlock(J).endBlock()}continue}else{if(this.isBlock("html")){this.setBlock(J);continue}}}switch(true){case !!(z.match(/^ {4}/)):p=0;if((this.isBlock("pre"))||this.isBlock("list")){this.setBlock(J)}else{this.startBlock("pre",J)}break;case !!(n=z.match(/^(\s*)((?:[0-9a-z]+\.)|\-|\+|\*)\s+/)):H=n[1].length;p=0;if(this.isBlock("list")){this.setBlock(J,H)}else{this.startBlock("list",J,H)}break;case !!(n=z.match(/^\[\^((?:[^\]]|\]|\[)+?)\]:/)):H=n[0].length-1;this.startBlock("footnote",J,[H,n[1]]);break;case !!(n=z.match(/^\s*\[((?:[^\]]|\]|\[)+?)\]:\s*(.+)$/)):this.definitions[n[1]]=this.cleanUrl(n[2]);this.startBlock("definition",J).endBlock();break;case !!(z.match(/^\s*>/)):if(this.isBlock("quote")){this.setBlock(J)}else{this.startBlock("quote",J)}break;case !!(n=z.match(/^((?:(?:(?:[ :]*\-[ :]*)+(?:\||\+))|(?:(?:\||\+)(?:[ :]*\-[ :]*)+)|(?:(?:[ :]*\-[ :]*)+(?:\||\+)(?:[ :]*\-[ :]*)+))+)$/)):if(this.isBlock("table")){x[3][0].push(x[3][2]);x[3][2]+=1;this.setBlock(J,x[3])}else{r=0;if((x==null)||x[0]!=="normal"||k[x[2]].match(/^\s*$/)){this.startBlock("table",J)}else{r=1;this.backBlock(1,"table")}if(n[1][0]==="|"){n[1]=n[1].substring(1);if(n[1][n[1].length-1]==="|"){n[1]=n[1].substring(0,n[1].length-1)}}y=n[1].split(/\+|\|/);o=[];for(B=0,u=y.length;B<u;B++){t=y[B];E="none";if(!!(n=t.match(/^\s*(:?)\-+(:?)\s*$/))){if(!!n[1]&&!!n[2]){E="center"}else{if(!!n[1]){E="left"}else{if(!!n[2]){E="right"}}}}o.push(E)}this.setBlock(J,[[r],o,r+1])}break;case !!(n=z.match(/^(#+)(.*)$/)):v=Math.min(n[1].length,6);this.startBlock("sh",J,v).endBlock();break;case !!(n=z.match(/^\s*((=|-){2,})\s*$/))&&((x!=null)&&x[0]==="normal"&&!k[x[2]].match(/^\s*$/)):if(this.isBlock("normal")){this.backBlock(1,"mh",n[1][0]==="="?1:2).setBlock(J).endBlock()}else{this.startBlock("normal",J)}break;case !!(z.match(/^[-\*]{3,}\s*$/)):this.startBlock("hr",J).endBlock();break;default:if(this.isBlock("list")){if(z.match(/^(\s*)/)){if(p>0){this.startBlock("normal",J)}else{this.setBlock(J)}p+=1}else{if(p===0){this.setBlock(J)}else{this.startBlock("normal",J)}}}else{if(this.isBlock("footnote")){n=z.match(/^(\s*)/);if(n[1].length>=x[3][0]){this.setBlock(J)}else{this.startBlock("normal",J)}}else{if(this.isBlock("table")){if(0<=z.indexOf("|")){x[3][2]+=1;this.setBlock(J,x[3])}else{this.startBlock("normal",J)}}else{if(this.isBlock("pre")){if(z.match(/^\s*$/)){if(p>0){this.startBlock("normal",J)}else{this.setBlock(J)}p+=1}else{this.startBlock("normal",J)}}else{if(this.isBlock("quote")){if(z.match(/^(\s*)/)){if(p>0){this.startBlock("normal",J)}else{this.setBlock(J)}p+=1}else{if(p===0){this.setBlock(J)}else{this.startBlock("normal",J)}}}else{if((x==null)||x[0]!=="normal"){this.startBlock("normal",J)}else{this.setBlock(J)}}}}}}}}return this.optimizeBlocks(this.blocks,k)};i.prototype.optimizeBlocks=function(q,m){var o,k,v,p,w,x,t,n,l,u,s,r;k=q.slice(0);x=m.slice(0);k=this.call("beforeOptimizeBlocks",k,x);w=0;while(k[w]!=null){t=false;o=k[w];l=k[w-1]!=null?k[w-1]:null;n=k[w+1]!=null?k[w+1]:null;s=o[0],v=o[1],u=o[2];if("pre"===s){p=x.reduce(function(y,z){return(z.match(/^\s*$/))&&y},true);if(p){o[0]=s="normal"}}if("normal"===s){r=["list","quote"];if(v===u&&(x[v].match(/^\s*$/))&&(l!=null)&&(n!=null)){if(l[0]===n[0]&&(r.indexOf(l[0]))>=0){k[w-1]=[l[0],l[1],n[2],null];k.splice(w,2);t=true}}}if(!t){w+=1}}return this.call("afterOptimizeBlocks",k,x)};i.prototype.parseCode=function(l,n){var q,m,p,k,o;q=n[0],p=n[1];p=d(p);m=q.length;if(!p.match(/^[_a-z0-9-\+\#\:\.]+$/i)){p=null}else{n=p.split(":");if(n.length>1){p=n[0],k=n[1];p=d(p);k=d(k)}}l=l.slice(1,-1).map(function(r){return r.replace(new RegExp("/^[ ]{"+m+"}/"),"")});o=l.join("\n");if(o.match(/^\s*$/)){return""}else{return"<pre><code"+(!!p?' class="'+p+'"':"")+(!!k?' rel="'+k+'"':"")+">"+(e(o))+"</code></pre>"}};i.prototype.parsePre=function(k){var l;k=k.map(function(m){return e(m.substring(4))});l=k.join("\n");if(l.match(/^\s*$/)){return""}else{return"<pre><code>"+l+"</code></pre>"}};i.prototype.parseShtml=function(k){return d((k.slice(1,-1)).join("\n"))};i.prototype.parseSh=function(l,m){var k;k=this.parseInline(d(l[0],"# "));if(k.match(/^\s*$/)){return""}else{return"<h"+m+">"+k+"</h"+m+">"}};i.prototype.parseMh=function(k,l){return this.parseSh(k,l)};i.prototype.parseQuote=function(k){var l;k=k.map(function(m){return m.replace(/^\s*> ?/,"")});l=k.join("\n");if(l.match(/^\s*$/)){return""}else{return"<blockquote>"+(this.parse(l))+"</blockquote>"}};i.prototype.parseList=function(k){var w,v,B,G,z,D,s,C,r,q,u,y,n,A,p,t,E,F,x,o;v="";A=99999;t=[];for(G=B=0,C=k.length;B<C;G=++B){u=k[G];if(n=u.match(/^(\s*)((?:[0-9a-z]+\.?)|\-|\+|\*)(\s+)(.*)$/)){F=n[1].length;o=0<="+-*".indexOf(n[2])?"ul":"ol";A=Math.min(F,A);t.push([F,o,u,n[4]])}else{t.push(u)}}w=false;E=99999;for(z=0,r=t.length;z<r;z++){p=t[z];if(p instanceof Array&&p[0]!==A){E=Math.min(E,p[0]);w=true}}E=w?E:A;D="";s=[];for(y=0,q=t.length;y<q;y++){p=t[y];if(p instanceof Array){F=p[0],o=p[1],u=p[2],x=p[3];if(F!==A){s.push(u.replace(new RegExp("^\\s{"+E+"}"),""))}else{if(s.length>0){v+="<li>"+(this.parse(s.join("\n")))+"</li>"}if(D!==o){if(!!D){v+="</"+D+">"}v+="<"+o+">"}s=[x];D=o}}else{s.push(p.replace(new RegExp("^\\s{"+E+"}"),""))}}if(s.length>0){v+="<li>"+(this.parse(s.join("\n")))+("</li></"+D+">")}return v};i.prototype.parseTable=function(k,A){var n,x,o,m,p,y,C,D,G,B,u,E,s,w,r,t,q,v,F,z;C=A[0],n=A[1];p=C.length>0&&(C.reduce(function(l,H){return H+l}))>0;y="<table>";x=p?null:true;t=false;for(G=D=0,E=k.length;D<E;G=++D){w=k[G];if(0<=C.indexOf(G)){if(p&&t){p=false;x=true}continue}w=d(w);t=true;if(w[0]==="|"){w=w.substring(1);if(w[w.length-1]==="|"){w=w.substring(0,w.length-1)}}v=w.split("|").map(function(l){if(l.match(/^\s+$/)){return""}else{return d(l)}});m={};u=-1;for(B=0,s=v.length;B<s;B++){q=v[B];if(q.length>0){u+=1;m[u]=[(m[u]!=null?m[u][0]+1:1),q]}else{if(m[u]!=null){m[u][0]+=1}else{m[0]=[1,q]}}}if(p){y+="<thead>"}else{if(x){y+="<tbody>"}}y+="<tr>";for(G in m){o=m[G];r=o[0],z=o[1];F=p?"th":"td";y+="<"+F;if(r>1){y+=' colspan="'+r+'"'}if((n[G]!=null)&&n[G]!=="none"){y+=' align="'+n[G]+'"'}y+=">"+(this.parseInline(z))+("</"+F+">")}y+="</tr>";if(p){y+="</thead>"}else{if(x){x=false}}}if(x!==null){y+="</tbody>"}return y+="</table>"};i.prototype.parseHr=function(){return"<hr>"};i.prototype.parseNormal=function(k){var l;k=k.map((function(m){return function(n){return m.parseInline(n)}})(this));l=d(k.join("\n"));l=l.replace(/(\n\s*){2,}/g,"</p><p>");l=l.replace(/\n/g,"<br>");if(l.match(/^\s*$/)){return""}else{return"<p>"+l+"</p>"}};i.prototype.parseFootnote=function(k,o){var l,m,n;n=o[0],m=o[1];l=this.footnotes.indexOf(m);if(l>=0){k=k.slice(0);k[0]=k[0].replace(/^\[\^((?:[^\]]|\]|\[)+?)\]:/,"");this.footnotes[l]=k}return""};i.prototype.parseDefinition=function(){return""};i.prototype.parseHtml=function(k,l){k=k.map((function(m){return function(n){return m.parseInline(n,m.specialWhiteList[l]!=null?m.specialWhiteList[l]:"")}})(this));return k.join("\n")};i.prototype.cleanUrl=function(k){var l;if(!!(l=k.match(/^\s*((http|https|ftp|mailto):[x80-xff_a-z0-9-\.\/%#!@\?\+=~\|\,&\(\)]+)/i))){l[1]}if(!!(l=k.match(/^\s*([x80-xff_a-z0-9-\.\/%#!@\?\+=~\|\,&]+)/i))){return l[1]}else{return"#"}};i.prototype.escapeBracket=function(k){return f(["\\[","\\]","\\(","\\)"],["[","]","(",")"],k)};i.prototype.startBlock=function(k,m,l){if(l==null){l=null}this.pos+=1;this.current=k;this.blocks.push([k,m,m,l]);return this};i.prototype.endBlock=function(){this.current="normal";return this};i.prototype.isBlock=function(k,l){if(l==null){l=null}return this.current===k&&(null===l?true:this.blocks[this.pos][3]===l)};i.prototype.getBlock=function(){if(this.blocks[this.pos]!=null){return this.blocks[this.pos]}else{return null}};i.prototype.setBlock=function(l,k){if(l==null){l=null}if(k==null){k=null}if(l!==null){this.blocks[this.pos][2]=l}if(k!==null){this.blocks[this.pos][3]=k}return this};i.prototype.backBlock=function(n,k,o){var m,l;if(o==null){o=null}if(this.pos<0){return this.startBlock(k,0,o)}l=this.blocks[this.pos][2];this.blocks[this.pos][2]=l-n;m=[k,l-n+1,l,o];if(this.blocks[this.pos][1]<=this.blocks[this.pos][2]){this.pos+=1;this.blocks.push(m)}else{this.blocks[this.pos]=m}this.current=k;return this};i.prototype.combineBlock=function(){var l,k;if(this.pos<1){return this}k=this.blocks[this.pos-1].slice(0);l=this.blocks[this.pos].slice(0);k[2]=l[2];this.blocks[this.pos-1]=k;this.current=k[0];this.blocks=this.blocks.slice(0,-1);this.pos-=1;return this};return i})();if(typeof module!=="undefined"&&module!==null){module.exports=b}else{if(typeof window!=="undefined"&&window!==null){window.HyperDown=b}}}).call(this);