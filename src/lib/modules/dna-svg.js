import { truncateStr, processLabel, getSvgSize, breakStr, svgLinebreak } from '../../common/helper';

import * as styles from './dna-svg-styles.js';


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

	// option defaults
	const {vmapPad, strokeC, vmapC, figPad, figC, hideInputLabel, hideOrderLabel, customLabel, fullInputLabel, inputLabelMax, styleClass} = {
		vmapPad: 0, strokeC: `#fff`, vmapC: `none`, figPad: 0, figC: `#fff`,
		hideInputLabel: false, hideOrderLabel: false, fullInputLabel: false, inputLabelMax: 200, 
		customLabel: undefined, styleClass: 'basic',
		...options};

	const design = styles.vmap[styleClass];
	const [textSize, font] = [design.textSize, design.font.base];

	const {vnum, margins} = vmapTree.data;
	const scale = vmapTree.scale;
	const strokeW = margins[0];
	// const len = Math.sqrt(4**vnum); // length of dna without '::'
	const bounds = {w: scale[0] + strokeW, h: scale[1] + strokeW};
	const rhomb = {w: Math.sqrt(2 * (bounds.w**2)), h: Math.sqrt(2 * (bounds.h**2))};

	const chart = {tree: vmapTree, input: input, varorder: varorder, options: options};

	if (output == 'mixed') {
		// svg with html wrapper

		// const caption = () => {
		// 	if (customLabel !== undefined) return `<figcaption style="word-wrap: break-word;">${customLabel}</figcaption>`;
		// 	if (!(hideInputLabel && hideOrderLabel)) {
		// 		let label = '';
		// 		if (!hideOrderLabel) label += `${varorder.reduce((acc,curr,i) => acc + (i > 0 ? ' > ' : '') + processLabel(curr),'' )}${hideInputLabel || vnum < 1 ? '' : '<br/>'}`;
		// 		if (!hideInputLabel) {
		// 			const isFormDNA = input.includes('::');
		// 			if (isFormDNA) label += `<code style="font-size:0.8em;">${fullInputLabel ? input : truncateStr(input,(input.split('::')[0].length + 4**4),`…(${4**vnum})`)}</code>`;
		// 			else label += 'ƒ = '+(fullInputLabel ? input : truncateStr(input,inputLabelMax,`… <i>+more</i>`));
		// 		}
		// 		return `<figcaption style="word-wrap: break-word;">${label}</figcaption>`;
		// 	}
		// 	return '';
		// }

		// chart.elem = `<figure class="vmap-figure" style="margin: 0;">
		// 	<svg class="vmap" style="background: ${bgC}; padding: ${vmapPad};" width=${scale[0]} height=${scale[1]}
		// 	fill="white" stroke="${strokeC}" stroke-width="${strokeW}"
		// 	viewBox="-${strokeW/2} -${strokeW/2} ${rhomb.w} ${rhomb.h}">
		// 	<g transform="translate(${0},${rhomb.h/2}) rotate(-45,0,0)">${ constructSVG(vmapTree) }</g>
		// 	</svg>
		// 	${ caption() }
		// 	</figure>`;

	} else {
		// pure svg output

		const caption = (input, customLabel) => {
			if (customLabel !== undefined) return customLabel;

			let label = '';
			if (!hideOrderLabel) {
				const pos = `y="0"`;

				label += orderLabel(varorder, pos, {font: font, textSize: textSize.base});
			}
			if (!hideInputLabel) {
				const isFormDNA = input.includes('::');

				const prefix = isFormDNA ? '' : `ƒ = `;
				const truncMax = isFormDNA ? (input.split('::')[0].length + 4**4) : inputLabelMax;
				const truncSuffix = isFormDNA ? `…(${4**vnum})` : `… <tspan style="font-style: italic">+more</tspan>`;

				const pos = `y="0" dy="${textSize.base + textSize.sm - 2}px"`;

				label += inputLabel(input, pos, {prefix: prefix, truncated: !fullInputLabel, truncMax: truncMax, truncSuffix: truncSuffix, font: font, textSize: textSize.sm});
			}
			return label;
		}

		const vmap = {w: (scale[0] + vmapPad), h: (scale[1] + vmapPad)};

		vmap.elem = `<svg class="vmap" width=${vmap.w} height=${vmap.h} viewBox="-${strokeW/2 + vmapPad/2} -${strokeW/2 + vmapPad/2} ${rhomb.w + vmapPad} ${rhomb.h + vmapPad}">
			<rect x="-${vmapPad/2}" y="-${vmapPad/2}" width="${rhomb.w + vmapPad}" height="${rhomb.h + vmapPad}" fill="${vmapC}"></rect>
			<g transform="translate(0,${rhomb.h/2}) rotate(-45,0,0)" stroke="${strokeC}" stroke-width="${strokeW}">${ constructSVG(vmapTree) }</g>
		</svg>`;

		const figCaption = {elem: caption(input, customLabel), pos: {x: 0, y: (vmap.h + 10)}};
		figCaption.size = getSvgSize(figCaption.elem);

		const appendSize = [Math.max(0, (figCaption.size.w - vmap.w)),
							figCaption.size.h + (figCaption.pos.y - vmap.h)];

		chart.size = {w: (vmap.w + appendSize[0] + figPad), h: (vmap.h + appendSize[1] + figPad)};

		chart.elem = `<svg class="vmap-figure" xmlns="http://www.w3.org/2000/svg" width="${chart.size.w}" height="${chart.size.h}" viewBox="-${figPad/2} -${figPad/2} ${chart.size.w} ${chart.size.h}">
			<rect x="-${figPad/2}" y="-${figPad/2}" width="${chart.size.w}" height="${chart.size.h}" fill="${figC}"></rect>
			<g>${ vmap.elem }</g>
			<g transform="translate(${figCaption.pos.x},${figCaption.pos.y})">${ figCaption.elem }</g>
		</svg>`;
	}

	return chart;
}

