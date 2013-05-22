# Alley

Responsive, cross-browser, table-cell grid layout. Only 1KB for the layout and reset css. Tested working on Firefox, Safari, Chrome, IE8+. Use table-cell layouts which adapt to your browser using percentages. Create oocss reusable themes, keeping your layout and styling separate.

 > *The purpose of OOCSS is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain*
 [*[source]*](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

By separating the structure/layout/grid/ from the visual/styles/colours, blocks of code become more reusable and therefore more efficient.

### Introduction

The first component of simple responsive is the reset css file. This allows you to remove cross browser differences and ensure your site looks the same. You can update or replace the reset file which is currently a modified version of the yahoo YUI reset.

The second component is the responsive grid layout. There are many ways to create layout using css but by far the most flexible cross browser solution is using display: table-cell. The grid included works out sizes based on percentages and will flow with your browser/device size. Included are some example breakpoints for affecting the layout for different resolutions. It also means th end to first and last css classes!

The third component is the object oriented theme files. They are namespaced using the theme name such as light or dark. However each theme contains the same child classes which makes them interchangeable and reusable.

Main advantages of simple responsive:

 * 1KB in size! (twitter bootstrap is 10KB)
 * Uses table cells which flow content automatically for each device size
 * Fully tested working on browsers Chrome, Firefox, Safari, IE8+
 * Object oriented css ensures your themes will be reusable
 * Namespaced modules mean your css rules only affect the area you are working
 * Grid system adds gutters between columns which means an end to using first and last classes!
 * Modular javascript using amc modules and inheritance

Layout html example:

    <div class="row flow-s">
        <div class="col">Column one</div>
        <div class="col">Column two</div>
        <div class="col">Column three</div>
    </div>

Respond columns at common breakpoints

 * .flow-xs = 20em = 320px
 * .flow-s = 30em = 480px
 * .flow-m = 48em = 768px
 * .flow-l = 64em = 1024px
 * .flow-xl = 80em = 1280px

Layout css example:

    .row {
        display: table;
        border-spacing: 20px 0;
        margin: 0 -20px;
    }
    
    .col {
        display: table-cell;
        vertical-align: top;
        width: 1%;
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

Reset css:

    body {
        margin: 0;
        overflow-x: hidden;
    }
    
    h1, h2, h3, h4, h5, h6, p {
        font-weight: normal;
        margin: 0;
        padding: 0;
    }
    
    a {
        outline: none;
        text-decoration: none;
    }
    
    iframe, img {
        border: 0;
    }
    
    ul {
        list-style-type: disc;
    }
    
    form, input, textarea, select, fieldset {
        margin: 0;
        padding: 0;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
    }