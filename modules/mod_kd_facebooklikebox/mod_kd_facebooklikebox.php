<?php

/* 	@package Kd Facebook Likebox for Joomla !  
* 	@link       http://ext.katie-drummond.com/ 
* 	@copyright (C) 2014- Katie Drummond
* 	@license GNU/GPL http://www.gnu.org/licenses/gpl-2.0.html 
*/ 

// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );

require_once (dirname(__FILE__).'/helper.php');

$input = kdfblikebox::getinput($params);

require(JModuleHelper::getLayoutPath('mod_kd_facebooklikebox'));