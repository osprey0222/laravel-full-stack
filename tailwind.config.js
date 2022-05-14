module.exports = {
    content: [
        './resources/js/**/*.{js,jsx}',
        './resources/views/**/*.blade.php',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
