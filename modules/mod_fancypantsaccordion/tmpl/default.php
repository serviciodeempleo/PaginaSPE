<?php

#@license - http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL

defined('_JEXEC') or die;
 
// loads in contenthelper if needed (on pages without an article etc)
if(!class_exists('ContentHelperRoute')) require_once (JPATH_SITE . '/components/com_content/helpers/route.php');

?>

<?php 
	$showCat = $params->get('showCat');
	$headingHeight = $params->get('headingHeight');
    $headingSize = $params->get('headingSize'); 
    $catSize = $params->get('catSize');
    $database = JFactory::getDbo();
    $i = 1;
?>

<div class="fancypantsaccordionholder <?php echo $moduleclass_sfx;?>">

	<ul>
		
		<?php foreach ($list as $item): ?>
		
		<?php 
			$categoryID = $item->catid;
			$itemID = $item->id;

			$query = $database->getQuery(true);
			$query->select('title');
			$query->from('#__categories');
			$query->where('id = '.$categoryID);
			$database->setQuery($query);
			$catname = $database->loadResult();


			$url = JRoute::_(ContentHelperRoute::getArticleRoute($item->id, $item->catid));
		?>
		
		<li <?php if($headingHeight != "") { echo "style='height:".$headingHeight."px; list-style:none;'"; } ?>>
			<a href="#" id="c7-accordion-heading-<?php echo $i ;?>" class="headerlink" <?php if($headingHeight != "" && $headingSize =="" ) { echo "style='line-height:".$headingHeight."px;'"; }  
											else if($headingHeight == "" && $headingSize !="" ) { echo "style='font-size:".$headingSize."px;'"; }
											else if($headingHeight != "" && $headingSize !="" ) { echo "style='font-size:".$headingSize."px; line-height:".$headingHeight."px;'";}
			?> >
			<?php if ($showCat == '0'){
					echo htmlspecialchars($item->title);
				} else if ($showCat == '1' && $catSize == ""){
					echo htmlspecialchars($item->title)." <p style='display:inline'>(".$catname.")</p>" ; 
				} else {
					echo htmlspecialchars($item->title)." <p style='display:inline; font-size:".$catSize."px'>(".$catname.")</p>" ;
				}
			?>
				<span class="acc-arrow">Open or Close</span>
			</a>
			<div class="acc-content">
				<?php 
					$intro = $item->introtext;
					
					if($params->get('render','1')){
						JPluginHelper::importPlugin('content');
						$intro = JHtml::_('content.prepare', $intro, '', 'mod_custom.content');
					}

					echo $intro;
					if($item->readmore != 0){
						echo "<a href='". $url ."'>Read More</a>";
					}
				?>
			</div>
		</li>
		
		<?php $i++; ?>

		<?php endforeach; ?>
	</ul>

</div>

<script type="text/javascript">
	jQuery(function() {
		jQuery('.fancypantsaccordionholder').accordion({
			oneOpenedItem:true,
			speed:300,
			scrollSpeed:300	
			<?php 
				if($params->get('firstopen') == 1){ 
					if($params->get('whichopen')){
						echo ",open:".$params->get('whichopen'); 
					} else {
						echo ",open:0"; 
					}
				} 
			?>
		});
    });
</script>