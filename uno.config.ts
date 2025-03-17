/**
 * UnoCSS configuration
 * @author Prk<code@imprk.me>
 */

import { defineConfig, presetMini } from 'unocss';
import presetWind4 from '@unocss/preset-wind4';

export default defineConfig({
    presets: [
        presetMini(),
        presetWind4()
    ]
});
