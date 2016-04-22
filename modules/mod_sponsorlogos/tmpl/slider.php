<?php
/**
* @package 	mod_sponsorlogos - Sponsor Logos Module
* @version		1.0.1
* @created		October 2013
* @author		PluginValley
* @email		support@pluginvalley.com
* @website		http://www.pluginvalley.com
* @support		Forum - http://www.pluginvalley.com/forum.html
* @copyright	Copyright (C) 2012 pluginvalley. All rights reserved.
* @license		http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
*
*/
// no direct access
defined('_JEXEC') or die('');

?>
<script type="text/javascript" src="modules/mod_sponsorlogos/assets/js/jquery.min.js"></script>
<script type="text/javascript" src="modules/mod_sponsorlogos/assets/js/jquery.vticker-min.js"></script>
<script type="text/javascript">
var elt = jQuery.noConflict();
elt(function(){
	elt('#news-container').vTicker({ 
		speed: <?php echo $params->get('transition', '2000'); ?>,
		pause: <?php echo $params->get('pause', '2000'); ?>,
		animation: 'fade',
		mousePause: true,
		direction: '<?php echo $params->get('direction', 'up'); ?>',
		showItems: <?php echo $params->get('itemsnum', '1'); ?>
	});
});
</script>
<div id="news-container">
	<ul>
		
<?php
$aut=0;
foreach($testimonialsArr as $key=>$value){
$finalLink = JRoute::_(''.trim($authorArr[$aut]).'');

?><li style="float: left; display:inline;">
 <div style="margin:5px; height:<?php echo $height;?>;">
<?php echo '<a target="'.$target.'" rel="'.$follow.'" href="'.$finalLink.'"><img src="'.$imgfolder.'/'.trim($value).'"></a>'; ?>	
 </div>
 <?php
$aut++;
 ?></li>
 <?php }?>
		 
	</ul>
</div>