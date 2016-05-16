<?php
    header("Access-Control-Allow-Origin: *");
?>

<!DOCTYPE html>
<!--[if IE 8]><html class="lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]><html class="lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html> <!--<![endif]-->
    <head>
        {MobileAppHeaders}
        <meta charset="utf-8">
        <title>{Title}{block:SearchPage} ({lang:Search results for SearchQuery}){/block:SearchPage}{block:PermalinkPage}{block:PostSummary} — {PostSummary}{/block:PostSummary}{/block:PermalinkPage}</title>
        {block:Description}
        <meta name="description" content="{MetaDescription}">
        {/block:Description}

        <!-- Enable tuy chon Font -->
        <meta name="font:Title" content="Helvetica Neue"/>
        <meta name="font:Body" content="Arial"/>

        {block:Hidden}
        <meta name="if:Sliding header" content="1">
        <meta name="if:Show navigation" content="1">
        <meta name="if:Endless scrolling" content="1">
        <meta name="if:Syntax highlighting" content="0">
        <meta name="select:Layout" content="regular" title="Regular">
        <meta name="select:Layout" content="narrow" title="Narrow">
        <meta name="select:Layout" content="grid" title="Grid">
        <meta name="if:Related Posts" content="1">
        <meta name="text:Disqus shortname" content="">
        <meta name="text:Google analytics ID" content="">
        <meta name="if:Show date" content="1">
        {/block:Hidden}

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="shortcut icon" href="{Favicon}">
        <link rel="apple-touch-icon-precomposed" href="{PortraitURL-128}">
        <link rel="alternate" type="application/rss+xml" href="{RSS}">

        <link rel="stylesheet" href="http://static.tumblr.com/27gzhx7/SYQo4i8vn/main-min.css">
        {block:IfSyntaxHighlighting}
        <link rel="stylesheet" href="http://static.tumblr.com/ehm1tdz/2VWnye81h/tumblr-highlightjs.css">
        {/block:IfSyntaxHighlighting}

        <!-- HTML5 Shiv -->
        <!--[if lt IE 9]>
            <script src="http://static.tumblr.com/hriofhd/Qj0m8pn7q/html5shiv.js"></script>
        <![endif]-->

        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

        <!--bootstrap-->
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

        <style>
            /* Colors */
            body {
                background: {BackgroundColor};
                font-family: {font:Body}, Arial, Helvetica, sans-serif;
            }

            .clearfix {
                overflow: auto;
                zoom: 1;
            }

            .blog-title {
                font-family: {font:Title}, "Helvetica Neue", HelveticaNeue, Arial, sans-serif;
                font-weight: {TitleFontWeight};
            }

            .blog-title a,
            .description,
            .search-no-results,
            .likes-no-likes {
                color: {TitleColor};
            }

            a {
                color: {AccentColor};
            }

            #pagination a,
            .nav-wrapper .nav-item .label {
                color: {AccentColor};
            }

            #pagination a.next:after {
                border-left-color: {AccentColor};
            }

            #pagination a.previous:after {
                border-right-color: {AccentColor};
            }

            .loader .loader-bar {
                background-color: {TitleColor};
            }

            .header-image.cover {
                background-image: url({HeaderImage});
            }

            .user-avatar {
                background-color: {BackgroundColor};
                border-color: {BackgroundColor};
            }

            .avatar-style-square .user-avatar {
                -webkit-box-shadow: 0 0 0 4px {BackgroundColor};
                box-shadow: 0 0 0 4px {BackgroundColor};
            }

            .no-header-image .logo-wrapper,
            .contain-header-image .logo-wrapper {
                color: {AccentColor};
            }

            /* Adjust logo for light accents on light backgrounds */
            .light-on-light.no-header-image .logo-wrapper,
            .light-on-light.contain-header-image .logo-wrapper {
                color: #444;
            }

            /* Adjust logo for dark accents on dark backgrounds */
            .dark-on-dark.no-header-image .logo-wrapper,
            .dark-on-dark.contain-header-image .logo-wrapper {
                color: #fff;
            }

            .related-posts-wrapper > h2 {
                color: {TitleColor};
            }

            @media screen and (max-device-width: 568px) {
                .header-image.cover {
                    background-image: url({HeaderImage-640});
                    -webkit-background-size: cover;
                    background-size: cover;
                }

                .avatar-style-square .user-avatar {
                    -webkit-box-shadow: 0 0 0 3px {BackgroundColor};
                    -moz-box-shadow: 0 0 0 3px {BackgroundColor};
                    box-shadow: 0 0 0 3px {BackgroundColor};
                }

            }

            /* Custom CSS */

            {block:IfShowDate}
                .panel {
                    width: 20%;
                    height: auto;
                    float: left;
                }
                .post-footer-row {
                    display: table-row;
                }

                .post-footer-row > section {
                    display: table-cell;
                    padding: 8px 0;
                    min-width: 0;
                }
                .post-footer .date-notes .post-date, .post-footer .date-notes .post-notes {
                    text-align: center;
                    display: block;
                }
                .post-footer .date-notes .post-date {
                    margin-bottom: 8px;
                    padding-bottom: 8px;
                    border-bottom: solid 1px #ddd;
                }
                .post-footer .date-notes .post-date .month {
                    margin-top: 0;
                    margin-bottom: 0.4em;
                }
                .post-wrapper > * {
                    margin-left: -15px;
                    margin-right: -15px;
                }
            {/block:IfShowDate}

            {CustomCSS}
        </style>
    </head>
    <body data-urlencoded-name="{URLEncodedName}" class="{select:Layout}{block:IndexPage} index-page{/block:IndexPage}{block:PermalinkPage} permalink{/block:PermalinkPage}{block:LikesPage} likes-page{/block:LikesPage}{block:SearchPage} search-page{block:NoSearchResults} no-results{/block:NoSearchResults}{block:NoLikes} no-likes{/block:NoLikes}{/block:SearchPage}{block:HideHeaderImage} no-header-image{/block:HideHeaderImage}{block:NoStretchHeaderImage} contain-header-image{/block:NoStretchHeaderImage}{block:IfRelatedPosts} display-related-posts{/block:IfRelatedPosts}">

        <div class="app-nag">
            <div class="app-nag-header clearfix">
                <div class="app-nag-icon">
                    <div class="app-nag-icon-ios">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">
                            <path fill="#36465D" d="M1024,771c0,139.2-113.8,253-253,253H253C113.8,1024,0,910.2,0,771V253C0,113.8,113.8,0,253,0h518 c139.2,0,253,113.8,253,253V771z"/>
                            <path fill="none" stroke="#FFF100" stroke-width="4" stroke-miterlimit="10" d="M463.9,209.4"/>
                            <path opacity="0.6" fill="#231F20" d="M628.1,681c8.2,0,17.1-1.2,25.8-3.3V530.3h111.6V401.8h-68.6V473H585.4v162.4 C586,676.3,609.1,681,628.1,681z M654.4,250.5h-68.6v94h68.6V250.5z M754.3,722.9c-12.7,7.1-28.9,12.4-44.3,14.5l11.4,33.8 c-20.5,27-71.4,45.5-118.1,46.3c-1.6,0-3.1,0-4.7,0c0,0,0,0,0,0c-32.5,0-59.5-5.7-81.9-15.3c26.2,40,72.7,72.6,150.5,72.6c0,0,0,0,0,0c1.6,0,3.1,0,4.7,0c46.6-0.8,97.6-19.4,118.1-46.3L754.3,722.9z"/>
                            <path fill="none" stroke="#FFF100" stroke-width="4" stroke-miterlimit="10" d="M355,359.5"/>
                            <path fill="#FFFFFF" d="M577.5,830.6c65.1,0,129.7-23.2,151-51.3l4.3-5.6l-40.4-119.7c-0.4-1.1-1.4-1.9-2.6-1.9h-7.6h-3.5l-79.1,0 c-1.2,0-2.3-0.8-2.6-2c-1.1-4-1.7-8.9-1.8-14.9V489c0-1.5,1.2-2.7,2.7-2.7h106.1c1.5,0,2.7-1.2,2.7-2.7V333.8c0-1.5-1.2-2.7-2.7-2.7 H598.4c-1.5,0-2.7-1.2-2.7-2.7V182.5c0-1.5-1.2-2.7-2.7-2.7h-82.6h-28.9h-73.8c-13.3,0-28.5,9.8-30.8,28 c-9.3,75.3-43.8,120.5-108.7,142.2l-7.2,2.4c-1.1,0.4-1.9,1.4-1.9,2.6v128.6c0,1.5,1.2,2.7,2.7,2.7h50.4h0h15.9c0,0,0,120,0,158.3 C328.1,771,415.7,830.6,577.5,830.6z M701.6,769.5c-20.3,19.5-62,34.1-102,34.7c-1.5,0-3,0-4.5,0h0 c-131.5,0-166.6-100.4-166.6-159.7V462.3c0-1.5-1.2-2.7-2.7-2.7h-63.6c-1.5,0-2.7-1.2-2.7-2.7v-83c0-1.1,0.7-2.1,1.7-2.5 c68-26.5,105.9-79,115.9-160.3c0.6-4.5,4.3-4.6,4.3-4.6h84.9c1.5,0,2.7,1.2,2.7,2.7v145.9c0,1.5,1.2,2.7,2.7,2.7h105.7 c1.5,0,2.7,1.2,2.7,2.7v96.4c0,1.5-1.2,2.7-2.7,2.7H571.3c-1.5,0-2.7,1.2-2.7,2.7l0,173.2c0.6,39,19.5,58.8,56.1,58.8 c14.7,0,31.6-3.4,47.1-9.3c1.4-0.6,3,0.2,3.5,1.6l27,80C702.6,767.7,702.4,768.8,701.6,769.5z"/>
                            <path opacity="0.5" fill="#2D3F54" d="M328.1,528.9h73.8v-40.2c0-1.3-1.1-2.4-2.4-2.4h-71.4V528.9z"/>
                        </svg>
                    </div>
                    <div class="app-nag-icon-android">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">
                            <path fill="none" stroke="#FFF100" stroke-width="4" stroke-miterlimit="10" d="M463.9,209.4"></path>
                            <path opacity="0.5" fill="#231F20" d="M628.1,681c8.2,0,17.1-1.2,25.8-3.3V530.3h111.6V401.8h-68.6V473H585.4v162.4 C586,676.3,609.1,681,628.1,681z M654.4,250.5h-68.6v94h68.6V250.5z M754.3,722.9c-12.7,7.1-28.9,12.4-44.3,14.5l11.4,33.8 c-20.5,27-71.4,45.5-118.1,46.3c-1.6,0-3.1,0-4.7,0c0,0,0,0,0,0c-32.5,0-59.5-5.7-81.9-15.3c26.2,40,72.7,72.6,150.5,72.6c0,0,0,0,0,0c1.6,0,3.1,0,4.7,0c46.6-0.8,97.6-19.4,118.1-46.3L754.3,722.9z"></path>
                            <path fill="none" stroke="#FFF100" stroke-width="4" stroke-miterlimit="10" d="M355,359.5"></path>
                            <path fill="#36465D" d="M577.5,830.6c65.1,0,129.7-23.2,151-51.3l4.3-5.6l-40.4-119.7c-0.4-1.1-1.4-1.9-2.6-1.9h-7.6h-3.5l-79.1,0 c-1.2,0-2.3-0.8-2.6-2c-1.1-4-1.7-8.9-1.8-14.9V489c0-1.5,1.2-2.7,2.7-2.7h106.1c1.5,0,2.7-1.2,2.7-2.7V333.8c0-1.5-1.2-2.7-2.7-2.7 H598.4c-1.5,0-2.7-1.2-2.7-2.7V182.5c0-1.5-1.2-2.7-2.7-2.7h-82.6h-28.9h-73.8c-13.3,0-28.5,9.8-30.8,28 c-9.3,75.3-43.8,120.5-108.7,142.2l-7.2,2.4c-1.1,0.4-1.9,1.4-1.9,2.6v128.6c0,1.5,1.2,2.7,2.7,2.7h50.4h0h15.9c0,0,0,120,0,158.3 C328.1,771,415.7,830.6,577.5,830.6z M701.6,769.5c-20.3,19.5-62,34.1-102,34.7c-1.5,0-3,0-4.5,0h0 c-131.5,0-166.6-100.4-166.6-159.7V462.3c0-1.5-1.2-2.7-2.7-2.7h-63.6c-1.5,0-2.7-1.2-2.7-2.7v-83c0-1.1,0.7-2.1,1.7-2.5 c68-26.5,105.9-79,115.9-160.3c0.6-4.5,4.3-4.6,4.3-4.6h84.9c1.5,0,2.7,1.2,2.7,2.7v145.9c0,1.5,1.2,2.7,2.7,2.7h105.7 c1.5,0,2.7,1.2,2.7,2.7v96.4c0,1.5-1.2,2.7-2.7,2.7H571.3c-1.5,0-2.7,1.2-2.7,2.7l0,173.2c0.6,39,19.5,58.8,56.1,58.8 c14.7,0,31.6-3.4,47.1-9.3c1.4-0.6,3,0.2,3.5,1.6l27,80C702.6,767.7,702.4,768.8,701.6,769.5z"></path>
                            <path opacity="0.5" fill="#2D3F54" d="M328.1,528.9h73.8v-40.2c0-1.3-1.1-2.4-2.4-2.4h-71.4V528.9z"></path>
                        </svg>
                    </div>
                </div>
                <div class="app-nag-ratings">
                    <svg width="181px" height="30px" viewBox="0 0 181 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M15.8,25.2 L6.1,29.8 L7.5,19.2 L0.1,11.4 L10.6,9.5 L15.8,0 L20.9,9.5 L31.4,11.4 L24,19.2 L25.4,29.8 L15.8,25.2 Z" fill="#FFC00E"></path>
                            <path d="M52.8,25.2 L43.1,29.8 L44.5,19.2 L37.1,11.4 L47.6,9.5 L52.8,0 L57.9,9.5 L68.4,11.4 L61,19.2 L62.4,29.8 L52.8,25.2 Z" fill="#FFC00E"></path>
                            <path d="M89.8,25.2 L80.1,29.8 L81.5,19.2 L74.1,11.4 L84.6,9.5 L89.8,0 L94.9,9.5 L105.4,11.4 L98,19.2 L99.4,29.8 L89.8,25.2 Z" fill="#FFC00E"></path>
                            <path d="M126.8,25.2 L117.1,29.8 L118.5,19.2 L111.1,11.4 L121.6,9.5 L126.8,0 L131.9,9.5 L142.4,11.4 L135,19.2 L136.4,29.8 L126.8,25.2 Z" fill="#FFC00E"></path>
                            <path d="M163.8,25.2 L154.1,29.8 L155.5,19.2 L148.1,11.4 L158.6,9.5 L163.8,0 L168.9,9.5 L179.4,11.4 L172,19.2 L173.4,29.8 L163.8,25.2 Z" fill="#E7E7E7"></path>
                            <path d="M163.3,25.1 L154.1,29.8 L155.5,19.2 L148.1,11.4 L158.6,9.5 L163.3,0.9 L163.3,25.1 Z" fill="#FFC00E"></path>
                        </g>
                    </svg>
                    <div class="app-nag-ratings-text app-nag-ratings-text-android">
                        {lang:Android rating numbers}
                    </div>
                    <div class="app-nag-ratings-text app-nag-ratings-text-ios">
                        {lang:iOS rating numbers}
                    </div>
                </div>
                <div class="app-nag-close-button">
                    <svg width="15px" height="15px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M12.510351,14.6860639 L0,27.1964147 L2.175713,29.3721278 L14.686064,16.8617771 L27.196415,29.3721278 L29.372128,27.1964147 L16.861777,14.6860639 L29.372128,2.1757132 L27.196415,0 L14.686064,12.5103507 L2.175713,0 L0,2.1757132 L12.510351,14.6860639 L12.510351,14.6860639 Z" fill="#D3D3D3"></path>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="app-nag-body">
                <h1 class="app-nag-callout">{lang:Engagement popover title}</h1>
                <a class="app-nag-large-button app-nag-app-store-link button blue">{lang:Engagement popover button}</a>
                <a class="app-nag-large-button app-nag-app-store-deny">{lang:Dismiss engagement popover}</a>
            </div>
        </div>

        <section id="page">
            <div class="logo-wrapper">
                <a class="t-logo" href="https://www.tumblr.com/?referring_blog={URLEncodedName}&amp;referer=optica" target="_blank">
                    <svg class="svg-logo" width="29px" height="39px" viewBox="0 0 29 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path class="large-shadow" d="M21.9956664,26.3 L21.9956664,19.0055544 L27.9954227,19.0055542 L27.9954227,13.0048828 L27.9954227,11.0108643 L23.522766,11.0108643 L23.5540067,11.6669807 L23.7388305,15.5486452 L17.6832886,15.4792482 L17.4,24 C17.5,26.3 18.8,26.5 19.8,26.5 C20.2,26.5 21.4956664,26.4 21.9956664,26.3 Z M18.7154541,4.00225829 L17.4,2.9 L17.4,8 L22.000122,7.34490957 L22.000122,4.00225829 L18.7154541,4.00225829 Z M24.3,29.6 L24.9,31.5 C23.8,32.9 21,34 18.4,34 L18.1,34 C16.3,34 14.8,33.7 13.6,33.2 C15,35.4 17.5999998,38.0021971 21.7999998,38.0021971 C21.7999996,38.6099361 22.0022113,38.0021971 22.0999998,38.0021971 C24.6999998,38.0021971 27.4,36.1 28.6,34.7 L26.7,28.8 C26,29.2 25.1,29.5 24.3,29.6 Z" id="Shape" fill="#000000"></path>
                            <path class="inner" d="M18.5,33.6 L18.3,33.6 C11.1,33.6 9,28.2005493 9,25.0005493 L9,15 C8.58245849,15 4.99298096,15 5,15 L4.99298096,10.0285034 C4.99298096,9.92850342 5.1,9.9 5.2,9.9 C8.9,8.5 11.3,6.7 11.9,2.3 C11.8,2 12,2 12,2 L16.8,2 L17,2 L17,9.00006104 L23.012207,9.00006104 L23.012207,15 L17,15 L17,24.0839844 C17,26.1839844 17.8,27.3 19.8,27.3 C20.6,27.3 21.5,27.1 22.4,26.8 C22.5,26.8 22.6,26.8 22.6,26.9 L24.1,31.3 L24.1,31.7 C23,32.8 20.7,33.6 18.5,33.6 Z"></path>
                            <path class="outer" d="M26.1,32.2 L26.3,31.9 L23.9,25.1 C23.9,25 23.8,25 23.8,25 L19.2,25 C19.1,25 19,25.1 19,25 C18.9,24.8 19,24.4 19,24.1 L19,17 L25,17 L25,7 C25,7 19,7 19,7 L19,0 L8,0 C7.3,0 6.4,0.8 6.3,1.8 C5.8,5.9 4.1,7.5 0.5,8.7 L0.1,8.8 C0,8.9 0,8.9 0,9 L0,17.0000006 C0,17.1000006 0.1,17 0.1,17 L4,17 L4,24.8 C4,31.8 8.46560059,36.0067139 17.3656006,36.0067139 C22.0656006,36.0067139 25,33.7 26.1,32.2 Z M18.5,33.6 L18.3,33.6 C11.1,33.6 9,28.2005493 9,25.0005493 L9,15 C8.58245849,15 4.99298096,15 5,15 L4.99298096,10.0285034 C4.99298096,9.92850342 5.1,9.9 5.2,9.9 C8.9,8.5 11.3,6.7 11.9,2.3 C11.8,2 12,2 12,2 L16.8,2 L17,2 L17,9.00006104 L23.012207,9.00006104 L23.012207,15 L17,15 L17,24.0839844 C17,26.1839844 17.8,27.3 19.8,27.3 C20.6,27.3 21.5,27.1 22.4,26.8 C22.5,26.8 22.6,26.8 22.6,26.9 L24.1,31.3 L24.1,31.7 C23,32.8 20.7,33.6 18.5,33.6 Z"></path>
                            <path class="small-shadow" d="M4,19 L7,19 L7,17.0833333 C7,17 6.9,17 6.9,17 L4,17 L4,19 L4,19 Z" opacity="0.5" fill="#37465D"></path>
                        </g>
                    </svg>
                </a>
                <div class="search-wrapper">
                    <form action="/search" method="get" id="search">
                        <label class="search-field-label">
                            <input type="text" class="search-field" name="q" id="q" placeholder="{lang:Search Blog}" value="{SearchQuery}" autocomplete="off">
                        </label>
                    </form>
                </div>
            </div>
            <div class="header-wrapper
                {block:HideTitle}{block:HideDescription}no-title-desc {/block:HideDescription}{/block:HideTitle}
                {block:HideHeaderImage}no-image {/block:HideHeaderImage}
                {block:HideAvatar}avatar-hidden{/block:HideAvatar}
                {block:ShowAvatar}avatar-style-{AvatarShape}{/block:ShowAvatar}">

                <header id="header">
                    {block:ShowHeaderImage}
                        <div class="header-image-wrapper {block:NoStretchHeaderImage}contain{/block:NoStretchHeaderImage}">
                            <a href="/" class="header-image {block:IfSlidingHeader}parallax{/block:IfSlidingHeader} {block:StretchHeaderImage}cover{/block:StretchHeaderImage} {block:NoStretchHeaderImage}contain{/block:NoStretchHeaderImage}" data-bg-image="{HeaderImage}">
                                {block:NoStretchHeaderImage}
                                <img src="{HeaderImage}" alt="">
                                {/block:NoStretchHeaderImage}
                            </a>
                            <div class="loader-bg"></div>
                        </div>
                    {/block:ShowHeaderImage}

                    <div class="blog-title-wrapper content">
                        <figure class="avatar-wrapper{block:IndexPage} animate{/block:IndexPage}">
                            <a href="/" style="background-image: url({PortraitURL-128})" class="user-avatar"><img src="{PortraitURL-128}" alt="" class="print-only invisible"></a>
                        </figure>

                        <div class="title-group{block:IndexPage} animate{/block:IndexPage}">
                            {block:ShowTitle}
                            <h1 class="blog-title"><a href="/">{Title}</a></h1>
                            {/block:ShowTitle}
                            {block:ShowDescription}
                            <span class="description">
                                {Description}
                            </span>
                            {/block:ShowDescription}

                            {block:IfShowNavigation}
                                <div class="{block:HideTitle}{block:HideDescription}no-title-desc {/block:HideDescription}{/block:HideTitle}nav-wrapper content">
                                    <nav class="nav-menu">
                                        <ul class="inline-nav">
                                            {block:HasPages}
                                                {block:Pages}
                                                <li class="nav-item nav-item--page">
                                                    <a href="{URL}" class="label">{Label}</a>
                                                </li>
                                                {/block:Pages}
                                            {/block:HasPages}
                                            {block:AskEnabled}
                                                <li class="nav-item nav-item--ask">
                                                    <a href="/ask" class="label">{AskLabel}</a>
                                                </li>
                                            {/block:AskEnabled}
                                            {block:SubmissionsEnabled}
                                                <li class="nav-item nav-item--submit">
                                                    <a href="/submit" class="label">{SubmitLabel}</a>
                                                </li>
                                            {/block:SubmissionsEnabled}
                                            {block:Likes}
                                                <li class="nav-item nav-item--likes">
                                                    <a href="/likes" class="label">{lang:Likes}</a>
                                                </li>
                                            {/block:Likes}
                                            <li class="nav-item nav-item--archive">
                                                <a href="/archive" class="label">{lang:Archive}</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            {/block:IfShowNavigation}
                        </div>
                    </div>
                </header>
            </div>

            {block:SearchPage}
                {block:NoSearchResults}
                <div class="search-no-results content">
                    {lang:Sorry no search results found}.
                </div>
                {/block:NoSearchResults}
            {/block:SearchPage}

            {block:LikesPage}
                {block:NoLikes}
                <div class="likes-no-likes content"></div>
                {/block:NoLikes}
            {/block:LikesPage}

            <section id="posts" class="container content clearfix {block:HideTitle}{block:HideDescription}no-title-desc {/block:HideDescription}{/block:HideTitle}{block:HideHeaderImage}no-image {/block:HideHeaderImage} {block:ShowAvatar}avatar-style-{AvatarShape}{/block:ShowAvatar} {block:HideAvatar}avatar-hidden{/block:HideAvatar} {block:IfShowNavigation}show-nav{/block:IfShowNavigation}">

                <div data-page-id="{CurrentPage}">
                    {block:Posts inlineMediaWidth="700" inlineNestedMediaWidth="700"}
                            <article class="{block:Text}text {/block:Text}{block:Photoset}photoset {/block:Photoset}{block:Photo}photo {/block:Photo}{block:RebloggedFrom}reblogged {/block:RebloggedFrom}{block:Quote}quote {/block:Quote}{block:Link}link {/block:Link}{block:Chat}chat {/block:Chat}{block:Audio}audio {/block:Audio}{block:Video}video {/block:Video}{block:Answer}answer {/block:Answer}{block:Date}not-page post-{PostID}{/block:Date} {block:PermalinkPage} active exposed{/block:PermalinkPage} clearfix row" {block:Date}data-post-id="{PostID}"{/block:Date}>

                                {block:Date}
                                    <section class="col-xs-3">
                                        <footer class="post-footer">
                                            {block:IfShowDate}<div class="post-footer-row">{/block:IfShowDate}
                                                <section class="inline-meta date-notes">
                                                    <div class="date-note-wrapper">
                                                        <a href="{Permalink}" title="{TimeAgo}" class="meta-item post-date">
                                                            <h4 class="month">{Month}</h4>{DayOfMonth}{DayOfMonthSuffix}, {Year}</a>

                                                        {block:NoteCount}
                                                            <a href="{Permalink}#notes" class="meta-item post-notes">{NoteCountWithLabel}</a>
                                                        {/block:NoteCount}

                                                        {block:NoteCount}
                                                            <span class="notes-pop-container">
                                                                {block:PermalinkPage}
                                                                    {block:PostNotes}
                                                                        <section id="notes" class="notes-wrapper clearfix">
                                                                            <div class="notes-wrapper-header">
                                                                                <span class="notes-wrapper-header-close">
                                                                                    <svg width="15px" height="15px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                            <path d="M12.510351,14.6860639 L0,27.1964147 L2.175713,29.3721278 L14.686064,16.8617771 L27.196415,29.3721278 L29.372128,27.1964147 L16.861777,14.6860639 L29.372128,2.1757132 L27.196415,0 L14.686064,12.5103507 L2.175713,0 L0,2.1757132 L12.510351,14.6860639 L12.510351,14.6860639 Z" fill="#D3D3D3"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                                {NoteCountWithLabel}
                                                                            </div>
                                                                            {PostNotes-64}
                                                                        </section>
                                                                    {/block:PostNotes}
                                                                {/block:PermalinkPage}
                                                            </span>
                                                        {/block:NoteCount}
                                                    </div>
                                                </section>
                                            {block:IfShowDate}</div>{/block:IfShowDate}

                                            {block:IfShowDate}<div class="post-footer-row">{/block:IfShowDate}
                                                <section class="post-controls">
                                                    <div class="controls-wrapper">
                                                        <div class="control share-control">
                                                            <nav class="pop">
                                                                <a href="#" class="share selector"></a>
                                                                <div class="pop-menu share-menu south" id="share_{PostID}">
                                                                    <ul>
                                                                        <li class="open-in-app"><a href="#" class="share-item open-in-app" data-post="{PostID}">{lang:Open in app}</a></li>
                                                                        <li><a href="http://facebook.com/sharer.php?u={URLEncodedPermalink}&amp;t={URLEncodedTitle}" class="share-item facebook" target="_blank">{lang:Facebook}</a></li>
                                                                        <li><a href="https://twitter.com/intent/tweet?text={URLEncodedTweetSummary}" class="share-item twitter" target="_blank">{lang:Tweet}</a></li>
                                                                        {block:Photo}
                                                                            <li><a href="//www.pinterest.com/pin/create/button/?url={URLEncodedPermalink}&amp;media={PhotoURL-500}" class="share-item pinterest" target="_blank">{lang:Pinterest}</a></li>
                                                                        {/block:Photo}
                                                                        {block:Video}{block:VideoThumbnail}
                                                                            <li><a href="//www.pinterest.com/pin/create/button/?url={URLEncodedPermalink}&amp;media={VideoThumbnailURL}&amp;is_video=true" class="share-item pinterest" target="_blank">{lang:Pinterest}</a></li>
                                                                        {/block:VideoThumbnail}{/block:Video}
                                                                        <li><a href="https://reddit.com/submit?url={URLEncodedPermalink}" class="share-item reddit" target="_blank">{lang:Reddit}</a></li>
                                                                        <li><a href="mailto:?subject={URLEncodedShareString}&amp;body={URLEncodedMailSummary}" class="share-item mail">{lang:Mail}</a></li>
                                                                        <li><a href="{EmbedUrl}" class="share-item permalink">{lang:Embed}</a></li>
                                                                        <li><a href="{Permalink}" class="share-item permalink">{lang:Permalink} <i class="arrow"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </nav>
                                                        </div>
                                                        <div class="control reblog-control">{ReblogButton size="24" color="black"}</div>
                                                        <div class="control like-control">{LikeButton size="24" color="black"}</div>
                                                    </div>
                                                </section>
                                            {block:IfShowDate}</div>{/block:IfShowDate}
                                        </footer>
                                    </section>
                                {/block:Date}

                                <div class="post-wrapper clearfix col-xs-9">

                                    <header class="post-header">
                                        {block:LikesPage}
                                            <a class="post-blog" href="{Permalink}"><img class="blog-avatar" src="{PostBlogPortraitURL-30}">{PostBlogName}</a>
                                        {/block:LikesPage}
                                        {block:RebloggedFrom}
                                            <a class="reblog-link" href="{ReblogParentURL}"><i class="reblog_sm"></i>{ReblogParentName}</a>
                                        {/block:RebloggedFrom}
                                    </header>

                                    <section class="post">
                                        {block:Text}
                                            <div class="post-content">
                                                {block:Title}<h2 class="title"><a href="{Permalink}">{Title}</a></h2>{/block:Title}
                                                {block:Body}
                                                <div class="body-text">
                                                    {Body}
                                                </div>
                                                {/block:Body}
                                            </div>
                                        {/block:Text}

                                        {block:Photo}
                                            <figure class="post-content {block:HighRes}high-res{/block:HighRes}{block:Caption} with-caption{/block:Caption}" data-photo-width="{PhotoWidth-HighRes}">
                                                <div class="photo-wrapper">
                                                    <div class="photo-wrapper-inner">
                                                        {LinkOpenTag}<img src="{PhotoURL-HighRes}" alt="{PhotoAlt}" width="{PhotoWidth-HighRes}" height="{PhotoHeight-HighRes}">{LinkCloseTag}
                                                    </div>
                                                </div>
                                                {block:Caption}
                                                <figcaption class="caption">
                                                    {Caption}
                                                </figcaption>
                                                {/block:Caption}
                                            </figure>
                                        {/block:Photo}

                                        {block:Photoset}
                                            <figure class="post-content photoset {block:Caption}with-caption{/block:Caption}">
                                                {Photoset}
                                                {block:Caption}
                                                <figcaption class="caption">
                                                    {Caption}
                                                </figcaption>
                                                {/block:Caption}
                                            </figure>
                                        {/block:Photoset}

                                        {block:Quote}
                                            <div class="post-content">
                                                <blockquote class="{Length}">
                                                    {Quote}
                                                </blockquote>
                                                {block:Source}
                                                <div class="source">{Source}</div>
                                                {/block:Source}
                                            </div>
                                        {/block:Quote}

                                        {block:Link}
                                            <div class="post-content{block:Description} with-caption{/block:Description}{block:Thumbnail} with-thumbnail{/block:Thumbnail}">
                                                <div class="link-wrapper">
                                                    <a {Target} href="{URL}" class="link">
                                                        {block:Thumbnail}
                                                        <div class="link-thumbnail"><img src="{Thumbnail-HighRes}" alt="" /></div>
                                                        {/block:Thumbnail}
                                                        <div class="link-text-wrapper clearfix">
                                                            <div class="link-text">
                                                                {block:Host}
                                                                <div class="link-host">{Host}</div>
                                                                {/block:Host}
                                                                <h2 class="link-title">{Name}</h2>
                                                                {block:Excerpt}
                                                                <div class="link-excerpt">{Excerpt}</div>
                                                                {/block:Excerpt}
                                                                {block:Author}
                                                                <div class="link-author">{Author}</div>
                                                                {/block:Author}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {block:Description}
                                                <div class="caption">
                                                    {Description}
                                                </div>
                                                {/block:Description}
                                            </div>
                                        {/block:Link}

                                        {block:Chat}
                                            <div class="post-content">
                                                {block:Title}<h2 class="title"><a href="{Permalink}">{Title}</a></h2>{/block:Title}
                                                <ul class="conversation">
                                                {block:Lines}
                                                    <li class="chat-{Alt}">{block:Label}<span class="label">{Label}</span>{/block:Label} {Line}</li>
                                                {/block:Lines}
                                                </ul>
                                            </div>
                                        {/block:Chat}

                                        {block:Audio}
                                            <div class="post-content {block:Caption}with-caption{/block:Caption}">
                                                <div class="audio_container">
                                                    {block:AudioEmbed}
                                                        {AudioEmbed color="white"}
                                                    {/block:AudioEmbed}
                                                </div>
                                                {block:Caption}
                                                <div class="caption">
                                                    {Caption}
                                                </div>
                                                {/block:Caption}
                                            </div>
                                        {/block:Audio}

                                        {block:Video}
                                            <figure class="post-content {block:Caption}with-caption{/block:Caption}">
                                                <div class="video-wrapper">
                                                    {Video-700}
                                                </div>
                                                {block:Caption}
                                                <figcaption class="caption">
                                                    {Caption}
                                                </figcaption>
                                                {/block:Caption}
                                            </figure>
                                        {/block:Video}

                                        {block:Answer}
                                            <div class="post-content">
                                                <div class="note-item note-item-asker">
                                                    <div class="text">
                                                        <p class="asker"><strong>{Asker}</strong> asked:</p>
                                                        <div class="asker-question">
                                                            {Question}
                                                        </div>
                                                    </div>
                                                    <div class="avatar">
                                                        <img class="asker-avatar" src="{AskerPortraitURL-96}" alt="">
                                                    </div>
                                                </div>

                                                {block:Answerer}
                                                <div class="note-item note-item-answerer">
                                                    <div class="text">
                                                        <p class="answerer"><strong>{Answerer}</strong> answered:</p>
                                                        <div class="answerer-answer">
                                                            {Answer}
                                                        </div>
                                                    </div>
                                                    <div class="avatar">
                                                        <img class="answerer-avatar" src="{AnswererPortraitURL-96}" alt="">
                                                    </div>
                                                </div>
                                                {/block:Answerer}

                                                <div class="replies">
                                                    {Replies}
                                                </div>
                                            </div>
                                        {/block:Answer}

                                        <section class="inline-meta post-extra{block:RebloggedFrom} has-reblog{/block:RebloggedFrom}{block:ContentSource} has-source{/block:ContentSource}{block:HasTags} has-tags{/block:HasTags}">
                                            {block:RebloggedFrom}
                                                <a class="meta-item reblog-link" href="{ReblogParentURL}"><i class="reblog_sm"></i>{ReblogParentName}</a>
                                            {/block:RebloggedFrom}
                                            {block:ContentSource}
                                                <a class="meta-item source-link" href="{SourceURL}">{lang:Source}: {SourceTitle}</a>
                                            {/block:ContentSource}
                                            {block:HasTags}
                                                {block:Tags}
                                                     <a class="meta-item tag-link" href="{TagURL}">{Tag}</a>
                                                {/block:Tags}
                                            {/block:HasTags}
                                        </section>

                                    </section>

                                    {block:PermalinkPage}

                                        {block:Date}

                                            {block:IfDisqusShortname}
                                            <section class="comments">
                                                <div id="disqus_thread"></div>
                                                <script type="text/javascript">
                                                  (function() {
                                                   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                                                   dsq.src = 'http://{text:Disqus Shortname}.disqus.com/embed.js';
                                                   (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                                                  })();
                                                </script>
                                                <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript={text:Disqus Shortname}">comments powered by Disqus.</a></noscript>
                                                <a href="http://disqus.com" class="dsq-brlink">blog comments powered by <span class="logo-disqus">Disqus</span></a>
                                            </section>
                                            {/block:IfDisqusShortname}

                                        {/block:Date}

                                    {/block:PermalinkPage}
                                </div>
                            </article>
                    {/block:Posts}
                </div>
            </section>
            {block:IfRelatedPosts}
                {block:RelatedPosts}
                    <section class="related-posts-wrapper">
                        <h2>{lang:More you might like}</h2>
                        <div class="related-posts grid">
                        {block:Posts inlineMediaWidth="700" inlineNestedMediaWidth="700"}
                                <article class="{block:Text}text {/block:Text}{block:Photoset}photoset {/block:Photoset}{block:Photo}photo {/block:Photo}{block:RebloggedFrom}reblogged {/block:RebloggedFrom}{block:Quote}quote {/block:Quote}{block:Link}link {/block:Link}{block:Chat}chat {/block:Chat}{block:Audio}audio {/block:Audio}{block:Video}video {/block:Video}{block:Answer}answer {/block:Answer}{block:Date}not-page post-{PostID}{/block:Date} {block:PermalinkPage} active exposed{/block:PermalinkPage}" {block:Date}data-post-id="{PostID}"{/block:Date}>
                                    <div class="post-wrapper clearfix">
                                        {block:RebloggedFrom}
                                        <header class="post-header">
                                            <a class="reblog-link" href="{ReblogParentURL}"><i class="reblog-icon"></i>{ReblogParentName}</a>
                                        </header>
                                        {/block:RebloggedFrom}
                                        <section class="post">
                                            {block:Text}
                                            <div class="post-content">
                                                {block:Title}<h2 class="title"><a href="{Permalink}">{Title}</a></h2>{/block:Title}
                                                {block:Body}
                                                <div class="body-text">
                                                    {Body}
                                                </div>
                                                {/block:Body}
                                            </div>
                                            {/block:Text}

                                            {block:Photo}
                                            <figure class="post-content {block:HighRes}high-res{/block:HighRes}{block:Caption} with-caption{/block:Caption}" data-photo-width="{PhotoWidth-HighRes}">
                                                <div class="photo-wrapper">
                                                    <div class="photo-wrapper-inner">
                                                        <a href="{Permalink}"><img src="{PhotoURL-HighRes}" alt="{PhotoAlt}" width="{PhotoWidth-HighRes}" height="{PhotoHeight-HighRes}"></a>
                                                    </div>
                                                </div>
                                                {block:Caption}
                                                <figcaption class="caption">
                                                    {Caption}
                                                </figcaption>
                                                {/block:Caption}
                                            </figure>
                                            {/block:Photo}

                                            {block:Photoset}
                                            <figure class="post-content photoset {block:Caption}with-caption{/block:Caption}">
                                                {Photoset}
                                                {block:Caption}
                                                <figcaption class="caption">
                                                    {Caption}
                                                </figcaption>
                                                {/block:Caption}
                                            </figure>
                                            {/block:Photoset}

                                            {block:Quote}
                                            <div class="post-content">
                                                <blockquote class="{Length}">
                                                    {Quote}
                                                </blockquote>
                                                {block:Source}
                                                <div class="source">{Source}</div>
                                                {/block:Source}
                                            </div>
                                            {/block:Quote}


                                            {block:Link}
                                            <div class="post-content{block:Description} with-caption{/block:Description}{block:Thumbnail} with-thumbnail{/block:Thumbnail}">
                                                <div class="link-wrapper">
                                                    <a {Target} href="{URL}" class="link">
                                                        {block:Thumbnail}
                                                        <div class="link-thumbnail"><img src="{Thumbnail-HighRes}" alt="" /></div>
                                                        {/block:Thumbnail}
                                                        <div class="link-text-wrapper clearfix">
                                                            <div class="link-text">
                                                                {block:Host}
                                                                <div class="link-host">{Host}</div>
                                                                {/block:Host}
                                                                <h2 class="link-title">{Name}</h2>
                                                                {block:Excerpt}
                                                                <div class="link-excerpt">{Excerpt}</div>
                                                                {/block:Excerpt}
                                                                {block:Author}
                                                                <div class="link-author">{Author}</div>
                                                                {/block:Author}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {block:Description}
                                                <div class="caption">
                                                    {Description}
                                                </div>
                                                {/block:Description}
                                            </div>
                                            {/block:Link}

                                            {block:Chat}
                                            <div class="post-content">
                                                {block:Title}<h2 class="title"><a href="{Permalink}">{Title}</a></h2>{/block:Title}
                                                <ul class="conversation">
                                                {block:Lines}
                                                    <li class="chat-{Alt}">{block:Label}<span class="label">{Label}</span>{/block:Label} {Line}</li>
                                                {/block:Lines}
                                                </ul>
                                            </div>
                                            {/block:Chat}

                                            {block:Audio}
                                            <div class="post-content {block:Caption}with-caption{/block:Caption}">
                                                <div class="audio_container">
                                                    {block:AudioEmbed}
                                                        {AudioEmbed color="white"}
                                                    {/block:AudioEmbed}
                                                </div>
                                                {block:Caption}
                                                <div class="caption">
                                                    {Caption}
                                                </div>
                                                {/block:Caption}
                                            </div>
                                            {/block:Audio}

                                            {block:Video}
                                            <figure class="post-content {block:Caption}with-caption{/block:Caption}">
                                                <div class="video-wrapper">
                                                    {Video-700}
                                                </div>
                                                {block:Caption}
                                                <figcaption class="caption">
                                                    {Caption}
                                                </figcaption>
                                                {/block:Caption}
                                            </figure>
                                            {/block:Video}

                                            {block:Answer}
                                            <div class="post-content">
                                                <div class="note-item note-item-asker">
                                                    <div class="text">
                                                        <p class="asker"><strong>{Asker}</strong> asked:</p>
                                                        <div class="asker-question">
                                                            {Question}
                                                        </div>
                                                    </div>
                                                    <div class="avatar">
                                                        <img class="asker-avatar" src="{AskerPortraitURL-96}" alt="">
                                                    </div>
                                                </div>

                                                {block:Answerer}
                                                <div class="note-item note-item-answerer">
                                                    <div class="text">
                                                        <p class="answerer"><strong>{Answerer}</strong> answered:</p>
                                                        <div class="answerer-answer">
                                                            {Answer}
                                                        </div>
                                                    </div>
                                                    <div class="avatar">
                                                        <img class="answerer-avatar" src="{AnswererPortraitURL-96}" alt="">
                                                    </div>
                                                </div>
                                                {/block:Answerer}

                                                <div class="replies">
                                                    {Replies}
                                                </div>
                                            </div>
                                            {/block:Answer}

                                            <section class="inline-meta post-extra{block:RebloggedFrom} has-reblog{/block:RebloggedFrom}{block:ContentSource} has-source{/block:ContentSource}{block:HasTags} has-tags{/block:HasTags}">
                                                {block:RebloggedFrom}
                                                    <a class="meta-item reblog-link" href="{ReblogParentURL}"><i class="reblog_sm"></i>{ReblogParentName}</a>
                                                {/block:RebloggedFrom}
                                                {block:ContentSource}
                                                    <a class="meta-item source-link" href="{SourceURL}">{lang:Source}: {SourceTitle}</a>
                                                {/block:ContentSource}
                                                {block:HasTags}
                                                    {block:Tags}
                                                         <a class="meta-item tag-link" href="{TagURL}">{Tag}</a>
                                                    {/block:Tags}
                                                {/block:HasTags}
                                            </section>

                                        </section>

                                        {block:Date}
                                        <section class="panel">
                                            <footer class="post-footer">
                                                <section class="inline-meta date-notes">
                                                    <div class="date-note-wrapper">
                                                        {block:NoteCount}
                                                            <a href="{Permalink}#notes" class="meta-item post-notes">{NoteCountWithLabel}</a>
                                                        {/block:NoteCount}
                                                    </div>
                                                </section>

                                                <section class="post-controls">
                                                    <div class="controls-wrapper">
                                                        <div class="control share-control">
                                                            <nav class="pop">
                                                                <a href="#" class="share selector"></a>
                                                                <div class="pop-menu share-menu south" id="share_{PostID}">
                                                                    <ul>
                                                                        <li class="open-in-app"><a href="#" class="share-item open-in-app" data-post="{PostID}">{lang:Open in app}</a></li>
                                                                        <li><a href="http://facebook.com/sharer.php?u={URLEncodedPermalink}&amp;t={URLEncodedTitle}" class="share-item facebook" target="_blank">{lang:Facebook}</a></li>
                                                                        <li><a href="https://twitter.com/intent/tweet?text={URLEncodedTweetSummary}" class="share-item twitter" target="_blank">{lang:Tweet}</a></li>
                                                                        {block:Photo}
                                                                            <li><a href="//www.pinterest.com/pin/create/button/?url={URLEncodedPermalink}&amp;media={PhotoURL-500}" class="share-item pinterest" target="_blank">{lang:Pinterest}</a></li>
                                                                        {/block:Photo}
                                                                        {block:Video}{block:VideoThumbnail}
                                                                            <li><a href="//www.pinterest.com/pin/create/button/?url={URLEncodedPermalink}&amp;media={VideoThumbnailURL}&amp;is_video=true" class="share-item pinterest" target="_blank">{lang:Pinterest}</a></li>
                                                                        {/block:VideoThumbnail}{/block:Video}
                                                                        <li><a href="https://reddit.com/submit?url={URLEncodedPermalink}" class="share-item reddit" target="_blank">{lang:Reddit}</a></li>
                                                                        <li><a href="mailto:?subject={URLEncodedShareString}&amp;body={URLEncodedMailSummary}" class="share-item mail">{lang:Mail}</a></li>
                                                                        <li><a href="{EmbedUrl}" class="share-item permalink">{lang:Embed}</a></li>
                                                                        <li><a href="{Permalink}" class="share-item permalink">{lang:Permalink} <i class="arrow"></i></a></li>
                                                                    </ul>
                                                                </div>
                                                            </nav>
                                                        </div>
                                                        <div class="control reblog-control">{ReblogButton size="24" color="black"}</div>
                                                        <div class="control like-control">{LikeButton size="24" color="black"}</div>
                                                    </div>
                                                </section>
                                            </footer>
                                        </section>
                                        {/block:Date}
                                    </div>
                                </article>
                        {/block:Posts}
                        </div>
                        <div class="related-posts-cta content">
                            <!-- @todo: translate these strings -->
                            <a class="related-post-cta button bordered open-in-app">{lang:See this in the app}</a>
                            <a class="related-post-cta see-more button bordered" href="/">{lang:Show more}</a>
                        </div>
                    </section>
                {/block:RelatedPosts}
            {/block:IfRelatedPosts}
            <footer id="footer" class="content clearfix">
                {block:IndexPage}
                    {block:Pagination}
                    <div id="pagination">
                        {block:PreviousPage}
                        <a href="{PreviousPage}" class="previous" data-current-page="{CurrentPage}" data-total-pages="{TotalPages}">{lang:Previous}<span class="bg"></span></a>
                        {/block:PreviousPage}
                        {block:NextPage}
                        <a href="{NextPage}" class="next" data-current-page="{CurrentPage}" data-total-pages="{TotalPages}">{lang:Next}<span class="bg"></span></a>
                        {/block:NextPage}
                        <div class="loader"><div class="loader-bar"></div><div class="loader-bar"></div><div class="loader-bar"></div></div>
                    </div>
                    {/block:Pagination}
                {/block:IndexPage}
            </footer>
        </section>
        <script>
            var Optica = {};
            Optica.ENDLESS_SCROLLING = {block:IfEndlessScrolling}true{/block:IfEndlessScrolling}{block:IfNotEndlessScrolling}false{/block:IfNotEndlessScrolling};
            Optica.LAYOUT = "{select:Layout}";
            Optica.GRID_LAYOUT = (Optica.LAYOUT === 'grid');
            Optica.TITLE_COLOR = "{TitleColor}";
            Optica.ACCENT_COLOR = "{AccentColor}";
            Optica.BACKGROUND_COLOR = "{BackgroundColor}";
            Optica.RELATED_POSTS_CTA_VARIANTS = [
               {
                   variant: "C",
                   text: "{lang:Open In App CTA C}"
               },
               {
                   variant: "D",
                   text: "{lang:Open In App CTA D}"
               },
               {
                   variant: "E",
                   text: "{lang:Open In App CTA E}"
               }
            ];
            Optica.NO_LIKES_VARIANTS = [
                "{lang:This Tumblr hasnt liked any posts yet}",
                "{lang:This Tumblr doesnt like anything yet}",
                "{lang:No likes Sheesh}",
                "{lang:Amazing This Tumblr doesnt like anything}",
                "{lang:Incredible This Tumblr doesnt like anything}",
                "{lang:Neat This Tumblr doesnt like anything}",
                "{lang:Ta-da No likes}",
                "{lang:Plink The sound of no likes}",
                "{lang:Apparently this Tumblr is hard to please}",
                "{lang:Wow This Tumblr hasnt liked anything ever}",
                "{lang:This Tumblr hasnt liked anything yet How very intriguing}",
                "{lang:This Tumblr has never met a post it didnt not like}",
                "{lang:No likes here Just a howling wind}",
                "{lang:Swoosh No likes}"
            ];
        </script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>!window.jQuery && document.write(unescape('%3Cscript src="http://static.tumblr.com/vr9xgox/sBgmmjhyw/jquery-1.9.1.min.js"%3E%3C/script%3E'));</script>
        <script src="http://static.tumblr.com/27gzhx7/qqfo4iduk/main-min.js"></script>

        {block:IfGoogleAnalyticsID}
            <script>
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
              ga('create', '{text:Google Analytics ID}', 'auto');
              ga('send', 'pageview');
            </script>
        {/block:IfGoogleAnalyticsID}

        {block:IfRelatedPosts}
            {block:RelatedPosts}
                <script src="https://secure.static.tumblr.com/t1owtkf/bSAnvroul/jquery.waypoints.min.js" type="text/javascript"></script>
                <script type="text/javascript">
                    $(function() {
                        var trackingPixels = {TrackingPixels};

                        var analytics_frame = document.getElementById('ga_target');
                        var analytics_iframe_loaded;
                        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
                        var eventer = window[eventMethod];
                        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
                        eventer(messageEvent,function(e) {
                            var message = (e.data && e.data.split) ? e.data.split(';') : '';
                            if (message[0] == 'analytics_iframe_loaded') {
                                analytics_iframe_loaded = true;
                            }
                        });

                        $('.related-posts > article').waypoint(function() {
                            if (!analytics_iframe_loaded) {
                                return;
                            }

                            var post_id = $(this.element).data('post-id');
                            if (typeof trackingPixels[post_id] == 'undefined' || !trackingPixels[post_id]) {
                                return;
                            }

                            var trackingPixel = trackingPixels[post_id];

                            analytics_frame.contentWindow.postMessage(
                                ['tick_related_post', trackingPixel].join(';'),
                                analytics_frame.src.split('/analytics.html')[0]
                            );

                            trackingPixels[post_id] = null;
                        }, {
                            offset: '100%'
                        });
                    });
                </script>
            {/block:RelatedPosts}
        {/block:IfRelatedPosts}

        {block:IfSyntaxHighlighting}
            <script type="text/javascript" src="http://static.tumblr.com/ehm1tdz/Mhunye5t3/highlight.pack.js"/></script>
            <script type="text/javascript">
                (function($) {
                    $(document).ready(function() {
                        $('.post-content pre code').each(function(i, block) {
                            hljs.highlightBlock(block);
                        });
                    });
                })(window.jQuery);
            </script>
        {/block:IfSyntaxHighlighting}
    </body>
</html>