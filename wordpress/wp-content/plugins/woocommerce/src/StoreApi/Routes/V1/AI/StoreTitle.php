<?php

namespace Automattic\WooCommerce\StoreApi\Routes\V1\AI;

use Automattic\WooCommerce\Blocks\AI\Connection;
use Automattic\WooCommerce\StoreApi\Routes\V1\AbstractRoute;

/**
 * StoreTitle class.
 *
 * @internal
 */
class StoreTitle extends AbstractRoute {
	/**
	 * The route identifier.
	 *
	 * @var string
	 */
	const IDENTIFIER = 'ai/store-title';

	/**
	 * The schema item identifier.
	 *
	 * @var string
	 */
	const SCHEMA_TYPE = 'ai/store-title';

	/**
	 * The store title option name.
	 *
	 * @var string
	 */
	const STORE_TITLE_OPTION_NAME = 'blogname';

	/**
	 * The default store title.
	 *
	 * @var string
	 */
	const DEFAULT_TITLE = 'Site Title';

	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
<<<<<<< HEAD
		return self::get_path_regex();
	}

	/**
	 * Get the path of this rest route.
	 *
	 * @return string
	 */
	public static function get_path_regex() {
=======
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
		return '/ai/store-title';
	}

	/**
	 * Get method arguments for this REST route.
	 *
	 * @return array An array of endpoints.
	 */
	public function get_args() {
<<<<<<< HEAD
		return array(
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'get_response' ),
				'permission_callback' => array( Middleware::class, 'is_authorized' ),
				'args'                => array(
					'business_description' => array(
						'description' => __( 'The business description for a given store.', 'woocommerce' ),
						'type'        => 'string',
					),
				),
			),
			'schema'      => array( $this->schema, 'get_public_item_schema' ),
			'allow_batch' => array( 'v1' => true ),
		);
=======
		return [
			[
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => [ Middleware::class, 'is_authorized' ],
				'args'                => [
					'business_description' => [
						'description' => __( 'The business description for a given store.', 'woocommerce' ),
						'type'        => 'string',
					],
				],
			],
			'schema'      => [ $this->schema, 'get_public_item_schema' ],
			'allow_batch' => [ 'v1' => true ],
		];
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	}

	/**
	 * Update the store title powered by AI.
	 *
	 * @param  \WP_REST_Request $request Request object.
	 *
	 * @return bool|string|\WP_Error|\WP_REST_Response
	 */
	protected function get_route_post_response( \WP_REST_Request $request ) {

		$business_description = $request->get_param( 'business_description' );

		if ( ! $business_description ) {
			return $this->error_to_response(
				new \WP_Error(
					'invalid_business_description',
					__( 'Invalid business description.', 'woocommerce' )
				)
			);
		}

<<<<<<< HEAD
		$store_title                 = html_entity_decode( get_option( 'blogname' ) );
		$previous_ai_generated_title = html_entity_decode( get_option( 'ai_generated_site_title' ) );
=======
		$store_title                 = get_option( 'blogname' );
		$previous_ai_generated_title = get_option( 'ai_generated_site_title' );
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

		if ( self::DEFAULT_TITLE === $store_title || ( ! empty( $store_title ) && $previous_ai_generated_title !== $store_title ) ) {
			return rest_ensure_response( array( 'ai_content_generated' => false ) );
		}

		$ai_generated_title = $this->generate_ai_title( $business_description );
		if ( is_wp_error( $ai_generated_title ) ) {
			return $this->error_to_response( $ai_generated_title );
		}

		update_option( 'ai_generated_site_title', $ai_generated_title );
		update_option( self::STORE_TITLE_OPTION_NAME, $ai_generated_title );

		return rest_ensure_response(
			array(
				'ai_content_generated' => true,
			)
		);
	}

	/**
	 * Generate the store title powered by AI.
	 *
	 * @param string $business_description The business description for a given store.
	 *
	 * @return string|\WP_Error|\WP_REST_Response The store title generated by AI.
	 */
	private function generate_ai_title( $business_description ) {
		$ai_connection = new Connection();

		$site_id = $ai_connection->get_site_id();
		if ( is_wp_error( $site_id ) ) {
			return $this->error_to_response( $site_id );
		}

		$token = $ai_connection->get_jwt_token( $site_id );
		if ( is_wp_error( $token ) ) {
			return $this->error_to_response( $token );
		}

		$prompt = "Generate a store title for a store that has the following: '$business_description'. The length of the title should be 1 and 3 words. The result should include only the store title without any other explanation, number or punctuation marks";

		$ai_response = $ai_connection->fetch_ai_response( $token, $prompt );
		if ( is_wp_error( $ai_response ) ) {
			return $this->error_to_response( $ai_response );
		}

		if ( ! isset( $ai_response['completion'] ) ) {
			return '';
		}

		return $ai_response['completion'];
	}
}
