/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {},
        colors: {
            primaryColor: "#64748B", // bg-slate-600
            secondaryColor: "#F1F5F9", // bg-slate-100
            homeColor: "#cbd5e1", // bg-slate-300
            white: "#ffffff", // bg-white
            orange: "#7c2d12", // orange-900
            tooltip: "#94a3b8", // slate-400
            homePageColor: "#01263f",
            // #271e4b number 1 background color
            // #0c242b awsome color
            //#01263f jush color
        },
    },
    plugins: [require("daisyui", "flowbite/plugin")],
    //require("daisyui", "flowbite/plugin")
};
