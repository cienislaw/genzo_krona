<?php

/**
 * Copyright (C) 2018 Emanuel Schiendorfer
 *
 * @author    Emanuel Schiendorfer <https://github.com/eschiendorfer>
 * @copyright 2018 Emanuel Schiendorfer
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 */

use KronaModule\PlayerHistory;
use KronaModule\Player;
use KronaModule\PlayerLevel;

class Genzo_KronaHomeModuleFrontController extends ModuleFrontController
{

	public function initContent()
	{	
		// Disable left and right column
		$this->display_column_left = false;
		$this->display_column_right = true;

        parent::initContent();

        $id_lang = $this->context->language->id;
        $id_shop_group = $this->context->shop->id_shop_group;
        $id_shop = $this->context->shop->id_shop;


        $game_name = Configuration::get('krona_game_name', $id_lang, $id_shop_group, $id_shop);

        ($this->context->customer->isLogged()) ? $nav = true : $nav = false;

        $this->context->smarty->assign(array(
            'meta_title' => $game_name,
            'game_name' => $game_name,
            'points_name' => Configuration::get('krona_points_name', $id_lang, $id_shop_group, $id_shop),
            'slack' => Configuration::get('krona_url', null, $id_shop_group, $id_shop),
            'description' => Configuration::get('krona_description', $id_lang, $id_shop_group, $id_shop),
            'active' => 'Home',
            'nav' => $nav,
        ));

        $this->setTemplate('home.tpl');





	}

}