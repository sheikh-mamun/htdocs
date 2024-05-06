<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'word' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%y.s$]/bS&G9RpxN;!%>*M!2}G. D.-8BjNtZ+)r|Lp-SWm_:#~T3~3+]G|dHXkE' );
define( 'SECURE_AUTH_KEY',  ',G8B;(3znl)H 8hRzi&G<~f?{d=AH%LoL}[?blTjD !n vbG0U9YT)X9K,c4M*Mx' );
define( 'LOGGED_IN_KEY',    '9{cW U:L_m:uTGF|L60}{9O+$JEC[^xgI05G;-GVWTCW;{$VH}u/J2tQ)$EC>-?#' );
define( 'NONCE_KEY',        '<wg#|z`Mb1WZ7xvAazMP[jO+oLm{~e7$Gxk&qRjPhOky_6gi!=~;^8^TgHXO[:^F' );
define( 'AUTH_SALT',        'M(XhxaPHytOZuH]sXE<eejx]]GTI1?N*mw6_]KX2PQ3_+2,Zf0MFTc^Q4.,Y$a%_' );
define( 'SECURE_AUTH_SALT', '-z>Ru>P[Dq3oI>uP)SE>P,hc<8&pzI/GAOQQM.6fe4I>6 Y}4kE^}cpos}u:UkVV' );
define( 'LOGGED_IN_SALT',   'W7+i]rew`VT/-(7F.kNj1%wV$:9X *0Ggo$t/FA6^qyT+*.U?!GMLPI4[r;/O^=#' );
define( 'NONCE_SALT',       'kT9;LhYg/U&*&(C^vYn*^YzZyH3ime:k2y!~c;pX6!y/V2hKj@W{7]WhKJ><9dhk' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
