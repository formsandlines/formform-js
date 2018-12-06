let g1 = {}; let g2 = {};

class FGraph extends FForm {
  /*
  =======================================================
        FORM GRAPH alpha 0.1 by Peter Hofmann, 2018
  =======================================================
   Extension of FORM FORM for graph representation and
   manipulation of json FORMs, using the D3.js library
  */

  constructor() {
  };

  // ----------------------------------------------------
  // Graph representation
  // ----------------------------------------------------

  static constructNested(reForm) {
    let space = reForm.space = [];

    for(const i in reForm.nested) {
      if (i > 0) {
        space.push( {type: 'form', space: []} );
        const nestedForm = space[space.length-1];
        
        for(const j in reForm.nested[i].space) {
          nestedForm.space.push(reForm.nested[i].space[j]);
        }
        space = nestedForm.space;
      }
      else {
        for(const j in reForm.nested[i].space) {
          space.push(reForm.nested[i].space[j]);
        }
      }
    }
    return reForm;
  }

  static expand_reEntry(_form) {
    if(typeof(_form) !== 'string') _form = JSON.stringify(_form);
    const refForm = this.parseLinear(_form);
    let targetForm = this.parseLinear(_form);

    this.traverseForm(refForm, function(refBranch,depth,space) {

      if(refBranch.type === 'reEntry') {
        
        this.traverseForm(targetForm, function(targetBranch,depth,space) {

          if(JSON.stringify(refBranch) === JSON.stringify(targetBranch)) {
            // console.log('CLICK!!!');
            targetBranch = this.constructNested(targetBranch);
            return true;
          }
        });

      }
    });
    return targetForm;
  }

