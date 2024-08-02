<?php
namespace elementor\modules\home\transformations;

use Elementor\Modules\Home\Transformations\Base\Transformations_Abstract;
use Elementor\Utils;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Filter_Sidebar_Upgrade_By_License extends Transformations_Abstract {
	public bool $has_pro;

	public function __construct( $args ) {
		parent::__construct( $args );

		$this->has_pro = Utils::has_pro();
	}

<<<<<<< HEAD
	private function is_valid_item( $item ) {
=======
	private function valid_item( $item ) {
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
		$has_pro_json_not_free = $this->has_pro && 'pro' === $item['license'][0];
		$is_not_pro_json_not_pro = ! $this->has_pro && 'free' === $item['license'][0];
		$should_show = ! isset( $item['show'] ) || 'true' === $item['show'];
		return $has_pro_json_not_free && $should_show || $is_not_pro_json_not_pro && $should_show;
	}

	public function transform( array $home_screen_data ): array {
		$new_sidebar_upgrade = [];

		foreach ( $home_screen_data['sidebar_upgrade'] as $index => $item ) {
<<<<<<< HEAD
			if ( $this->is_valid_item( $item ) ) {
=======
			if ( $this->valid_item( $item ) ) {
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
				$new_sidebar_upgrade[] = $item;
			}
		}

		if ( empty( $new_sidebar_upgrade ) ) {
			unset( $home_screen_data['sidebar_upgrade'] );
			return $home_screen_data;
		}

		$home_screen_data['sidebar_upgrade'] = reset( $new_sidebar_upgrade );

		return $home_screen_data;
	}
}
