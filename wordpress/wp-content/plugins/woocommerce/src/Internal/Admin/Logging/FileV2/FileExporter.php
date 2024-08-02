<?php
declare( strict_types=1 );

namespace Automattic\WooCommerce\Internal\Admin\Logging\FileV2;

<<<<<<< HEAD
use Automattic\WooCommerce\Internal\Utilities\FilesystemUtil;
use Exception;
use WP_Error;
=======
use WP_Error;
use WP_Filesystem_Direct;
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744

/**
 * FileExport class.
 */
class FileExporter {
	/**
	 * The number of bytes per read while streaming the file.
	 *
	 * @const int
	 */
	private const CHUNK_SIZE = 4 * KB_IN_BYTES;

	/**
	 * The absolute path of the file.
	 *
	 * @var string
	 */
	private $path;

	/**
	 * A name of the file to send to the browser rather than the filename part of the path.
	 *
	 * @var string
	 */
	private $alternate_filename;

	/**
	 * Class FileExporter.
	 *
	 * @param string $path               The absolute path of the file.
	 * @param string $alternate_filename Optional. The name of the file to send to the browser rather than the filename
	 *                                   part of the path.
	 */
	public function __construct( string $path, string $alternate_filename = '' ) {
<<<<<<< HEAD
=======
		global $wp_filesystem;
		if ( ! $wp_filesystem instanceof WP_Filesystem_Direct ) {
			WP_Filesystem();
		}

>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
		$this->path               = $path;
		$this->alternate_filename = $alternate_filename;
	}

	/**
	 * Configure PHP and stream the file to the browser.
	 *
	 * @return WP_Error|void Only returns something if there is an error.
	 */
	public function emit_file() {
<<<<<<< HEAD
		try {
			$filesystem  = FilesystemUtil::get_wp_filesystem();
			$is_readable = $filesystem->is_file( $this->path ) && $filesystem->is_readable( $this->path );
		} catch ( Exception $exception ) {
			$is_readable = false;
		}

		if ( ! $is_readable ) {
=======
		global $wp_filesystem;
		if ( ! $wp_filesystem->is_file( $this->path ) || ! $wp_filesystem->is_readable( $this->path ) ) {
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
			return new WP_Error(
				'wc_logs_invalid_file',
				__( 'Could not access file.', 'woocommerce' )
			);
		}

		// These configuration tweaks are copied from WC_CSV_Exporter::send_headers().
		// phpcs:disable WordPress.PHP.NoSilencedErrors.Discouraged
		if ( function_exists( 'gc_enable' ) ) {
			gc_enable(); // phpcs:ignore PHPCompatibility.FunctionUse.NewFunctions.gc_enableFound
		}
		if ( function_exists( 'apache_setenv' ) ) {
			@apache_setenv( 'no-gzip', '1' ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.runtime_configuration_apache_setenv
		}
		@ini_set( 'zlib.output_compression', 'Off' ); // phpcs:ignore WordPress.PHP.IniSet.Risky
		@ini_set( 'output_buffering', 'Off' ); // phpcs:ignore WordPress.PHP.IniSet.Risky
		@ini_set( 'output_handler', '' ); // phpcs:ignore WordPress.PHP.IniSet.Risky
		ignore_user_abort( true );
		wc_set_time_limit();
		wc_nocache_headers();
		// phpcs:enable WordPress.PHP.NoSilencedErrors.Discouraged

		$this->send_headers();
		$this->send_contents();

		die;
	}

	/**
	 * Send HTTP headers at the beginning of a file.
	 *
	 * Modeled on WC_CSV_Exporter::send_headers().
	 *
	 * @return void
	 */
	private function send_headers(): void {
		header( 'Content-Type: text/plain; charset=utf-8' );
		header( 'Content-Disposition: attachment; filename=' . $this->get_filename() );
		header( 'Pragma: no-cache' );
		header( 'Expires: 0' );
	}

	/**
	 * Send the contents of the file.
	 *
	 * @return void
	 */
	private function send_contents(): void {
<<<<<<< HEAD
		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_fopen -- No suitable alternative.
		$stream = fopen( $this->path, 'rb' );

		while ( is_resource( $stream ) && ! feof( $stream ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_fread -- No suitable alternative.
=======
		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fopen -- No suitable alternative.
		$stream = fopen( $this->path, 'rb' );

		while ( is_resource( $stream ) && ! feof( $stream ) ) {
			// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fread -- No suitable alternative.
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
			$chunk = fread( $stream, self::CHUNK_SIZE );

			if ( is_string( $chunk ) ) {
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Outputting to file.
				echo $chunk;
			}
		}

<<<<<<< HEAD
		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_fclose -- No suitable alternative.
=======
		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fclose -- No suitable alternative.
>>>>>>> 85b704a4e7f213a7fc8e00dda037f0f84f541744
		fclose( $stream );
	}

	/**
	 * Get the name of the file that will be sent to the browser.
	 *
	 * @return string
	 */
	private function get_filename(): string {
		if ( $this->alternate_filename ) {
			return $this->alternate_filename;
		}

		return basename( $this->path );
	}
}
