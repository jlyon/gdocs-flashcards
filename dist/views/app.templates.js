angular.module('311AppParent').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/analytics/analytics.html',
    "<a class=\"btn btn-primary btn-lg pull-right\" href=\"https://analytics.google.com/analytics/web\" role=\"button\" target=\"_blank\">View on Google Analytics &raquo;</a><h2>Google Analytics <small>Last 30 days</small></h2><div class=\"alert alert-warning fade in\" ng-if=\"demo\"><p>It looks like you haven't finished setting up Analytics, so we're showing you example data below. There are three steps to setting up your Analytics, which can be completed in less than five mintues.<br><br></p><a class=\"btn btn-primary btn-lg\" ui-sref=\"site.settingsAnalytics({siteId: site._id})\"><i class=\"fa fa-fw fa-cog\"></i>Configure ProudCity Analytics</a></div><ng-analytics-auth service-auth-token=\"{{config.token}}\"></ng-analytics-auth><div class=\"row\"><div class=\"col-md-12\"><ng-analytics-chart chart=\"charts.sessions\" auth-container=\"embed-api-auth-container\"></ng-analytics-chart></div></div><div class=\"row\"><div class=\"col-md-3 col-sm-6\"><h3>Sessions <small>Number of visitors</small></h3></div><div class=\"col-md-3 col-sm-6\"><h3>ProudScore <small>Your digital reach to citizens</small></h3></div><div class=\"col-md-3 col-sm-6\"><h3>Submissions <small>Online forms submitted</small></h3></div><div class=\"col-md-3 col-sm-6\"><h3>Hearts <small>Pages marked as Helpful</small></h3></div></div>-<div class=\"row\"><div class=\"col-md-6\"><h3>Popular Pages <small>By page views</small></h3><ng-analytics-chart chart=\"charts.pagelist\" auth-container=\"embed-api-auth-container\"></ng-analytics-chart></div><div class=\"col-md-6\"><h3>Popular Searches <small>By autocomplete clicks</small></h3><ng-analytics-chart chart=\"charts.searchlist\" auth-container=\"embed-api-auth-container\"></ng-analytics-chart></div></div><div class=\"row\"><div class=\"col-md-6\"><h3>Device <small>By sessions</small></h3><ng-analytics-chart chart=\"charts.devices\" auth-container=\"embed-api-auth-container\"></ng-analytics-chart></div><div class=\"col-md-6\"><h3>Browsers <small>By sessions</small></h3><ng-analytics-chart chart=\"charts.browsers\" auth-container=\"embed-api-auth-container\"></ng-analytics-chart></div></div><div class=\"row\"><div class=\"col-md-6\"><h3>Popular Answers Categories <small>By clicks</small></h3><ng-analytics-chart chart=\"charts.answerscategorylist\" auth-container=\"embed-api-auth-container\"></ng-analytics-chart></div><div class=\"col-md-6\"><h3>Popular Answers <small>By pageviews</small></h3><ng-analytics-chart chart=\"charts.answerslist\" auth-container=\"embed-api-auth-container\"></ng-analytics-chart></div></div><style>small {\n" +
    "        display: block;\n" +
    "        padding-top: 2px;\n" +
    "    }</style>"
  );


  $templateCache.put('views/analytics/analyticsSettings.html',
    "<h2>Set up Analytics</h2><form ng-submit=\"submit(form)\"><div class=\"form-group row\"><div class=\"col-md-6\"><label for=\"emails\">1. Tracking ID:</label><input type=\"text\" ng-model=\"form.tracking_id\" class=\"form-control\" required></div><div class=\"col-md-6\"><p class=\"text-muted\"><ol><li>Login to Google Analytics</li><li>Create a new Account and/or Property, if necessary</li><li>Click on Admin, select your Account and Property</li><li>In the Property (middle) column, under Tracking Info, click Tracking Code</li><li>Copy the Tracking ID. It will typically start with <code>UA-</code></li></ol></p></div></div><hr><div class=\"form-group row\"><div class=\"col-md-6\"><label for=\"emails\">2. View ID:</label><input type=\"text\" ng-model=\"form.view_id\" class=\"form-control\" required></div><div class=\"col-md-6\"><p class=\"text-muted\"><ol><li>Click on Admin, select your Account and Property</li><li>In the View (third) column, click on View Settings</li><li>Copy the View ID. It will be an 8-10 character number.</li></ol></p></div></div><hr><div class=\"form-group row\"><div class=\"col-md-6\"><p>3. Add the ProudCity user</p><label for=\"emails\"><input type=\"checkbox\" ng-model=\"form.added_account\" required>I have added the ProudCity robot user to my Analytics account</label></div><div class=\"col-md-6\"><p class=\"text-muted\"><ol><li>Click on Admin, select your Account</li><li>In the Account (first) column, click User Management</li><li>Add the ProudCity robot account <strong>analytics@my-proudcity.iam.gserviceaccount.com</strong> with <strong>Read &amp; Analyze</strong> access</li></ol></p></div></div><input type=\"submit\" class=\"btn btn-primary\" value=\"Save\"></form>"
  );


  $templateCache.put('views/apps/311App/app-311-wrap.html',
    "<div class=\"app-wrap\"><div class=\"action-box\" id=\"wrapper-311\"><div class=\"row\"><div menu></div><div class=\"col-sm-12 content-contain\"><div class=\"body-content animation-wrap\"><div id=\"main-311\" class=\"main-311 transform clearfix\" ui-view></div></div></div></div></div></div>"
  );


  $templateCache.put('views/apps/311App/faq/faq-child-answers.html',
    "<div ng-repeat=\"node in nodes\" class=\"panel\" ng-class=\"{active: activeSlug == node.slug}\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><a href=\"\" ui-sref=\"city.faq.child.answers({postSlug: node.slug})\" ng-bind-html=\"node.title.rendered\"></a></h3></div><div class=\"panel-body\" ng-show=\"activeSlug == node.slug\"><div ng-bind-html=\"node.content.rendered | absoluteUrlFilter\"></div><div proudcity-get-involved></div><p ng-if=\"node.field_faq_link\"><a href=\"\" ng-href=\"{{node.field_faq_link.url}}\" class=\"btn btn-primary\">{{node.field_faq_link.title}} &raquo;</a></p><a class=\"btn btn-default btn-xs\" ng-class=\"{active : node.hearted}\" href=\"#\" ng-click=\"heartClick(node, $event)\" title=\"This makes me proud\"><i class=\"fa fa-fw fa-heart\"></i> Helpful</a></div></div><div main-toggle=\"slide-left\" main-toggle-force=\"add\" main-toggle-enter=\"true\"></div>"
  );


  $templateCache.put('views/apps/311App/faq/faq-child.html',
    "<search></search><ol class=\"breadcrumb clean\"><li><a href=\"\" main-toggle=\"slide-left\"><i class=\"fa fa-th\"></i><span class=\"sr-only\">Select category</span></a></li><li class=\"active\"><i class=\"fa fa-search\"></i> Find Answer</li></ol><div class=\"row\"><div class=\"col-sm-9\"><div class=\"panel-group\" ui-view></div></div><div class=\"col-sm-3\"><h5 ng-bind-html=\"activeParent.name\"></h5><ul class=\"nav nav-pills nav-stacked\"><li ng-repeat=\"item in terms | termsByParent:activeParent.id | orderBy: 'weight'\" ng-class=\"item.id == activeTerm.id ? 'active' : ''\"><a href=\"\" ui-sref=\"city.faq.child.answers({slug: item.slug, postSlug: 'list'})\" ng-bind-html=\"item.name\"></a></li></ul></div></div>"
  );


  $templateCache.put('views/apps/311App/faq/faq.html',
    "<div class=\"slide-left-2 column\"><search></search><ol class=\"breadcrumb clean\"><li class=\"active\"><i class=\"fa fa-th\"></i> Select answer type</li></ol><dl class=\"angular-311-2col\"><dd ng-repeat=\"item in terms | termsNoParent:$root.categories\" class=\"col-sm-6 col-md-4\" ng-class=\"{'active' : item.slug == active.slug, 'expanded': $root.displayExpanded('answers')}\"><h4><a ng-click=\"open(item)\" href=\"\" ng-click=\"open(item)\"><i ng-if=\"item.description\" class=\"fa {{item.description}}\"></i><span ng-bind-html=\"item.name\"></span></a></h4><div class=\"animation-wrap\"><div class=\"slidedown\" ng-if=\"active.id == item.id || $root.displayExpanded('answers')\"><!-- @todo: ng-repeat=\"child in terms | filter: { parent: [{slug: item.slug}] } |  orderBy: 'weight'\" --><ul class=\"taxonomy-vocabulary-2col\"><li ng-repeat=\"child in terms | termsByParent:item.id\"><a main-toggle=\"slide-left\" href=\"\" ui-sref=\"city.faq.child.answers({slug: child.slug, nid: 'list'})\" ng-bind-html=\"child.name\"></a></li></ul></div></div></dd></dl></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/issues/issue-create-categories.html',
    "<div class=\"slide-left-2\"><search></search><ol class=\"breadcrumb clean\"><li class=\"active\"><i class=\"fa fa-th\"></i> Select issue type</li></ol><dl class=\"angular-311-2col\"><dd ng-repeat=\"item in types\" class=\"col-sm-6 col-md-4\"><h4><a ng-if=\"service !== 'seeclickfix' && item.meta.issue_category_type === 'link'\" ng-href=\"{{item.meta.url}}\" target=\"_blank\"><i ng-if=\"item.meta.icon\" class=\"fa {{item.meta.icon}}\"></i> <span ng-bind-html=\"item.title.rendered\"></span></a> <a ng-if=\"service !== 'seeclickfix' && (item.meta.issue_category_type === 'iframe' || item.meta.issue_category_type === 'form')\" main-toggle=\"slide-left\" href=\"#\" ui-sref=\"city.report.iframe({slug: item.slug})\"><i ng-if=\"item.meta.icon\" class=\"fa {{item.meta.icon}}\"></i> <span ng-bind-html=\"item.title.rendered\"></span></a> <a ng-if=\"service === 'seeclickfix'\" main-toggle=\"slide-left\" href=\"#\" ui-sref=\"city.report.map({type: item.id})\"><i ng-if=\"item.icon\" class=\"fa fa-{{item.icon}}\"></i> <span ng-bind-html=\"item.title\"></span></a></h4></dd></dl></div><div class=\"animation-wrap slide-left-2\"><div id=\"main-311-1\" class=\"main-311 transform clearfix quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/issues/issue-create-details.html',
    "<search></search><ol class=\"breadcrumb clean\"><li><a href=\"\" ui-sref=\"city.report\" main-toggle=\"slide-left\"><i class=\"fa fa-th\"></i></a></li><li><a href=\"\" main-toggle-nest=\"1\" main-toggle=\"slide-left\"><i class=\"fa fa-map-marker\"></i></a></li><li class=\"active\"><i class=\"fa fa-file-text-o\"></i>Provide details</li></ol><form role=\"form\" ng-submit=\"submit(form);\"><div class=\"container-flud\"><div class=\"form-group row\"><label class=\"control-label col-sm-2\" for=\"email\">Category:</label><div class=\"col-sm-10\"><strong>{{form.category}}</strong></div></div><div class=\"form-group row\" ng-if=\"form.address\"><label class=\"control-label col-sm-2\" for=\"email\">Address:</label><div class=\"col-sm-10\"><strong>{{form.address}}</strong></div></div><div class=\"row\" ng-if=\"errors\"><div class=\"col-sm-12\"><div class=\"alert alert-danger\" role=\"alert\" ng-bind-html=\"errors\"></div></div></div><div class=\"form-group row\" ng-repeat=\"field in fields\" style=\"clear:both\"><label class=\"control-label col-sm-2\" for=\"{{field.primary_key}}\"><span ng-if=\"field.question_type != 'note'\">{{field.question}}</span> <span ng-if=\"field.response_required\" class=\"required\">*</span></label><div class=\"col-sm-10\"><span ng-if=\"field.question_type == 'note'\" class=\"description\">{{field.question}}</span><textarea ng-model=\"form.answers[field.primary_key]\" rows=\"2\" ng-if=\"field.question_type == 'textarea'\"></textarea><input type=\"{{field.question_type}}\" ng-if=\"field.question_type != 'textarea' && field.question_type != 'note'\" class=\"form-control\" ng-model=\"form.answers[field.primary_key]\"></div></div><div ng-if=\"form.guest\"><div class=\"form-group row\"><label class=\"control-label col-sm-2\" for=\"name\">Name:</label><div class=\"col-sm-10\"><input type=\"textfield\" name=\"email\" id=\"name\" class=\"form-control\" ng-model=\"form.name\"><div class=\"description\">This will be publicly visible</div></div></div><div class=\"form-group row\"><label class=\"control-label col-sm-2\" for=\"email\">Email:</label><div class=\"col-sm-10\"><input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"form.email\"></div></div></div><!-- /if --><div class=\"form-group row\"><div class=\"col-sm-offset-2 col-sm-10\"><button type=\"submit\" class=\"btn btn-primary\">{{submitLabel}}</button>&nbsp;&nbsp; <a ng-if=\"guestAllowed && !form.guest\" href=\"\" ng-click=\"toggleGuest($event)\">Submit as Guest</a> <a ng-if=\"guestAllowed && form.guest\" href=\"\" ng-click=\"toggleGuest($event);submit(form);\">SeeClickFix Account</a><!--Note: This is an example form that will not actually submit--></div></div></div></form><div main-toggle=\"slide-left\" main-toggle-nest=\"1\" main-toggle-force=\"add\" main-toggle-enter=\"true\"></div>"
  );


  $templateCache.put('views/apps/311App/issues/issue-create-iframe.html',
    "<div class=\"slide-left-2\"><search></search><ol class=\"breadcrumb clean\"><li><a ui-sref=\"city.report\" main-toggle=\"slide-left\"><i class=\"fa fa-th\"></i></a></li><li class=\"active\"><i class=\"fa fa-file-text-o\"></i> Provide <span class=\"hidden-xs\" ng-bind-html=\"post.title.rendered\"></span> details</li></ol><div ng-bind-html=\"post.content.rendered\"></div><iframe ng-src=\"{{trustSrc(post)}}\" style=\"border:none;height:1500px;width:100%\"></iframe></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div><div main-toggle=\"slide-left\" main-toggle-force=\"add\" main-toggle-enter=\"true\"></div>"
  );


  $templateCache.put('views/apps/311App/issues/issue-create-map.html',
    "<div class=\"slide-left-2\"><search></search><ol class=\"breadcrumb clean\"><li><a ui-sref=\"city.report\" main-toggle=\"slide-left\"><i class=\"fa fa-th\"></i></a></li><li class=\"active\"><i class=\"fa fa-map-marker\"></i> Add location</li></ol><a href=\"\" main-toggle=\"slide-left\" main-toggle-nest=\"1\" class=\"ol-next btn btn-primary btn-sm\" ng-class=\"{'disabled': !marker}\" ng-click=\"next()\">Next <i class=\"fa fa-arrow-right\"></i></a><div id=\"issue-map\" style=\"height: 400px\"></div><a href=\"\" main-toggle=\"slide-left\" main-toggle-nest=\"1\" class=\"btn-next btn btn-primary btn-sm pull-right\" ng-class=\"{'disabled': !marker}\" ng-click=\"next()\">Next <i class=\"fa fa-arrow-right\"></i></a></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div><div main-toggle=\"slide-left\" main-toggle-force=\"add\" main-toggle-enter=\"true\"></div>"
  );


  $templateCache.put('views/apps/311App/issues/issue-status-result.html',
    "<search></search><ol class=\"breadcrumb clean\"><li><a href=\"\" main-toggle=\"slide-left\"><i class=\"fa fa-search\"></i></a></li><li class=\"active\"><i class=\"fa fa-file-text-o\"></i> Examine details</li></ol><div class=\"row\" ng-if=\"saved\"><div class=\"col-sm-12\"><div class=\"alert alert-success\" role=\"alert\"><p>Your issue has been successfully posted. You will recieve email alerts as it gets resolved. You can track the status of your issue request online at <a href=\"{{currentUrl}}\" ui-href=\"{{currentUrl}}\">{{currentUrl}}</a>.</p><p ng-if=\"saved == 2 && showLocalCheckbox\">For your convenience, your issue requests automatically appear on the Issue Status tab<br><label for=\"no-remember\"><input type=\"checkbox\" id=\"no-remember\" name=\"no-remember\" ng-click=\"toggleSave()\"> Do not remember me</label></p></div></div></div><div class=\"row text-center\" ng-if=\"loading\"><i class=\"fa fa-refresh fa-spin fa-3x fa-fw\" aria-hidden=\"true\"></i> <span class=\"sr-only\">Loading...</span></div><div class=\"row\" ng-if=\"!loading\"><div class=\"col-sm-3\"><h4 class=\"track-status status-{{item.status}}\">{{item.status}}</h4><p><div>Created: {{item.created_at | date:'MMM d yyyy'}}</div><div ng-if=\"item.updated_at != item.created_at\">Last updated: {{item.updated_at | date:'MMM d yyyy'}}</div><div ng-if=\"item.updated_at == item.created_at\">Not yet updated</div></p><p><a href=\"{{currentUrl}}\" ui-href=\"{{currentUrl}}\">Tracking code: {{item.id}}</a></p></div><div class=\"col-sm-6 col-md-5\"><h2 class=\"margin-top-none\">{{item.summary}}</h2><h6><a href=\"\" ng-href=\"http://maps.google.com/maps?z=12&t=m&q=loc:{{item.lat}}+{{item.lng}}\" target=\"_blank\"><i class=\"fa fa-map-marker\"></i> {{item.address}}</a></h6><p>{{item.description}}</p></div><div class=\"col-sm-3 col-md-4\"><img src=\"{{item.media_url}}\" class=\"img-responsive\"></div></div><div class=\"row\" ng-if=\"!loading && error\"><div class=\"col-sm-3\"><p>Sorry, we could not find any issues with the tracking code {{code}}.</p></div></div><div main-toggle=\"slide-left\" main-toggle-force=\"add\" main-toggle-enter=\"true\"></div>"
  );


  $templateCache.put('views/apps/311App/issues/issue-status.html',
    "<div class=\"slide-left-2 issue-status\"><search></search><ol class=\"breadcrumb clean\"><li class=\"active\"><i class=\"fa fa-search\"></i> Lookup service request</li></ol><div class=\"row\"><div class=\"col-xs-12\"><form class=\"form-inline\"><div class=\"form-group\"><label for=\"lookup\">Issue code</label><input type=\"text\" class=\"form-control\" id=\"lookup\" ng-model=\"lookup\" placeholder=\"Try '1'\"></div><a class=\"btn btn-primary\" main-toggle=\"slide-left\" ui-sref=\"city.status.item({code: lookup})\">Lookup</a></form></div></div><div class=\"row issue-status-tabs\"><div class=\"col-sm-4 col-md-3\"><ul class=\"nav nav-pills nav-stacked\"><li role=\"presentation\" ng-class=\"{'active': activeTab == 'me'}\" ng-if=\"myIssues !== -1\"><a href=\"#\" ng-click=\"tabClick('me', $event)\"><i class=\"fa fa-fw fa-user\"></i> My issues</a></li><li role=\"presentation\" ng-class=\"{'active': activeTab == 'recent'}\"><a href=\"#\" ng-click=\"tabClick('recent', $event)\"><i class=\"fa fa-fw fa-clock-o\"></i> Recently in {{city}}</a></li><li role=\"presentation\" ng-if=\"showMap\"><a href=\"#\" ng-click=\"clickMap($event)\"><i class=\"fa fa-fw fa-map\"></i> Map</a></li></ul></div><div class=\"col-md-8 tab-content\"><div ng-if=\"activeTab == 'me'\"><div ng-if=\"!myIssues\"><p>We do not have a record of any reported issues on this device. Search your email for your Issue Code and enter it in the box above.</p><p><a class=\"btn btn-default\" href=\"#\" ui-sref=\"city.report\"><i class=\"fa fa-fw fa-exclamation-triangle\"></i> Report an issue</a></p></div><ul ng-if=\"myIssues\" class=\"title-list list-unstyled\"><li ng-repeat=\"item in myIssues\" ui-sref=\"city.status.item({code: item.id})\" class=\"teaser-mini\"><h4><a href=\"\" ui-sref=\"city.status.item({code: item.id})\">{{item.title}} <small>{{item.id}}</small></a></h4><p><span class=\"pull-right text-muted\">{{item.created_at | date:'MMM d yyyy'}}</span> <span class=\"text-muted\">{{item.address}}</span></p></li></ul></div><ul ng-if=\"activeTab == 'recent'\" class=\"title-list list-unstyled\"><li ng-repeat=\"item in recentIssues\" ui-sref=\"city.status.item({code: item.id})\" class=\"teaser-mini\"><img ng-if=\"item.thumb\" ng-src=\"{{ issueThumb(item) }}\" class=\"pull-right\"> <span class=\"pull-right track-status status-open\">open</span><h6><a href=\"\" ui-sref=\"city.status.item({code: item.id})\">{{item.title}}</a></h6><p><span class=\"text-muted pull-right\">{{item.created_at | date:'MMM d yyyy'}}</span> <span class=\"text-muted\">{{item.address}}</span></p></li></ul></div><!-- /row --></div></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/local/local-address.html',
    "<div class=\"slide-left-2 column\" style=\"{{bgStyle}}\"><search></search><ol class=\"breadcrumb clean\"><li class=\"active\"><i class=\"fa fa-location-arrow\"></i> Find your address</li></ol><div><div class=\"row\"><div class=\"col-md-6\"><h3 class=\"text-muted no-margin-top\">Today in {{city}}</h3><div ng-repeat=\"item in services\"><div ng-if=\"item.type == 'hours'\" service-hourly item=\"item\"></div></div><div service-weather></div></div><div class=\"col-md-6\"><a href=\"#\" ng-click=\"toggleLocalInfo($event)\" class=\"pull-right btn btn-sm btn-default\"><i class=\"fa fa-fw fa-question-circle\"></i>What's this?</a><h3 class=\"text-muted no-margin-top mobile-margin-top\">Your Local Services</h3><div ng-if=\"showLocalInfo\"><p>The local services lookup features lets you find local services near you. You can save your address locally, but otherwise we do not use this information to track you in any way.</p><p>Services available for each address:</p><p class=\"btn-group\"><button class=\"btn btn-default\" title=\"Address information\"><i class=\"fa fa-fw fa-map-marker\"></i></button> <button ng-repeat=\"item in services\" class=\"btn btn-default\" ng-if=\"item.type != 'hours' && item.icon\" title=\"{{item.title}}\"><i class=\"fa fa-fw {{item.icon}}\"></i></button> <button class=\"btn btn-default\" title=\"Bicycle routes\"><i class=\"fa fa-fw fa-bicycle\"></i></button> <button class=\"btn btn-default\" title=\"Traffic\"><i class=\"fa fa-fw fa-car\"></i></button> <button class=\"btn btn-default\" title=\"Schools, libraries, other city services near you\"><i class=\"fa fa-fw fa-thumb-tack\"></i></button></p></div><div class=\"text-center padding-top\"><pc-locate state=\"city.local.location\"></pc-locate></div></div></div><!-- /.row --></div></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/local/local-location.html',
    "<div class=\"slide-left-2 column\"><search></search><ol class=\"breadcrumb clean\"><li><a href=\"\" ui-sref=\"city.local.address\" main-toggle=\"slide-left\" title=\"Choose another address\"><i class=\"fa fa-location-arrow\"></i></a></li><li class=\"active\"><i class=\"fa fa-home\"></i>Services at {{place.address_assoc.street_number}} {{place.address_assoc.route}}</li><pc-locate-save></pc-locate-save></ol><div ng-if=\"boundary\" service-boundary item=\"boundary\"></div><div class=\"row local-location\"><div class=\"col-md-6\"><div class=\"row\"><div class=\"col-sm-1 col-xs-2\"><i class=\"fa fa-map-marker fa-fw fa-2x text-muted\"></i></div><div class=\"col-sm-11 col-xs-10\"><p>{{place.address_assoc.street_number}} {{place.address_assoc.route}},<br>{{place.address_assoc.locality}}, {{place.address_assoc.administrative_area_level_1}} {{place.address_assoc.postal_code}}-{{place.address_assoc.postal_code_suffix}}</p><div ng-if=\"neighborhood\" service-neighborhood item=\"neighborhood\"></div><div ng-if=\"!neighborhood && place.address_assoc.neighborhood\"><span class=\"text-muted\">Neighborhood:</span> {{place.address_assoc.neighborhood}}</div><div ng-if=\"place.address_assoc.administrative_area_level_2\"><span class=\"text-muted\">County:</span> {{place.address_assoc.administrative_area_level_2}}</div><hr class=\"compact\"></div></div><div ng-repeat=\"item in services\"><div ng-if=\"item.type == 'hours'\" service-hourly item=\"item\"></div><div ng-if=\"item.type == 'gis' || item.type == 'csv'\" service-location item=\"item\"></div><div ng-if=\"item.type == 'officials'\" service-officials item=\"item\"></div></div></div><div class=\"col-md-6\"><pc-map show-home=\"1\" show-title=\"1\" zoom=\"13\" legend=\"buttonbar\" title-suffix=\"near you\" legend-title=\"More services:\" layer-loading=\"layerLoading\" active-item=\"activeItem\"></pc-map><hr><div service-weather></div></div></div></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/local/local-officials.html',
    "<div class=\"slide-left-2 column\"><search></search><ol class=\"breadcrumb clean\"><li><a href=\"\" ui-sref=\"city.local.address\" main-toggle=\"slide-left\" title=\"Choose another address\"><i class=\"fa fa-location-arrow\"></i></a></li><li class=\"active\"><a href=\"\" ui-sref=\"city.local.location({latlng: latlng})\" main-toggle=\"slide-left\" title=\"Services at {{place.address_assoc.street_number}} {{place.address_assoc.route}}\"><i class=\"fa fa-home\"></i></a></li><li class=\"active\"><i class=\"fa fa-users\"></i>Elected Officials</li><pc-locate-save></pc-locate-save></ol><div class=\"row\"><div ng-repeat=\"section in sections\" ng-if=\"section.officials.length\" class=\"col-sm-12\"><h4 ng-bind-html=\"section.name\"></h4><div ng-repeat=\"official in section.officials\" class=\"row\"><div class=\"col-sm-2 col-xs-2\"><img ng-if=\"official.photoUrl\" ng-src=\"{{official.photoUrl}}\" alt=\"Photo of {{offical.name}}\" width=\"75px\"> <i ng-if=\"!official.photoUrl\" class=\"fa fa-3x fa-fw text-muted fa-user\"></i></div><div class=\"col-sm-10 col-xs-10\"><div class=\"action-buttons pull-right\"><a ng-if=\"official.urls[0]\" ng-href=\"{{official.urls[0]}}\" title=\"Visit {{official.name}}'s official website\" target=\"_blank\" class=\"btn btn-xs btn-default\"><i class=\"fa fa-fw fa-globe\"></i>Website</a> <a ng-if=\"official.address[0]\" class=\"btn btn-xs btn-default\" href=\"#\" title=\"Get the address to write to {{official.name}}\" ng-click=\"toggleAddress(i, $event)\" ng-class=\"addressActive ? active : ''\"><i class=\"fa fa-fw fa-map-marker\"></i>Address</a><div class=\"dropdown-menu\" style=\"display:block;top:auto;padding:10px\" ng-if=\"official.addressActive\"><div><strong>{{official.name}}</strong></div><div>{{official.address[0].line1 | titlecase}}</div><div ng-if=\"official.address[0].line2\">{{official.address[0].line2 | titlecase}}</div><div>{{official.address[0].city | titlecase}}, {{official.address[0].state}} {{official.address[0].zip}}</div></div><a ng-if=\"official.phones[0]\" class=\"btn btn-xs btn-default\" ng-href=\"tel:{{official.phones[0]}}\" title=\"Call {{official.name}}\"><i class=\"fa fa-fw fa-phone\"></i>{{official.phones[0]}}</a></div><div><strong><a ng-if=\"official.urls[0]\" ng-href=\"{{official.urls[0]}}\" title=\"Visit {{official.name}}'s official website\" target=\"_blank\">{{official.name}}</a> <span ng-if=\"!official.urls[0]\">{{official.name}}</span></strong></div><div>{{official.office}}</div><div ng-if=\"official.party\" class=\"text-muted\">{{official.party}} <span ng-if=\"official.party != 'Nonpartisan' && official.party != 'Non-partisan'\">Party</span></div><div><a ng-repeat=\"channel in official.channels\" ng-if=\"channel.type != 'GooglePlus'\" ng-href=\"//{{channel.type|lowercase}}.com/{{channel.id}}\" target=\"_blank\"><i class=\"fa fa-fw fa-2x fa-{{channel.type|lowercase}}-square\"></i></a></div><hr></div></div></div></div></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/local/service-boundary.html',
    "<div class=\"row\" ng-if=\"data == -1\"><div class=\"col-md-12\"><div class=\"alert alert-warning\" ng-bind-html=\"item.alert\"></div></div></div>"
  );


  $templateCache.put('views/apps/311App/local/service-hourly.html',
    "<div class=\"row\"><div class=\"col-sm-1 col-xs-2 col-icon\"><i class=\"fa fa-fw fa-2x text-muted {{item.icon}}\"></i></div><div class=\"col-sm-11 col-xs-10\"><div class=\"pull-right action-buttons\"><a class=\"btn btn-xs btn-default\" href=\"#\" title=\"Hours\" ng-click=\"toggleHours($event)\" ng-class=\"hoursActive ? active : ''\"><i class=\"fa fa-fw fa-clock-o\"></i>Hours</a><div class=\"dropdown-menu\" style=\"display:block;top:auto;padding:10px\" ng-if=\"hoursActive\"><div ng-bind-html=\"item.hours\"></div><a ng-if=\"holidays\" href=\"#\" ng-click=\"toggleHolidays($event)\" title=\"See list of holidays\">Closed on holidays</a></div><a ng-if=\"item.directions\" class=\"btn btn-xs btn-default\" title=\"Google Directions\" ng-href=\"{{item.directions}}\" target=\"_blank\"><i class=\"fa fa-fw fa-location-arrow\"></i>Directions</a></div><div>{{item.title}}</div><div ng-if=\"item.address\" class=\"text-muted\">{{item.address}}</div><div ng-repeat=\"line in item.status\"><span class=\"text-muted\">{{line.label}}:</span> <strong><span ng-class=\"line.class\" ng-bind-html=\"line.value\"></span></strong></div><div class=\"text-warning\" ng-if=\"item.alert\" ng-bind-html=\"item.alert\"></div><div ng-if=\"holidaysActive && holidays\"><hr><a href=\"#\" ng-click=\"toggleHolidays($event)\" title=\"Hide Holidays\" class=\"pull-right btn btn-xs btn-default\"><i class=\"fa fa-fw fa-times-circle\"></i></a><h4>Upcoming Holidays</h4><div ng-bind-html=\"holidays\"></div></div><hr class=\"compact\"></div></div>"
  );


  $templateCache.put('views/apps/311App/local/service-location.html',
    "<div class=\"row\"><div class=\"col-sm-1 col-xs-2 col-icon\"><i class=\"fa fa-fw fa-2x text-muted {{item.icon}}\"></i></div><div class=\"col-sm-11 col-xs-10\"><div class=\"pull-right action-buttons\"><a ng-if=\"item.link\" class=\"btn btn-xs btn-default\" title=\"Website\" ng-href=\"{{item.link}}\" target=\"_blank\"><i class=\"fa fa-fw fa-globe\"></i> Website</a> <a ng-if=\"item.questions\" class=\"btn btn-xs btn-default\" title=\"Questions\" ui-sref=\"city.gravityform({'id': item.questions, back: true})\"><i class=\"fa fa-fw fa-envelope-o\"></i> Questions</a> <a ng-if=\"item.phone\" class=\"btn btn-xs btn-default\" title=\"Call us\" ng-href=\"tel:{{item.phone}}\" target=\"_blank\"><i class=\"fa fa-fw fa-phone\"></i> {{item.phone}}</a> <a ng-if=\"item.disclaimer\" class=\"btn btn-xs btn-default\" href=\"#\" title=\"Read caveats to this information\" ng-click=\"toggleDisclaimer($event)\" ng-class=\"showDisclaimer ? active : ''\"><i class=\"fa fa-fw fa-info-circle\"></i> Disclaimer</a><div class=\"dropdown-menu unhide-dropdown\" ng-if=\"showDisclaimer\" ng-bind-html=\"item.disclaimer\"><div ng-bind-html=\"item.hours\"></div><a ng-if=\"holidays\" href=\"#\" ng-click=\"toggleHolidays($event)\" title=\"See list of holidays\">Closed on holidays</a></div></div><div ng-bind-html=\"item.title\"></div><div ng-repeat=\"row in items\"><span class=\"text-muted\" ng-if=\"row.label\">{{row.label}}:</span> <span>{{row.value | dayOfWeekFilter}}</span></div><div class=\"text-warning\" ng-if=\"items === false || items.length == 0\">Sorry, we could not find any services for your address. <a ui-sref=\"city.local.address\">Try another address?</a></div><div class=\"text-warning\" ng-if=\"item.alert\" ng-bind-html=\"item.alert\"></div><hr class=\"compact\"></div></div>"
  );


  $templateCache.put('views/apps/311App/local/service-neighborhood.html',
    "<span ng-if=\"data\"><span class=\"text-muted\">Neighborhood:</span> <a ng-if=\"data.url\" ng-href=\"{{data.url}}\" target=\"_blank\" title=\"Learn more about {{data.neighborhood}}\">{{data.neighborhood}}</a> <span ng-if=\"!data.url\">{{data.neighborhood}}</span></span>"
  );


  $templateCache.put('views/apps/311App/local/service-officials.html',
    "<div class=\"row\"><div class=\"col-sm-1 col-xs-2 col-icon\"><i class=\"fa fa-fw fa-2x text-muted fa-users\"></i></div><div class=\"col-sm-11 col-xs-10\"><div class=\"pull-right action-buttons\"><a class=\"btn btn-xs btn-default\" title=\"Questions\" ui-sref=\"city.local.officials({latlng: latlng})\"><i class=\"fa fa-fw fa-users\"></i> See All</a></div><div>Elected Officials</div><div ng-repeat=\"official in officials\"><span>{{official.name}}:</span> <span class=\"text-muted\">{{official.office}}</span></div><hr class=\"compact\"></div></div>"
  );


  $templateCache.put('views/apps/311App/local/service-weather.html',
    "<div class=\"row\">{{weather}}<div class=\"col-sm-1 col-xs-2 col-icon\"><div style=\"width:45px;height:45px;background:url(//openweathermap.org/img/w/{{data.weather[0].icon}}.png) center no-repeat\"></div></div><div class=\"col-sm-11 col-xs-10\"><div class=\"pull-right action-buttons\"><a class=\"btn btn-xs btn-default\" title=\"View forecast on OpenWeatherMap\" ng-href=\"//openweathermap.org/city/{{data.id}}\" target=\"_blank\"><i class=\"fa fa-fw fa-sun-o\"></i> View Forecast</a></div><div><span class=\"text-muted\">Weather:</span> {{data.weather[0].description}}</div><h3 class=\"no-margin\">{{data.main.temp | number:0}}&deg;F <small>Low: {{data.main.temp_min | number:0}}&deg;F - High: {{data.main.temp_max | number:0}}&deg;F</small></h3></div></div>"
  );


  $templateCache.put('views/apps/311App/map/map-wrapper.html',
    "<h3 ng-if=\"showTitle\" class=\"text-muted no-margin-top\"><i class=\"fa fa-fw\" ng-class=\"layerLoading ? 'fa-spin fa-spinner' : layer.icon\"></i> {{layer.title}} {{titleSuffix}}</h3><div class=\"pc-map\"><div class=\"flip-container\" ng-class=\"activeItem ? 'hover' : ''\"><div class=\"flipper\"><div class=\"front\"><ng-map class=\"pc-map\" zoom=\"{{mapZoom}}\" center=\"{{center}}\" scrollwheel=\"false\" zoom-to-include-markers=\"true\"></ng-map></div><div class=\"back card card-block\"><a href=\"#\" ng-click=\"activeItem=null;$event.preventDefault();\" class=\"pull-right\"><i class=\"fa fa-times fa-fw fa-2x\"></i></a><h3 ng-bind-html=\"activeItem.title.rendered\" class=\"no-margin-top\"></h3><p><div ng-bind-html=\"activeItem.meta.address\"></div><div ng-if=\"activeItem.address2\" ng-bind-html=\"activeItem.meta.address2\"></div><div>{{activeItem.meta.city}}, {{activeItem.meta.state}} {{activeItem.meta.city}}</div></p><p><a ng-if=\"activeItem.meta.website\" ng-href=\"{{activeItem.meta.website}}\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-globe\"></i> Website</a> <a ng-if=\"activeItem.meta.phone\" ng-href=\"tel:{{activeItem.meta.phone}}\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-phone\"></i> Phone</a> <a ng-if=\"activeItem.meta.email\" ng-href=\"mailto:{{activeItem.meta.email}}\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-envelope-o\"></i> Email us</a></p><div ng-bind-html=\"activeItem.content.rendered\"></div></div></div></div></div><div class=\"pc-map-legend\"><h5 ng-bind-html=\"legendTitle\"></h5><div ng-if=\"legend == 'buttonbar'\" class=\"btn-toolbar\" role=\"toolbar\"><div class=\"btn-group\"><button ng-repeat=\"item in layers\" type=\"button\" class=\"btn btn-default\" aria-label=\"{{item.title}}\" title=\"{{item.title}}\" ng-class=\"item == layer ? 'active' : ''\" ng-click=\"changeLayer(item)\"><i class=\"fa fa-fw {{item.icon}}\"></button></div></div><ul ng-if=\"legend == 'list'\" class=\"nav nav-stacked\"><li ng-repeat=\"item in layers\"><a title=\"{{item.title}}\"><i class=\"fa fa-fw {{item.icon}}\"><span ng-bind-html=\"item.title\"></span></a></li></ul></div><style>/* entire container, keeps perspective */\n" +
    ".flip-container {\n" +
    "  perspective: 1000px;\n" +
    "}\n" +
    "  /* flip the pane when hovered */\n" +
    "  .flip-container.hover .flipper {\n" +
    "    transform: rotateY(180deg);\n" +
    "  }\n" +
    "\n" +
    ".flip-container, .front, .back {\n" +
    "  width: 100%;\n" +
    "  height: 400px;\n" +
    "}\n" +
    "\n" +
    ".back {\n" +
    "  overflow-y: auto;\n" +
    "}\n" +
    "\n" +
    "/* flip speed goes here */\n" +
    ".flipper {\n" +
    "  transition: 0.6s;\n" +
    "  transform-style: preserve-3d;\n" +
    "\n" +
    "  position: relative;\n" +
    "}\n" +
    "\n" +
    "/* hide back of pane during swap */\n" +
    ".front, .back {\n" +
    "  backface-visibility: hidden;\n" +
    "\n" +
    "  position: absolute;\n" +
    "  top: 0;\n" +
    "  left: 0;\n" +
    "}\n" +
    "\n" +
    "/* front pane, placed above back */\n" +
    ".front {\n" +
    "  z-index: 2;\n" +
    "  /* for firefox 31 */\n" +
    "  transform: rotateY(0deg);\n" +
    "}\n" +
    "\n" +
    "/* back, initially hidden pane */\n" +
    ".back {\n" +
    "  transform: rotateY(180deg);\n" +
    "}</style>"
  );


  $templateCache.put('views/apps/311App/map/map.html',
    "<div class=\"slide-left-2 column\"><search></search><ol class=\"breadcrumb clean\"><li class=\"active\"><i class=\"fa fa-th\"></i> Select map</li></ol><dl class=\"angular-311-2col\"><dd ng-repeat=\"item in layers\" class=\"col-sm-6 col-md-4 category-wrapper\"><h4><a main-toggle=\"slide-left\" ui-sref=\"city.map.view({slug: item.slug})\"><i ng-if=\"item.icon\" class=\"fa {{item.icon}}\"></i><span>{{item.title}}</span></a></h4></dd></dl></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/map/view.html',
    "<search></search><ol class=\"breadcrumb clean\"><li><a href=\"\" main-toggle=\"slide-left\"><i class=\"fa fa-th\"></i><span class=\"sr-only\">Select map</span></a></li><li class=\"active\"><i class=\"fa\" ng-class=\"layerLoading ? 'fa-spinner fa-spin' : layer.icon\"></i> {{layer.title}}</li></ol><div class=\"row\"><div class=\"col-xs-12\"><pc-map show-home=\"1\" zoom=\"14\" active-layer=\"layerSlug\" active-item=\"listing\" layer-loading=\"layerLoading\" zoom-to-include-markers=\"true\"></pc-map></div><div ui-view style=\"disply:none\"></div></div><div main-toggle=\"slide-left\" main-toggle-force=\"add\" main-toggle-enter=\"true\"></div>"
  );


  $templateCache.put('views/apps/311App/menu311.html',
    "<div ng-if=\"menu.length > 1\" class=\"col-sm-12 nav-contain\"><ul class=\"nav nav-pills nav-stacked {{addlClass}}\"><li ng-repeat=\"item in menu\" ui-sref-active=\"active\"><a ng-if=\"item.state\" menu-click main-toggle=\"slide-left\" main-toggle-force=\"remove\" animate-route=\"{{item.direction}}\" ui-sref=\"city.{{item.state}}\" menu-item ng-click=\"menuClick($index, item)\"><i ng-class=\"loading == $index ? 'fa '+item.icon : 'fa '+item.icon\"></i> <span class=\"hidden-xs\">{{item.title}}</span></a> <a ng-if=\"item.url\" href=\"\" ng-href=\"{{item.url}}\"><i class=\"fa\"></i>{{loading}} <span class=\"hidden-xs\">{{item.title}}</span></a></li></ul></div>"
  );


  $templateCache.put('views/apps/311App/payment/payment-success.html',
    "<a class=\"back-btn\" main-toggle=\"slide-left\"><i class=\"fa fa-angle-left\"></i> Back</a><h4 class=\"slide-title\">{{node.title}}</h4><div class=\"row\"><div class=\"col-sm-6\"><h5>Thank you</h5><p>You have successfully paid <strong>{{payment.amount}}</strong> for invoice <strong>{{payment.number}}</strong>. An email receipt will be sent to <strong>{{payment.email}}</strong></p></div><div class=\"col-sm-6\"></div></div><div main-toggle=\"slide-left\" main-toggle-force=\"add\" main-toggle-enter=\"true\"></div>"
  );


  $templateCache.put('views/apps/311App/payment/payment-type.html',
    "<ol class=\"breadcrumb clean\"><li><a href=\"\" main-toggle=\"slide-left\"><i class=\"fa fa-th\"></i><span class=\"sr-only\">Select payment type</span></a></li><li class=\"active\"><i class=\"fa fa-money\"></i> Make Payment</li></ol><h3>{{post.title.rendered}}</h3><div class=\"row\"><div class=\"col-sm-5\" ng-if=\"post.meta.type == 'link'\"><h4>Online payments</h4><p><a href=\"\" ng-href=\"{{post.meta.link}}\" class=\"btn btn-primary btn-lg\" target=\"_blank\">Pay online now &raquo;</a></p><p><small><em>You will be redirected to our secure online payment provider.</em></small></p></div><div class=\"col-sm-5\" ng-if=\"post.meta.type == 'gravityform'\"><h4>Pay online now</h4><form class=\"form-horizontal\" role=\"form\" method=\"GET\" ng-submit=\"submit(payment)\"><div class=\"form-group\" ng-class=\"idClass\"><label class=\"control-label col-sm-4\" for=\"invoice_id\">Invoice number:</label><div class=\"col-sm-8\"><input type=\"text\" class=\"form-control\" id=\"invoice_id\" ng-model-options=\"{ debounce: 250 }\" ng-model=\"payment.id\" placeholder=\"Try 0001 or 0002\" required><div class=\"error-message hide\">Sorry, we could not find your invoice number. Please try 0001 or 0002 for this demo</div><div class=\"success-message hide\">We found invoice <strong>{{payment.id}}</strong> for <strong>{{payment.name}}</strong> for <strong>${{payment.amount}}</strong></div></div></div><div class=\"form-group\"><label class=\"control-label col-sm-4\" for=\"amount\">Amount:</label><div class=\"col-sm-8\"><div class=\"input-group\"><div class=\"input-group-addon\">$</div><input type=\"text\" class=\"form-control\" id=\"amount\" ng-model=\"payment.amount\" placeholder=\"0.00\" required></div></div></div><div class=\"form-group\"><div class=\"col-sm-8 col-sm-push-4\"><input type=\"submit\" name=\"submit\" value=\"Make payment &raquo\" class=\"btn btn-primary\"></div></div></form></div><div class=\"col-sm-6\"><h4 ng-if=\"post.content.rendered\">Payment info</h4><div class=\"body\" ng-bind-html=\"post.content.rendered\"></div></div></div><div main-toggle=\"slide-left\" main-toggle-force=\"add\" main-toggle-enter=\"true\"></div>"
  );


  $templateCache.put('views/apps/311App/payment/payment.html',
    "<div class=\"slide-left-2 column\"><search></search><ol class=\"breadcrumb clean\"><li class=\"active\"><i class=\"fa fa-th\"></i> Select payment type</li></ol><dl class=\"angular-311-2col\"><dd ng-repeat=\"item in posts\" class=\"col-sm-6 col-md-4 category-wrapper\"><h4><a main-toggle=\"slide-left\" href=\"\" ui-sref=\"city.payments.type({slug: item.slug})\"><i ng-if=\"item.meta.icon\" class=\"fa {{item.meta.icon}}\"></i><span>{{item.title.rendered}}</span></a></h4></dd></dl></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/pc-locate-save.html',
    "<li><label><input type=\"checkbox\" ng-model=\"saveAddress\" ng-click=\"toggleSaveAddress($event);\"> Save my address <a href=\"#\" title=\"What does this mean?\" ng-click=\"toggleSaveInfo($event)\"><i class=\"fa fa-fw fa-question-circle\"></i></a></label><ul ng-if=\"showSaveInfo\" class=\"text-muted dropdown-menu\" style=\"display:block;top:auto;left:auto;padding:10px\"><li ng-if=\"!saveAddress\">If you check this box, we will save your address in a local cookie, and subsequent visits to this site will automatically display the services relevant to you. Your address will not be used to track you in any other way.</li><li ng-if=\"saveAddress\">Your address has been saved in a local cookie, and subsequent visits to this site will automatically display the services relevant to you. Your address will not be used to track you in any other way. Uncheck this box if you would like us to forget your address.</li></ul></li>"
  );


  $templateCache.put('views/apps/311App/pc-locate.html',
    "<form class=\"form-inline\"><div class=\"form-group\"><input class=\"input-lg form-control\" type=\"text\" googleplace ng-model=\"place\" place=\"chosenPlace\" ng-change=\"chosenUpdate()\" style=\"width:350px\" placeholder=\"enter an address or location\"></div><button class=\"btn btn-lg btn-default hidden-xs\"><i class=\"fa fa-search\"></i></button></form><div ng-if=\"geolocation\"><div class=\"or-bar\"><span>OR</span></div><button class=\"btn btn-primary btn-lg\" ng-click=\"locate()\"><i class=\"fa fa-fw\" ng-class=\"geolocationLoading ? 'fa-spin fa-status' : 'fa-location-arrow'\"></i> Use my current location</button></div>"
  );


  $templateCache.put('views/apps/311App/post/gravityform-iframe.html',
    "<div class=\"slide-left-2\"><search></search><ol class=\"breadcrumb clean\"><!--<li><a ui-sref=\"city.report\" main-toggle=\"slide-left\"><i class=\"fa fa-th\"></i></a></li>\n" +
    "    <li class=\"active\"><i class=\"fa fa-file-text-o\"></i> Provide <span class=\"hidden-xs\" ng-bind-html=\"post.title.rendered\"></span> details</li>--><li><a ng-click=\"back($event)\" main-toggle=\"slide-left\" href=\"#\"><i class=\"fa fa-fw fa-chevron-left\"></i>Back</a></li></ol><iframe ng-src=\"{{trustSrc(post)}}\" style=\"border:none;height:1500px;width:100%\"></iframe></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/search.html',
    "<form class=\"form-inline pull-right\" ng-if=\"searchActive\"><input class=\"form-control input-sm hidden-xs\" ng-click=\"doSearch()\" placeholder=\"&#xF002; Search\" style=\"font:normal normal normal 14px/1 FontAwesome;height:30px\"> <button class=\"btn btn-default btn-sm hidden-sm\" ng-click=\"doSearch()\" style=\"height:30px\"><i class=\"fa fa-search\"></i></button></form>"
  );


  $templateCache.put('views/apps/311App/search/granicus.html',
    "<div ng-if=\"items\" class=\"search-additional-box\"><h3 class=\"no-margin\">Meeting Results</h3><ul class=\"search-autosuggest\" style=\"display: block\"><li ng-repeat=\"item in items\" ng-if=\"$index <= num\" class=\"clearfix\"><a href=\"#\" ng-click=\"showDetails($index, $event)\" title=\"See Details -- {{item._source.name | limitTo : 100 : begin}}\" class=\"result-link\"><i class=\"fa fa-fw fa-video-camera\"></i> <span ng-bind-html=\"getTitle(item)\"></span></a><div ng-if=\"$index == activeDetails\" class=\"search-autosuggest-content\"><div class=\"text-muted\" ng-if=\"item._source.name\">{{item._source.video_name}}</div><p>{{ item._source.datetime | date : format : shortDate}}</p><p><a href=\"#\" ng-click=\"go(item, $event)\" class=\"btn btn-primary\"><i class=\"fa fa-fw fa-play\"></i>Watch video clip</a></p><p ng-bind-html=\"item._source.name\"></p></div></li></ul><a class=\"btn btn-default btn-sm\" ng-click=\"updateNum($event)\" href=\"#\" target=\"_blank\" ng-if=\"more\"><i class=\"fa fa-fw fa-plus-circle\"></i>See more</a> &nbsp; <a class=\"btn btn-default btn-sm\" ng-href=\"{{granicusSearchUrl}}\" ng-click=\"granicusSearch(granicusSearchUrl, $event)\" target=\"_blank\" title=\"Search Granicus in a new window\"><i class=\"fa fa-fw fa-external-link\"></i>Search Granicus</a></div>"
  );


  $templateCache.put('views/apps/311App/search/search.html',
    "<div class=\"slide-left-2 column\"><div class=\"breadcrumb clean\"><form class=\"form-inline\" ng-submit=\"googleSearch($event)\"><input class=\"form-control form-control-lg\" ng-model=\"term\" ng-model-options=\"{ debounce: 250 }\" ng-change=\"autocomplete()\" placeholder=\"How may we help you?\" style=\"width:80%\" autofocus> <button type=\"submit\" class=\"btn btn-primary\" title=\"Search Google\"><i class=\"fa fa-search\" ng-class=\"loading ? 'fa fa-spin fa-spinner' : 'fa fa-search'\"></i></button></form></div><div class=\"row\"><div class=\"col-sm-7\"><ul ng-if=\"results\" class=\"search-autosuggest\" style=\"display: block\"><li ng-repeat=\"item in results\"><a ng-href=\"item.url\" ng-click=\"go(item, $event)\" class=\"result-link\"><span class=\"title-span\"><i class=\"fa fa-fw {{item.icon}}\"></i> <span ng-bind-html=\"item.title\"></span></span> <span ng-if=\"item.suffix\" ng-bind-html=\"trustHtml(item.suffix)\"></span></a></li></ul></div><div class=\"col-sm-5\"><div search-granicus term=\"term\" ng-if=\"additional.granicus\"></div></div></div></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/vote/vote-address.html',
    "<div class=\"slide-left-2 column\"><search></search><ol class=\"breadcrumb clean\" style=\"margin-bottom: 0\"><li class=\"active\"><i class=\"fa fa-location-arrow\"></i> Find your address</li></ol><div class=\"text-center\"><h1>Voting is important</h1><div class=\"row\"><div class=\"col-md-10 col-md-push-1\"><h3>Enter your address to find out where and how to vote and learn more about the issues on the ballot.</h3></div></div><pc-locate state=\"city.vote.location\" require-address></pc-locate></div><hr style=\"margin-top:20px\"><div class=\"pull-md-right\">Powered by <a href=\"//proudcity.com\" target=\"_blank\">ProudCity</a> and the <a href=\"https://developers.google.com/civic-information/\" target=\"_blank\">Google Civic Information API</a>.</div><a ui-sref=\"city.vote.embed\"><i class=\"fa fa-fw fa-plus-circle\"></i>Add ProudCity Vote to your website</a></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/vote/vote-candidates.html',
    "<h2>Candidates</h2><p ng-if=\"!contests\">We do not have any information about the candidates for your election yet. Please check back again closer to the election.<hr></p><div ng-repeat=\"contest in contests\"><h3>{{contest.office}} <small>{{contest.district.name}}</small></h3><div class=\"row\"><div ng-repeat=\"candidate in contest.candidates\" class=\"col-md-4 col-xs-6\"><div><strong><a ng-click=\"googleSearch(candidate.name, contest.district.name, $event)\" href=\"#\" title=\"Search Google for {{candidate.name}}\">{{candidate.name}}</a></strong></div><div>{{candidate.party}}</div><p><a ng-repeat=\"channel in candidate.channels\" ng-if=\"channel.type != 'GooglePlus'\" href=\"{{channel.id}}\"><i class=\"fa fa-fw fa-{{channel.type|lowercase}}-square\"></i></a></p></div></div><hr></div>"
  );


  $templateCache.put('views/apps/311App/vote/vote-embed.html',
    "<div class=\"slide-left-2 column\"><h1>Embed this widget on your website</h1><p><a href=\"\">ProudCity's</a> mission is to make getting information online from your local governments easier. As part of this mission, we are making our Vote app available online as a free widget. Simple copy the embed code below on to your website to add the fully-unbraded widget to your site.</p><p><textarea style=\"width:80%\">&lt;iframe src=\"https://vote-embed.proudcity.com\" style=\"width:100%;height:1000px;border:0\"&gt;&lt;/iframe&gt;</textarea></p><p>Please <a href=\"mailto:info@proudcity.com\">contact us</a> if you are having issues, have suggestions, want to share your widget, or just want to say thanks.</p><p><a ui-sref=\"city.vote.address\" class=\"btn btn-primary\">Back</a></p></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/apps/311App/vote/vote-how.html',
    "<div class=\"row\"><ol class=\"breadcrumb clean\"><li><a href=\"\" ui-sref=\"city.vote.address\" main-toggle=\"slide-left\"><i class=\"fa fa-location-arrow\"></i></a></li><li class=\"active\"><i class=\"fa fa-info-circle\"></i>Voting information for {{address.line1}}</li><pc-locate-save></pc-locate-save></ol><div class=\"col-sm-7\"><h3 style=\"margin-top:0\"><span ng-if=\"!isEarly\">Your polling place</span> <span ng-if=\"isEarly\">Your early voting location</span></h3><div ng-if=\"!address\"><p>Sorry, we could not find any polling location for your address. Please try again closer to the election. You can also try searching on the <a ng-href=\"{{links.votingLocationFinderUrl}}\" target=\"_blank\">{{links.name}} polling location finder</a>.</p><p>In the meantime, you can browse the issues and candidates above.</p></div><div ng-if=\"address\"><div class=\"row\"><div class=\"col-sm-1 col-xs-2\"><i class=\"fa fa-map-marker fa-2x text-muted\"></i></div><div class=\"col-sm-11 col-xs-10\"><div ng-click=\"getDirections($event)\"><div>{{address.locationName}}</div><div>{{address.line1}}</div><div ng-if=\"address.line2\">{{address.line2}}</div></div><div>{{address.city}}, {{address.state}} {{addrss.zip}}</div><a ng-if=\"address\" href=\"#\" ng-click=\"mapScroll($event)\" style=\"margin-top:.5em;display: none\" class=\"btn btn-default btn-sm visible-xs-inline-block\"><i class=\"fa fa-fw fa-map\"></i>View map</a> <a ng-if=\"address\" ng-href=\"{{directionsLink}}\" style=\"margin-top:.5em\" class=\"btn btn-primary btn-sm\" target=\"_blank\"><i class=\"fa fa-fw fa-location-arrow\"></i>Get directions</a><hr></div></div><div class=\"row\"><div class=\"col-sm-1 col-xs-2\"><i class=\"fa fa-clock-o fa-2x text-muted\"></i></div><div class=\"col-sm-11 col-xs-10\"><div ng-if=\"hours\"><div ng-if=\"!shortHours || longHours\"><div ng-bind-html=\"hours\"></div><a ng-click=\"toggleHours($event)\" href=\"#\">Show less</a></div><div ng-if=\"shortHours && !longHours\"><div ng-bind-html=\"shortHours\"></div><a ng-click=\"toggleHours($event)\" href=\"#\">Show more</a></div></div><div ng-if=\"!hours\">No hours are available for this polling location. Most polls nationally are open from 7am - 8pm.</div><hr style=\"margin-bottom:5px\"></div></div><div class=\"row\"><div class=\"col-sm-1 col-xs-2\"></div><div class=\"col-sm-11 col-xs-10\"><div style=\"font-size:.9em\"><div class=\"pull-md-right\">Source: <span ng-repeat=\"source in sources\">{{source.name}} <i ng-if=\"source.verified\" class=\"fa fa-check-circle\" title=\"Source if verified\"></i></span></div><a href=\"#\" ng-click=\"toggleDisclaimer($event)\">Disclaimer</a><div class=\"\" ng-if=\"disclaimer\">This information is for reference purposes only. Your polling location may differ from this information depending on many factors, including the address you used to register to vote. Please contact the <a ng-href=\"{{links.votingLocationFinderUrl}}\" target=\"_blank\">{{links.name}}</a> for your official voting information.</div></div></div></div></div><!-- if address --><div ng-if=\"links\"><h3 style=\"margin-top:36px\">Helpful links from the {{links.name}}</h3><div class=\"card-columns card-columns-xs-2 card-columns-sm-2 card-columns-md-2 card-columns-equalize\"><div class=\"card-wrap\"><a ng-href=\"{{links.electionInfoUrl}}\" class=\"card text-center card-btn card-block\" target=\"_blank\"><i class=\"fa fa-info-circle fa-2x\"></i><h4>Election info</h4></a></div><div class=\"card-wrap\"><a ng-href=\"{{links.electionRegistrationUrl}}\" class=\"card text-center card-btn card-block\" target=\"_blank\"><i class=\"fa fa-pencil-square-o fa-2x\"></i><h4>Register to vote</h4></a></div><div class=\"card-wrap\"><a ng-href=\"{{links.electionRegistrationConfirmationUrl}}\" class=\"card text-center card-btn card-block\" target=\"_blank\"><i class=\"fa fa-check-circle-o fa-2x\"></i><h4>Confirm registration</h4></a></div><div class=\"card-wrap\"><a ng-href=\"{{links.absenteeVotingInfoUrl}}\" class=\"card text-center card-btn card-block\" target=\"_blank\"><i class=\"fa fa-globe fa-2x\"></i><h4>Absentee voting info</h4></a></div></div></div></div><div class=\"col-sm-5\"><div id=\"google-map\" style=\"width:100%;height:300px;margin-bottom:10px\"></div><div class=\"text-md-right\"><img src=\"//raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_green.png\" style=\"width:16px\"> Early voting location <img src=\"//raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_orange.png\" style=\"width:16px;margin-left: 15px\"> Poll location</div><hr><div ng-if=\"date.days >= 0\" style=\"text-align:center\"><p>The election is <span ng-if=\"date.days == 0\">today!</span> <span ng-if=\"date.days > 0\">{{date.days}} days away:</span></p><div class=\"date-box\">{{date.month}} <span class=\"date-big\">{{date.day}}</span> {{date.year}}</div></div></div></div><hr>"
  );


  $templateCache.put('views/apps/311App/vote/vote-issues.html',
    "<h2>Issues</h2><p ng-if=\"!contest\">We do not have any information about the issues for your election yet. Please check back again closer to the election.<hr></p><div ng-repeat=\"contest in contests\" ng-click=\"setActive(contest.referendumTitle, $event)\"><h3><a ng-href=\"#\" target=\"_blank\" title=\"Learn more about {{contest.referendumTitle}}\" ng-click=\"setActive(contest.referendumTitle, $event)\">{{contest.referendumTitle}}</a> <small>{{contest.district.name}}</small></h3><h5>{{contest.referendumSubtitle}}</h5><div ng-if=\"active == contest.referendumTitle\"><a ng-if=\"contest.referendumUrl\" ng-href=\"{{contest.referendumUrl}}\" target=\"_blank\" class=\"hidden-xs btn btn-sm btn-default pull-right\"><i class=\"fa fa-fw fa-info-circle\"></i>Impartial analysis</a> {{contest.referendumText}}</div><hr></div>"
  );


  $templateCache.put('views/apps/311App/vote/vote-wrapper.html',
    "<ul class=\"nav nav-pills\"><li ui-sref-active=\"active\"><a main-toggle=\"slide-left\" main-toggle-force=\"remove\" animate-route ui-sref=\"city.vote.location.how\" title=\"How to Vote\"><i class=\"fa fa-map-marker\"></i> How <span class=\"hidden-xs\">to Vote</span></a></li><li ui-sref-active=\"active\"><a main-toggle=\"slide-left\" main-toggle-force=\"remove\" animate-route ui-sref=\"city.vote.location.issues\" title=\"Issues\"><i class=\"fa fa-check-square-o\"></i> Issues</a></li><li ui-sref-active=\"active\"><a main-toggle=\"slide-left\" main-toggle-force=\"remove\" animate-route ui-sref=\"city.vote.location.candidates\" title=\"Candidates\"><i class=\"fa fa-user\"></i> Candidates</a></li><li><a main-toggle=\"slide-left\" main-toggle-force=\"remove\" animate-route ui-sref=\"city.vote.address\" title=\"Enter a new address\"><i class=\"fa fa-refresh\"></i> New location</a></li></ul><div class=\"slide-left-2 column\"><div ui-view></div><p class=\"pull-md-right hidden-xs hidden-sm\">Election day is {{date.month}} {{date.day}} {{date.year}}.</p><p>Share: <span share-block title=\"Be sure to vote!\" summary=\"Enter your address to find out where to vote and learn more about the issues.\"></span></p><p class=\"pull-md-right\">Powered by <a href=\"//proudcity.com\" target=\"_blank\">ProudCity</a> and the <a href=\"https://developers.google.com/civic-information/\" target=\"_blank\">Google Civic Information API</a>.</p><p class=\"pull-md-left\"><a ui-sref=\"city.vote.embed\"><i class=\"fa fa-fw fa-plus-circle\"></i>Add ProudCity Vote to your website</a></p></div><div class=\"animation-wrap slide-left-2\"><div class=\"quickfade\" ui-view></div></div>"
  );


  $templateCache.put('views/checklist.html',
    "<div class=\"panel-group\" id=\"accordion\"><div class=\"panel panel-default\" ng-repeat=\"item in checklist\"><div class=\"panel-heading\"><h4 class=\"panel-title\" ng-click=\"accordionClick(item, $event)\"><i class=\"fa fa-fw {{item.icon}} text-muted\"></i> {{item.title}} <a ng-if=\"site && item.link && !item.active\" class=\"btn btn-sm pull-right\" ng-class=\"item.status ? 'btn-success' : 'btn-default'\" ng-click=\"doClick(item, $event)\" title=\"{{item.title}} in this site's dashboard\"><i class=\"fa fa-fw\" ng-class=\"item.status ? 'fa-check' : 'fa-external-link'\"></i>Do it</a></h4></div><div id=\"collapse1\" class=\"panel-collapse collapse\" ng-class=\"item.active != undefined && item.active ? 'in' : ''\"><div class=\"panel-body\"><div ng-if=\"site\"><a class=\"btn btn\" ng-class=\"item.status ? 'btn-success' : 'btn-default'\" ng-click=\"doClick(item, $event)\" title=\"{{item.title}} in this site's dashboard\"><i class=\"fa fa-fw\" ng-class=\"item.status ? 'fa-check' : 'fa-external-link'\"></i>Do it</a> <a class=\"btn btn\" ng-class=\"item.status ? 'btn-success' : 'btn-default'\" ng-click=\"doneToggle(item, $event)\"><i class=\"fa fa-fw\" ng-class=\"item.status ? 'fa-check' : 'fa-check'\"></i>Mark as done</a></div><p>{{item.description}}</p><div ng-if=\"item.video\"><hr><!--<iframe width=\"560\" height=\"315\" ng-src=\"{{item.video}}\" frameborder=\"0\" allowfullscreen></iframe>--></div></div></div></div></div>"
  );


  $templateCache.put('views/home.html',
    "<div class=\"row\"><div class=\"col-xs-12 col-sm-6 col-sm-push-3\"><div class=\"panel panel-default flashcard\" style=\"background: {{item.color}}\"><div class=\"panel-body\"><h1 class=\"text-center\">{{item.word}}</h1><audio id=\"myaudio\"><source ng-src=\"\"></source></audio><div class=\"text-center\"><a ng-click=\"play()\"><i class=\"fa fa-headphones\" aria-hidden=\"true\"></i></a> <a ng-click=\"go(-1)\" class=\"pull-left\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a> <a ng-click=\"go(1)\" class=\"pull-right\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a></div></div></div></div></div><footer>Card {{i+1}} of {{total}}</footer><style>@import url('https://fonts.googleapis.com/css?family=Muli');\n" +
    "\n" +
    "    .flashcard {\n" +
    "        margin: 100px;\n" +
    "        font-size: 2em;\n" +
    "    }\n" +
    "\n" +
    "    .flashcard h1 {\n" +
    "        font-family: 'Muli', serif;\n" +
    "        font-size: 5em;\n" +
    "    }\n" +
    "\n" +
    "    footer {\n" +
    "        position: absolute;\n" +
    "        bottom: 5px;\n" +
    "        left: 20px;\n" +
    "    }</style>"
  );


  $templateCache.put('views/intranet/directory.html',
    "<p>Get your complete staff directory here. ProudCity Enterprise customers can automatically pull their employee directory from LDAP, Google Apps, Microsoft 360, and more.</p><a class=\"btn btn-primary\" href=\"https://proudcity.com/support/create\" target=\"_blank\">Contact us to learn more</a>"
  );


  $templateCache.put('views/intranet/intranet.html',
    "<div class=\"container\"><div class=\"row\"><div class=\"col-md-3\"><ul class=\"nav\"><li ui-sref-active=\"active\"><a ui-sref=\"site.intranet.social({'siteId': site._id})\"><i class=\"fa fa-fw fa-comments-o\"></i>Social Media</a></li><li ui-sref-active=\"active\"><a ui-sref=\"site.intranet.answers({'siteId': site._id})\"><i class=\"fa fa-fw fa-question-circle\"></i>Common Questions</a></li><li ui-sref-active=\"active\"><a ui-sref=\"site.intranet.directory({'siteId': site._id})\"><i class=\"fa fa-fw fa-address-book-o\"></i>Staff Directory</a></li></ul></div><div class=\"col-md-9\"><div ui-view></div></div></div></div>"
  );


  $templateCache.put('views/intranet/social/default-card-style.html',
    "<div class=\"dynamic-layout-item\"><div class=\"card\"><div class=\"social-card-header\"><div class=\"post-link pull-left\"><a ng-href=\"{{externalScope().getPostUrl(it)}}\" target=\"_blank\"><i class=\"fa fa-{{it.service}}\"></i></a></div><div class=\"date\" ng-if=\"it.date\" class=\"social-date\" date=\"{{it.date}}\">{{it.date|date}}</div><div class=\"account\"><a target=\"_blank\" ng-href=\"{{ externalScope().getAccountUrl(it) }}\">{{ externalScope().getAccountTitle(it) }}</a></div></div><a ng-if=\"it.image\" class=\"card-img-top-wrapper\" ng-style=\"{'padding-top': it.styleAttr + '%'}\" href=\"{{it.url}}\" target=\"_blank\"><img ng-style=\"{'margin-top': '-' + ( it.imgStyleAttr ? it.imgStyleAttr : 0 ) + '%'}\" class=\"card-img-top\" ng-src=\"{{it.image}}\"></a><div class=\"card-block\" ng-if=\"it.text\"><h4 ng-if=\"it.title\" class=\"card-title\">{{it.title}}</h4><p class=\"card-text\" read-more words less-callback=\"externalScope().toggleText()\" more-callback=\"externalScope().toggleText()\" limit=\"40\" content=\"{{ externalScope().toSafe(it.text, it.service) }}\"></p></div></div></div>"
  );


  $templateCache.put('views/intranet/social/social-static.html',
    "<div ng-if=\"!socialHideControls\"><ul class=\"nav nav-pills\"><li class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive('all')}\"><a class=\"text-gray\" ng-click=\"switchService($event, 'all')\" href=\"#\"><i class=\"fa fa-th\"></i></a></li><li ng-repeat=\"(service, obj) in services\" ng-show=\"showServiceTab(service)\" class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive(service)}\"><a class=\"text-gray\" ng-click=\"switchService($event, service)\" href=\"#\"><i class=\"fa {{obj.icon}}\"></i><span class=\"sr-only\">{{obj.name}}</span></a></li></ul></div><div class=\"card-columns {{columnClasses}}\"><div ng-repeat=\"(key, item) in social track by item.id\" class=\"feed-type-{{item.service}} card\"><div class=\"social-card-header\"><div class=\"post-link pull-left\"><a ng-href=\"{{getPostUrl(item)}}\" target=\"_blank\"><i class=\"fa fa-{{item.service}}\"></i></a></div><div class=\"date\" ng-if=\"item.date\" class=\"social-date\" date=\"{{item.date}}\">{{item.date|date}}</div><div class=\"account\"><a target=\"_blank\" ng-href=\"{{ getAccountUrl(item) }}\">{{ getAccountTitle(item) }}</a></div></div><span class=\"img-top-buffer\"><a ng-if=\"item.image\" class=\"card-img-top-wrapper\" ng-style=\"{'padding-top': item.styleAttr + '%'}\" href=\"{{item.url}}\" target=\"_blank\"><img ng-style=\"{'margin-top': '-' + ( item.imgStyleAttr ? (item.imgStyleAttr + item.styleAttr) : item.styleAttr ) + '%'}\" class=\"card-img-top\" ng-src=\"{{item.image}}\"></a></span><div class=\"card-block\" ng-if=\"item.text\"><p class=\"card-text\" read-more words limit=\"40\" content=\"{{ toSafe(item.text, item.service) }}\"></p></div></div></div>"
  );


  $templateCache.put('views/intranet/social/social-timeline.html',
    "<div ng-if=\"!socialHideControls\"><ul class=\"nav nav-pills\"><li class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive('all')}\"><a class=\"text-gray\" ng-click=\"timelineSwitchService($event, 'all')\" href=\"#\"><i class=\"fa fa-th\"></i></a></li><li ng-repeat=\"(service, obj) in services\" ng-show=\"showServiceTab(service)\" class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive(service)}\"><a class=\"text-gray\" ng-click=\"timelineSwitchService($event, service)\" href=\"#\"><i class=\"fa {{obj.icon}}\"></i><span class=\"sr-only\">{{obj.name}}</span></a></li></ul></div><div class=\"now-feed clearfix\" ng-class=\"oddEvenSwitch ? 'item-left' : 'item-right'\"><div ng-repeat=\"(key, item) in social track by item.id\" class=\"feed-type-{{item.service}}\" data-date=\"{{getPublishedDate(item.date)}}\"><a class=\"feed-icon text-gray\" ng-href=\"{{getPostUrl(item)}}\" target=\"_blank\"><i class=\"fa {{services[item.service].icon}}\"></i></a><div class=\"card\"><a ng-if=\"item.image\" class=\"card-img-top-wrapper\" href=\"{{item.url}}\" ng-style=\"{'padding-top': item.styleAttr + '%'}\" target=\"_blank\"><img ng-style=\"{'margin-top': '-' + ( item.imgStyleAttr ? item.imgStyleAttr : 0 ) + '%'}\" class=\"card-image\" ng-src=\"{{item.image}}\"></a><div ng-if=\"item.text\" class=\"card-block\"><h6 ng-if=\"item.title\" class=\"card-title\" ng-bind-html=\"toSafe(item.title)\"></h6><p class=\"card-text\" read-more words limit=\"40\" content=\"{{ toSafe(item.text, item.service) }}\"></p><div ng-if=\"item.date\" class=\"social-date text-gray\" date=\"{{item.date}}\">{{item.date|date}}</div></div></div></div></div>"
  );


  $templateCache.put('views/intranet/social/social.html',
    "<div class=\"row\" ng-if=\"!socialHideControls\"><div class=\"col-xs-6 col-sm-8\"><ul class=\"nav nav-pills\"><li class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive('all')}\"><a class=\"text-gray\" ng-click=\"switchService($event, 'all')\" href=\"#\"><i class=\"fa fa-th\"></i></a></li><li ng-repeat=\"(service, obj) in services\" ng-show=\"showServiceTab(service)\" class=\"social-filter-{{service}}\" ng-class=\"{active: isServiceActive(service)}\"><a class=\"text-gray\" ng-click=\"switchService($event, service)\" href=\"#\"><i class=\"fa {{obj.icon}}\"></i><span class=\"sr-only\">{{obj.name}}</span></a></li></ul></div><div class=\"col-xs-6 col-sm-4 text-right\"><!--\n" +
    "        <a class=\"btn btn-xs btn-default\" ng-click=\"recent()\">Recent</a>\n" +
    "        <a class=\"btn btn-xs btn-default\" ng-click=\"shuffle()\">Shuffle</a>\n" +
    "        --><a class=\"btn btn-default\" href=\"/contact\"><i class=\"fa fa-fw fa-comments\"></i> Connect with us &raquo;</a></div></div><div dynamic-layout items=\"social\"></div>"
  );


  $templateCache.put('views/payments/list.html',
    "<a ui-sref=\"site.paymentsSettings({siteId: site._id})\" class=\"btn btn-primary pull-right\">Settings</a> list payments"
  );


  $templateCache.put('views/payments/settings.html',
    "<h2>ProudCity Payments Details</h2><div class=\"row\"><div class=\"col-md-8\"><form class=\"form-horizontal\" ng-submit=\"submit()\"><div class=\"alert alert-success\" ng-if=\"msg == 'success'\">Your payment settings have been saved. We will begin the verification process and contact you if we need any additional information. You can now start adding Payment fields to your forms.</div><div class=\"alert alert-danger\" ng-if=\"msg && msg != 'success'\">There has been an error processing your submission: <strong>{{msg}}</strong>. Please correct the errors and try submitting the form again.</div><h3>Public information</h3><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">Email:</label><div class=\"col-sm-9\"><input type=\"email\" class=\"form-control\" ng-model=\"account.email\" required placeholder=\"Enter email\"><div class=\"text-muted\">This will be used for bank account transfer notifications.</div></div></div><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">Legal entity name:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.business_name\" required placeholder=\"Enter business name\"></div></div><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">Website:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.business_url\" placeholder=\"https://\"></div></div><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">Statement descriptor:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.statement_descriptor\" required placeholder=\"\"><div class=\"text-muted\">Appears on your customer's card statement.</div></div></div><hr><h3>Contact information</h3><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">Street Address 1:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.legal_entity.address.line1\" placeholder=\"\"></div></div><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">Street Address 2:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.legal_entity.address.line2\" placeholder=\"\"></div></div><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">City:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.legal_entity.address.city\" placeholder=\"\"></div></div><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">State:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.legal_entity.address.state\" placeholder=\"\"></div></div><div class=\"form-group\"><label class=\"control-label col-sm-3\" for=\"\">Zip code:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.legal_entity.address.postal_code\" placeholder=\"\"></div></div><hr><h3>Bank account information</h3><div class=\"form-group\" ng-if=\"isNew\"><label class=\"control-label col-sm-3\" for=\"\">Routing number:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.external_account.routing_number\" required placeholder=\"Typically the first number on your check\"></div></div><div class=\"form-group\" ng-if=\"isNew\"><label class=\"control-label col-sm-3\" for=\"\">Account number:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.external_account.account_number\" required placeholder=\"Typically the second number on your check\"></div></div><div class=\"form-group\" ng-if=\"isNew\"><label class=\"control-label col-sm-3\" for=\"\">Tax ID number (TIN):</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.legal_entity.business_tax_id\" required placeholder=\"XX-XXXXXXX\"></div></div><div class=\"form-group\" ng-if=\"!isNew\"><label class=\"text-right col-sm-3\" for=\"\">Routing number:</label><label class=\"col-sm-9\">{{account.external_accounts.data[0].routing_number}}</label></div><div class=\"form-group\" ng-if=\"!isNew\"><label class=\"text-right col-sm-3\" for=\"\">Account number:</label><label class=\"col-sm-9\">Last four digits: {{account.external_accounts.data[0].last4}}</label></div><div class=\"alert alert-warning\" ng-if=\"!isNew\">Please <a href=\"https://proudcity.com/contact\">contact us</a> if you need to make any changes to your Routing number, Account number, or Tax ID number.</div><hr><h3>Legal representative</h3><p>This must be completed by the Finance Director, or another legal representative. Personal information, as well as your organization information is used to verify the account.</p><div class=\"form-group\" ng-if=\"!isNew\"><label class=\"text-right col-sm-3\" for=\"\">Name:</label><label class=\"col-sm-9\">{{account.legal_entity.first_name}} {{account.legal_entity.last_name}}</label></div><div class=\"form-group\" ng-if=\"isNew\"><label class=\"control-label col-sm-3\" for=\"\">First name:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.legal_entity.first_name\" placeholder=\"\"></div></div><div class=\"form-group\" ng-if=\"isNew\"><label class=\"control-label col-sm-3\" for=\"\">Last name:</label><div class=\"col-sm-9\"><input type=\"text\" class=\"form-control\" ng-model=\"account.legal_entity.last_name\" placeholder=\"\"></div></div><div class=\"form-group\" ng-if=\"isNew\"><label class=\"control-label col-sm-3\" for=\"\">Date of Birth:</label><div class=\"col-sm-9\"><input type=\"date\" ng-model=\"account.legal_entity.dob\"></div></div><div class=\"form-group\" ng-if=\"isNew\"><label class=\"control-label col-sm-3\" for=\"\">SSN last four:</label><div class=\"col-sm-9\"><input type=\"password\" class=\"form-control\" ng-model=\"account.legal_entity.ssn_last_4\" placeholder=\"xxx-xx-____\"><div class=\"text-muted\">Enter the last four digits of your Social Security Number.</div></div></div><div class=\"alert alert-warning\" ng-if=\"!isNew\">Please <a href=\"https://proudcity.com/contact\">contact us</a> if you need to make any changes to the legal representative's Name, Date of Birth or SSN.</div><hr><div class=\"form-group\"><div class=\"\"><div class=\"checkbox\"><label><span ng-if=\"isNew\"><input type=\"checkbox\" ng-model=\"account.tos_acceptance\">I agree</span> <span ng-if=\"!isNew\">You have previously agreed</span> to the ProudCity <a target=\"_blank\" href=\"https://proudcity.com/terms-of-service/\">Services Agreement</a> and the <a target=\"_blank\" href=\"https://stripe.com/connect-account/legal\">Stripe Connected Account Agreement</a></label></div></div></div><div class=\"form-group\"><div class=\"col-sm-9\"><button type=\"submit\" class=\"btn btn-lg btn-primary\">Submit</button></div></div></form></div></div>"
  );


  $templateCache.put('views/pc-locate.html',
    "<form class=\"form-inline\"><div class=\"form-group\"><input class=\"input-lg form-control\" type=\"text\" googleplace ng-model=\"place\" place=\"chosenPlace\" ng-change=\"chosenUpdate()\" style=\"width:350px\" placeholder=\"enter an address or location\"></div><button class=\"btn btn-lg btn-default hidden-xs\"><i class=\"fa\" ng-class=\"chosenLoading ? 'fa-spinner fa-pulse' : 'fa-search'\"></i></button></form><div ng-if=\"geolocation\"><div class=\"or-bar\"><span>OR</span></div><button class=\"btn btn-primary btn-lg\" ng-click=\"locate()\"><i class=\"fa fa-fw\" ng-class=\"geolocationLoading ? 'fa-spinner fa-pulse' : 'fa-location-arrow'\"></i> Use my current location</button></div>"
  );


  $templateCache.put('views/site/dashboard.html',
    "<div class=\"row\"><div class=\"col-md-7\"><p>Make your city proud. Finish setting up your ProudCity site.</p><div class=\"progress\"><div id=\"checklist-progress\" class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"3 of 10 steps completed\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width:10%\">1 of 10 steps completed</div></div><div checklist-accordion site=\"site\" checklist=\"checklist\"></div></div><div class=\"col-md-5\"><div class=\"panel panel-default panel-heading panel-body\"><h4 style=\"margin-top:0\">Did you know?</h4><p>You can accept payments directly on your website with custom forms and ProudCity Payments?</p><p>You can get started in less than a day with no activation fee, and no special merchant bank account is necessary. Transaction fees are only $0.30 + 3% after that.</p><p><a class=\"btn btn-default\" target=\"_blank\" href=\"https://proudcity.com/contact\">Contact us to get started</a></p></div><div class=\"panel panel-default panel-body\"><h4 style=\"margin-top:0\">Get Help</h4><div class=\"card-columns card-columns-xs-1 card-columns-sm-2 card-columns-md-2 card-columns-equalize\"><div class=\"card-wrap\"><a href=\"#\" onclick=\"jQuery('.zEWidget-launcher').show();$zopim.livechat.window.show();return false\" class=\"card text-center card-btn card-block\"><i class=\"fa fa-comment fa-3x\"></i><h3>Live chat</h3></a></div><div class=\"card-wrap\"><a href=\"https://proudcity.com/support/create\" class=\"card text-center card-btn card-block\" target=\"_blank\"><i class=\"fa fa-sticky-note-o fa-3x\"></i><h3>Create a ticket</h3></a></div><div class=\"card-wrap\"><a href=\"https://proudcity.com/support/create\" class=\"card text-center card-btn card-block\" target=\"_blank\"><i class=\"fa fa-plus-circle fa-3x\"></i><h3>Request a feature</h3></a></div><div class=\"card-wrap\"><a href=\"https://proudcity.com/support/create\" class=\"card text-center card-btn card-block\" target=\"_blank\"><i class=\"fa fa-binoculars fa-3x\"></i><h3>Guides</h3></a></div></div></div></div></div><style></style>"
  );


  $templateCache.put('views/site/loading.html',
    "<div class=\"container\"><h1>Building {{site.name}}</h1><div class=\"progress\"><div id=\"checklist-progress\" class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width:{{stage.progress}}%\"></div></div><h3 class=\"text-center\">{{stage.label}}</h3><div ng-if=\"status == 'live'\" class=\"text-center\" style=\"margin-top:50px\"><a class=\"btn btn-primary btn-lg\" ui-sref=\"site.dashboard({siteId: site._id})\"><i class=\"fa fa-fw fa-dashboard\"></i>Take me to my Dashboard</a></div><div ng-if=\"status != 'live'\" class=\"text-center\" style=\"margin-top:50px\"><div>While you're waiting, let's learn a little more about ProudCity</div><iframe style=\"margin:10px auto\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/KyjmUMX2meo\" frameborder=\"0\" allowfullscreen></iframe></div></div>"
  );


  $templateCache.put('views/site/local-embed.html',
    "<div class=\"container\"><div class=\"row bg-alpha\"><div class=\"col-md-6\"><h1>Make {{city}} proud!</h1><p>Copy and paste this embed code on to your website</p><textarea style=\"height:100px\" class=\"form-control\">&lt;iframe src=\"{{cityApiUrl}}../city/{{site.state}}/{{site.city}}/local/embed\" style=\"width:100%;height:400px;border:none;\"&gt;&lt;/iframe&gt;</textarea></div><div class=\"col-md-6\"><h2>Ready for the next step?</h2><ul><li>Add custom local services from GIS files or CSS files</li><li>Answers: A search-first information architecture</li><li>Online payments: Simple flat-rate fees; Get started in less than 2 hours</li><li>Embed in Facebook, in your website, or create a mobile app (<a href=\"https://example.proudcity.com/service-center\" target=\"_blank\">see examples</a>)</li><li>Free! for 30 days, and if you use ProudCity payments</li></ul><p><a ui-sref=\"siteCreateCity({distro: 'service-center', city: location.city, state: location.state})\" class=\"btn btn-primary btn-lg\" role=\"button\"><img src=\"https://my.proudcity.com/images/IconWhite.png\" width=\"24\"> Create Service Center</a></p></div></div><style>.navbar {\n" +
    "            z-index: 1;\n" +
    "        }\n" +
    "\n" +
    "        main {\n" +
    "            position: absolute;\n" +
    "            top: 0;\n" +
    "            right: 0;\n" +
    "            bottom: 0;\n" +
    "            left: 0;\n" +
    "            background-image: url({{bg.url}});\n" +
    "            background-size: cover;\n" +
    "        }\n" +
    "\n" +
    "        main .container {\n" +
    "            position: relative;\n" +
    "            top: 40%;\n" +
    "            transform: translateY(-50%);\n" +
    "        }\n" +
    "\n" +
    "        .bg-alpha {\n" +
    "            background-color: rgba(255, 255, 255, 0.9);\n" +
    "            padding: 0 30px 30px;\n" +
    "        }</style></div>"
  );


  $templateCache.put('views/site/plugins.html',
    "<h1>Integrations</h1><div class=\"row\"><div class=\"col-md-6\" ng-repeat=\"plugin in plugins\"><div class=\"panel panel-default panel-body\"><div class=\"row\"><div class=\"col-md-3\"><img ng-src=\"{{plugin.icons['1x']}}\" width=\"100\" style=\"margin: 0 auto\"></div><div class=\"col-md-9\"><h3 style=\"margin-top:0\"><a ui-sref=\"site.dashboard({'siteId': site._id})\">{{plugin.name}}</a></h3><a href=\"https://proudcity.com/support/create\" class=\"btn btn-default pull-right\" target=\"_blank\">Enable</a> <a href=\"\" class=\"btn btn-default\" target=\"_blank\">Learn more</a></div></div></div></div></div>"
  );


  $templateCache.put('views/site/site-create-admin.html',
    "<div class=\"container\"><div class=\"row\"><div class=\"col-md-6 col-md-push-3\"><h1>Launch a site</h1><h3>Your new site will take approximately <strong>5 minutes</strong> to build</h3><form ng-submit=\"submit(site)\"><div class=\"form-group\"><label><span>Dsitribution Type: *</span></label><input type=\"text\" ng-model=\"site.type\" class=\"form-control\" required><!--<p ng-if=\"!isAgency\" class=\"text-muted\">Typically this is a city, but it can also be a county, agency, state, etc.</p>--></div><div class=\"form-group\"><label><span>City: *</span></label><input type=\"text\" ng-model=\"site.city\" class=\"form-control\" required><!--<p ng-if=\"!isAgency\" class=\"text-muted\">Typically this is a city, but it can also be a county, agency, state, etc.</p>--></div><div class=\"form-group\"><label>State: *</label><input type=\"text\" ng-model=\"site.state\" class=\"form-control\" required><p class=\"text-muted\">Your two-letter state abbreviation.</p></div><div class=\"form-group\"><label>Site Name: *</label><a href=\"#\" ng-click=\"updateName($event)\" title=\"Set to City\"><i class=\"fa fa-fw fa-refresh\"></i></a> <input type=\"text\" ng-model=\"site.name\" class=\"form-control\" required></div><div class=\"form-group\"><label>Namespace: *</label><input type=\"text\" ng-model=\"site.namespace\" class=\"form-control\" required></div><div class=\"form-group\"><label>App: *</label><a ng-click=\"updateApp($event)\" title=\"Update app name from City and State\"><i class=\"fa fa-fw fa-refresh\"></i></a> <input type=\"text\" ng-model=\"site.app\" class=\"form-control\" required></div><div class=\"form-group\"><label>Subdomain: *</label><a ng-click=\"updateSubdomain($event)\" title=\"Update subdomain from City and State\"><i class=\"fa fa-fw fa-refresh\"></i></a> <input type=\"text\" ng-model=\"site.subdomain\" class=\"form-control\" required></div><div class=\"form-group\"><label>URL: *</label><a ng-click=\"updateUrl($event)\" title=\"Update URL from subomain\"><i class=\"fa fa-fw fa-refresh\"></i></a> <input type=\"text\" ng-model=\"site.url\" class=\"form-control\" required><p class=\"text-muted\">Include the https://</p></div><div class=\"form-group\"><label>Source database:</label><input type=\"text\" ng-model=\"site.db\" class=\"form-control\"><p class=\"text-muted\">Leave this blank to use the default ProudCity database dump.</p></div><div class=\"form-group\"><label><input type=\"checkbox\" ng-model=\"site.build\" ng-true-value=\"true\" ng-false-value=\"0\"> Build this site</label><p class=\"text-muted\">Leave checked if you want to build the site. Uncheck to only create a record in the ProudCity API.</p></div><input type=\"submit\" class=\"btn btn-primary\" value=\"Launch\"></form></div></div></div>"
  );


  $templateCache.put('views/site/site-create-city.html',
    "<div class=\"container\"><div class=\"row\"><div class=\"col-md-6 col-md-push-3 bg-alpha\"><h1>Make {{site.city}} proud</h1><p>Let's build a new webiste for {{site.city}}. Click the button below and we'll build your <strong>sandbox</strong> site in the next <strong>5 minutes</strong>.</p><div><label>Site Name:</label>{{site.name}}</div><div><label>Sandbox URL:</label><strong>{{site.subdomain}}</strong>{{suffix}} <a ng-click=\"getUrl();$event.preventDefault();\" ng-href=\"#\" title=\"Try a different sandbox url\"><i class=\"fa fa-fw fa-refresh\"></i></a></div><div><a href=\"#\" ng-click=\"infoActive = !infoActive;$event.preventDefault();\"><i class=\"fa fa-fw fa-plus\" ng-if=\"!infoActive\"></i><i class=\"fa fa-fw fa-minus\" ng-if=\"infoActive\"></i>Learn more about ProudCity URLs</a><div ng-if=\"infoActive\"><h3>Sandbox site <small><i class=\"fa fa-fw fa-star-o\"></i>You are here</small></h3><p>Anyone, from city employees to residents can create a free Sandbox website. The domain will include an inspirational adjective and your location.</p><h3>Test site</h3><p>A staff member will reach out, and if it looks like we'll be a good fit, you take over your city's city-state.proudcity.com domain. You get a <strong>free</strong> test website to build out and promote internally. We also enable advanced features like Issue Reporting and Payments.<h3>Launch</h3></p><p>The big day has arrived. The launch on yourcity.org goes off without a hitch. Only now will you start paying your <a href=\"https://proudcity.com/pricing\" target=\"_blank\">ProudCity dues</a>.</p></div></div><br><button class=\"btn btn-lg btn-primary\" ng-click=\"doLaunch(site)\"><img src=\"https://my.proudcity.com/images/IconWhite.png\" width=\"24\"> Launch site</button></div></div></div><style>.navbar {\n" +
    "        z-index: 1;\n" +
    "    }\n" +
    "\n" +
    "    main {\n" +
    "        position: absolute;\n" +
    "        top: 0;\n" +
    "        right: 0;\n" +
    "        bottom: 0;\n" +
    "        left: 0;\n" +
    "        background-image: url({{bg.url}});\n" +
    "        background-size: cover;\n" +
    "    }\n" +
    "\n" +
    "    main .container {\n" +
    "        position: relative;\n" +
    "        top: 40%;\n" +
    "        transform: translateY(-50%);\n" +
    "    }\n" +
    "\n" +
    "    .bg-alpha {\n" +
    "        background-color: rgba(255, 255, 255, 0.9);\n" +
    "        padding: 0 30px 30px;\n" +
    "    }</style>"
  );


  $templateCache.put('views/site/site-create.html',
    "<div class=\"container\"><div class=\"row\"><div class=\"col-md-6 col-md-push-3\"><h1>Launch a site</h1><h3>Your new site will take approximately five minutes to build</h3><form ng-submit=\"submit(site)\"><div ng-if=\"isAgency\" class=\"form-group\">{{site}}<label>Agency Name:</label><input type=\"text\" ng-model=\"site.name\" class=\"form-control\" ng-change=\"updateApp()\" required><p ng-if=\"!isAgency\" class=\"text-muted\">The name of your agency.</p></div><div class=\"form-group\"><label><span>City:</span></label><input type=\"text\" ng-model=\"site.city\" class=\"form-control\" ng-change=\"updateApp()\" required><!--<p ng-if=\"!isAgency\" class=\"text-muted\">Typically this is a city, but it can also be a county, agency, state, etc.</p>--></div><div class=\"form-group\"><label>State:</label><input type=\"text\" ng-model=\"site.state\" class=\"form-control\" ng-change=\"updateApp()\" required><p class=\"text-muted\">Your two-letter state abbreviation.</p></div><p><div ng-if=\"site.namespace\"><label>Namespace:</label>{{site.namespace}}</div><div ng-if=\"site.app\"><label>App:</label>{{site.app}}</div><div ng-if=\"site.db\"><label>Source database:</label>{{site.db}}</div><div ng-if=\"!site.build\"><label>Do not build</label></div></p><input type=\"submit\" class=\"btn btn-primary\" value=\"Launch\"></form></div></div></div>"
  );


  $templateCache.put('views/site/site-distros.html',
    "<div class=\"container\"><h1>I would like to create a...</h1><div class=\"row\"><div class=\"col-md-4\" ng-repeat=\"distro in distros\"><div class=\"panel panel-default panel-body\" ui-sref=\"siteCreate({'type': distro.slug})\"><a class=\"thumb\" ui-sref=\"siteCreate({'type': distro.slug})\"></a><h3><a ui-sref=\"siteCreate({'type': distro.slug})\">{{distro.name}}</a></h3><span class=\"pull-right text-right\">{{distro.price}}/resident/month<br>after launch</span> Free test</div></div></div></div><style>.panel {\n" +
    "        cursor: pointer;\n" +
    "    }\n" +
    "\n" +
    "    .thumb {\n" +
    "        height: 150px;\n" +
    "        width: 100%;\n" +
    "        background: #ccc url('https://my.proudcity.com/images/IconWhite.png') center no-repeat;\n" +
    "        text-align: center;\n" +
    "        line-height: 150px;\n" +
    "        font-size: 50px;\n" +
    "        color: white !important;\n" +
    "        text-decoration: none !important;\n" +
    "        display: block;\n" +
    "    }</style>"
  );


  $templateCache.put('views/site/site-edit-admin.html',
    "<div class=\"alert alert-success alert-dismissable\" ng-if=\"msg == 'saved'\">City successfully saved.</div><div ng-jsoneditor ng-model=\"obj.data\" options=\"obj.options\" style=\"width: 100%; height: 600px;margin-bottom: 1em\"></div><div class=\"row\"><div class=\"col-xs-12\"><button class=\"btn btn-primary\" ng-click=\"submit(obj.data)\">Save</button></div></div>"
  );


  $templateCache.put('views/site/site.html',
    "<div class=\"container\"><div class=\"pull-right text-muted\" style=\"margin-top:24px\"><small><a ng-href=\"{{site.url}}\" target=\"_blank\">{{site.url}}<i class=\"fa fa-fw fa-external-link text-muted fa-xs\"></i></a></small></div><h1>{{site.name}}</h1><ul class=\"nav nav-pills\"><li ui-sref-active=\"active\"><a ui-sref=\"site.dashboard({'siteId': site._id})\"><i class=\"fa fa-fw fa-dashboard\"></i>Dashboard</a></li><li ui-sref-active=\"active\"><a ui-sref=\"site.analytics({'siteId': site._id})\"><i class=\"fa fa-fw fa-line-chart\"></i>Analytics</a></li><!--<li ui-sref-active=\"active\"><a ui-sref=\"site.intranet.social({'siteId': site._id})\"><i class=\"fa fa-fw fa-address-card-o\"></i>Intranet</a></li>--><li ui-sref-active=\"active\"><a ui-sref=\"site.plugins({'siteId': site._id})\"><i class=\"fa fa-fw fa-rocket\"></i>Integrations</a></li><li ui-sref-active=\"active\"><a ui-sref=\"site.users({'siteId': site._id})\"><i class=\"fa fa-fw fa-users\"></i>Users</a></li><li><a ng-href=\"{{site.url}}/wp-admin/edit.php?post_type=question\" target=\"_blank\">Content<i class=\"fa fa-fw fa-external-link text-muted fa-xs\"></i></a></li><li class=\"dropdown pull-right\"><a class=\"dropdown-toggle btn btn-default\" data-toggle=\"dropdown\" id=\"proud-city-user\" ui-sref=\"site.setting({'siteId': site._id})\"><i class=\"fa fa-fw fa-cog\"></i>Settings <span class=\"caret\"></span></a><ul class=\"menu dropdown-menu nav\"><li class=\"leaf first\"><a ui-sref=\"site.settingsAnalytics({siteId: site._id})\"><i class=\"fa fa-fw fa-line-chart\"></i> Analytics</a></li><li class=\"leaf first\"><a ng-href=\"{{site.url}}/wp-admin/admin.php?page=service-center-settings\"><i class=\"fa fa-fw fa-desktop\"></i> Service Center<i class=\"fa fa-fw fa-external-link text-muted fa-xs\"></i></a></li><li class=\"leaf\"><a ui-sref=\"site.paymentsSettings({'siteId': site._id})\"><i class=\"fa fa-fw fa-credit-card\"></i> Payments</a></li><li class=\"leaf\"><a ui-sref=\"site.socialSettings({'siteId': site._id})\"><i class=\"fa fa-fw fa-comments-o\"></i> Social Media accounts</a></li></ul></li></ul><hr><div ui-view></div></div><style>.fa-xs {\n" +
    "        font-size: 10px;\n" +
    "        padding-left: 5px;\n" +
    "    }</style>"
  );


  $templateCache.put('views/site/sites.html',
    "<div class=\"container\"><input class=\"form-control pull-right\" style=\"margin-top:20px;max-width:200px\" ng-model=\"query\" placeholder=\"Search\"><h1>Sites</h1><div class=\"row\"><div class=\"col-md-4\"><div class=\"panel panel-default panel-body\" ui-sref=\"distros\"><a ui-sref=\"distros\" class=\"thumb new\"><i class=\"fa fa-plus-circle\"></i></a><h3><a ui-sref=\"distros\">Create new site</a></h3><a href=\"{{site.url}}\" class=\"btn btn-default\" target=\"_blank\" style=\"visibility: hidden\">View site</a><!--this is just for padding--></div></div><div class=\"col-md-4\" ng-repeat=\"site in sites | filter:query | orderBy: 'name' \"><div class=\"panel panel-default panel-body\"><a class=\"thumb\" ui-sref=\"site.dashboard({'siteId': site._id})\"><img src=\"{{site.thumb}}\"></a><h3><a ui-sref=\"site.dashboard({'siteId': site._id})\">{{site.name}}</a></h3><a href=\"{{site.url}}/wp-admin/edit.php?post_type=page\" class=\"btn btn-default pull-right\" target=\"_blank\">Manage content</a> <a href=\"{{site.url}}\" class=\"btn btn-default\" target=\"_blank\">View site</a></div></div></div></div><style>.panel {\n" +
    "    }\n" +
    "\n" +
    "    .thumb {\n" +
    "        height: 170px;\n" +
    "        width: 100%;\n" +
    "        background: #ccc url('https://my.proudcity.com/images/IconWhite.png') center no-repeat;\n" +
    "        text-align: center;\n" +
    "        line-height: 150px;\n" +
    "        font-size: 50px;\n" +
    "        color: white !important;\n" +
    "        text-decoration: none !important;\n" +
    "        display: block;\n" +
    "        overflow: hidden;\n" +
    "    }\n" +
    "\n" +
    "    .thumb.new {\n" +
    "        background: #0071BC;\n" +
    "    }</style>"
  );


  $templateCache.put('views/site/user-add.html',
    "<form ng-submit=\"submit(form)\"><div class=\"form-group\"><label for=\"emails\">Email address:</label><textarea cols=\"60\" rows=\"3\" ng-model=\"form.emails\" class=\"form-control\" required></textarea><p class=\"text-muted\">Enter one email address per line.</p></div><div class=\"form-group\"><label for=\"role\">Role:</label><select class=\"form-control\" ng-model=\"form.role\" required><option ng-repeat=\"role in roles\" value=\"{{role.value}}\">{{role.label}}</option></select></div><!--<div class=\"form-group\">\n" +
    "      <label for=\"role\">Custom message:</label>\n" +
    "      <textarea cols=\"60\" rows=\"3\" model=\"form.message\" class=\"form-control\"></textarea>\n" +
    "    </div>--><input type=\"submit\" class=\"btn btn-primary\" value=\"Invite\"></form>"
  );


  $templateCache.put('views/site/users.html',
    "<p><a class=\"btn btn-primary\" ui-sref=\"site.userAdd({siteId: site._id})\"><i class=\"fa fa-fw fa-plus-circle\"></i>Invite users</a></p><div class=\"row\"><div class=\"col-md-8\"><div class=\"panel-group\"><div class=\"panel panel-default panel-body user-record\" ng-repeat=\"user in users\" ng-click=\"setActive(user)\" ng-class=\"activeUser == user._id ? 'active' : ''\"><div class=\"row\"><div class=\"col-xs-4 col-sm-2\"><img ng-if=\"user.avatar\" ng-src=\"{{user.avatar}}\" class=\"pull-left\" style=\"max-width: 90px\"><div ng-if=\"!user.avatar\" class=\"thumb new\"><i class=\"fa fa-user\"></i></div></div><div class=\"col-xs-8 col-sm-10\"><h4>{{user.email}}</h4><p ng-if=\"activeUser != user._id\" style=\"text-transform: capitalize\">{{user.role}}</p><div ng-if=\"activeUser == user._id\"><p>New role:<select class=\"form-control\" model=\"user.role\" ng-update=\"userRoleUpdate(user)\"><option ng-repeat=\"role in roles\" value=\"{{role.value}}\">{{role.label}}</option></select></p><p><button class=\"btn btn-danger\" ng-click=\"userRemove(user)\"><i class=\"fa fa-fw fa-trash\"></i>Remove from site</button></p></div></div></div></div></div></div><div class=\"col-md-4\"><h4>Admin</h4>Full access to create and edit any content, change site settings, configure site in the Dashboard.<hr><h4>Publisher</h4>Full access to create and edit any content, as well as publish pending revisions.<hr><h4>Author</h4>Full access to create and edit most content and mark as Pending Review to be published by a Publisher or Admin.<hr></div></div><style>.thumb {\n" +
    "        height: 75px;\n" +
    "        width: 75;\n" +
    "        background: #aaa;\n" +
    "        text-align: center;\n" +
    "        line-height: 75px;\n" +
    "        font-size: 50px;\n" +
    "        color: white !important;\n" +
    "        text-decoration: none !important;\n" +
    "        display: block;\n" +
    "    }\n" +
    "\n" +
    "    .panel.active {\n" +
    "        background: #FFFFEF !important;\n" +
    "    }\n" +
    "\n" +
    "    .panel {\n" +
    "        cursor: pointer;\n" +
    "    }\n" +
    "\n" +
    "    .panel:hover {\n" +
    "        background: #eee;\n" +
    "    }</style>"
  );


  $templateCache.put('views/start/start.html',
    "<div full-page options=\"fullScreenOptions\" id=\"full-page\"><div class=\"section section-select\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-7 col-md-push-3\"><h1>The digital platform for your city</h1><h3>Find your city and get started with ProudCity in as little as 5 mintutes.</h3><h4>Questions? <a href=\"https://proudcity.com/contact\">Contact us</a></h4></div></div><pc-locate class=\"text-center\"></pc-locate></div></div><div class=\"section section-current\" ng-if=\"location && stats.website\"><div class=\"vertical-padding\"><h2 class=\"text-center\">The status of Digital {{location.city}} <small>Population {{stats.population | currency:\"\":0}}</small></h2><div class=\"row\"><p ng-if=\"!stats.website\">Could not find your current website. Enter it: @todo</p><div ng-if=\"thumbnail.url\" class=\"col-md-6\" style=\"padding: 40px\"><div class=\"website-thumb-wrapper\"><div class=\"website-thumb\"><img ng-src=\"{{thumbnail.url}}\" alt=\"Thumbnail of {{stats.website}}\"></div></div></div><div ng-if=\"stats.website\" class=\"col-md-6\"><div class=\"checklist\" style=\"margin-bottom: 2em\"><h3>{{location.city}}'s Digital Checklist</h3><div><a ng-href=\"{{stats.website}}\" target=\"_blank\" title=\"Visit {{location.city}}'s current website\">{{stats.website}}</a></div><div><i class=\"fa fa-fw\" ng-class=\"stats.https == 'Yes' ? 'text-success fa-check' : 'text-danger fa-times'\"></i>Secure (forced https)</div><div><i class=\"fa fa-fw\" ng-class=\"stats.mobile == 'Yes' ? 'text-success fa-check' : 'text-danger fa-times'\"></i>Mobile responsive</div><div ng-if=\"stats.cms != 'Unknown'\"><i class=\"fa fa-fw text-success fa-check\"></i>CMS: {{stats.cms}}</div><div ng-if=\"stats.cms == 'Unknown'\"><i class=\"fa fa-fw text-warning fa-question\"></i>No Content Management System detected</div><div><i class=\"fa fa-fw text-warning fa-question\"></i>Social Media presence</div><div><i class=\"fa fa-fw text-warning fa-question\"></i>Online payments</div><div><i class=\"fa fa-fw text-warning fa-question\"></i>Report an issue</div></div></div><div class=\"text-center\"><p>Pass the checklist, get more features, and pay less.</p><p><button ng-click=\"scrollToSection(3)\" class=\"btn btn-primary btn-lg\">Get started with ProudCity</button></p><p><a href=\"https://proudcity.com/quote/?city={{location.city}}&state={{location.state}}\" target=\"_blank\">Get quote</a></p></div></div></div></div><!-- .section-select-1 --><div ng-if=\"location\" class=\"section section-1\" style=\"background-image: url({{image.url}})\"><div class=\"container big-container\"><div class=\"row bg-alpha\"><div class=\"col-md-2\"><div class=\"big-number\">1</div><p class=\"time\"><label><i class=\"fa fa-fw fa-clock-o\"></i> Time to launch</label>5 mins</p><p class=\"cost\"><label><i class=\"fa fa-fw fa-money\"></i> Price</label>Free!</p></div><div class=\"col-md-10\"><h2>Get Started with ProudCity Local Services</h2><p><a ui-sref=\"siteCreateLocalEmbed(location)\" class=\"btn btn-primary btn-lg\" role=\"button\"><img src=\"https://my.proudcity.com/images/IconWhite.png\" width=\"24\"> Get embed code</a></p><p>Did you know that we already have a ProudCity site for {{location.city}}? Have a look:<br><strong><a href=\"https://{{subdomain}}.proudcity.com\">{{subdomain}}.proudcity.com</a></strong></p>Do you think this could be useful to your citizens or website visitors? Add it to your website for free.</div></div><iframe ng-src=\"{{embedUrl}}\" style=\"border:none;width:100%;height:500px\"></iframe><div class=\"text-center next-link\"><a ng-click=\"nextSection($event)\" href=\"\">Next step<br><i class=\"fa fa-down fa-chevron-circle-down\"></i></a></div></div></div><!-- .section-1 --><div ng-if=\"location\" class=\"section section-2\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-2\"><div class=\"big-number\">2</div><p class=\"time\"><label><i class=\"fa fa-fw fa-clock-o\"></i> Time to launch</label>2 hrs</p><p class=\"cost\"><label><i class=\"fa fa-fw fa-money\"></i> Price</label>Free for 30 days<br>{{stats.population / 100 | currency}}/month after</p></div><div class=\"col-md-10\"><h2>Customize it</h2><p><a ui-sref=\"siteCreateCity({distro: 'service-center', city: location.city, state: location.state})\" class=\"btn btn-primary btn-lg\" role=\"button\"><img src=\"https://my.proudcity.com/images/IconWhite.png\" width=\"24\"> Create Service Center</a></p><p><a href=\"https://example.proudcity.com\" target=\"_blank\">See example</a></p><p>Convert the Local Services app into a full blown Service Center that residents can use online, on their phones, at a kiosk, or even within Facebook.</p><div ng-if=\"checklist_service_center\" checklist-accordion checklist=\"checklist_service_center\"></div></div></div><div class=\"text-center next-link\"><a ng-click=\"nextSection($event)\" href=\"\">Peek ahead<br><i class=\"fa fa-down fa-chevron-circle-down\"></i></a></div></div></div><!-- .section-2 --><div ng-if=\"location\" class=\"section section-3\" style=\"background-image: url({{staticmap.url}})\"><div class=\"container\"><div class=\"row bg-alpha\"><div class=\"col-md-2\"><div class=\"big-number\">3</div><p class=\"time\"><label><i class=\"fa fa-fw fa-clock-o\"></i> Time to launch</label>Less than 6 weeks</p><p class=\"cost\"><label><i class=\"fa fa-fw fa-money\"></i> Price</label>Free during build-out<br>White glove onboarding available</p></div><div class=\"col-md-10\"><h2>Build out your full site</h2><p><a ui-sref=\"siteCreateCity({distro: 'proudcity', city: location.city, state: location.state})\" class=\"btn btn-primary btn-lg\" role=\"button\"><img src=\"https://my.proudcity.com/images/IconWhite.png\" width=\"24\"> Launch your full test site now</a></p><p><a href=\"https://example.proudcity.com\" target=\"_blank\">See example</a></p><p>Analyize your Service Center analytics to tune your Answers content and design a straegy to improve the official {{location.city}} website. Manage your homepage blocks, add Departments, Events, Jobs and more to build out your full site. You get a free test site to build out. You don't have to pay until your new site goes live. With our optional <a href=\"@todo\">White glove onboarding service</a>, we work directly with your stakeholders to build your your full website in 6 weeks or less.</p><div ng-if=\"checklist_proudcity\" checklist-accordion checklist=\"checklist_proudcity\"></div></div></div><div class=\"text-center next-link\"><a ng-click=\"nextSection($event)\" href=\"\">Let's launch!<br><i class=\"fa fa-down fa-chevron-circle-down\"></i></a></div></div></div><!-- .section-3 --><div ng-if=\"location\" class=\"section section-3\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-2\"><div class=\"big-number\">4</div><p class=\"cost\"><label><i class=\"fa fa-fw fa-money\"></i> Price</label>{{2 * stats.population / 100 | currency}}/month</p></div><div class=\"col-md-10\"><h2>Launch {{location.city}}'s new website and continue to improve</h2><p><a class=\"btn btn-lg btn-primary\" href=\"https://proudcity.com/quote/?city={{location.city}}&state={{location.state}}\" target=\"_blank\">Get pricing</a><!--<button ng-click=\"doContact()\" class=\"btn btn-primary\">Contact us to learn more</button>--></p><p>Use our Analytics Dashboard and feedback from your visitors to keep improving. You get bi-weekly feature additions, bugfixes and security updates.</p><div ng-if=\"checklist_proudcity\" checklist-accordion checklist=\"checklist_proudcity_maintain\"></div></div></div></div></div><!-- .section-3 --><div class=\"section section-contact\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-6\">@todo: embed zopim</div><div class=\"col-md-6\">[testimonial from SR]</div></div></div></div><!-- .section-4 --></div><!-- .full-page --><div id=\"myModal\" class=\"modal fade\" role=\"dialog\" style=\"display:block\" ng-if=\"showModal\"><div class=\"modal-dialog\"><!-- Modal content--><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button><h4 class=\"modal-title\">Modal Header</h4></div><div class=\"modal-body\"><p>Some text in the modal.</p></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button></div></div></div></div><style>.navbar {\n" +
    "        z-index: 100;\n" +
    "    }\n" +
    "\n" +
    "    .section .container:not(.big-container) {\n" +
    "        position: relative;\n" +
    "        top: 40%;\n" +
    "        transform: translateY(-50%);\n" +
    "    }\n" +
    "\n" +
    "    .section .vertical-padding {\n" +
    "        padding-top: 40px;\n" +
    "    }\n" +
    "\n" +
    "    label {\n" +
    "        font-weight: bold;\n" +
    "        display: block;\n" +
    "    }\n" +
    "\n" +
    "    .big-number {\n" +
    "        font-size: 5em;\n" +
    "        line-height: 1em;\n" +
    "        font-weight: bold;\n" +
    "    }\n" +
    "\n" +
    "    .section {\n" +
    "        background-size: cover;\n" +
    "    }\n" +
    "\n" +
    "    .section-select {\n" +
    "        color: white !important;\n" +
    "        background-image: url(https://proudcity.com/wp-content/uploads/2016/09/homebg2.jpg);\n" +
    "    }\n" +
    "\n" +
    "    .section-select, .section-select h1, .section-select h3, .section-select h4, .section-select a {\n" +
    "        color: white !important;\n" +
    "\n" +
    "    }\n" +
    "\n" +
    "    .section-select a {\n" +
    "        text-decoration: underline;\n" +
    "    }\n" +
    "\n" +
    "    .or-bar span {\n" +
    "        background-color: #323A45;\n" +
    "        color: white;\n" +
    "        border: 1px solid #434343;\n" +
    "        border-radius: 5px;\n" +
    "    }\n" +
    "\n" +
    "    .section-current .website-thumb-wrapper {\n" +
    "        background: url(/images/computer-screen.png);\n" +
    "        padding: 20px;\n" +
    "        background: url(/images/computer-screen.png);\n" +
    "        padding: 20px 20px 161px;\n" +
    "        max-width: 550px;\n" +
    "        margin: 0 auto;\n" +
    "        background-size: cover;\n" +
    "    }\n" +
    "\n" +
    "    .section-current .website-thumb {\n" +
    "        height: 305px;\n" +
    "        width: 100%;\n" +
    "        background: #000 url('https://my.proudcity.com/images/IconWhite.png') center no-repeat;\n" +
    "        text-align: center;\n" +
    "        line-height: 150px;\n" +
    "        font-size: 50px;\n" +
    "        color: white !important;\n" +
    "        text-decoration: none !important;\n" +
    "        display: block;\n" +
    "        overflow: hidden;\n" +
    "    }\n" +
    "\n" +
    "    .section-current .website-thumb img {\n" +
    "        background-color: #fff;\n" +
    "    }\n" +
    "\n" +
    "    .section-current .checklist {\n" +
    "        padding: 80px 40px 37px;\n" +
    "        width: 471px;\n" +
    "        margin: 30px auto 0;\n" +
    "        /*transform: rotate3d(1, 1, -1, 65deg);*/\n" +
    "        font-size: 1.4em;\n" +
    "        background: url(/images/clipboard.png);\n" +
    "        background-size: cover;\n" +
    "    }\n" +
    "\n" +
    "    .section-current .checklist h3 {\n" +
    "        font-size: 1.6em;\n" +
    "    }\n" +
    "\n" +
    "    .section-1 {\n" +
    "        background-color: #eee;\n" +
    "        background-size: cover;\n" +
    "    }\n" +
    "\n" +
    "    .section-contact {\n" +
    "        background: #0071BC;\n" +
    "        color: #fff !important;\n" +
    "    }\n" +
    "\n" +
    "    .bg-alpha {\n" +
    "        background-color: rgba(255, 255, 255, 0.8);\n" +
    "        padding: 5px 0;\n" +
    "        margin: 12px 0;\n" +
    "    }</style>"
  );


  $templateCache.put('views/user/login.html',
    "<h1 class=\"text-center\" style=\"margin: 50px 0 30px\">Welcome to ProudCity</h1><div id=\"widget-container\"></div><style>.auth0-lock-header {\n" +
    "        display: none;\n" +
    "    }\n" +
    "\n" +
    "    .auth0-lock-submit {\n" +
    "        border-radius: 0;\n" +
    "    }</style>"
  );

}]);
