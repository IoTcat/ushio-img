<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<div id="no-data"></div>
<footer class="footer anti-select">
	<!-- bottom notice -->
	<?php if ($this->options->notice && $this->options->noticeStyle == 'bottom'): ?>
	<p class="related" <?php if($this->options->noticeColor): ?>style="color: <?php $this->options->noticeColor() ?>"<?php endif; ?>>公告：<?php $this->options->notice() ?></p>
	<?php endif; ?>
	<!-- powered info -->
	<p class="related">POWERED BY <a href="https://ushio.cool/">Ushio</a> / THEME BY <a href="https://photo.siitake.cn/photograph.html" target="_blank">SIITAKE</a></p>
	<!-- kotkeys desc -->
	<?php if(trim($this->options->hotKeys) != ''):
		$hotKeys = getHotKeys($this->options->hotKeys);
		$hotKeysDesc = "";
		foreach ($hotKeys as $hotKey):
			$hotKeysDesc .= "$hotKey[1]($hotKey[0])&nbsp;";
		endforeach;
	?>
	<p class="related"><?php echo $hotKeysDesc; ?></p>
	<?php endif; ?>
	<!-- counter -->
	<?php if ($this->options->statCount == 'y'): $stat = statCount(); ?>
	<p class="related">本站已收录<span id="picNum">??</span>张图片在<?php echo $stat['post'] ?>个相册中。本站已拥有<?php echo $stat['comm'] ?>条评论</p>
    <script>$.get('https://api.yimian.xyz/img/getImgNum.php', function(res){var n = 0; res = JSON.parse(res); Object.keys(res).forEach(function(i){n += res[i]});$('#picNum').html(n)});</script>
	<?php endif; ?>
	<!-- copy & icp -->
	<p class="related">&copy; <a href="https://iotcat.me/">IoTcat</a> 2019-<script>document.write(new Date().getFullYear())</script><?php if ($this->options->icp): ?> <a href="http://beian.miit.gov.cn/" target="_blank"><?php $this->options->icp() ?></a><?php endif; ?></p>
	<?php if ($this->options->statistics): echo '<div style="display:none;">'; $this->options->statistics(); echo '</div>'; endif; ?>
</footer><!-- end #footer -->
<script type="text/javascript" src="<?php $this->options->themeUrl('js/jquery-3.3.1.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('bootstrap3/js/bootstrap.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('js/jquery.lazyload.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('js/masonry-docs.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('js/infinite-scroll.pkgd.min.js'); ?>"></script>
<script type="text/javascript" src="<?php $this->options->themeUrl('js/shortcut.js'); ?>"></script>

