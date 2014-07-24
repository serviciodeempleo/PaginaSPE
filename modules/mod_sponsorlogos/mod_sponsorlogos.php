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

  $baseurl 		=	 JURI::base();       
  // get a parameter from the module's configuration
  $jqueryload = $params->get('jqueryload', '0');
  $fontsize = $params->get('fontsize', '14px');
  $fontcolor = $params->get('fontcolor', '');
  $googlefonts = $params->get('googlefonts', '0');
  $showtype = $params->get('showtype', '1');
  $imgfolder = $baseurl."".$params->get('imgfolder', '');
  $target = $params->get('target', '');
  $follow = $params->get('follow', '');
  $width = $params->get('width', '');
  $height = $params->get('height', '');
  // testimonials and authors
$testimonialsArr = explode("|", $params->get('testimonial', ''));
$authorArr = explode("|", $params->get('link', ''));

if($showtype == '0'){ 
  // load scripts
   $document = &JFactory::getDocument();
			// if jquery loads by another ext.
			if($jqueryload):
			$document->addScript( $baseurl.'modules/mod_sponsorlogos/assets/js/jquery.min.js' );	
			endif;
			$document->addScript( $baseurl.'modules/mod_sponsorlogos/assets/js/fade-plugin.js' );

?>
<style type="text/css">
      .effectContainer { margin: 0 0 2em 0; }
      #quotemodule .effectContainer { width: <?php echo $width;?>; overflow: hidden; padding:20px; }
      .slide { position: relative; height: <?php echo $height;?>; width: <?php echo $width; ?>; background: #fff; text-align: center; }

</style>
<script type="text/javascript">
var elt = jQuery.noConflict();
  (function(elt) {
	function init() {

	  elt("#quotemodule .effectContainer").fadeTransition({pauseTime: <?php echo $params->get('pause', '2000'); ?>,
											 transitionTime: <?php echo $params->get('transition', '2000'); ?>,
											 delayStart: <?php echo $params->get('delay', '2000'); ?>,
											 pauseOnMouseOver: true,
											 createNavButtons: false});
	}
	elt(document).ready(init);
  })(jQuery);
</script>
<?php
?>
<div id="quotemodule" style="margin-left:10px;">
  <div class="effectContainer" style="width:<?php echo $width;?>; height:<?php echo $height; ?>;">
<?php
$aut=0;
foreach($testimonialsArr as $key=>$value){
$finalLink = JRoute::_(''.trim($authorArr[$aut]).'');

?>
 <div>
<?php echo '<a target="'.$target.'" rel="'.$follow.'" href="'.$finalLink.'"><img src="'.$imgfolder.'/'.trim($value).'"></a>'; ?>	
 </div>
 <?php
$aut++;
 }?>
  </div>
</div>
<?php }
else if($showtype == '2')
 require(JModuleHelper::getLayoutPath('mod_sponsorlogos', 'slider'));