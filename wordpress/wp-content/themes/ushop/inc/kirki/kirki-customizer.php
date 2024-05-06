<?php
/**
 * Early exit if Kirki exists.
 */
if ( ! class_exists( 'Kirki' ) ) {
    return;
}

/**
 * Load Files
 */
$customer_files = array(
    'header',
    'general',
    'typography',
    'colors',
    'footer',
    'blog',
    'breadcrumb',
    'woocommerce'
);

$template_dir = get_template_directory();

foreach ( $customer_files as $tpl ) {
    require_once $template_dir . '/inc/kirki/customizer/' . $tpl . '.php';
}