function orderLabel (varorder, pos='x="0" y="0"', options=undefined) {
	/* Generates an order label (e.g. "a > b > c") from variable order */
	const {maxLineWidth, font, textSize, leading} = 
		{ maxLineWidth: 60, font: 'inherit', textSize: 12, leading: 4, ...options };
	const style = `font-family: ${font}; font-size: ${textSize}px; dominant-baseline: hanging;`;

	let output = varorder.reduce((acc,curr,i) => acc + (i > 0 ? '<tspan y="0"> > </tspan>' : '') + processLabel(curr, 'svg'),'' );

	// output = breakStr(output, maxLineWidth) // <-- fix tag breaks
	// 	.reduce((str,curr,i) => str + (i > 0 ? svgLinebreak(curr, (textSize + leading + 'px')) : curr), '');

	return `<text ${pos} style="${style}">${output}</text>`;
}

function inputLabel (input, pos='x="0" y="0"', options=undefined) {
	/* Generates an input label (e.g. "ƒ = ((a)b)" or "::3210") */
	const {prefix, maxLineWidth, truncated, truncMax, truncSuffix, font, textSize, leading} = 
		{prefix: '', maxLineWidth: 60, truncated: false, truncMax: 1000, truncSuffix: '…', font: 'inherit', textSize: 12, leading: 4, ...options };
	const style = `font-family: ${font}; font-size: ${textSize}px; dominant-baseline: hanging;`;

	let output = prefix + input;
	let appendix = '';

	if (truncated && (output.length > truncMax)) {
		output = output.substr(0,truncMax);
		appendix += truncSuffix;
	}
	output = breakStr(output, maxLineWidth)
		.reduce((str,curr,i) => str + (i > 0 ? svgLinebreak(curr, (textSize + leading + 'px')) : curr), '');

	return `<text ${pos} style="${style}">${output + appendix}</text>`;
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


export function vmapPerspectives_svg (vmapPermutations, input, globalOptions=undefined) {
	/* Constructs vmap perspectives as HTML output (flex list) */

	const {figPad, figC, margin, customLabel, styleClass} = 
		{ figPad: 0, figC: `#fff`,
		  margin: 20, customLabel: undefined, styleClass: 'basic', ...globalOptions };

	const design = styles.vmap[styleClass];
	const [textSize, font] = [design.textSize, design.font.base];

	const chart = {vmaps: vmapPermutations, input: input, options: globalOptions};

	if (output == 'mixed') {

		// const vmapItems = vmapPermutations.map(vmap => {
		// 	return `<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px"> 
		// 			${vmap.elem}</div>`}).reduce((str,item) => str+item,'');

		// const label = caption();

		// return `<figure class="vmap-perspectives" style="max-width: none;">
		// 		<div class="vmap-list" style="display: flex; flex-wrap: wrap; margin: 0 -${Math.floor(margin/2)}px">
		// 		${ vmapItems }
		// 		</div>
		// 		<figcaption style="border-top: 1px solid; padding-top: ${Math.floor(margin/4)}px; margin-top: ${Math.floor(margin/2)}px; word-wrap: break-word;">${label}</figcaption>
		// 		</figure>`;
	}
	else {
		const padding = {x: (Math.floor(margin/4)), y: (Math.floor(margin/2))};
		const count = vmapPermutations.length;
		const vmapSize = vmapPermutations[0].size;

		const colNum = Math.min(count, 6);
		const rowNum = Math.floor(count/colNum);
		const tableSize = { w: vmapSize.w * colNum + (padding.x*2) * (colNum-1),
							h: vmapSize.h * rowNum + (padding.y*2) * (rowNum-1) };

		const vmapItems = vmapPermutations.map(vmap => {
			
			return {elem: vmap.elem};
		}).reduce((str,item,i) => {
			const x = i%colNum;
			const y = Math.floor(i/colNum);

			const coords = [vmapSize.w * x + (padding.x*2) * x,
						    vmapSize.h * y + (padding.y*2) * y];
			return str+ `<g class="vmap-item" transform="translate(${coords[0]},${coords[1]})">${item.elem}</g>`;
		},'');
	
		const caption = (input, customLabel) => {
			if (customLabel !== undefined) return customLabel;

			const isFormDNA = input.includes('::');
			const prefix = isFormDNA ? '' : `ƒ = `;
			const pos = `y="0"`; //  dy="${textSize.base + textSize.sm - 2}px"

			return inputLabel(input, pos, {prefix: prefix, truncated: false, font: font, textSize: textSize.base});
		}

		const figCaption = {elem: caption(input, customLabel), pos: {x: 0, y: tableSize.h + padding.y}, lineSpacing: padding.y};
		figCaption.size = getSvgSize(figCaption.elem);

		const appendSize = [Math.max(0, (figCaption.size.w - tableSize.w)),
							figCaption.size.h + (figCaption.pos.y - tableSize.h) + figCaption.lineSpacing];

		// const listMargin = {x: 0, y: Math.floor(margin/2)};

		chart.size = {w: (tableSize.w + appendSize[0] + figPad), 
					  h: (tableSize.h + appendSize[1] + figPad)};

		chart.elem = `<svg class="vmap-perspectives-figure" xmlns="http://www.w3.org/2000/svg" width="${chart.size.w}" height="${chart.size.h}" viewBox="-${figPad/2} -${figPad/2} ${chart.size.w} ${chart.size.h}">
			<rect x="-${figPad/2}" y="-${figPad/2}" width="${chart.size.w}" height="${chart.size.h}" fill="${figC}"></rect>
			<g class="vmap-perspectives vmap-table">${ vmapItems }</g>
			<g transform="translate(${figCaption.pos.x},${figCaption.pos.y})">
				<line x1="0" y1="0" x2="${tableSize.w}" y2="0" stroke="black" stroke-width="0.5" />
				<g transform="translate(0,${figCaption.lineSpacing})">${ figCaption.elem }</g>
			</g>
		</svg>`;

		return chart;
	}
}


export function vmapList_svg (vmaps_svg, globalOptions=undefined) {
	/* Constructs multiple vmaps as SVG output */

	const {margin, vAlign} = { margin: 20, vAlign: 'bottom', ...globalOptions }

	// const vmapItems = vmapPermutations_svg.map(vmap_svg => {
			
	// 	return {size: vmap_svg.size, elem: vmap_svg.elem};
	// }).reduce((str,item,i,arr) => {

	// 	// const shiftX = (i > 0) ? ( arr[0].size.w * i + (padding.x*2) * i ) : 0;
	// 	return str+ `<g class="vmap-item" transform="translate(${shiftX},0)">${item.elem}</g>`;
	// },'');

	return `<div class="vmap-list" style="display: flex; flex-wrap: wrap; ${getVAlign(vAlign)} margin: 0 -${Math.floor(margin/2)}px">
			${ vmaps_svg.reduce((str, vmap_svg) => `${str}<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px">${vmap_svg.elem}</div>`,'') }
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