<?php if($this->options->lightBoxCho == 'lg'): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lightgallery.min.js'); ?>"></script>
	<?php if (!empty($this->options->lightGalleryOpt) && in_array('lg_pager', $this->options->lightGalleryOpt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-pager.min.js'); ?>"></script>
	<?php endif; ?>
	<?php if (!empty($this->options->lightGalleryOpt) && in_array('lg_autoplay', $this->options->lightGalleryOpt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-autoplay.min.js'); ?>"></script>
	<?php endif; ?>
	<?php if (!empty($this->options->lightGalleryOpt) && in_array('lg_fullscreen', $this->options->lightGalleryOpt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-fullscreen.min.js'); ?>"></script>
	<?php endif; ?>
	<?php if (!empty($this->options->lightGalleryOpt) && in_array('lg_zoom', $this->options->lightGalleryOpt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-zoom.min.js'); ?>"></script>
	<?php endif; ?>
	<?php if (!empty($this->options->lightGalleryOpt) && in_array('lg_thumbnail', $this->options->lightGalleryOpt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('lightgallery/js/lg-thumbnail.js'); ?>"></script>
	<?php endif; ?>
<?php elseif($this->options->lightBoxCho == 'fb3'): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/core.js'); ?>"></script>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/guestures.js'); ?>"></script>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/hash.js'); ?>"></script>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/media.js'); ?>"></script>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/wheel.js'); ?>"></script>
	<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_share', $this->options->fancyBox3Opt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/share.js'); ?>"></script>
	<?php endif; ?>
	<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_slideShow', $this->options->fancyBox3Opt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/slideshow.js'); ?>"></script>
	<?php endif; ?>
	<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_fullScreen', $this->options->fancyBox3Opt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/fullscreen.js'); ?>"></script>
	<?php endif; ?>
	<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_thumbs', $this->options->fancyBox3Opt)): ?>
	<script type="text/javascript" src="<?php $this->options->themeUrl('fancybox3/js/thumbs.js'); ?>"></script>
	<?php endif; ?>
<?php endif; ?>

<script type="text/javascript">if(history.length < 2){$('.header-post-back').css('opacity', 0);}</script>
<script type="text/javascript">
<?php if ($this->is('post')) : ?>
	$(function() {
	<?php if($this->options->lightBoxCho == 'lg'): ?>
		//lightGallery
		var lg = document.getElementById('masonry');
		lightGallery(lg, {
			selector: '.post-item',
			download: <?php if (!empty($this->options->lightGalleryOpt) && in_array('lg_download', $this->options->lightGalleryOpt)): ?>true<?php else: ?>false<?php endif; ?>,
			enableTouch: true,
			pager: true,
		});
	<?php elseif($this->options->lightBoxCho == 'fb3'): ?>
		//fancybox3
		$('[data-fancybox="gallery"]').fancybox({
			toolbar: true,
			loop: false,
			smallBtn : false,
			buttons: [
<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_zoom', $this->options->fancyBox3Opt)): ?>"zoom",<?php endif; ?>
<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_share', $this->options->fancyBox3Opt)): ?>"share",<?php endif; ?>
<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_slideShow', $this->options->fancyBox3Opt)): ?>"slideShow",<?php endif; ?>
<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_fullScreen', $this->options->fancyBox3Opt)): ?>"fullScreen",<?php endif; ?>
<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_download', $this->options->fancyBox3Opt)): ?>"download",<?php endif; ?>
<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_thumbs', $this->options->fancyBox3Opt)): ?>"thumbs",<?php endif; ?>
<?php if (!empty($this->options->fancyBox3Opt) && in_array('fb3_close', $this->options->fancyBox3Opt)): ?>"close"<?php endif; ?>
			],
			iframe : {
				preload : false
			}
		})
	<?php endif; ?>
	});
<?php endif; ?>
	//lazyload
	$(function() {
		$("img.lazy").lazyload({
			placeholder : "<?php getLazyImg($this->options); ?>",
			effect: "fadeIn",<?php if($this->is('post')): ?>
			load: function(ele){
				//masonry
				var $container = $('#masonry');
				$container.imagesLoaded(function() {
					$container.masonry({
						itemSelector: '.post-item',
						gutter: 0,
						isAnimated: false,
					});
				});
            },<?php endif; ?>
		});
	});
	//showcomment
	$(function() {
		if(window.location.href.indexOf("#comment-")>-1) {
			$("#post-comments").addClass("comment-open");
		}
		$("#ex-comment").click(function() {
			$("#post-comments").toggleClass("comment-open");
		});
	});
	//goToTop
	$(function(){
		$("#go-top").hide();
		$(window).scroll(function(){
			if($(this).scrollTop() > 100){
				$('#go-top').fadeIn();
			}else{
				$('#go-top').fadeOut();
			}
		});
		$('#go-top').click(function(){
			$('html ,body').animate({scrollTop: 0}, 300);
			return false;
		});
	});
	//goToBottom
	$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() > (document.body.scrollHeight - 1000)) {
				$('#go-bottom').fadeOut();
			}else{
				$('#go-bottom').fadeIn();
			}
		});
		$('#go-bottom').click(function(){
			$('html ,body').animate({scrollTop: document.body.scrollHeight}, 300);
			return false;
		});
	});
