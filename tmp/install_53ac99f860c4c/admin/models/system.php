<?php
/**
* @package		Komento
* @copyright	Copyright (C) 2012 Stack Ideas Private Limited. All rights reserved.
* @license		GNU/GPL, see LICENSE.php
* Komento is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
defined('_JEXEC') or die('Restricted access');

require_once( dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'parent.php' );

class KomentoModelSystem extends KomentoParentModel
{
	public function save( $data )
	{
		$component	= $data['component'];
		$component	= preg_replace('/[^A-Z0-9_\.-]/i', '', $component);
		$component	= JString::strtolower( JString::trim($component) );
		unset($data['component']);

		// Remove environment keys/values
		if( isset( $data['komento_environment'] ) )
		{
			unset( $data['komento_environment'] );
		}

		if( isset( $data['foundry_environment'] ) )
		{
			unset( $data['foundry_environment'] );
		}

		$config	= Komento::getTable( 'Configs' );
		$config->load( $component );
		$config->component = $component;

		$json = Komento::getJSON();

		$config->params = $json->encode( $data );

		$result = $config->store();

		// Save it
		if( !$result )
		{
			return false;
		}

		return true;
	}
}
