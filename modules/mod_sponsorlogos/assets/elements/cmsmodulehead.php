<?php
/*------------------------------------------------------------------------
# mod_sponsorlogos
# author    Cms Venue - support@CmsVenue.com
# copyright Copyright (C) 2010 CmsVenue.com. All Rights Reserved.
# @license - http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
# Websites: http://www.CmsVenue.com
# Technical Support:  Forum - http://www.CmsVenue.com/Support-Forums.html
-------------------------------------------------------------------------*/
// no direct access

defined('_JEXEC') or die();

class JElementCmsModuleHead extends JElement
{
	var	$_name = 'cmsmodulehead';

	function fetchTooltip($label, $description, &$node, $control_name, $name) {
		return '&nbsp;';
	}

	function fetchElement($name, $value, &$node, $control_name)
	{
		
		if ($node->attributes( 'icon' ) != "") $icon = "<img src=\"".JURI::root(true)."/modules/mod_sponsorlogos/assets/images/icons/".$node->attributes( 'icon' )."\" alt =\"" . JText::_($value) . "\" align=\"absmiddle\" vspace=\"7\" />";
		
		if ($value) {
			return '<p style="background: #8FABC1; color: #fff; padding:5px; font-size:12px;">'.$icon.' <strong>' . JText::_($value) . '</strong></p>';
		} else {
			return '<hr />';
		}
	}
}
?>