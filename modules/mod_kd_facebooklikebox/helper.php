<?php
/* 	@package Kd Facebook Likebox for Joomla !  
* 	@link       http://ext.katie-drummond.com/ 
* 	@copyright (C) 2014- Katie Drummond
* 	@license GNU/GPL http://www.gnu.org/licenses/gpl-2.0.html 
*/ 
// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );
class kdfblikebox{
	function getinput(&$params){		
		$facebook_pagelink	= $params->get('facebook_pagelink', 'https://www.facebook.com/Google');
		$boxcolor	= $params->get('boxcolor');
		$include_stream	= $params->get('include_stream');
		$fbheader	= $params->get('fbheader');
		$boxwidth	= $params->get('boxwidth', '300');
		$boxheight	= $params->get('boxheight', '550');
		$fbborder	= $params->get('fbborder', '000000');
		$kdlanguage=$params->get('kdlanguage','en_US');		
		$fbfans	= $params->get('fbfans');	
		
		if($boxcolor == '1')
		{ 	$boxcolor	= 'light';	}
		else				
		{	$boxcolor	= 'dark';	}
		
		if($fbfans == '1')
		{	$fbfans	= 'true';		}
		else
		{	$fbfans	= 'false';		}
			
		if($include_stream == '1'){
			$include_stream	= 'true';
		}else{
			$include_stream	= 'false';
		}
		
		if($fbheader == '1'){
			$fbheader	= 'true';
		}else{
			$fbheader	= 'false';
		}
				
		$kdpageurl	="http://www.facebook.com/plugins/likebox.php?href=".$facebook_pagelink.'&amp;locale='.$kdlanguage.'&amp;width='.$boxwidth .
					"&amp;colorscheme=".$boxcolor."&amp;show_faces=".$fbfans .
					"&amp;border_color=%23".$fbborder."&amp;stream=".$include_stream."&amp;header=".$fbheader."&amp;height=".$boxheight;

		$input ='';
		$input = '<iframe src="'.$kdpageurl.'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:'.$boxwidth.'px; height:'.$boxheight.'px;"></iframe><center><div style="color:#E0E0E1;font-size: xx-small;"><a style="text-decoration:none" target="_blank" class="external" href="http://ext.katie-drummond.com/"><span style="color:#E0E0E1;font-size: xx-small;">Modules Kd</span></a></div></center>';
		return $input;
	}
}
