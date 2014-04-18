# Alley

Responsive, cross-browser, grid layout. Only 1KB for the layout and reset css. Tested working on Firefox, Safari, Chrome, IE8+. Using percentages which adapt and reflow with your browser/screen size. Use oocss reusable themes, keeping your layout and styling separate.

 > *The purpose of OOCSS is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain*
 [*[source]*](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

By separating the structure/layout/grid/ from the visual/styles/colours, blocks of code become more reusable and therefore more efficient.

### Introduction

The first component of alley is the normalize css file. This allows you to remove cross browser differences and ensure your site looks the same. You can update or replace the reset file with your favourite e.g. yahoo YUI reset.

The second component is the responsive grid layout. There are many ways to create layout using css but by far the most flexible cross browser solution is using percentages. The grid included works out sizes based on ratios and will flow with your browser/device size. Included are some example breakpoints for affecting the layout for different resolutions. Because the grid uses even left and right margins, it also means an end to using first and last css classes!

The third component is the object oriented theme files. They are namespaced using the theme name such as light or dark. However each theme contains the same child classes which makes them interchangeable and reusable.

Main advantages of simple responsive:

 * 1KB in size! (twitter bootstrap is 10KB)
 * Using percentages which adapt and reflow with your browser/screen size.
 * Fully tested working on browsers Chrome, Firefox, Safari, IE8+
 * Object oriented css ensures your themes will be reusable
 * Namespaced modules mean your css rules only affect the area you are working
 * Grid system adds gutters between columns which means an end to using first and last classes!
 * TouchScroll plugin to allow drag scrolling in your browser
 * Modular javascript using amd modules and inheritance

Layout html example:

    <div class="row flow-s">
        <div class="col w1of3">Column one</div>
        <div class="col w1of3">Column two</div>
        <div class="col w1of3">Column three</div>
    </div>

Respond columns at common breakpoints

 * .flow-xs = 20em = 320px
 * .flow-s = 30em = 480px
 * .flow-m = 48em = 768px
 * .flow-l = 64em = 1024px
 * .flow-xl = 80em = 1280px

Layout css example:

    .row {
        margin: 0 auto;
        overflow: hidden;
        padding: 20px;
        max-width: 1000px;
    }

    .row .row {
        margin: 0 -5px 0 -5px;
        padding: 0;
    }

    .col {
        float: left;
        padding: 0 5px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

Themes css example:

    .dark {
        color: #bbbbbb;
    }
    
    .dark .c1 {
        color: #ffffff;
    }
    
    .dark .c2 {
        color: #bbbbbb;
    }
    
    .dark a.c2:hover {
        color: #ffffff;
    }
    
    .dark.bg1,
    .dark .bg1 {
        background-color: #333333;
    }
    
    .dark.bg2,
    .dark .bg2 {
        background-color: #111111;
    }