import FForm from './fform';
import { permuteArray, truncateStr } from '../../common/helper';

export default class FDna extends FForm {
    /*
    =======================================================
      'dna' module for formform (c) 2019/20 Peter Hofmann
    =======================================================
    */
   
    constructor() {
    };

    static formToDNA (form) {
    	return Object.values(this.calcAll(form)).reverse().join('');
 	};

	static totalVarsFromDNA (formDNA) { 
		/* calculates variable number from formDNA */
		const n = Math.log( formDNA.toString(4).length )/Math.log(4); // log_4(formDNA length) = variable number
		return n % 1 === 0 ? n : undefined;
	};


	static vmap (input, varorder=undefined, options=undefined) {
	  /* Value ordering: left:0, right:1, up:3, down:2 */
	  if (!+input && varorder === undefined) varorder = this.matchDefaultVarOrder( this.getVariables(input) );

	  let formDNA = !!+input ? input : this.formToDNA(this.reOrderVars(input,varorder));
	  formDNA = formDNA.split('').reverse().join('');
	  const vnum = this.totalVarsFromDNA(formDNA);
	  
	  const {size, gapGrow, svgPad, strokeW, strokeC, bgC, hideInputLabel, hideOrderLabel, customLabel, fullInputLabel, inputLabelMax, filter} = 
	        {size: (vnum => { const n = Math.floor( 14 - (vnum-1)**1.0 ); // 12
	                          return n >= 2 ? n : 2; })(vnum), 
	         gapGrow: 1.5,
	         svgPad: `0`, strokeW: 0.5, strokeC: `#fff`, bgC: `none`, // #333
	         hideInputLabel: false, hideOrderLabel: false, fullInputLabel: false, inputLabelMax: 200, customLabel: undefined,
	         // filter: '1111', <- will add later
	         ...options};
	  
	  const margins = [strokeW, ...Array.from({length:vnum-1}, (_,i) => (i+1) * gapGrow)];
	  const gapSum = v => margins.slice(1,v).reverse().reduce((acc,curr,idx) => acc + (2**idx) * curr, 0);

	  const cell = {w:size, h:size};

	  const fx = (qi,n) =>  (qi%2) * (n !== undefined ? n : 0);         // xpos: 0123 -> 0101
	  const fy = (qi,n) => +(qi>0 && qi<3) * (n !== undefined ? n : 0); // ypos: 0123 -> 0110
	  
	  const constructMap = (dnaHolon, vcount, qi=0, mapSVG='') => {
	    const qtn = 4**vcount;
	    const len = Math.sqrt(qtn);
	    dnaHolon = dnaHolon.substr(qi*qtn, qtn); // quarter of the formDNA string

	    mapSVG += `<g transform="translate(${fx(qi, len*cell.w) + fx(qi, gapSum(vcount)) + fx(qi, margins[vcount])},
	${fy(qi, len*cell.h) + fy(qi, gapSum(vcount)) + fy(qi, margins[vcount])})">`;

	    for (let i=0; i<4; i++) {
	      if (vcount > 1) {
	        mapSVG = constructMap(dnaHolon, vcount-1, i, mapSVG);
	      }
	      else {
	        const val = dnaHolon.substr(i,1);

	        mapSVG += `<rect x=${fx(i,cell.w)} y=${fy(i,cell.h)} width=${cell.w} height=${cell.h} fill=${this.vColor(val)}></rect>`;
	      }
	    }
	    mapSVG += `</g>`;
	    return mapSVG;
	  }

	  const processLabel = label => {
	  	if (label.length > 1) {
	  		const labelParts = label.split('_');
	  		return (labelParts.length > 1) ? `${labelParts[0]}<sub>${labelParts[1]}</sub>` : `"${label}"`;
	  	}
	  	else return label;
	  }
	  
	  const caption = () => {
	    if (customLabel !== undefined) return `<figcaption style="word-wrap: break-word;">${customLabel}</figcaption>`;
	    if (!(hideInputLabel && hideOrderLabel)) {
	      let label = '';
	      label += hideOrderLabel || !!+input ? '' : `${varorder.reduce((acc,curr,i) => acc + (i > 0 ? ' > ' : '') + processLabel(curr),'' )}${hideInputLabel ? '' : '<br/>'}`;
	      label += hideInputLabel ? '' : !!+input ? `<code style="font-size:0.8em;">::${fullInputLabel ? input : truncateStr(input,4**4,`…(${4**vnum})`)}</code>` : 'ƒ = '+(fullInputLabel ? input : truncateStr(input,inputLabelMax,`… <i>+more</i>`));
	      return `<figcaption style="word-wrap: break-word;">${label}</figcaption>`;
	    }
	    return '';
	  }

	  const len = Math.sqrt(formDNA.length);
	  if (varorder === undefined && !+input) varorder = formform.form.getVariables(input);
	  
	  const bounds = {w: (cell.w*len + margins[0] + gapSum(vnum)), h: (cell.h*len + margins[0] + gapSum(vnum))};
	  const rhomb = {w: Math.sqrt(2 * bounds.w**2), h: Math.sqrt(2 * bounds.h**2)};
	  
	  return `<figure class="vmap" style="margin: 0;">
	<svg style="background: ${bgC}; padding: ${svgPad};" width=${cell.w*len + gapSum(vnum)} height=${cell.h*len + gapSum(vnum)}
	fill="white" stroke="${strokeC}" stroke-width="${margins[0]}"
	viewBox="-${margins[0]/2} -${margins[0]/2} ${rhomb.w} ${rhomb.h}">
	<g transform="translate(0,${rhomb.h/2}) rotate(-45,0,0)">${ constructMap(formDNA, vnum) }</g>
	</svg>
	${ caption() }
	</figure>`;
	};

