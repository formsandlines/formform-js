import formform from '../lib/main';

export const loc_EN = {variables: 'Variables', interpretation: 'Interpretation', result: 'Result'};

export const loc_DE = {variables: 'Variablen', interpretation: 'Interpretation', result: 'Ergebnis'};

export const classnames_DEF = {table: 'value-table', td: {varLabels: 'varLabels', varVals: 'varValues', result: 'result'}};

const LANG_DEFAULT = loc_EN;
const CLASSNAMES_DEFAULT = classnames_DEF;


export function valueTableWizard(obj, ..._optsArr) {
  const optsArr = _optsArr.map( opts => Object.assign({search:[], filterByVals:false}, opts) );
  
  let interpr = obj;
  if(typeof(obj) === 'string') interpr = formform.form.calcAll(obj);
  
  for (let i in optsArr) {
  
    if (optsArr[i].filterByVals) interpr = filterResultsByValues(interpr, optsArr[i].search, optsArr[i]);
    else interpr = filterResultsByInterpr(interpr, optsArr[i].search, optsArr[i]);
    
  }

  const lang = optsArr[0].lang ? optsArr[0].lang : LANG_DEFAULT;
  const classnames = optsArr[0].classnames ? optsArr[0].classnames : CLASSNAMES_DEFAULT;
  
  const html = genValueTable(interpr, lang, classnames);


  if (optsArr[0].outputCSV) return {html: html, csv: genCSV(interpr, lang)};
  else return html;
}

export function genValueTable(interpr, lang=LANG_DEFAULT, classnames=CLASSNAMES_DEFAULT) {

  let thead = '';
  let tbody = '';
  
  if (interpr.hasOwnProperty('Result')) {
    const val = interpr.Result + ' / ' + ( (interpr.Result === 0) ? 'n' : (interpr.Result === 1) ? 'm' : (interpr.Result === 2) ? 'u' : (interpr.Result === 3) ? 'i' : '???' );
    
    thead = `<tr><th scope="col">${lang.result}</th></tr>`
    tbody = `<tr><td><code>${val}</code></td></tr>`
    
  }
  else {
    const keys = Object.keys(interpr);
    keys.sort(); // ALERT

    const labels = keys.map(e => {
      let parts = e.split(';');
      parts = parts.map((p,i) => { 
        const delim = i < 1 ? ',' : '', sep = delim;
        return p.split(delim).join(`</span>${sep}<span>`).concat(`</span>`).addBefore(0,`<span>`); 
      } );
      return parts;
    });

    thead = `<tr><th scope="col">${lang.variables}</th>
                 <th scope="col">${lang.interpretation}</th>
                 <th scope="col">${lang.result}</th></tr>`
    
    let str = '';
    keys.forEach( (e,i) => {
      str += `<tr><td class="${classnames.td.varLabels}"><code>${labels[i][0]}</code></td>
                  <td class="${classnames.td.varVals}"><code>${labels[i][1]}</code></td>
                  <td class="${classnames.td.result}"><code>${interpr[e]}</code></td></tr>`;
    } );
    tbody = str;
  }
  
  return `
  <table class="${classnames.table}">
    <thead>
      ${ thead }
    </thead>
    <tbody>
      ${ tbody }
    </tbody>
  </table>
  `;
  
}

export function genCSV(interpr, lang=LANG_DEFAULT) {
  const keys = Object.keys(interpr);
  keys.sort(); // ALERT

  let csv = '';

  if (interpr.hasOwnProperty('Result')) {
    csv = lang.result + '\n' + interpr[keys[0]];
  }
  else {
    csv = [lang.variables, lang.interpretation, lang.result].join(';') + '\n';

    keys.forEach((k,i) => {
      csv += k + ';' + interpr[k] + (i < keys.length-1 ? '\n' : '');
    });

  }

  return csv;
}

export function filterResultsByValues(data, search, _opts) {
  const opts = Object.assign({exclude:false}, _opts);

  if (search.length > 3) return data; // 4 values are all the values, so we just return everything
  else {
    let indexList = [];
    const filteredVals = Object.values(data).filter( (e,i) => {
      const include = ( 
          e === search[0] ||
          ((search.length > 0) ? e === search[1] : e === search[0] ) ||
          ((search.length > 1) ? e === search[2] : e === search[0] )
        ) ? !opts.exclude : opts.exclude;
      if(include) indexList.push(i);
      return include;
    } );
    const filteredKeys = Object.keys(data).filter( (e,i) => indexList.includes(i) );
    
    let filteredData = {};
    filteredKeys.forEach( key => { filteredData[key] = data[key]; } )
    
    return filteredData;
  }
  
}

export function filterResultsByInterpr(data, search, _opts) {
  const opts = Object.assign({exclude:false, combine:false, unique:false, only:false}, _opts);
  // filters values from formform.form.calcAll()
  // - search: Array of values to filter, e.g.: [0], [2,3]
  // - Options:
  //   - exclude: exclude search values from filtered object
  //   - combine: every search values must match for each result (logical AND instead of (default) OR)
  //   - unique: one and only one of the search values must match for each result
  //   - only: one and only one of the search values and no other value must match in each result
  
  if (search.length < 1) return data; // 4 values are all the values, so we just return everything
  else {
    const filteredKeys = Object.keys(data).filter( (e,i) => {
      const interpr = e.split(';')[1];
      
      let include = false;
      if (opts.combine || opts.unique || opts.only) {
        
        if (opts.combine) {
          include = search.every( (searchVal,j) => {
            return interpr.includes(searchVal);
          });
        }
        else if (opts.unique) {
          let memory = -1;
          include = search.every( (searchVal,j) => {
            if (interpr.includes(searchVal) && memory === -1) {
              memory = searchVal;
              return true;
            }
            if (memory !== -1) {
              if (interpr.includes(searchVal)) {
                return memory === searchVal;
              }
              return true;
            }
            if (j < search.length-1) return true;
            else return false;
          });
        }
        else if (opts.only) {
          let match = -1;
          search.some( searchVal => {
            if (interpr.includes(searchVal)) {
              match = searchVal;
              return true;
            }
          });
          include = interpr.split('').every( char => parseInt(char) === match );
        } 
      } else {
          include = search.some( (searchVal,j) => {
            return interpr.includes(searchVal);
          } );
      }
      
      return include ? !opts.exclude : opts.exclude;      
    } );
    
    let filteredData = {};
    filteredKeys.forEach( key => { filteredData[key] = data[key]; } )
    
    return filteredData;
  }
}

export const valueTableCSS = `<style>
  .value-table {
    table-layout: auto;
    width: auto;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  .value-table thead {
    border-top: 1px solid #ccc;
  }
  .value-table th, .value-table td {
    padding: 0.2em 0.3em;
  }
  .value-table tbody > tr:hover {
    background-color: #fbfbfb;
  }
</style>`;