# Dogspots
## Overview

**Dogspots** ist eine WebApplication mit der Hundeplätze in Städten
aufgelistet werden. Als Hobby-Projekt für die neuste Generation an
JavaScript MVC-Frameworks soll es mit **Ember.js** zeigen wie gut sich
WebApps als Mobile Anwendungen eignen.


## Technologie
Dogspots basiert auf Rails und Ember.js. 

Rails agiert Serverseitig als reine JSON API mit einem Restful
Interface.

Clientseitig übernimmt Ember.js die Kommunikation mit dem Server sowie
Interaktion mit dem User.

Das Interface basiert auf Twitter Bootstrap.

## Installation
Vorrausgesetzt du hast Ruby 1.9.3 auf deinem System eingerichtet

* git clone git@github.com:GerritWanderer/dogspots.git
* cd dogspots
* bundle install
* rake db:migrate

**Beispieldaten laden**

* rake db:seed

**Server starten**

* rails s
* und http://0.0.0.0:3000 im Browser aufrufen

## Tests

Dogspots besitzt für den Rails-Stack folgende Tests:

* Unit Tests
* Functional Tests
* Acceptance Tests

Für die Acceptance Tests ist [PhantomJS](http://phantomjs.org)
notwendig.

**Tests starten**

* rake test