	static vmapPerspectives (form, varList=undefined, options=undefined, margin=20) {
	  /* formDNA not yet supported (permutation algorithm required) */
	  if (varList === undefined) varList = this.matchDefaultVarOrder( this.getVariables(form) );

	  const vmapItems = permuteArray(varList).map(varorder => {
	    return `<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px"> 
	      ${this.vmap(form,varorder,{hideInputLabel: true, ...options})}
	      </div>`}).reduce((str,item) => str+item,'');
	  return `<figure class="vmap-perspectives" style="max-width: none;">
	  <div class="vmap-list" style="display: flex; flex-wrap: wrap; margin: 0 -${Math.floor(margin/2)}px">
	  ${ vmapItems }
	  </div>
	  <figcaption style="border-top: 1px solid; padding-top: ${Math.floor(margin/4)}px; margin-top: ${Math.floor(margin/2)}px">ƒ = ${form}</figcaption>
	  </figure>`
	};

	static vmapList (inputList, margin=20, globalOptions=undefined) {
	  /* Generated a list of FORM vmaps */
	  // inputList format: [['form/dna', [varorder]/undefined, options/undefined], ...
	  const getVAlign = obj => {
	  	const alignItems = (!obj || !obj.vAlign) ? 'flex-end'
	  					 : obj.vAlign === 'top' ? 'flex-start'
	  				 	 : obj.vAlign === 'center' ? 'center'
	  				 	 : obj.vAlign === 'bottom' ? 'flex-end' : 'flex-end';
	  	return `align-items: ${alignItems};`;
	  }

	  return `<div class="vmap-list" style="display: flex; flex-wrap: wrap; ${getVAlign(globalOptions)} margin: 0 -${Math.floor(margin/2)}px">
	  ${ inputList.reduce((str,vmap) => 
	  		`${str}<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px">${ this.vmap(vmap[0], vmap[1], {...vmap[2], ...globalOptions}) }</div>`,'') }
	  </div>`
	};

	static vColor (val) {
		/* Value to color map for vmap */
	  return val == 0 ? '#000000'
	       : val == 1 ? '#4757ff'
	       : val == 2 ? '#ff0044'
	       : val == 3 ? '#00ff5f'
	       : NaN;
	};

}