<?php
/**
 * @version		$Id: category.php 10707 2008-08-21 09:52:47Z eddieajau $
 * @package		Joomla.Framework
 * @subpackage	Parameter
 * @copyright	Copyright (C) 2005 - 2008 Open Source Matters. All rights reserved.
 * @license		GNU/GPL, see LICENSE.php
 * Joomla! is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 */

// Check to ensure this file is within the rest of the framework
defined('JPATH_BASE') or die();

/**
 * Renders a category element
 *
 * @package 	Joomla.Framework
 * @subpackage		Parameter
 * @since		1.5
 */

class JElementColor extends JElement
{
	/**
	 * Element name
	 *
	 * @access	protected
	 * @var		string
	 */
	var	$_name = 'Color';

	function fetchElement($name, $value, &$node, $control_name)
	{
		ob_start();
		$img=JUri::root()."modules/mod_sponsorlogos/assets/images/rainbow.png";
		$imgx=JUri::root()."modules/mod_sponsorlogos/assets/images/";
		static $embedded;
				if(!$embedded)
		{
			$css2=JUri::root()."modules/mod_sponsorlogos/assets/css/mooRainbow.css";
			$jspath=JUri::root()."modules/mod_sponsorlogos/assets/js/mooRainbow.js";
			 ?>
<link
	href="<?php echo $css2;?>" type="text/css" rel="stylesheet" />
<script src="<?php echo $jspath;?>"></script>
<?php $embedded=true; ?>
<script>
		window.addEvent('domready',function(){

				Element.extend({
					getSiblings: function() {
						return this.getParent().getChildren().remove(this);
					}
				});
			$$('.rainbowbtn').each(function(item){
		item.color=new MooRainbow(item.id, {
					startColor: [58, 142, 246],
					wheel: true,		
					id:item.id+'x',			
					onChange: function(color) {
					item.getSiblings()[0].value = color.hex;
					},
					onComplete: function(color) {
					item.getSiblings()[0].value = color.hex;
					},
					imgPath: '<?php echo $imgx;?>'
				});
				});
			});
			</script>
			<?php 
		}
			?>
			<label>
<input
	name="<?php echo $control_name;?>[<?php echo $name;?>]" type="text"
	class="inputbox" id="<?php echo  $control_name.$name ?>"
	value="<?php echo $value;?>" size="10" />
<img
	src="<?php echo $img;?>" id="img<?php echo $name; ?>" alt="[r]"
	class="rainbowbtn" width="16" height="16" /></label>
		<?php
		$content=ob_get_contents();
		ob_end_clean();
		return $content;
	}
}
