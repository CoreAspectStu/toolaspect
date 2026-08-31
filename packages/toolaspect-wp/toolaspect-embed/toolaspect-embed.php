<?php
/**
 * Plugin Name: ToolAspect Embed
 * Description: Embed any ToolAspect calculator or converter with a shortcode: [toolaspect tool="401k-match-calculator"]
 * Version: 0.1.0
 * Author: Core Aspect AI
 * Author URI: https://toolaspect.com
 * License: MIT
 * Text Domain: toolaspect-embed
 */

defined('ABSPATH') || exit;

class ToolAspect_Embed {
    public static function render($atts) {
        $a = shortcode_atts(array(
            'tool'   => '',
            'height' => '520',
            'title'  => '',
        ), $atts, 'toolaspect');
        $slug = preg_replace('/[^a-z0-9\-]/', '', strtolower($a['tool']));
        if (!$slug) return '<!-- toolaspect: missing tool slug -->';
        $title = $a['title'] ?: esc_html($slug);
        $url = 'https://toolaspect.com/embed/' . $slug . '/';
        $h = intval($a['height']);
        return '<iframe src="' . esc_url($url) . '" width="100%" height="' . $h . '" '
             . 'style="border:1px solid #e2e8f0;border-radius:10px" '
             . 'title="' . esc_attr($title) . ' — ToolAspect" loading="lazy"></iframe>'
             . '<p style="font-size:.75rem;text-align:right;margin:4px 0 0">Powered by '
             . '<a href="https://toolaspect.com/" target="_blank" rel="noopener">ToolAspect</a></p>';
    }
}
add_shortcode('toolaspect', array('ToolAspect_Embed', 'render'));
