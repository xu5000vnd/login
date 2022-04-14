// https://gist.github.com/muralikrishnat/9c7049fda1a3708c780c
//self invoking function which binds routing object to 'window' object
(function (window) {
    //just a variable/object 
    var $M = {};
    //list that holds routing details i.e., route url and function to execute
    $M.RoutingList = [];
    //to check status of pages
    $M.currentPage = '';

    //Routing class which has multiple properties i.e., url,function to execute when
    var RoutingClass = function (u, f, t) {
        this.Params = u.split('/').filter(function (h) { return h.length > 0; });
        this.Url = u;
        this.Fn = f;

        this.Title = t;
    };


    //simple utility function that return 'false' or url params 
    //will parse url and fetches param values from 'location.href'
    var checkParams = function (urlParams, routeParams) {
        var paramMatchCount = 0, paramObject = {};

        for (var i = 0; i < urlParams.length; i++) {
            var rtParam = routeParams[i];
            if (rtParam.indexOf(':') >= 0) {
                paramObject[rtParam.split(':')[1]] = urlParams[i];
                paramMatchCount += 1;
            }
        }

        if (paramMatchCount === urlParams.length) {
            return paramObject;
        }

        return false;
    };


    //will executes 'function(s)' which are binded to respective 'url'
    //along with values of url params for e.g.,
    //:     /:page/:pageid 
    //:     /home/3434434
    //values will be page=>home and pageid=>3434434
    $M.loadController = function (urlToParse) {
        if ($M.currentPage !== urlToParse) {
            $M.previousPage = $M.currentPage;
            $M.currentPage = urlToParse;
            var uParams = urlToParse.split('/').filter(function (h) {
                return h.length > 0;
            });
            var isRouteFound = 0;
            for (var i = 0; i < $M.RoutingList.length; i++) {
                var routeItem = $M.RoutingList[i];
                if (routeItem.Params.length === uParams.length) {
                    var _params = checkParams(uParams, routeItem.Params);
                    if (_params) {
                        _params.Title = routeItem.Title;
                        isRouteFound += 1;
                    }
                }
                routeItem.Fn.call(null, _params);
            }
        } else {
            // console.log('you are on same page dude!!!!');
        }
    };


    //uses browsers pushSate functionality to navigate from one page to another
    //and loads respective controller to execute
    $M.navigateTo = function (navigateTo) {
        window.history.pushState(null, null, navigateTo);
        $M.loadController(navigateTo);
    };

    //will add 'url' and 'function' to routing list 
    $M.addRoute = function (urlToMatch, fnToExecute, t) {
        if (typeof urlToMatch === 'string') {
            $M.RoutingList.push(new RoutingClass(urlToMatch, fnToExecute, t));
        } else if (typeof urlToMatch && urlToMatch instanceof Array) {
            urlToMatch.forEach(function (lItem) {
                $M.RoutingList.push(new RoutingClass(lItem, fnToExecute, t));
            });
        }

    };

    //binding routing object to window as '$NB'
    window.$NB = $M;
})(window);