  static tree(_form) {
    if(typeof(_form) === 'string') _form = this.parseLinear(_form);
    const data = expand_reEntry(_form);

    const hr = d3.hierarchy(data, d => {
      if(d.type === 'reEntry') return d.nested;
      else if(d.type === 'form') return d.space;
    });

    const stepSize = 100;
    let {width,height,margin, fontSize} = 
      {width: 600, height: (hr.height * stepSize), 
      margin: {x: 16, y: 16}, fontSize: 10};

    d3.selectAll("#graph-tree > svg, #graph-pack > svg").remove('svg');
    const svg = d3.select('#graph-tree')
      .append('svg').lower()
      .attr('id','svg-tree')
      .attr('width', width)
      .attr('height', height)
      .style("font", `${fontSize}px sans-serif`);

    const layout = d3.tree()
      .size([width - margin.x*2, height - margin.y*2]);
    const root = layout(hr);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.x},${margin.y})`);

    const link = g.append('g')
      .attr('fill','none')
      .attr('stroke','#555')
      .attr('stroke-width', 1.0)
    .selectAll('path')
      .data(root.links())
      .enter().append('path')
        .attr('d', d => `
          M${d.source.x} ${d.source.y} 
          L${d.target.x} ${d.target.y}
        `)
    .filter(d => {
      return d.target.data.unmarked && d.source.data.type === 'reEntry';
    })
      .attr('stroke','#ff0000')
      .attr('stroke-dasharray','1%,2%');

    const node = g.append('g')
    .selectAll('g')
      .data(root.descendants())
      .enter().append('g')
        .attr('transform', d => `translate(${d.x},${d.y})`);

    node.filter(d => !d.data.unmarked).append('circle')
      .attr('fill','black')
      .attr('r', 2.5)
    .filter(d => (d.children))
      .attr('fill','white')
      .attr('stroke','black')
      .attr('r', 5.0)
    .filter(d => d.data.type === 'reEntry')
      .attr('stroke','red');

    const label = node.append('g')
      .attr('class','labels')
      .attr('fill', 'black');
      // .attr('transform','translate(0,10)');

    label.append('text')
      .attr('x','0.4em')
      .text(d => {
        return d.data.unmarked ? '' : d.data.type;
      })
      .attr('text-anchor', 'start')
    .filter(d => d.children)
      .attr('x','0.8em')
    .filter(d => {
        if(d.parent) {
          return d.data.unmarked && d.parent.data.type === 'reEntry';
        } else return false;
      })
      .attr('fill','#ff0000')
      .attr('x','0.4em')
      .text(d => {
        let index = -1;
        d.parent.children.forEach((obj,i) => {
          if(d === obj) index = i;
        });
        return 'depth ' + index;
      });
      

    label.filter(d => !d.children)
      .append('text')
      .attr('x','0.4em')
      .attr('y','1.0em')
      .text(d => {
        let str = null;
        if (d.data.type === 'const') str = '= '+d.data.value;
        else str = '"'+d.data.symbol+'"';
        return str;
      });

    g1.hr = hr;
    g1.root = root;
  }

  static pack(_form) {
    if(typeof(_form) === 'string') _form = this.parseLinear(_form);
    const data = expand_reEntry(_form);

    const hr = d3.hierarchy(data, d => {
      if(d.type === 'reEntry') return d.nested;
      else if(d.type === 'form') return d.space;
    })
    .sum(d => d.children ? 0 : 1);

    let {width,height,fontSize,margin,padding, doublePad} = 
      {width: 600, height: 600, fontSize: 12,
      margin: {x: 10, y: 10}, padding: 12, doublePad: 6};

    const layout = d3.pack()
      // .size([width - margin.x*2, height - margin.y*2])
      .padding(padding)
      .radius(d => {
        let rad = 15;
        if(typeof(d.data.symbol) === 'string') {
          rad = textSize(d.data.symbol, fontSize).width /2;
          if(d.data.type === 'unclear') rad += padding*2;
        }
        else if(d.data.children) rad = 0;
        // else if(d.data.value === (0 || 3)) rad = 15 + padding;
        return rad;
      });
    const root = layout(hr);

    d3.selectAll("#graph-tree > svg, #graph-pack > svg").remove('svg');
    const svg = d3.select('#graph-pack')
      .append('svg').lower()
      .attr('id','svg-pack')
      // .attr('width', width)
      // .attr('height', height);
      .style('width', root.r*2 + margin.x*2)
      .style('height', root.r*2 + margin.y*2);

    const g = svg.append('g')
      .attr('transform', `translate(${root.r + margin.x},${root.r + margin.y})`)
      .style("font", `${fontSize}px sans-serif`)
      .attr("text-anchor", "middle");

    const node = g.selectAll('g')
      .data(root.descendants())
      .enter().append('g')
        .attr('transform', d => `translate(${d.x + 1},${d.y + 1})`);

    node.filter(d => (d.data.type === 'form' && !d.data.unmarked))
      .attr('class','form')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill','none')
      .attr('stroke','#555')

    node.filter(d => (d.parent && d.parent.data.type === 'reEntry'))
      .attr('class','nested form')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill','none')
      .attr('stroke','red')
      .attr('stroke-dasharray','1%,2%');

    node.filter(d => (d.data.type === 'reEntry' && !d.data.unmarked))
      .attr('class','reEntry')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill','none')
      .attr('stroke','red');

    const value = node.filter(d => d.data.type === 'const');

    const val1 = value.filter(d => d.data.value === 1)
      .attr('class','marked')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill','none')
      .attr('stroke','#555');

    const val2 = value.filter(d => d.data.value === 2)
      .attr('class','undef')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill','none')
      .attr('stroke','#ff0000');

    const val3 = value.filter(d => d.data.value === 3)
      .attr('class','imag');
    val3.append('circle')
      .attr('class','imag-outer')
      .attr('r', d => d.r)
      .attr('fill','none')
      .attr('stroke','#00ff00');
    val3.append('circle')
      .attr('class','imag-inner')
      .attr('r', d => d.r - doublePad)
      .attr('fill','none')
      .attr('stroke','#ff0000');

    const val0 = value.filter(d => d.data.value === 0)
      .attr('class','unmarked');
    val0.append('circle')
      .attr('class','unmarked-outer')
      .attr('r', d => d.r)
      .attr('fill','none')
      .attr('stroke','#555');
    val0.append('circle')
      .attr('class','unmarked-inner')
      .attr('r', d => d.r - doublePad)
      .attr('fill','none')
      .attr('stroke','#555');

    const vars = node.filter(d => d.data.type === 'var')
      .attr('class','var')
      .append('text')
      .text(d => d.data.symbol)
      .attr('dominant-baseline','middle');

    const unclear = node.filter(d => d.data.type === 'unclear')
      .attr('class','unclear');
    // unclear.append('circle')
    //   .attr('fill','#ff0000')
    //   .attr('r', d => d.r);
    unclear.append('rect')
      .attr('transform', d => 
        `skewX(-30) translate(${-(d.r - padding)},
        ${-(textSize('x',fontSize).height + padding*2)/2})`)
      .attr('width', d => d.r*2 - padding*2)
      .attr('height', d => (textSize('x',fontSize).height + padding*2))
      .attr('fill','#ddd')
    unclear.append('text')
      .text(d => d.data.symbol)
      .attr('dominant-baseline','middle');

    g2.hr = hr;
    g2.layout = layout;
    g2.root = root;
  }

}