<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
</head>

<body>
  <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

  <!-- Add your site or application content here -->
<header>
  <h1>FForm Calculator 1.5a</h1>
  <p class="metainfo">Concept and Development by <a href="https://designhofmann.de" target="_blank">Peter Hofmann</a>, october 2018.<br/>Calculation algorithms based on demonstrations in the book <a href="https://uformiform.info" target="_blank">uFORM iFORM</a> by Ralf Peyn, 2017 and the Laws of Form by George Spencer-Brown, 1969–2015.</p>
</header>

<aside>
  <!-- <input type="button" id="toggle_explanations" value="" onclick="btnToggleExplanations('explanations');"/> -->
  <a id="toggle_explanations" href="#"></a>
  <p></p>

  <section id="explanations">
    <p><strong>Enter FORMs in parenthesis notation <span class="formula">(…)</span></strong> as well as <em>constants</em> (0: unmarked, 1: marked, 2: undetermined, 3: imaginary), <em>variables</em> (single characters: a,b,c,… or labels, using quotes: "Ball", "door is open", "3×2=12", …) and <em>unclear FORMs</em> (using slashes: /God/, /World Peace/, …). See further examples below.</p>
    <ul>
    <li><strong><span style="color:red;">Update:</span></strong> you can now have subscripts in variable names by using the underscore character, e.g. <span class="formula">"var_n+1"</span> will display as &nbsp; var<sub>n+1</sub> .</li>
    </ul>

    <p><strong>Self-equivalent re-entry forms</strong> with <em>nested arguments</em> (as described in the book <a href="https://uformiform.info" target="_blank">uFORM iFORM</a> by Ralf Peyn) can also be processed by using curly brackets <span class="formula">{…}</span> to mark the re-entry form and separating the nested variables/constants/forms with a comma: <span class="formula">{a,b,…}</span>. Please note that the order of the variables is: {deepest nesting → shallowest nesting}.</p>
    <ul>
    <li>Using pipes before the arguments, you can also specify <em>open forms</em> (without the outer cross) <span class="formula">{open|a,…}</span> and either <em>even</em> <span class="formula">{2r|a,…}</span> or <em>odd</em> <span class="formula">{2r+1|a,…}</span> <em>re-entry numbers</em> as well as combinations <span class="formula">{2r|open|a,…}</span>.</li>
    <li><strong><span style="color:red;">Update:</span></strong> now you can also switch to the <em>alternative interpretation</em> (as described in the book on p.167) using the keyword "alt", like so: <span class="formula">{2r|alt|a,b}</span> (order of keywords is irrelevant).</li>
    </ul>

    <p><strong>Click "calculate" to compute your FORM in a 4-valued calculus</strong> based on definitions/demonstrations in uFORM iFORM. When there are only constants in your formula, you'll see one output. With variables, all possible interpretations will be computed.</p>
    <ul>
    <li>Unclear FORMs are processed as marked inside uFORMs (according to page 48 of the book) and interpreted with an undetermined value.</li>
    <li>Click "view JSON" to display a <em>JSON-representation</em> of the FORM that is internally used for visualization and some of the calculation. In this representation, forms with the property <span class="formula">"unmarked": true</span> behave like groups and will not be displayed or computed.</li>
    </ul>

    <p><strong><span style="color:red;">Update:</span> visualize FORMs in a tree or graph representation</strong>. 
    <br/>Note that there is no distinction between open and closed re-entry forms yet; an accurate representation of them is still being worked on. For now, re-entry forms are outlined red and their nested FORMs appear in dashed outlines. For graphs I'll try to replace them with the more iconic spirals used in the WELTFORM-notation for undetermined FORMs in the near future.</p>
    <ul>
    <li>Forms symbolized unclear (between <span class="formula">/…/</span>) are represented with slanted rectangles to match the notation in uFORM iFORM.</li>
    <li>You can also export/download rendered trees or graphs as SVG (which is essentially what they are already).</li>
    </ul>

    <h3>Notation examples:</h3>
    <ul>
      <li>form: <span class="formula">()</span>, <span class="formula">(a)</span>, <span class="formula">(0)</span>, <span class="formula">(2)3</span>, <span class="formula">(ab)</span>, <span class="formula">((a)b)</span>, <span class="formula">((a)b)c</span>, <span class="formula">(a)(b)</span>, <span class="formula">a(23("Ball")"Socks")</span></li>
      <li>re-entry form (nested variables): <span class="formula">{a}</span>,<span class="formula">{a,b}</span>, <span class="formula">{(a)2b,c}</span></li>
      <li>re-entry form with even re-entry number: <span class="formula">{2r|a,b,c}</span></li>
      <li>re-entry form with odd re-entry number: <span class="formula">{2r+1|a,b,c}</span></li>
      <li>re-entry form without outer cross: <span class="formula">{2r|open|a,b,c}</span>, <span class="formula">{2r+1|open|a,b,c}</span></li>
    </ul>
  </section>

</aside>

<main>
  <section id="entry">
    <label>Enter formula:</label>
    <input id="form_entry" type="text" size="80" value="">
  </section>
  <section id="action">
    <input type="button" value="calculate" onclick="btnCalc();"/>
    <input type="button" value="view JSON" onclick="btnViewJSON();"/>
    <input type="button" value="render Tree" onclick="btnRender('tree');"/>
    <input type="button" value="render Graph" onclick="btnRender('pack');"/>
    <!-- <input type="checkbox" name="interpr2" id="check-interpr2">
      <label for="interpr2">Interpretation 2</label> -->
  </section>

  <section id="output">
    <div class="output-wrapper" id="output-wrapper-vals">
      <p>Calculated values:</p>
      <pre class="output" id="output-vals"></pre>
    </div>
    <div class="output-wrapper" id="output-wrapper-json">
      <p>JSON-Tree:</p>
      <pre class="output" id="output-json"></pre>
    </div>
  </section>



<div id="graph-tree" class="graph">
  <div>
  <input type="button" value="save SVG" onclick="exportRender('tree');"/>
  </div>
</div>
<div id="graph-pack" class="graph">
  <div>
  <input type="button" value="save SVG" onclick="exportRender('pack');"/>
  </div>
</div>


</main>

<footer>
  <p class="metainfo">In case of errors or strange/incorrect behaviour, please copy your formula and send it to me for debugging purposes: <a href="mailto:peterhfmnn@gmail.com">peterhfmnn@gmail.com</a>. Also note that error handling is not yet implemented, so carefully check your syntax for missing parenthesis, etc.</p>
</footer>




  <script src="js/vendor/modernizr-3.6.0.min.js"></script>

<!--   <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script> 
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')</script> -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
  <script src="https://d3js.org/d3.v5.min.js"></script>

  <script src="js/plugins.js"></script>
  <script src="js/vendor/esrever.js"></script>
  <script src="js/FORM/_helper.js"></script>
  <script src="js/FORM/_FCalc.js"></script>
  <script src="js/FORM/_FForm.js"></script>
  <script src="js/FORM/_FGraph.js"></script>
  <script src="js/main.js"></script>

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async defer></script>
</body>

</html>
