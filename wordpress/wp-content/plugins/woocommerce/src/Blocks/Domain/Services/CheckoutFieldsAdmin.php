<?php

namespace Automattic\WooCommerce\Blocks\Domain\Services;

use Automattic\WooCommerce\Blocks\Domain\Services\CheckoutFields;

/**
 * Service class managing checkout fields and its related extensibility points in the admin area.
 */
class CheckoutFieldsAdmin {

	/**
	 * Checkout field controller.
	 *
	 * @var CheckoutFields
	 */
	private $checkout_fields_controller;

	/**
	 * Sets up core fields.
	 *
	 * @param CheckoutFields $checkout_fields_controller Instance of the checkout field controller.
	 */
	public function __construct( CheckoutFields $checkout_fields_controller ) {
		$this->checkout_fields_controller = $checkout_fields_controller;
	}

	/**
	 * Initialize hooks. This is not run Store API requests.
	 */
	public function init() {
		add_filter( 'woocommerce_admin_billing_fields', array( $this, 'admin_address_fields' ), 10, 3 );
		add_filter( 'woocommerce_admin_billing_fields', array( $this, 'admin_contact_fields' ), 10, 3 );
		add_filter( 'woocommerce_admin_shipping_fields', array( $this, 'admin_address_fields' ), 10, 3 );
<<<<<<< HEAD
		add_filter( 'woocommerce_admin_shipping_fields', array( $this, 'admin_order_fields' ), 10, 3 );
=======
		add_filter( 'woocommerce_admin_shipping_fields', array( $this, 'admin_additional_fields' ), 10, 3 );
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	}

	/**
	 * Converts the shape of a checkout field to match whats needed in the WooCommerce meta boxes.
	 *
	 * @param array  $field The field to format.
	 * @param string $key The field key. This will be used for the ID of the field when passed to the meta box.
	 * @return array Formatted field.
	 */
	protected function format_field_for_meta_box( $field, $key ) {
		$formatted_field = array(
			'id'              => $key,
			'label'           => $field['label'],
			'value'           => $field['value'],
			'type'            => $field['type'],
			'update_callback' => array( $this, 'update_callback' ),
			'show'            => true,
			'wrapper_class'   => 'form-field-wide',
		);

		if ( 'select' === $field['type'] ) {
			$formatted_field['options'] = array_column( $field['options'], 'label', 'value' );
		}

		if ( 'checkbox' === $field['type'] ) {
			$formatted_field['checked_value']   = '1';
			$formatted_field['unchecked_value'] = '0';
		}

		return $formatted_field;
	}

	/**
	 * Updates a field value for an order.
	 *
	 * @param string    $key The field key.
	 * @param mixed     $value The field value.
	 * @param \WC_Order $order The order to update the field for.
	 */
	public function update_callback( $key, $value, $order ) {
<<<<<<< HEAD
		list( $group, $key ) = explode( '/', $key, 2 );
		$group               = CheckoutFields::get_group_name( $group );
		$this->checkout_fields_controller->persist_field_for_order( $key, $value, $order, $group, false );
=======
		$this->checkout_fields_controller->persist_field_for_order( $key, $value, $order, false );
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	}

	/**
	 * Injects address fields in WC admin orders screen.
	 *
	 * @param array             $fields The fields to show.
	 * @param \WC_Order|boolean $order The order to show the fields for.
	 * @param string            $context The context to show the fields for.
	 * @return array
	 */
	public function admin_address_fields( $fields, $order = null, $context = 'edit' ) {
		if ( ! $order instanceof \WC_Order ) {
			return $fields;
		}

<<<<<<< HEAD
		$group_name        = doing_action( 'woocommerce_admin_billing_fields' ) ? 'billing' : 'shipping';
		$additional_fields = $this->checkout_fields_controller->get_order_additional_fields_with_values( $order, 'address', $group_name, $context );
		foreach ( $additional_fields as $key => $field ) {
			$prefixed_key              = CheckoutFields::get_group_key( $group_name ) . $key;
			$additional_fields[ $key ] = $this->format_field_for_meta_box( $field, $prefixed_key );
=======
		$group             = doing_action( 'woocommerce_admin_billing_fields' ) ? 'billing' : 'shipping';
		$additional_fields = $this->checkout_fields_controller->get_order_additional_fields_with_values( $order, 'address', $group, $context );
		foreach ( $additional_fields as $key => $field ) {
			$group_key                 = '/' . $group . '/' . $key;
			$additional_fields[ $key ] = $this->format_field_for_meta_box( $field, $group_key );
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
		}

		array_splice(
			$fields,
			array_search(
				'state',
				array_keys( $fields ),
				true
			) + 1,
			0,
			$additional_fields
		);

		return $fields;
	}

	/**
	 * Injects contact fields in WC admin orders screen.
	 *
	 * @param array             $fields The fields to show.
	 * @param \WC_Order|boolean $order The order to show the fields for.
	 * @param string            $context The context to show the fields for.
	 * @return array
	 */
	public function admin_contact_fields( $fields, $order = null, $context = 'edit' ) {
		if ( ! $order instanceof \WC_Order ) {
			return $fields;
		}

<<<<<<< HEAD
		$additional_fields = $this->checkout_fields_controller->get_order_additional_fields_with_values( $order, 'contact', 'other', $context );

		foreach ( $additional_fields as $key => $field ) {
			$prefixed_key              = CheckoutFields::get_group_key( 'other' ) . $key;
			$additional_fields[ $key ] = $this->format_field_for_meta_box( $field, $prefixed_key );
		}

		return array_merge( $fields, $additional_fields );
=======
		$additional_fields = $this->checkout_fields_controller->get_order_additional_fields_with_values( $order, 'contact', '', $context );

		return array_merge(
			$fields,
			array_map(
				array( $this, 'format_field_for_meta_box' ),
				$additional_fields,
				array_keys( $additional_fields )
			)
		);
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	}

	/**
	 * Injects additional fields in WC admin orders screen.
	 *
	 * @param array             $fields The fields to show.
	 * @param \WC_Order|boolean $order The order to show the fields for.
	 * @param string            $context The context to show the fields for.
	 * @return array
	 */
<<<<<<< HEAD
	public function admin_order_fields( $fields, $order = null, $context = 'edit' ) {
=======
	public function admin_additional_fields( $fields, $order = null, $context = 'edit' ) {
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
		if ( ! $order instanceof \WC_Order ) {
			return $fields;
		}

<<<<<<< HEAD
		$additional_fields = $this->checkout_fields_controller->get_order_additional_fields_with_values( $order, 'order', 'other', $context );

		foreach ( $additional_fields as $key => $field ) {
			$prefixed_key              = CheckoutFields::get_group_key( 'other' ) . $key;
			$additional_fields[ $key ] = $this->format_field_for_meta_box( $field, $prefixed_key );
		}

		return array_merge( $fields, $additional_fields );
=======
		$additional_fields = $this->checkout_fields_controller->get_order_additional_fields_with_values( $order, 'additional', '', $context );

		return array_merge(
			$fields,
			array_map(
				array( $this, 'format_field_for_meta_box' ),
				$additional_fields,
				array_keys( $additional_fields )
			)
		);
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
	}
}
