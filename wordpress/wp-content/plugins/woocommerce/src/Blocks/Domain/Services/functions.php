<?php

use Automattic\WooCommerce\Blocks\Package;
use Automattic\WooCommerce\Blocks\Domain\Services\CheckoutFields;

<<<<<<< HEAD
if ( ! function_exists( 'woocommerce_register_additional_checkout_field' ) ) {
=======
if ( ! function_exists( '__experimental_woocommerce_blocks_register_checkout_field' ) ) {
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	/**
	 * Register a checkout field.
	 *
	 * @param array $options Field arguments. See CheckoutFields::register_checkout_field() for details.
	 * @throws \Exception If field registration fails.
	 */
<<<<<<< HEAD
	function woocommerce_register_additional_checkout_field( $options ) { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName.FunctionDoubleUnderscore,PHPCompatibility.FunctionNameRestrictions.ReservedFunctionNames.FunctionDoubleUnderscore
=======
	function __experimental_woocommerce_blocks_register_checkout_field( $options ) { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName.FunctionDoubleUnderscore,PHPCompatibility.FunctionNameRestrictions.ReservedFunctionNames.FunctionDoubleUnderscore
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

		// Check if `woocommerce_blocks_loaded` ran. If not then the CheckoutFields class will not be available yet.
		// In that case, re-hook `woocommerce_blocks_loaded` and try running this again.
		$woocommerce_blocks_loaded_ran = did_action( 'woocommerce_blocks_loaded' );
		if ( ! $woocommerce_blocks_loaded_ran ) {
			add_action(
				'woocommerce_blocks_loaded',
				function () use ( $options ) {
<<<<<<< HEAD
					woocommerce_register_additional_checkout_field( $options );
=======
					__experimental_woocommerce_blocks_register_checkout_field( $options );
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
				}
			);
			return;
		}
		$checkout_fields = Package::container()->get( CheckoutFields::class );
		$result          = $checkout_fields->register_checkout_field( $options );
		if ( is_wp_error( $result ) ) {
			throw new \Exception( esc_attr( $result->get_error_message() ) );
		}
	}
}

<<<<<<< HEAD
if ( ! function_exists( '__experimental_woocommerce_blocks_register_checkout_field' ) ) {

	/**
	 * Register a checkout field.
	 *
	 * @param array $options Field arguments. See CheckoutFields::register_checkout_field() for details.
	 * @throws \Exception If field registration fails.
	 * @deprecated 5.6.0 Use woocommerce_register_additional_checkout_field() instead.
	 */
	function __experimental_woocommerce_blocks_register_checkout_field( $options ) { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName.FunctionDoubleUnderscore,PHPCompatibility.FunctionNameRestrictions.ReservedFunctionNames.FunctionDoubleUnderscore
		wc_deprecated_function( __FUNCTION__, '8.9.0', 'woocommerce_register_additional_checkout_field' );
		woocommerce_register_additional_checkout_field( $options );
	}
}
=======
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

if ( ! function_exists( '__internal_woocommerce_blocks_deregister_checkout_field' ) ) {
	/**
	 * Deregister a checkout field.
	 *
	 * @param string $field_id Field ID.
	 * @throws \Exception If field deregistration fails.
	 * @internal
	 */
	function __internal_woocommerce_blocks_deregister_checkout_field( $field_id ) { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName.FunctionDoubleUnderscore,PHPCompatibility.FunctionNameRestrictions.ReservedFunctionNames.FunctionDoubleUnderscore
		$checkout_fields = Package::container()->get( CheckoutFields::class );
		$result          = $checkout_fields->deregister_checkout_field( $field_id );
		if ( is_wp_error( $result ) ) {
			throw new \Exception( esc_attr( $result->get_error_message() ) );
		}
	}
}