<?php if($this->options->infiniteScroll == '1'): ?>
	// infinite scroll
	// https://infinite-scroll.com/
	if ($('a').is('ol.page-navigator li.next a')) {
		var $grid = $('#masonry').masonry({
			itemSelector: '.item',
			gutter: 0,
			isAnimated: false,
		});
		var msnry = $grid.data('masonry');
		$grid.infiniteScroll({
			path : "ol.page-navigator li.next a",
			append : "#masonry div.item",
			hideNav: 'ol.page-navigator',
			history: false,
			prefill: true,
			outlayer: msnry,
		});
		$grid.on('append.infiniteScroll', function( event, response, path) {
			$("img.lazy").lazyload();
		});
		$grid.on('last.infiniteScroll', function( event, response, path ) {
			$('#no-data').html('<div>😋已经到底啦！</div>');
		});
	}
<?php endif; ?>
	//cookie opt
	//代码修改自 https://www.cnblogs.com/shizhouyu/p/3963122.html
	var cookieSet = function(key,val,time) { //设置cookie方法
		var date = new Date(); //获取当前时间
		var expiresDays = time; //将date设置为n天以后的时间
		date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); //格式化为cookie识别的时间
		document.cookie = key + "=" + val + ";expires="+date.toGMTString(); //设置cookie
	}
	var cookieGet = function(key) { //获取cookie方法
		/*获取cookie参数*/
		var getCookie = document.cookie.replace(/[ ]/g,""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
		var arrCookie = getCookie.split(";") //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
		var tips; //声明变量tips
		for(var i=0; i < arrCookie.length; i++) { //使用for循环查找cookie中的tips变量
			var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
			if(key == arr[0]) { //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
				tips = arr[1]; //将cookie的值赋给变量tips
				break; //终止for循环遍历
			}
		}
		return tips;
	}
	var cookieDelete = function(key) { //删除cookie方法
		var date = new Date(); //获取当前时间
		date.setTime(date.getTime() - 10000); //将date设置为过去的时间
		document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie
	}
	//random post link
	<?php if($this->options->randomPostPt != 0): ?>
	var randomPost = '<?php randomPost(); ?>';
	<?php endif; ?>
<?php if(trim($this->options->hotKeys) != ''): ?>
	//hotkey
	<?php $hotKeys = getHotKeys($this->options->hotKeys); ?>
	<?php foreach ($hotKeys as $hotKey): ?>
	shortcut.add("<?php echo $hotKey[0]; ?>", function() {
			<?php echo $hotKey[2]; ?> /* <?php echo $hotKey[1]; ?> */
		}, {
			'type':'keydown', //事件
			'propagate': false, //是否支持冒泡
			'disable_in_input': true, //是否在输入框内禁用
			'target': document, //作用范围
		});
	<?php endforeach; ?>
<?php endif; ?>
	//qrcode
	var qrcodeDiv = $('<div id="qrcode" onclick="hiddQrcode()"></div>');
	var thisPageUrl = "<?php echo thisPageUrl(); ?>";
	var qrcodeSrc = "<?php echo getQrcode(); ?>" + encodeURI(thisPageUrl);
	var qrcodeImg = $('<img>');
	qrcodeImg.attr("src", qrcodeSrc);
	qrcodeDiv.append(qrcodeImg); $('body').append(qrcodeDiv);
	var showQrcode = function() {
		$("#qrcode").css("display", "block");
	}
	var hiddQrcode = function() {
		$("#qrcode").css("display", "none");
	}
	// toast
	var toast = function (msg) {
		setTimeout(function(){
			var toastWrap = $('<div class="toast-wrap"></div>');
			var toastMsg = $('<span class="toast-msg"></span>');
			toastMsg.html(msg);
			toastWrap.append(toastMsg);
			$('body').append(toastWrap);
			toastWrap.addClass('toastAnimate');
		},200);
	}
</script>
<?php $this->footer(); ?>
<script src="https://cdn.yimian.xyz/ushio-js/ushio-footer.min.js"></script>
<script>
if(!cookie.get('isFirst2')){
    tips.show({
    message: '欢迎来到本站~ 打开图片点击右上角<svg width="17" viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></path></svg>按钮可以查看图片链接哦|ू･ω･` )',
    position: 'center',
    timeout: 13000
    });
   setTimeout(function(){cookie.set('isFirst2', 'no');}, 13000);
}
</script>
</body>
</html>
