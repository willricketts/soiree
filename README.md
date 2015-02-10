# Soiree
RESTful backend for the Soiree geosocial platform.
###Architecture
The app is structured in a way so that the web client and RESTful JSON API are both available in this codebase. For instance, if the client's HTTP request header contains the following, the output will be in JSON:

```
Accept: application/json
```
In the following case, the application would return a view:
```
Accept: text/html
```
