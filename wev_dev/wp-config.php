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
define( 'DB_NAME', 'dev_theme' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         '5i%$}XoW]nKayG]+]yM(fz}AmGuaRKRC,<-J9LYit{SOc]FLIfYqVKB)V+GTu8pb' );
define( 'SECURE_AUTH_KEY',  'dGra>?Kr_e:sCTXzQUfwNK_z 5;9!PlQ4[ah_-FBxILk7$|{2~@ftsyP>YJG8;F)' );
define( 'LOGGED_IN_KEY',    '^7y~7,`I}iK&1eWLV0kk%&7^iBi8Q5^8EkF56Q)X ,DnuZJ>2&8f5r^ AMG{G[ov' );
define( 'NONCE_KEY',        '^:4)o1 UosjI[@lYV9,y5LCBw))I1:/YRW5G#::c<V/:Y80H|u_.ky]J/uAt%JlF' );
define( 'AUTH_SALT',        'kh!t|`-},0Go~zcY4KQ]cqoU@kP^di92)IT{VwXSS@Z~ZXU?{7~bZr20d7`S?Uza' );
define( 'SECURE_AUTH_SALT', '0a(xJ;H0g&Bh%~x+Su6Q:^Bf=;M9=5rUi8xTRF$s8U@.09:T!fx,AAv_O#X.msWu' );
define( 'LOGGED_IN_SALT',   '*KO)t_>;bZDe>G87*ib^V`rb`;g6Dwj&x:gYT9QKkgzQ)(tVu@(9>Q(70js+gwFa' );
define( 'NONCE_SALT',       'dWlxiyXN,(jeZ>^,EBd!@xRHT89HH|*R^CC=F}+3Ex^ sa7wp4Z:4;H5aA;N|iDu' );

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
