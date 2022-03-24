import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import rollupJson from "rollup-plugin-json";
import {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import images from 'rollup-plugin-image-files';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import {terser} from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            resolve({jsnext: true, main: true, browser: true}),
            postcss({
                plugins: [],
                minimize: true,
            }),
            nodeResolve({jsnext: true, preferBuiltins: true, browser: true}),
            rollupJson({compact: true}),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            commonjs(),
            external(),
            terser(),
            images(),
            nodePolyfills()
        ]
    }
];