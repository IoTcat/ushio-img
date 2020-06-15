<style type="text/css">
<?php if($this->options->noticeColor): ?>
	.notice-top {
		color: <?php $this->options->noticeColor(); ?>;
		border-color: <?php $this->options->noticeColor(); ?>;
	}
<?php endif; ?>
<?php if(!empty($this->options->coverTitleBorder) && in_array('ctb_t', $this->options->coverTitleBorder) && $this->options->coverOrn == 'co_cat'): ?>
	.item-link-text::before {
		content: '';
		display: block;
		position: absolute;
		top: -36px;
		left: -2px;
		background-image: url("<?php $this->options->themeUrl('/src/miao.svg'); ?>");
		background-size: cover;
		width: 40px;
		height: 45px;
	}
<?php endif; ?>
	.item-title {
		opacity: <?php echo $this->options->coverTitle ?>;
	}
	.item-img, .item-title {
<?php if (!empty($this->options->coverRadius) && in_array('cr_tl', $this->options->coverRadius)): ?>
		border-top-left-radius: 10px;
<?php endif; ?>
<?php if (!empty($this->options->coverRadius) && in_array('cr_tr', $this->options->coverRadius)): ?>
		border-top-right-radius: 10px;
<?php endif; ?>
<?php if (!empty($this->options->coverRadius) && in_array('cr_br', $this->options->coverRadius)): ?>
		border-bottom-right-radius: 10px;
<?php endif; ?>
<?php if (!empty($this->options->coverRadius) && in_array('cr_bl', $this->options->coverRadius)): ?>
		border-bottom-left-radius: 10px;
<?php endif; ?>
	}
	.item-link-text {
<?php if (empty($this->options->coverTitleBorder)): ?>
		border: none;
<?php endif; ?>
<?php if (!empty($this->options->coverTitleBorder) && in_array('ctb_t', $this->options->coverTitleBorder)): ?>
		border-top: solid 2px white;
<?php endif; ?>
<?php if (!empty($this->options->coverTitleBorder) && in_array('ctb_r', $this->options->coverTitleBorder)): ?>
		border-right: solid 2px white;
<?php endif; ?>
<?php if (!empty($this->options->coverTitleBorder) && in_array('ctb_b', $this->options->coverTitleBorder)): ?>
		border-bottom: solid 2px white;
<?php endif; ?>
<?php if (!empty($this->options->coverTitleBorder) && in_array('ctb_l', $this->options->coverTitleBorder)): ?>
		border-left: solid 2px white;
<?php endif; ?>
<?php if (!empty($this->options->coverTitleRadius) && in_array('ctr_tl', $this->options->coverTitleRadius)): ?>
		border-top-left-radius: 10px;
<?php endif; ?>
<?php if (!empty($this->options->coverTitleRadius) && in_array('ctr_tr', $this->options->coverTitleRadius)): ?>
		border-top-right-radius: 10px;
<?php endif; ?>
<?php if (!empty($this->options->coverTitleRadius) && in_array('ctr_br', $this->options->coverTitleRadius)): ?>
		border-bottom-right-radius: 10px;
<?php endif; ?>
<?php if (!empty($this->options->coverTitleRadius) && in_array('ctr_bl', $this->options->coverTitleRadius)): ?>
		border-bottom-left-radius: 10px;
<?php endif; ?>
}
.item {
	height: <?php echo (($this->options->coverHeightTimes ? $this->options->coverHeightTimes : 1) * ($this->options->colLg == 3 ? 23 : 16)); ?>vw;
}
@media screen and (max-width: 1199px) {
	.item {
		height: <?php echo (($this->options->coverHeightTimes ? $this->options->coverHeightTimes : 1) * ($this->options->colMd == 4 ? 32 : 23)); ?>vw;
	}
}
@media screen and (max-width: 991px) {
	.item {
		height: <?php echo (($this->options->coverHeightTimes ? $this->options->coverHeightTimes : 1) * ($this->options->colSm == 6 ? 45 : 32)); ?>vw;
	}
}
@media screen and (max-width: 767px) {
	.item {
		height: <?php echo (($this->options->coverHeightTimes ? $this->options->coverHeightTimes : 1) * ($this->options->colXs == 12 ? 95 : 45)); ?>vw;
	}
}
<?php if($this->options->sideButton == 1): ?>
	#side-button {opacity: 1;}
	#side-button li {border-radius: 3px;}
<?php endif; ?>
<?php if($this->options->sideButton == 2): ?>
	#side-button {opacity: .7;}
	#side-button li {border-radius: 3px;}
<?php endif; ?>
<?php if($this->options->sideButton == 3): ?>
	#side-button {opacity: 1;}
	#side-button li {border-radius: 20px;}
<?php endif; ?>
<?php if($this->options->sideButton == 4): ?>
	#side-button {opacity: .7;}
	#side-button li {border-radius: 20px;}
<?php endif; ?>

<?php if($this->options->imgHeightTimes): ?>
.row .post-item {
	height: <?php echo (($this->options->imgHeightTimes ? (($this->is("post") && $this->fields->thisImgHeightTimes) ? $this->fields->thisImgHeightTimes : $this->options->imgHeightTimes) : 1) * ($this->options->colLg == 3 ? 23 : 16)); ?>vw;
}
@media screen and (max-width: 1199px) {
	.row .post-item {
		height: <?php echo (($this->options->imgHeightTimes ? (($this->is("post") && $this->fields->thisImgHeightTimes) ? $this->fields->thisImgHeightTimes : $this->options->imgHeightTimes) : 1) * ($this->options->colMd == 4 ? 32 : 23)); ?>vw;
	}
}
@media screen and (max-width: 991px) {
	.row .post-item {
		height: <?php echo (($this->options->imgHeightTimes ? (($this->is("post") && $this->fields->thisImgHeightTimes) ? $this->fields->thisImgHeightTimes : $this->options->imgHeightTimes) : 1) * ($this->options->colSm == 6 ? 45 : 32)); ?>vw;
	}
}
@media screen and (max-width: 767px) {
	.row .post-item {
		height: <?php echo (($this->options->imgHeightTimes ? (($this->is("post") && $this->fields->thisImgHeightTimes) ? $this->fields->thisImgHeightTimes : $this->options->imgHeightTimes) : 1) * ($this->options->colXs == 12 ? 95 : 45)); ?>vw;
	}
}
.post-item-img {
	height: 100%;
	object-fit: cover;
}
<?php endif; ?>

/** diyCSS Start **/
<?php if ($this->options->diyCss): $this->options->diyCss(); endif; ?>
<?php if ($this->options->firstVisitingCss): $this->options->firstVisitingCss(); endif; ?>
/** diyCSS End **/
</style>