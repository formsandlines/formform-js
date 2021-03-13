import { truncateStr, processLabel } from '../../common/helper';


// ===========================================================
//                      formDNA markup
// ===========================================================

export function formDNA_html (formula, dna, vars) {
	/* Constructs an HTML wrapper for formDNA */

	// construct HTML markup for the formDNA
	const formStr = formula !== undefined ? `<span class="dna-form" title="FORM">${formula}</span>` : '';

	const varorderStr = vars && dna.length > 1 ? '.<span class="dna-varorder" title="Variable interpretation order">['+vars.join(',')+']</span>' : '';

	return `<div id="dna"><code>${formStr + varorderStr}::<span class="dna-code">${markupQuartCycles(dna)}</span></code></div>`;
}

// ===========================================================
//                        vmap markup
// ===========================================================

export function vmap_svg (vmapTree, input, varorder, options) {
	/* Generates SVG output for a given vmap tree */
	// console.log(vmapTree);

	// option defaults
	const {svgPad, strokeC, bgC, hideInputLabel, hideOrderLabel, customLabel, fullInputLabel, inputLabelMax} = {
		svgPad: `0`, strokeC: `#fff`, bgC: `none`, // #333
		hideInputLabel: false, hideOrderLabel: false, fullInputLabel: false, inputLabelMax: 200, 
		customLabel: undefined,
		...options};

	const {vnum, margins} = vmapTree.data;
	const scale = vmapTree.scale;
	const strokeW = margins[0];
	// const len = Math.sqrt(4**vnum); // length of dna without '::'
	const bounds = {w: scale[0] + strokeW, h: scale[1] + strokeW};
	const rhomb = {w: Math.sqrt(2 * (bounds.w**2)), h: Math.sqrt(2 * (bounds.h**2))};

	const caption = () => {
		if (customLabel !== undefined) return `<figcaption style="word-wrap: break-word;">${customLabel}</figcaption>`;
		if (!(hideInputLabel && hideOrderLabel)) {
			let label = '';
			if (!hideOrderLabel) label += `${varorder.reduce((acc,curr,i) => acc + (i > 0 ? ' > ' : '') + processLabel(curr),'' )}${hideInputLabel || vnum < 1 ? '' : '<br/>'}`;
			if (!hideInputLabel) {
				const isFormDNA = input.includes('::');
				if (isFormDNA) label += `<code style="font-size:0.8em;">${fullInputLabel ? input : truncateStr(input,(input.split('::')[0].length + 4**4),`…(${4**vnum})`)}</code>`;
				else label += 'ƒ = '+(fullInputLabel ? input : truncateStr(input,inputLabelMax,`… <i>+more</i>`));
			}
			return `<figcaption style="word-wrap: break-word;">${label}</figcaption>`;
		}
		return '';
	}

	// svg figure + caption
	return `<figure class="vmap" style="margin: 0;">
		<svg style="background: ${bgC}; padding: ${svgPad};" width=${scale[0]} height=${scale[1]}
		fill="white" stroke="${strokeC}" stroke-width="${strokeW}"
		viewBox="-${strokeW/2} -${strokeW/2} ${rhomb.w} ${rhomb.h}">
		<g transform="translate(${0},${rhomb.h/2}) rotate(-45,0,0)">${ constructSVG(vmapTree) }</g>
		</svg>
		${ caption() }
		</figure>`;
}

function constructSVG(subTree, mapSVG='') {
	/* Recursive function to construct svg markup from vmap tree structure */

	if(subTree !== null && typeof subTree == "object") {
		if(subTree.children) {
			mapSVG += `<g transform="translate(${subTree.position[0]}, ${subTree.position[1]})">`;

			subTree.children.forEach(child => {
				mapSVG += constructSVG(child);
			});
			mapSVG += `</g>`;
			return mapSVG;
		}
		else {				
			mapSVG += `<rect x="${subTree.position[0]}" y="${subTree.position[1]}" width="${subTree.scale[0]}" height="${subTree.scale[1]}" fill="${vColor(subTree.value)}"></rect>`;
			return mapSVG;
		}
	}
	else {
		throw new Error('Not a subtree!');
	};
}


export function vmapPerspectives_svg (vmapPermutations_svg, formula, globalOptions=undefined) {
	/* Constructs vmap perspectives as HTML output (flex list) */

	const {margin, customLabel} = { margin: 20, customLabel: undefined, ...globalOptions };

	const vmapItems = vmapPermutations_svg.map(vmap_svg => {
		return `<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px"> 
				${vmap_svg}</div>`}).reduce((str,item) => str+item,'');

	const label = (customLabel !== undefined) ? customLabel : `ƒ = ${formula}`;

	return `<figure class="vmap-perspectives" style="max-width: none;">
			<div class="vmap-list" style="display: flex; flex-wrap: wrap; margin: 0 -${Math.floor(margin/2)}px">
			${ vmapItems }
			</div>
			<figcaption style="border-top: 1px solid; padding-top: ${Math.floor(margin/4)}px; margin-top: ${Math.floor(margin/2)}px; word-wrap: break-word;">${label}</figcaption>
			</figure>`
};


export function vmapList_svg (vmaps_svg, globalOptions=undefined) {
	/* Constructs multiple vmaps as SVG output */

	const {margin, vAlign} = { margin: 20, vAlign: 'bottom', ...globalOptions }

	return `<div class="vmap-list" style="display: flex; flex-wrap: wrap; ${getVAlign(vAlign)} margin: 0 -${Math.floor(margin/2)}px">
			${ vmaps_svg.reduce((str, vmap_svg) => `${str}<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px">${vmap_svg}</div>`,'') }
			</div>`
};

// -----------------------------------------------------------
//                         Helper
// -----------------------------------------------------------

const markupQuartCycles = (str) => {
	/* Marks up groups of 4 numbers each for dna to be able to apply readable CSS */
	return str.split('').reduce((str,c,i,arr) => {

		return str + ((i+1)%4 === 1 ? '<span class="dna-quart1">' : '') + c + ((i+1)%4 === 0 ? '</span>' : '');
	},'');
}

const getVAlign = vAlign => {
	// >>> as helper
	const alignItems = vAlign === 'top'    ? 'flex-start'
				 	 : vAlign === 'center' ? 'center'
				 	 : vAlign === 'bottom' ? 'flex-end' : 'flex-end';
	return `align-items: ${alignItems};`;
}

const vColor = val => {
	/* Value to color map for vmap */
	return val == 0 ? '#000000'
		 : val == 1 ? '#4757ff'
		 : val == 2 ? '#ff0044'
		 : val == 3 ? '#00ff5f'
		 : NaN;
};
