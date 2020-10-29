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

export function vmap_html (input, varorder, formDNA, vnum, options) {
	/* Constructs a vmap as HTML output */
	// Value ordering: left:0, right:1, up:3, down:2

	// >>> reduce number of arguments (input + varorder only used by caption()!)

	const len = Math.sqrt(formDNA.length);
	const isFormDNA = input.includes('::');

	const {size, gapGrow, svgPad, strokeW, strokeC, bgC, 
		   hideInputLabel, hideOrderLabel, customLabel, fullInputLabel, inputLabelMax, filter} = {
	        	size: (vnum => {
	        		// reduction of size by 1px for each additional variable
	        		const n = 14 - (vnum-1); // Math.floor( 14 - (vnum-1)**1.0 )
	                return Math.max(2, n); // min size of 2px
	            })(vnum), 
		        gapGrow: 1.5,
		        svgPad: `0`, strokeW: 0.5, strokeC: `#fff`, bgC: `none`, // #333
		        hideInputLabel: false, hideOrderLabel: false, fullInputLabel: false, inputLabelMax: 200, customLabel: undefined,
		        // filter: '1111', <- will add later
		        ...options};
  
	const margins = [strokeW, ...Array.from({length:vnum-1}, (_,i) => (i+1) * gapGrow)];

	const cell = {w:size, h:size};
	const gapSum = calcGapSum(vnum,margins);

	const bounds = {w: (cell.w*len + margins[0] + gapSum), h: (cell.h*len + margins[0] + gapSum)};
	const rhomb = {w: Math.sqrt(2 * bounds.w**2), h: Math.sqrt(2 * bounds.h**2)};

	const caption = () => {
	    if (customLabel !== undefined) return `<figcaption style="word-wrap: break-word;">${customLabel}</figcaption>`;
	    if (!(hideInputLabel && hideOrderLabel)) {
	    	let label = '';
	    	if (!hideOrderLabel) label += `${varorder.reduce((acc,curr,i) => acc + (i > 0 ? ' > ' : '') + processLabel(curr),'' )}${hideInputLabel ? '' : '<br/>'}`;
	    	if (!hideInputLabel) {
	    		if (isFormDNA) label += `<code style="font-size:0.8em;">${fullInputLabel ? input : truncateStr(input,(input.split('::')[0].length + 4**4),`…(${4**vnum})`)}</code>`;
	    		else label += 'ƒ = '+(fullInputLabel ? input : truncateStr(input,inputLabelMax,`… <i>+more</i>`));
	    	}
	    	return `<figcaption style="word-wrap: break-word;">${label}</figcaption>`;
	    }
	    return '';
	}

	const reversedDNA = formDNA.split('').reverse().join('');
	return `<figure class="vmap" style="margin: 0;">
		<svg style="background: ${bgC}; padding: ${svgPad};" width=${cell.w*len + gapSum} height=${cell.h*len + gapSum}
		fill="white" stroke="${strokeC}" stroke-width="${margins[0]}"
		viewBox="-${margins[0]/2} -${margins[0]/2} ${rhomb.w} ${rhomb.h}">
		<g transform="translate(0,${rhomb.h/2}) rotate(-45,0,0)">${ constructVmap(reversedDNA, vnum, cell, margins) }</g>
		</svg>
		${ caption() }
		</figure>`;
};

export function vmapPerspectives_html (vmapPerms_html, formula, globalOptions=undefined) {
	/* Constructs vmap perspectives as HTML output (flex list) */

	const {margin, customLabel} = { margin: 20, customLabel: undefined, ...globalOptions };

	const vmapItems = vmapPerms_html.map((vmap_html) => {
		return `<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px"> 
				${vmap_html}</div>`}).reduce((str,item) => str+item,'');

	const label = (customLabel !== undefined) ? customLabel : `ƒ = ${formula}`;

	return `<figure class="vmap-perspectives" style="max-width: none;">
			<div class="vmap-list" style="display: flex; flex-wrap: wrap; margin: 0 -${Math.floor(margin/2)}px">
			${ vmapItems }
			</div>
			<figcaption style="border-top: 1px solid; padding-top: ${Math.floor(margin/4)}px; margin-top: ${Math.floor(margin/2)}px; word-wrap: break-word;">${label}</figcaption>
			</figure>`
};


export function vmapList_html (vmaps_html, globalOptions=undefined) {
	/* Constructs multiple vmaps as HTML output (flex list) */

	const {margin, vAlign} = { margin: 20, vAlign: 'bottom', ...globalOptions }

	return `<div class="vmap-list" style="display: flex; flex-wrap: wrap; ${getVAlign(vAlign)} margin: 0 -${Math.floor(margin/2)}px">
			${ vmaps_html.reduce((str,vmap_html) => `${str}<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px">${ vmap_html }</div>`,'') }
			</div>`
};

const constructVmap = (dnaHolon, vcount, cell, margins, qi=0, mapSVG='') => {
	const gapSum = calcGapSum(vcount,margins);
    const qtn = 4**vcount;
    const len = Math.sqrt(qtn);
    dnaHolon = dnaHolon.substr(qi*qtn, qtn); // quarter of the formDNA string

    mapSVG += `<g transform="translate(${fx(qi, len*cell.w) + fx(qi, gapSum) + fx(qi, margins[vcount])},
${fy(qi, len*cell.h) + fy(qi, gapSum) + fy(qi, margins[vcount])})">`;

    for (let i=0; i<4; i++) {
		if (vcount > 1) {
		    mapSVG = constructVmap(dnaHolon, vcount-1, cell, margins, i, mapSVG);
		}
		else {
		    const val = dnaHolon.substr(i,1);

		    mapSVG += `<rect x=${fx(i,cell.w)} y=${fy(i,cell.h)} width=${cell.w} height=${cell.h} fill=${vColor(val)}></rect>`;
		}
    }
    mapSVG += `</g>`;
    return mapSVG;
}

// -----------------------------------------------------------
//                         Helper
// -----------------------------------------------------------

const markupQuartCycles = (str) => {
	/* Marks up groups of 4 numbers each for dna to be able to apply readable CSS */
	return str.split('').reduce((str,c,i,arr) => {

		return str + ((i+1)%4 === 1 ? '<span class="dna-quart1">' : '') + c + ((i+1)%4 === 0 ? '</span>' : '');
	},'');
}

const fx = (qi,n) =>  (qi%2) * (n !== undefined ? n : 0);         // xpos: 0123 -> 0101
const fy = (qi,n) => +(qi>0 && qi<3) * (n !== undefined ? n : 0); // ypos: 0123 -> 0110

const calcGapSum = (v,margins) => margins.slice(1,v).reverse().reduce((acc,curr,idx) => acc + (2**idx) * curr, 0);

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
