const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}', './src/app/core/*.{html,ts}'],
    theme: {
        extend: {
            backgroundImage: {
                'icon-back': "url('/assets/images/icon-back.png')",
            },
        },
    },
    plugins: [
        plugin(function ({ matchComponents, theme }) {
            /* icon sizes */
            matchComponents(
                {
                    icon: (value) => ({
                        height: value,
                        width: value,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }),
                },
                { values: theme('iconSize') },
            );
        }),
    ],
};
