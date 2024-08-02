<?php

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks;

use Automattic\WooCommerce\Admin\Features\Features;
use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Task;

/**
 * Launch Your Store Task
 */
class LaunchYourStore extends Task {
	/**
<<<<<<< HEAD
	 * Constructor
	 *
	 * @param TaskList $task_list Parent task list.
	 */
	public function __construct( $task_list ) {
		parent::__construct( $task_list );

		add_action( 'show_admin_bar', array( $this, 'possibly_hide_wp_admin_bar' ) );
	}

	/**
=======
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	 * ID.
	 *
	 * @return string
	 */
	public function get_id() {
<<<<<<< HEAD
		return 'launch-your-store';
=======
		return 'launch_your_store';
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	}

	/**
	 * Title.
	 *
	 * @return string
	 */
	public function get_title() {
		return __( 'Launch your store', 'woocommerce' );
	}

	/**
	 * Content.
	 *
	 * @return string
	 */
	public function get_content() {
		return __(
			"It's time to celebrate – you're ready to launch your store! Woo! Hit the button to preview your store and make it public.",
			'woocommerce'
		);
	}

	/**
	 * Time.
	 *
	 * @return string
	 */
	public function get_time() {
		return '';
	}

	/**
<<<<<<< HEAD
	 * Action URL.
	 *
	 * @return string
	 */
	public function get_action_url() {
		return admin_url( 'wp-admin/admin.php?page=wc-admin&path=%2Flaunch-your-store' );
	}

	/**
=======
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	 * Task completion.
	 *
	 * @return bool
	 */
	public function is_complete() {
<<<<<<< HEAD
		return 'yes' !== get_option( 'woocommerce_coming_soon' );
=======
		$launch_status = get_option( 'launch-status' );

		// The site is launched when the launch status is 'launched' or missing.
		$launched_values = array(
			'launched',
			'',
			false,
		);
		return in_array( $launch_status, $launched_values, true );
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	}

	/**
	 * Task visibility.
	 *
	 * @return bool
	 */
	public function can_view() {
		return Features::is_enabled( 'launch-your-store' );
	}
<<<<<<< HEAD

	/**
	 * Hide the WP admin bar when the user is previewing the site.
	 *
	 * @param bool $show Whether to show the admin bar.
	 */
	public function possibly_hide_wp_admin_bar( $show ) {
		if ( isset( $_GET['site-preview'] ) ) { // @phpcs:ignore
			return false;
		}

		global $wp;
		$http_referer = wp_get_referer() ?? '';
		$parsed_url   = wp_parse_url( $http_referer, PHP_URL_QUERY );
		$query_string = is_string( $parsed_url ) ? $parsed_url : '';

		// Check if the user is coming from the site preview link.
		if ( strpos( $query_string, 'site-preview' ) !== false ) {
			if ( ! isset( $_SERVER['REQUEST_URI'] ) ) {
				return $show;
			}

			// Redirect to the current URL with the site-preview query string.
			$current_url =
				add_query_arg(
					array(
						'site-preview' => 1,
					),
					esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) )
				);
			wp_safe_redirect( $current_url );
			exit;
		}

		return $show;
	}
=======
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
}
