tailwind.config ={
    theme:{
        extend:{
            colors:{
                obsidian: '#0B1215',
                deep_sea: '#1d2529',
                ghost_white: '#F8F8FF',
                mauve: '#7F27FF',
                lavender: '#af8eff',
            },
            fontFamily:{
                climate_crisis: ["Climate Crisis", "sans-serif"],
                steppe_trial: ["Steppe Trial", "sans-serif"],
            },
        }
    },
    plugins:[
        function({addBase, config}){
            addBase({
                '.no-scrollbar::-webkit-scrollbar': {display: 'none'},
                '.no-scrollbar': {'-ms-overflow-style': 'none', 'scrollbar-width': 'none'},
            })
        }
    ]
}