# formform

<br/>

**formform** is a modular JavaScript library all about the 4-valued logic of cognition first introduced 2017 by Ralf Peyn in [uFORM iFORM](https://uformiform.info). In its core, the purpose of the library is to calculate with all 5 FORMs (marked, unmarked, undetermined, imaginary and unclear) introduced in the book and is meant to be extended with more specialized modules for different tasks such as FORM representation, algebra, visualization or simulation and analysis using CAs.

As a helpful tool for researchers and enthusiasts and as a demonstration of the library's capabilities I have also created the [**FORM tricorder**](https://formform.formsandlines.eu/tricorder). It can calculate, represent and visualize FORMs using my `formula` syntax (described below under *formform.form*). You can find all its parts in this repository under /app/. I have also developed other applications that you can read about in the *History* section on the bottom of this document.

Please note that my library as well as my app are still *work in progress*. The library is currently in the process of restructuring and you may want to wait for a more stable release if you intent to use it in your projects. Although I am very passionate about this, I am not a formally trained developer and cannot yet afford to do this full-time. Since this is my first JavaScript library and I still have much to learn, I am very thankful for any advice.

<br/>

## Usage

```bash
npm install formform --save
```

```js
// ES6:
import formform from 'formform';

// CommonJS:
var formform = require('formform');
```

Or you can just embed the library via script-tag, but make sure you also include [d3.js](https://github.com/d3/d3) as a dependency:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js"></script>

<script src="<yourpath>/formform.min.js"></script>
// or just use the unpkg link:
<script src="https://unpkg.com/formform@latest/dist/formform.min.js"></script>
```

<br/>

## Documentation **(not updated yet)**

In its current state, *formform* has 4 classes that partly inherit from each other and perform different tasks.

- **formform.calc** lets you calculate with numeric values of the uFORM iFORM calculus
- **formform.form** lets you calculate any FORM with constants and variables using a special JSON representation which can be easily generated from a formula String (paranthesis notation)
- **formform.graph** lets you use this JSON representation to generate different visualization outputs or notations
- **formform.dna** lets you store calculation results in a code format called *formDNA* and visualize them as *vmaps* to analyze value patterns

All classes and their API are described in detail below:


### formform.calc

`x`,`y`,`z`,… → {`0`,`1`,`2`,`3`}

|#    |Value             |
|-----|------------------|
| `0` | unmarked (n)     |
| `1` | marked (m)       |
| `2` | undetermined (u) |
| `3` | imaginary (i)    |

#### FORM arithmetic for commutative relation `x y`:
```js
rel(x,y)
rel(...vars) // use any number of variables
```

#### FORM arithmetic for inversion/negation `(x)`:
```js
inv(x)
inv(x,n) // n -> number of inversions
```

#### FORM arithmetic for different self-equivalent re-entry FORMs:
```js
reEntry(reEven, lastOpen, altInterpr, ...vars)
```
> - `reEven`: even *re-entry-number*?
> - `lastOpen`: last variable not crossed?
> - `altInterpr`: *alternative interpretation* (as described in [uFORM iFORM](https://uformiform.info/) on p.167)

#### Shortcuts for more complex FORM arithmetics:
```js
uForm2(a,b, altInterpr=false)
iForm2(a,b, altInterpr=false)

uForm3(lastOpen, a,b,c, altInterpr=false)
iForm3(lastOpen, a,b,c, altInterpr=false)

uForm4(a,b,c,d, altInterpr=false)
iForm4(a,b,c,d, altInterpr=false)

uForm5(lastOpen, a,b,c,d,e altInterpr=false)
iForm5(lastOpen, a,b,c,d,e altInterpr=false)
```

FORM arithmetic for "implication":
```js
implL(x,y) // (x)y
implR(x,y) // x(y)
```

FORM arithmetic for "presection" / "postsection":
```js
pre(x,y)  // ((x)y)
post(x,y) // (x(y))
```

FORM arithmetic for "contravalence" / "equivalence":
```js
cont(x,y)  // ((x)y) (x(y))
equiv(x,y) // ( ((x)y) (x(y)) )
```

---

### formform.form

> `form` -> either a `formula` or a JSON-representation of the FORM

> `formula` -> String in paranthesis-notation (see below for the syntax)

> `varorder` -> array of the variable interpretation order of a `form`, specified as `[x,…]` (where x is a variable)

#### Introduction to `formula` syntax

Enclosing FORMs are typed as parenthesis `(…)`, constants as numbers (`0`,`1`,`2`,`3` see *formform.calc* above), variables as either single characters: `a`,`b`,`c`,… or labels, using quotes: `"Ball"`, `"door is open"`, `"3×2=12"`, …) and unclear forms are enclosed in slashes: `/God/`,`/World Peace/`,… .

*Self-equivalent re-entry forms* are marked by curly brackets `{…}` and their variables/constants/FORMs are separated by commas `{a,b,…}`. Please note that the order of the variables is: {deepest nesting → shallowest nesting}.
Using pipes before the arguments, you can also specify open forms (without the outer cross) `{open|a,…}` and either even `{2r|a,…}` or odd `{2r+1|a,…}` re-entry numbers as well as combinations `{2r|open|a,…}`. You can also switch to the alternative interpretation using the keyword "`alt`", like so: `{2r|alt|a,b}` (order of keywords is irrelevant).

#### Recursive `form` calculation
```js
calc(form)
```

#### Interpretation of variables in a `form`
```js
interpret(form, interpr)
```
> - `interpr`: Array of values corresponding to each variable in the `form`

Interpretation followed by calculation:
```js
interCalc(form, interpr)
```

#### The “Master-function”

Interpretation and calculation of all possible values of the `form`:
```js
calcAll(form)
```

#### JSON-representation of a FORM from its `formula`

Convert from `formula` into JSON string
```js
convFromLinear(formula)
```

Convert and parse `formula` as JSON object:
```js
parseLinear(formula)
```

#### Helper-functions

Get all variables of a `form` as an Array:
```js
getVariables(form)
```

Get a JSON-String representation of a `form`:
```js
jsonString(form)
```

Traverse all FORM-types (without variables/values) in a `form` and apply a callback function:
```js
traverseForm(form, function(fBranch) {
  // ...
})
```
> - `fBranch`: current FORM-branch of the FORM

---

### formform.graph

- `graphType` -> can be `'tree'` *([D3 tree layout](https://github.com/d3/d3-hierarchy/blob/master/README.md#tree))*, `'pack'` *([D3 circle packing layout](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack))* or `'gsbhooks'` *([my own boxmodel layout for D3](https://github.com/formsandlines/boxmodel-layout-for-d3))*
- `style` -> for graphType 'pack', you can select from 2 available CSS classes: 'basic' (outlines) and 'gestalt' (what I call *GestaltFORM*)

You can learn more about the visualization types if you take a look at my [FORM tricorder](https://formform.formsandlines.eu/tricorder) and click on "show explanations", I will not go into more detail in this documentation.

#### Visualization (D3/SVG)
```js
createGraph(graphType, form, options)
```
`options` -> 
```js
{ 
  parentId: <id>            // id of parent DOM-element (default: parent is 'body')
  width: <px>               // width of the container (default: container auto-fits to chart)
  height: <px>              // height of the container (default: container auto-fits to chart)
  margin: {left: <px>, right: <px>, top: <px>, bottom: <px>}
                            // margin of the container (default: {50,50,50,50})
  padding: {left: <px>, right: <px>, top: <px>, bottom: <px>}
                            // padding of the container (default: {10,10,10,10})
  styleClass: style         // ('pack' only) style of the graph (see above for available values)
  drawBackground: <boolean> // attaches a white background element to the svg
  compactChecked: <boolean> // ('gsbhooks' only) switches to a more compact style for reEntry FORMs
}
```

#### Output

Save rendered graph as SVG or image (PNG) file:
```js
saveGraph(format, svg, name)
```
> - `format`: 'svg' or 'img'
> - `svg`: svg-element with the rendered graph
> - `name`: name of the output file

#### A note about representation

The *graph module* expands on the JSON-representation of the *form module* by constructing nested reEntry FORMs from its more compact descriptive structure. This is necessary for the accurate visualization of those FORMs but the *form module* didn't need to be so explicit since I took advantage of their common patterns in the calculation algorithm.

If you need to expand the JSON-structure of reEntry-FORMs yourself, use: `expand_reEntry(form)`

---

### formform.dna

> `formDNA` -> string in the form `::dna`, `formula::dna` or `formula.varorder::dna`

> `dna` -> string in quaternary number format representing each interpretation value (of a value table for an equivalence class of possibly infinite FORMs) in reverse order

> `vmap` -> visual representation of formDNA as a recursive variable/value map

> `vmap perspective` -> permutation of a vmap by permutation of its variable interpretation order


#### Conversion to and from `formDNA`

`form` → `formDNA`, retaining `formula` and (optional) `varorder`:
```js
formToDNA(input, varorder, options)
```

`formDNA` → `form` using an optional `varorder`: *(not yet implemented)*
```js
dnaToFORM(formDNA, varorder, options)
```

integer → `dna` (use `BigInt(n)` for numbers larger than 2<sup>53</sup> - 1):
```js
intToDNA(int, vnum)
```
> If no `vnum` is specified, the smallest variable number possible for the quaternion is assumed

#### Generation of `formDNA`

Random `dna` from a given variable number:
```js
genRandomDNA(vnum)
```

#### Generation of `vmaps`

`vmap` (HTML format) from `form`/`formDNA` input using an optional `varorder`:
```js
vmap(input, varorder, options)
```
`options` -> 
```js
{ 
  size:    <px>             // size of each value cell (default: '14' (-1 per new variable))
  gapGrow: <px>             // additional gap between value cells for each recursive step (default: '1.5')
  svgPad:  <px>             // padding around the vmap svg element (default: '0')

  strokeW: <px>             // width of border around each value cell (default: '0.5')
  strokeC: <css color>      // color of border around each value cell (default: '#fff')
  bgC:     <css color>      // color of background for the vmap container (default: '#fff')

  hideInputLabel: <boolean> // hides input (form/formDNA) label below vmap
  hideOrderLabel: <boolean> // hides variable order label below vmap
  fullInputLabel: <boolean> // prevents trimming if input label is too large (def.: false)
  inputLabelMax: <int>      // max number of characters in input label (form input only, def.: 200)
  customLabel: <String>     // specification of custom label below vmap
}
```

Set of all `vmap perspectives` (HTML format) of a `form`/`formDNA` input using an optional `varorder`:
```js
vmapPerspectives(form, varorder, globalOptions)
```
`globalOptions` -> 
```js
{
  // -> integrates all options from vmap() and applies them to every vmap instance
  margin:  <px> // margin between vmap instances
}
```

List of `vmaps` (HTML format) from an array of `form`/`formDNA` input:
```js
vmapList(inputList, globalOptions=undefined)
```
> Syntax of `inputList`: [[input, varorder, options], …] list of lists of vmap() arguments

`globalOptions` -> 
```js
{
  // -> integrates all options from vmap() and applies them to every vmap instance
  // -> can be overwritten by local options of a vmap definition
  margin: <px>                // margin between vmap instances
  vAlign: <top|center|bottom> // vertical alignment of vmap instances
}
```



<br/>

## Further information

If you want to learn more about the ideas and theories *formform* is based on, here are some helpful resources:

- [About uFORM iFORM](https://uformiform.info) (mostly German as is the language of the book by Ralf Peyn, but you can try [DeepL](https://www.deepl.com/translator) to translate the gist of it)
- [Here is a list of links](https://uformiform.info/#section_recommendations) on the theoretical background behind uFORM iFORM (mostly German resources, but you can just translate the keywords and google them)
- [3-dimensional FORM animations and FORM-builder](https://uformiform.info/animations) (a project I made back in 2017 that greatly influenced my approach to formform)
- [Blog s y s t e m z e i t](https://carl-auer-akademie.com/blogs/systemzeit/) by Gitta Peyn – German and English articles about systemic research based on uFORM iFORM
- [About FORMWELT](https://formwelt.info) – a coding language for language and meaning founded on the logic of cognition introduced in uFORM iFORM (by the way, we appreciate any support for the development of [FORMWELT Online](https://formwelt.info/formwelt-online)!)

<br/>

## History

This library has become my personal project since I first began studying [uFORM iFORM](https://uformiform.info), published by Ralf Peyn in 2017. Ralf's “SelFis” *(visual interpretation of a partial System of the self-referential System of the FORM)* inspired me to develop my own [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton) in the programming environment [Processing](https://processing.org/) to dig deeper and gain a fuller unterstanding of these systems. 

Working with lookup-tables for FORM calculations was okay for a while, but also very tedious and impractical for my research, so I began working on some functions that would do the calculations for me. In 2018 I was finally able to implement an algorithm to calculate all self-equivalent re-entry FORMs as described in uFORM iFORM. I immediately did countless calculations by hand and let Ralf also check that the algorithm is solid and its results are correct.

As soon as I was able to automate calculation with undetermined FORMs, I saw that there was much more potential in this and that it could be very helpful for other people who want to work with FORM logic as well. So I began working on a JavaScript library to elaborate my ideas, which gradually became *formform*. Since its early development, formform has always evolved in a fruitful interplay with the applications built on top of it.

A first application that I have developed in parallel from the beginning was the [**FORM tricorder**](https://formform.formsandlines.eu/tricorder) – a swiss army knife for FORM calculation, representation and visualization. In September 2019 I was finally able to develop a new [cellular automaton for FORM logic SelFis](https://observablehq.com/@formsandlines/1d-ca-for-4-valued-form-logic-selfis) with *formform* that is much more user-friendly and much more versatile than what I have done two years earlier. My experimentation with rule extraction by bitmasking in CAs led me to a code format I call [**formDNA**](https://observablehq.com/@formsandlines/the-dna-of-4-valued-forms) that is an abstraction of the value table. It not only made my CA faster and more flexible, it also inspired me to create the **vmap**: a recursive variable/value map to visualize formDNA, that has great potential for pattern recognition in FORMs.

Driven by my own curiosity and some helpful suggestions from users, I continuously work on implementing new ideas and features into the library. Nowadays, I am prototyping most of these ideas in my [Observable notebooks](https://observablehq.com/@formsandlines) and announce new developments, bugfixes and changes on my [Twitter account](https://twitter.com/diagramaniac).

In the near future I want to rewrite my CA for SelFis as a more professional standalone application and also develop other CAs for [decisionFORMs, lifeFORMs and mindFORMs](https://www.carl-auer.de/magazin/systemzeit/how-does-system-function-operate-5). I also want to find a way to algorithmically generate spirals for circular re-entry FORMs, to have a more iconic representation closer to Ralfs notation in uFORM iFORM. There are many more ideas in the pipeline, that I hope to realize as time and other resources allow.

<br/>

## Support

If you want to support my work, consider [buying me a coffee](https://www.buymeacoffee.com/formsandlines). ☕

---

(c) 2018–2020 by Peter Hofmann

License: MIT