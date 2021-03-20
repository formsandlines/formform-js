// -----------------------
// global styles

const global = {
    common: {
        // font: {family: 'sans-serif', size: '14px', style: 'normal'},
    }
};
global.basic = {
    ...global.common,
};
const [basic] = [global.basic];

export const vmap = {
    common: {
        font: {base: `'IBM Plex Mono', 'SFMono-Regular', 'Andale Mono', AndaleMono, 'Lucida Console', 'Lucida Sans Typewriter', Consolas, monospace`},
        textSize: {base: 12, sm: 10},
    }
};

vmap.basic = {
    ...basic,
    ...vmap.common,
};
vmap.basic.applyStyles = function() {

}