# Alley

Responsive, cross-browser, starter template. Only 1KB for the layout, grid and typography css. Tested working on Firefox, Safari, Chrome, IE9+. Using ratios and percentages which adapt and reflow with your browser/screen size. Use oocss reusable themes, keeping your layout and styling separate.

 > *The purpose of OOCSS is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain*
 [*[source]*](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

By separating the structure/layout/grid/ from the visual/styles/colours, blocks of code become more reusable and therefore more efficient.

### Introduction

The first component of alley is the typography css file. This allows you to have consistent pixel-perfect typography using em and rem units. Included is a debug css file to overlay the grid and show the accuracy of the type.

The second component is the responsive grid layout. There are many ways to create layout using css but by far the most flexible cross browser solution is using percentages. The grid included works out sizes based on ratios and will flow with your browser/device size. Included are some example breakpoints for affecting the layout for different resolutions. Because the grid uses even left and right margins, it also means an end to using first and last css classes!

Main advantages of using alley starter template:

 * 1KB in size! (twitter bootstrap is 10KB)
 * Using percentages which adapt and reflow with your browser/screen size.
 * Fully tested working on browsers Chrome, Firefox, Safari, IE9+
 * Object oriented css ensures your themes will be reusable
 * Namespaced modules mean your css rules only affect the area you are working
 * Grid system adds gutters between columns which means an end to using first and last classes!
 * Modular javascript using amd modules and inheritance

Layout html example:

    <div class="row">
        <div class="col w1of3">Column 1</div>
        <div class="col w1of3">Column 2</div>
        <div class="col w1of3">Column 3</div>
    </div>

Common breakpoints

 * 20em = 320px
 * 30em = 480px
 * 48em = 768px
 * 64em = 1024px
 * 80em = 1280px

Layout css example:

    .section {
        margin: 0 auto;
        max-width: 64em;
        overflow: hidden;
        padding: 2em;
    }

    .row {
        clear: both;
        margin: 0 -1em 0 -1em;
    }

    .col {
        box-sizing: border-box;
        float: left;
        padding: 0 1em;
    }

Typography css example:

    body {
        font-family: sans-serif;
        font-size: 16px;
        line-height: 1.5em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #444;
        font-weight: 300;
        line-height: 1em;
        word-wrap: break-word;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0 0 1rem 0;
    }

    h1 { font-size: 2.5em; }
    h2 { font-size: 2em; }
    h3 { font-size: 1.5em; }
    h4 { font-size: 1em; }
    h5 { font-size: 1em; }
    h6 { font-size: 1em; }