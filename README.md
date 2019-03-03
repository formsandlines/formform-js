# formform

<br/>

**formform** is a modular JavaScript library all about the 4-valued logic of cognition first introduced 2017 by Ralf Peyn in [uFORM iFORM](https://uformiform.info/). In its core, the purpose of the library is to calculate with all 5 FORMs (marked, unmarked, undetermined, imaginary and unclear) introduced in the book and is meant to be extended with more specialized modules for different tasks such as FORM representation, algebra, visualization or simulation and analysis using CAs.

As a helpful tool for researchers and enthusiasts and as a demonstration of the library's capabilities I have also created the **formform app**. It can calculate, represent and visualize FORMs using my `formula` syntax (described below under *formform.form*). I'll upload the app on my website in the near future but you can find all the parts in this repository under /app/.

Please note that my library as well as my app are still *work in progress*. The library is currently in the process of restructuring and you may want to wait for a more stable release if you intent to use it. I am not a professional developer and this is just my part-time hobby. Since I still have much to learn and this is my first real library, I'll be very thankful for any advice.

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
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.9.1/d3.min.js"></script>

<script src="<yourpath>/formform.min.js"></script>
// or just use the unpkg link:
<script src="https://unpkg.com/formform@0.3.0/dist/formform.min.js"></script>
```

<br/>

## Documentation

In its current state, *formform* has 3 classes that are build on top of each other and perform different tasks.

- **formform.calc** lets you calculate with numeric values of the uFORM iFORM calculus
- **formform.form** lets you calculate any FORM with constants and variables using a special JSON representation which can be easily generated from a formula String (paranthesis notation)
- **formform.graph** lets you use this JSON representation to generate different visualization outputs or notations

All classes and their API are described in detail below:


### formform.calc

`x`,`y`,`z`,… ∈ {`0`,`1`,`2`,`3`}

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
traverseForm(form, function(fBranch, depth, space) {
  // ...
})
```
> - `fBranch`: current FORM-branch of the FORM
> - `depth`: current depth number starting from `0` as the shallowest depth (the *‘unmarked FORM’*)
> - `space`: current space (Array of the content of fBranch)

---

### formform.graph

- `graphType` -> can be `'tree'` *([D3 tree](https://github.com/d3/d3-hierarchy/blob/master/README.md#tree))* or `'pack'` *([D3 circle packing](https://github.com/d3/d3-hierarchy/blob/master/README.md#pack))* or (…?)
- `style` -> select from 2 available CSS classes: 'basic' (outlines) and 'gestalt' (what I call *GestaltFORM* (only for 'pack'))

#### Visualization (D3/SVG)
```js
createGraph(graphType, form, options)
```
`options` -> 
```js
{ 
  parentId: id,      // id of parent DOM-element (if empty, parent is 'body')
  width: <px>,       // width of the container (if empty, container auto-fits to chart)
  height: <px>,      // height of the container (if empty, container auto-fits to chart)
  margin: {left: <px>, right: <px>, top: <px>, bottom: <px>}
                     // margin of the container (default: {50,50,50,50})
  padding: {left: <px>, right: <px>, top: <px>, bottom: <px>}
                     // padding of the container (default: {10,10,10,10})
  styleClass: style  // style of the graph (see above for available values)
}
```

#### Output

Save rendered graph as SVG-file:
```js
saveGraph(format, svg, name)
```
> - `format`: 'svg' is the only choice for now
> - `svg`: svg-element with the rendered graph
> - `name`: name of the output file

#### A note about representation

The *graph module* expands on the JSON-representation of the *form module* by constructing nested reEntry FORMs from its more compact descriptive structure. This is necessary for the accurate visualization of those FORMs but the *form module* didn't need to be so explicit since I took advantage of their common patterns in the calculation algorithm.

If you need to expand the JSON-structure of reEntry-FORMs yourself, use: `expand_reEntry(form)`


<br/>

## History

This library has become my personal project since I first began studying [uFORM iFORM](https://uformiform.info/). Ralfs SelFis *(visual interpretation of a part system from the selfreferential system of the FORM)* inspired me to develop my own [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton) in the programming environment [Processing](https://processing.org/) for a deeper unterstanding of those systems. 

Working with lookup tables for the calculations at first was okay, but I needed more flexibility, so I began working on some functions to calculate with all four values and in 2018 I was finally able to implement an algorithm to calculate all self-equivalent re-entry FORMs that were described in the book.

I saw that there was more potential in this little collection of functions, so I began working on a JavaScript library to elaborate my ideas which gradually became *formform*. In the near future I will also rewrite my CA for SelFis as well as for the recently introduced [MindFORMs](https://carl-auer-akademie.com/blogs/systemzeit/2019/02/13/how-does-system-function-operate-5-mindforms/) in JavaScript and integrate them into my formform modules.

<br/>

## Further information

If you want to learn more about the ideas and theories *formform* is based on, here are some helpful resources:

- [About uFORM iFORM](https://uformiform.info) (mostly German as is the language of the book by Ralf Peyn, but you can try [DeepL](https://www.deepl.com/translator) to translate the gist of it)
- [Here is a list of links](https://uformiform.info/#section_recommendations) on the theoretical background behind uFORM iFORM (mostly German resources, but you can just translate the keywords and google them)
- [3-dimensional FORM animations and FORM-builder](https://uformiform.info/animations) (a project I made back in 2017 that greatly influenced my approach to formform)
- [Blog s y s t e m z e i t](https://carl-auer-akademie.com/blogs/systemzeit/) by Gitta Peyn – German and English articles about systemic research based on uFORM iFORM
- [About FORMWELT](https://formwelt.info) – a coding language for language and meaning founded on the logic of cognition introduced in uFORM iFORM (by the way, we appreciate any support for the development of [FORMWELT Online](https://formwelt.info/formwelt-online)!)

<br/>

## Credits

formform uses the following libraries / open-source projects:

- (development) [Webpack](https://github.com/webpack/webpack)
- (development) [Node.js](https://github.com/nodejs/node)
- (lib/app) [d3.js](https://github.com/d3/d3)
- (app) [Bootstrap](https://github.com/twbs/bootstrap) (which uses [jQuery](https://github.com/jquery/jquery) and [Popper.js](https://github.com/FezVrasta/popper.js))

---

(c) 2019 by Peter Hofmann

License: MIT