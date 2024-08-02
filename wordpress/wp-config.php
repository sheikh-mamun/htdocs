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
<<<<<<< HEAD
define( 'AUTH_KEY',         '$v1Y{bTb|U(PGm*R=L+,YJ)~Jrs0>G)K_<(+1m>jm84j2Nm*RO3Z5xI`aDvP~13L' );
define( 'SECURE_AUTH_KEY',  'oE|oZH@^`3_G;?Y cz-[j$z<.PTHmzx.|xleW:O+>uJhw;n~`,E,D[lGN<R>5$R3' );
define( 'LOGGED_IN_KEY',    '~>7x3hiOv9+WAJm0)Ab(N%i@X%zh-BRyGR3y41 Rk2P[xoXr4Act&v/.Rs s}3F|' );
define( 'NONCE_KEY',        'SKnn.3h*&5sT{9Q) Ik3EA>r{v16?M-Y8AxSB^=[WH||rkPX|`wp1a-UAkO)tESC' );
define( 'AUTH_SALT',        'n e[6ZHVNn./`1=CE(LIUQI3Dq;)P!u[&u08/rcaMlB~J{nF7B.h)mp#,~#Bhs,_' );
define( 'SECURE_AUTH_SALT', ' D|RqGy|#j1/IFSYb[#vQ}MAq<OP]!u9Q+uYKtMjNN)z:%6P I{!hOaqGAn.*iD9' );
define( 'LOGGED_IN_SALT',   'j>_Fn~r?E$(Cnv35tSeGL#*d#b#M>M=2->Uqa >.ae3k&k6w[X<ojnK|MP&ZD0|Z' );
define( 'NONCE_SALT',       'k$E X/.G^GJPj1M[.Z_)l}{EfbRyQ2*cC:tOqC_XxsG@N{JW!C9XEc7Gm2k).F{R' );
=======
define( 'AUTH_KEY',         'eGze3ft@~()J7^&AO$|$qgj<Bt(L]=v[#%)XGalGv;d)+av;(uF<c8Z14TW*mik&' );
define( 'SECURE_AUTH_KEY',  'IBwrX?1REvFqRSfz3+W E]i3lV!OeK;?fPe5$2XVMEq?zP~yo-1B5?;:T+F kO?w' );
define( 'LOGGED_IN_KEY',    'M{q**e-Eo-kJQj#<C}P04{e`=?$uW&*)Oa!4]QW,8]&xOoSo<S4bY|B< <vu#i,z' );
define( 'NONCE_KEY',        'zLnHn0%Fc;QGlC0mTPJTq/.[d/.GvB(TI](a3M9*,iq; t 58!~yr4`A0mAEAC$,' );
define( 'AUTH_SALT',        'lv/K+gcU8yW=cl/dCXT0#ay<Zf/T~pDV&6&m7>j4{2 fdfz/:i^Hr9+u>GCmWO,1' );
define( 'SECURE_AUTH_SALT', '%O=v)RV7xspNkDmvr-kn%x2S{ +vMZvqV||UC@q$p1E&xg(,1&YiJ^Q}X,mYpy?x' );
define( 'LOGGED_IN_SALT',   '/[QRqOzhb)7SY?HBNe#`@uZBA~/g/E]&?J_eeg@aWJN=?;ihM/IR<=!D]!x7j>`,' );
define( 'NONCE_SALT',       '02P>{pmi2T(MOn2!x_*GZ(-TDcHD;HVlp9OA0JHE[Zd}Ru8*9tn!V!,aMQX4C+~/' );
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

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
