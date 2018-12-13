function tree(_form) {
    
  }
  
function _tree(_form) {
    // if(typeof(_form) === 'string') _form = this.parseLinear(_form);
    const data = this.expand_reEntry(_form);

    const hr = d3.hierarchy(data, d => d.space);

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
    .filter(d => d.target.data.reChild)
      .attr('stroke',col_indef)
      .attr('stroke-dasharray','0.5%,0.5%');

    const node = g.append('g')
    .selectAll('g')
      .data(root.descendants())
      .enter().append('g')
        .attr('transform', d => `translate(${d.x},${d.y})`);

    const nodeCircle = node.filter(d => !d.data.unmarked).append('circle')
      .attr('fill','black')
      .attr('r', 2.5);
    const formCircle = nodeCircle.filter(d => d.children)
      .attr('fill','white')
      .attr('stroke','black')
      .attr('r', 5.0);
    formCircle.each( function(d,i) {
      const sel = d3.select(this);
      if( d.data.type === 'reEntry' ) {
        sel.attr('stroke','red');
      }
      else if( d.data.reChild ) {
        sel.attr('stroke','red')
        
        if( !d.data.space[0].reChild ) {
          node.append('circle')
          .attr('fill','red')
          .attr('stroke','none')
          .attr('r', 1.0);
        }
      }
    });
    // formCircle.filter(d => d.data.type === 'reEntry')
    //   .attr('stroke','red');
    // formCircle.filter(d => d.data.reChild)
    //   .attr('stroke','red')
    //   .attr('stroke-dasharray','0.5%,0.5%');

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
      .attr('x','0.8em');
    // .filter(d => {
    //     if(d.parent) {
    //       return d.data.unmarked && d.parent.data.type === 'reEntry';
    //     } else return false;
    //   })
    //   .attr('fill','#ff0000')
    //   .attr('x','0.4em')
    //   .text(d => {
    //     let index = -1;
    //     d.parent.children.forEach((obj,i) => {
    //       if(d === obj) index = i;
    //     });
    //     return 'depth ' + index;
    //   });
      

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



function pack(_form, container, {width, height, margin, padding}) {
    const data = this.expand_reEntry(_form);

    const hr = d3.hierarchy(data, d => d.space)
      .sum(d => d.children ? 0 : 1);

    const layout = d3.pack()
      .padding(d => {
        let pad = padding;
        if (d.data.unmarked && d.children.length === 1) pad = 0;
        return pad;
      })
      .radius(d => {
        let rad = 15;
        if(typeof(d.data.symbol) === 'string') {
          rad = textSize(d.data.symbol, fontSize).width /2;
          if(d.data.type === 'unclear') rad += padding*2;
        }
        else if(d.data.children || d.data.type === 'reEntryPoint') rad = 0;
        return rad;
      });
    const root = layout(hr);

    
    d3.selection(container).selectAll('svg').remove('svg');

    const svg = d3.selection(container)
      .append('svg').lower()
      .attr('id','svg-pack')
      .style('width', root.r*2 + margin.x*2)
      .style('height', root.r*2 + margin.y*2);

    const g = svg.append('g')
      .classed('pack-group')
      .attr('transform', `translate(${root.r + margin.x},${root.r + margin.y})`)
      .style("font-size", `${fontSize}px`)
      .attr("text-anchor", "middle");

    const node = g.selectAll('g')
      .data(root.descendants())
      .enter().append('g')
        .classed('pack-node')
        .attr('transform', d => `translate(${d.x + 1},${d.y + 1})`)
        .attr('stroke', 'black')
        .attr('stroke-width', 1.0);
  }


function _pack(_form) {
    const data = this.expand_reEntry(_form);

    const hr = d3.hierarchy(data, d => d.space)
    .sum(d => d.children ? 0 : 1);

    let {width,height,fontSize,margin,padding, doublePad, 
      col_marked, col_unmarked, col_indef, col_imag} = 
      {width: 600, height: 600, fontSize: 14,
      margin: {x: 10, y: 10}, padding: 12, doublePad: 6,
      col_marked: '#858ef7', col_unmarked: '#626274',
      col_indef: '#ff6771', col_imag: '#60f4c5'};

    const layout = d3.pack()
      .padding(d => {
        let pad = padding;
        if (d.data.unmarked && d.children.length === 1) pad = 0;
        return pad;
      })
      .radius(d => {
        let rad = 15;
        if(typeof(d.data.symbol) === 'string') {
          rad = textSize(d.data.symbol, fontSize).width /2;
          if(d.data.type === 'unclear') rad += padding*2;
        }
        else if(d.data.children || d.data.type === 'reEntryPoint') rad = 0;
        return rad;
      });
    const root = layout(hr);

    d3.selectAll("#graph-tree > svg, #graph-pack > svg").remove('svg');
    const svg = d3.select('#graph-pack')
      .append('svg').lower()
      .attr('id','svg-pack')
      .style('width', root.r*2 + margin.x*2)
      .style('height', root.r*2 + margin.y*2);

    const g = svg.append('g')
      .attr('transform', `translate(${root.r + margin.x},${root.r + margin.y})`)
      .style("font", `${fontSize}px sans-serif`)
      .attr("text-anchor", "middle");

    const node = g.selectAll('g')
      .data(root.descendants())
      .enter().append('g')
        .attr('transform', d => `translate(${d.x + 1},${d.y + 1})`)
        .attr('stroke', 'black')
        .attr('stroke-width', 1.0);

    node.filter(d => (d.data.type === 'form' && !d.data.unmarked))
      .attr('class','form')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill','none')
    .filter(d => (d.data.reChild))
      .attr('stroke',col_indef)
      .attr('stroke-width', 0.5);
    // .filter(d => d.parent.data.lastOpen)
    //   .attr('stroke-width', 1.0);
      // .attr('stroke-dasharray','1%,1%');

    node.filter(d => (d.data.type === 'reEntry' && !d.data.unmarked))
      .attr('class','reEntry')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill','none')
      .attr('stroke',col_indef)
    .filter(d => d.data.lastOpen)
      .attr('stroke-dasharray','0.5%, 1.0%');
      // .attr('stroke-width', 1.5);

    node.filter(d => d.data.type === 'reEntryPoint')
      .append('circle')
      .attr('r', 1.5)
      // .attr('cx', -5)
      .attr('fill',col_indef)
      .attr('stroke','none');

    const value = node.filter(d => d.data.type === 'const');

    const val1 = value.filter(d => d.data.value === 1)
      .attr('class','marked')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill', col_marked)
      .attr('stroke','none');
      // .attr('fill','none');

    const val2 = value.filter(d => d.data.value === 2)
      .attr('class','undef')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill', col_indef)
      .attr('stroke','none');
  
    const val3 = value.filter(d => d.data.value === 3)
      .attr('class','imag')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill', col_imag)
      .attr('stroke','none');
    // const val3 = value.filter(d => d.data.value === 3)
    //   .attr('class','imag');
    // val3.append('circle')
    //   .attr('class','imag-outer')
    //   .attr('r', d => d.r)
    //   .attr('fill', 'none)
    //   .attr('stroke', col_imag);
    // val3.append('circle')
    //   .attr('class','imag-inner')
    //   .attr('r', d => d.r - doublePad)
    //   .attr('fill','none')
    //   .attr('stroke', col_indef);

    const val0 = value.filter(d => d.data.value === 0)
      .attr('class','unmarked')
      .append('circle')
      .attr('r', d => d.r)
      .attr('fill', col_unmarked)
      .attr('stroke','none');
    // const val0 = value.filter(d => d.data.value === 0)
    //   .attr('class','unmarked');
    // val0.append('circle')
    //   .attr('class','unmarked-outer')
    //   .attr('r', d => d.r)
    //   .attr('fill','none');
    // val0.append('circle')
    //   .attr('class','unmarked-inner')
    //   .attr('r', d => d.r - doublePad)
    //   .attr('fill','none');

    const vars = node.filter(d => d.data.type === 'var')
      .attr('stroke','none')
      .attr('class','var')
      .append('text')
      .attr('dominant-baseline','middle')
      .each( function(d,i) {
        const split = d.data.symbol.split('_');
        if (split.length === 2) {

          d3.select(this).append('tspan')
            .text(d => split[0]);

          d3.select(this).append('tspan')
            .text(d => split[1])
            .attr('dx', 1)
            .attr('dy', 6)
            .attr('font-size', '.8em');
        }
        else {
          d3.select(this)
            .text(d.data.symbol);
        }

      });

    const unclear = node.filter(d => d.data.type === 'unclear')
      .attr('stroke','none')
      .attr('class','unclear');
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



function gsb(_form) {
    const data = this.expand_reEntry(_form);

    const hr = d3.hierarchy(data, d => d.space)
    .sum(d => d.children ? 0 : 1);

  }