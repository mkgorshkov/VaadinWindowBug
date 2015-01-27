function com_savoirfairelinux_bugs_MyAppWidgetset(){
  var $intern_0 = 'bootstrap', $intern_1 = 'begin', $intern_2 = 'gwt.codesvr.com.savoirfairelinux.bugs.MyAppWidgetset=', $intern_3 = 'gwt.codesvr=', $intern_4 = 'com.savoirfairelinux.bugs.MyAppWidgetset', $intern_5 = 'startup', $intern_6 = 'DUMMY', $intern_7 = 0, $intern_8 = 'body', $intern_9 = 'iframe', $intern_10 = 'javascript:""', $intern_11 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_12 = ' top: -1000px;', $intern_13 = 'CSS1Compat', $intern_14 = '<!doctype html>', $intern_15 = '', $intern_16 = '<html><head><\/head><body><\/body><\/html>', $intern_17 = 'undefined', $intern_18 = /loaded|complete/, $intern_19 = 'DOMContentLoaded', $intern_20 = 50, $intern_21 = 'Chrome', $intern_22 = 'eval("', $intern_23 = 1, $intern_24 = '");', $intern_25 = 'script', $intern_26 = 'javascript', $intern_27 = 'moduleStartup', $intern_28 = 'moduleRequested', $intern_29 = 'head', $intern_30 = 'meta', $intern_31 = 'name', $intern_32 = 'com.savoirfairelinux.bugs.MyAppWidgetset::', $intern_33 = '::', $intern_34 = 'gwt:property', $intern_35 = 'content', $intern_36 = '=', $intern_37 = 'gwt:onPropertyErrorFn', $intern_38 = 'Bad handler "', $intern_39 = '" for "gwt:onPropertyErrorFn"', $intern_40 = 'gwt:onLoadErrorFn', $intern_41 = '" for "gwt:onLoadErrorFn"', $intern_42 = '#', $intern_43 = '?', $intern_44 = '/', $intern_45 = /^\w+:\/\//, $intern_46 = 'img', $intern_47 = 'clear.cache.gif', $intern_48 = 'baseUrl', $intern_49 = 'com.savoirfairelinux.bugs.MyAppWidgetset.nocache.js', $intern_50 = 'base', $intern_51 = '//', $intern_52 = /^\//, $intern_53 = /^[a-zA-Z]+:\/\//, $intern_54 = 'modernie', $intern_55 = 'MSIE', $intern_56 = 'Trident', $intern_57 = 'yes', $intern_58 = 'none', $intern_59 = 'user.agent', $intern_60 = 'opera', $intern_61 = 'webkit', $intern_62 = 'trident', $intern_63 = 'safari', $intern_64 = 'msie', $intern_65 = 10, $intern_66 = 'ie10', $intern_67 = 9, $intern_68 = 'ie9', $intern_69 = 8, $intern_70 = 'ie8', $intern_71 = 'gecko', $intern_72 = 'gecko1_8', $intern_73 = 'unknown', $intern_74 = 2, $intern_75 = 3, $intern_76 = 4, $intern_77 = 5, $intern_78 = 'selectingPermutation', $intern_79 = 'com.savoirfairelinux.bugs.MyAppWidgetset.devmode.js', $intern_80 = '85409412C7DBD401215C65D8CB40585E', $intern_81 = ':1', $intern_82 = ':2', $intern_83 = ':3', $intern_84 = ':4', $intern_85 = ':5', $intern_86 = ':6', $intern_87 = ':', $intern_88 = '.cache.js', $intern_89 = 'loadExternalRefs', $intern_90 = 'end', $intern_91 = 'http:', $intern_92 = 'file:', $intern_93 = '_gwt_dummy_', $intern_94 = '__gwtDevModeHook:com.savoirfairelinux.bugs.MyAppWidgetset', $intern_95 = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/, $intern_96 = 'Ignoring non-whitelisted Dev Mode URL: ', $intern_97 = ':moduleBase';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_4, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_5, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  com_savoirfairelinux_bugs_MyAppWidgetset.__sendStats = sendStats;
  com_savoirfairelinux_bugs_MyAppWidgetset.__moduleName = $intern_4;
  com_savoirfairelinux_bugs_MyAppWidgetset.__errFn = null;
  com_savoirfairelinux_bugs_MyAppWidgetset.__moduleBase = $intern_6;
  com_savoirfairelinux_bugs_MyAppWidgetset.__softPermutationId = $intern_7;
  com_savoirfairelinux_bugs_MyAppWidgetset.__computePropValue = null;
  com_savoirfairelinux_bugs_MyAppWidgetset.__getPropMap = null;
  com_savoirfairelinux_bugs_MyAppWidgetset.__gwtInstallCode = function(){
  }
  ;
  com_savoirfairelinux_bugs_MyAppWidgetset.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  com_savoirfairelinux_bugs_MyAppWidgetset.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  com_savoirfairelinux_bugs_MyAppWidgetset.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  __propertyErrorFunction = null;
  var activeModules = $wnd.__gwt_activeModules = $wnd.__gwt_activeModules || {};
  activeModules[$intern_4] = {moduleName:$intern_4};
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function getInstallLocation(){
    setupInstallLocation();
    return frameDoc.getElementsByTagName($intern_8)[$intern_7];
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc.createElement($intern_9);
    scriptFrame.src = $intern_10;
    scriptFrame.id = $intern_4;
    scriptFrame.style.cssText = $intern_11 + $intern_12;
    scriptFrame.tabIndex = -1;
    $doc.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == $intern_13?$intern_14:$intern_15;
    frameDoc.write(doctype + $intern_16);
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_17) {
          return typeof $doc.body != $intern_17 && $doc.body != null;
        }
        return $intern_18.test($doc.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_19, onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_19, onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , $intern_20);
    }

    function installCode(code_0){
      function removeScript(body_0, element){
      }

      var docbody = getInstallLocation();
      var doc = getInstallLocationDoc();
      var script;
      if (navigator.userAgent.indexOf($intern_21) > -1 && window.JSON) {
        var scriptFrag = doc.createDocumentFragment();
        scriptFrag.appendChild(doc.createTextNode($intern_22));
        for (var i = $intern_7; i < code_0.length; i++) {
          var c = window.JSON.stringify(code_0[i]);
          scriptFrag.appendChild(doc.createTextNode(c.substring($intern_23, c.length - $intern_23)));
        }
        scriptFrag.appendChild(doc.createTextNode($intern_24));
        script = doc.createElement($intern_25);
        script.language = $intern_26;
        script.appendChild(scriptFrag);
        docbody.appendChild(script);
        removeScript(docbody, script);
      }
       else {
        for (var i = $intern_7; i < code_0.length; i++) {
          script = doc.createElement($intern_25);
          script.language = $intern_26;
          script.text = code_0[i];
          docbody.appendChild(script);
          removeScript(docbody, script);
        }
      }
    }

    com_savoirfairelinux_bugs_MyAppWidgetset.onScriptDownloaded = function(code_0){
      setupWaitForBodyLoad(function(){
        installCode(code_0);
      }
      );
    }
    ;
    sendStats($intern_27, $intern_28);
    var script = $doc.createElement($intern_25);
    script.src = filename;
    $doc.getElementsByTagName($intern_29)[$intern_7].appendChild(script);
  }

  com_savoirfairelinux_bugs_MyAppWidgetset.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  com_savoirfairelinux_bugs_MyAppWidgetset.__installRunAsyncCode = function(code_0){
    var docbody = getInstallLocation();
    var script = getInstallLocationDoc().createElement($intern_25);
    script.language = $intern_26;
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_30);
    for (var i = $intern_7, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_31), content;
      if (name_0) {
        name_0 = name_0.replace($intern_32, $intern_15);
        if (name_0.indexOf($intern_33) >= $intern_7) {
          continue;
        }
        if (name_0 == $intern_34) {
          content = meta.getAttribute($intern_35);
          if (content) {
            var value_0, eq = content.indexOf($intern_36);
            if (eq >= $intern_7) {
              name_0 = content.substring($intern_7, eq);
              value_0 = content.substring(eq + $intern_23);
            }
             else {
              name_0 = content;
              value_0 = $intern_15;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_37) {
          content = meta.getAttribute($intern_35);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_38 + content + $intern_39);
            }
          }
        }
         else if (name_0 == $intern_40) {
          content = meta.getAttribute($intern_35);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_38 + content + $intern_41);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    com_savoirfairelinux_bugs_MyAppWidgetset.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_42);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_43);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_44, Math.min(queryIndex, hashIndex));
      return slashIndex >= $intern_7?path.substring($intern_7, slashIndex + $intern_23):$intern_15;
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match($intern_45)) {
      }
       else {
        var img = $doc.createElement($intern_46);
        img.src = url_0 + $intern_47;
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_48);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_15;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_25);
      for (var i = $intern_7; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_49) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_15;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_50);
      if (baseElements.length > $intern_7) {
        return baseElements[baseElements.length - $intern_23].href;
      }
      return $intern_15;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_51 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_15) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_15) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_15 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match($intern_52)) {
      return resource;
    }
    if (resource.match($intern_53)) {
      return resource;
    }
    return com_savoirfairelinux_bugs_MyAppWidgetset.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = $intern_7;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i = $intern_7, n = propValArray.length - $intern_23; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunc) {
        __propertyErrorFunc(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers[$intern_54] = function(){
      {
        var ua = $wnd.navigator.userAgent;
        if (ua.indexOf($intern_55) == -1 && ua.indexOf($intern_56) != -1) {
          return $intern_57;
        }
        return $intern_58;
      }
    }
    ;
    values[$intern_54] = {none:$intern_7, yes:$intern_23};
    providers[$intern_59] = function(){
      var ua = navigator.userAgent.toLowerCase();
      if (function(){
        return ua.indexOf($intern_60) != -1;
      }
      ())
        return $intern_60;
      if (function(){
        return ua.indexOf($intern_61) != -1 && ua.indexOf($intern_62) == -1;
      }
      ())
        return $intern_63;
      if (function(){
        return ua.indexOf($intern_64) != -1 && $doc.documentMode == $intern_65;
      }
      ())
        return $intern_66;
      if (function(){
        return ua.indexOf($intern_64) != -1 && $doc.documentMode >= $intern_67;
      }
      ())
        return $intern_68;
      if (function(){
        return ua.indexOf($intern_64) != -1 && $doc.documentMode >= $intern_69;
      }
      ())
        return $intern_70;
      if (function(){
        return ua.indexOf($intern_71) != -1;
      }
      ())
        return $intern_72;
      return $intern_73;
    }
    ;
    values[$intern_59] = {gecko1_8:$intern_7, ie10:$intern_23, ie8:$intern_74, ie9:$intern_75, opera:$intern_76, safari:$intern_77};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    com_savoirfairelinux_bugs_MyAppWidgetset.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    com_savoirfairelinux_bugs_MyAppWidgetset.__computePropValue = computePropValue;
    $wnd.__gwt_activeModules[$intern_4].bindings = com_savoirfairelinux_bugs_MyAppWidgetset.__getPropMap;
    sendStats($intern_0, $intern_78);
    if (isHostedMode()) {
      return computeUrlForResource($intern_79);
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers([$intern_58, $intern_72], $intern_80);
      unflattenKeylistIntoAnswers([$intern_57, $intern_72], $intern_80 + $intern_81);
      unflattenKeylistIntoAnswers([$intern_58, $intern_66], $intern_80 + $intern_82);
      unflattenKeylistIntoAnswers([$intern_58, $intern_70], $intern_80 + $intern_83);
      unflattenKeylistIntoAnswers([$intern_58, $intern_68], $intern_80 + $intern_84);
      unflattenKeylistIntoAnswers([$intern_58, $intern_60], $intern_80 + $intern_85);
      unflattenKeylistIntoAnswers([$intern_58, $intern_63], $intern_80 + $intern_86);
      strongName = answers[computePropValue($intern_54)][computePropValue($intern_59)];
      var idx = strongName.indexOf($intern_87);
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + $intern_23), $intern_65);
        strongName = strongName.substring($intern_7, idx);
      }
    }
     catch (e) {
    }
    com_savoirfairelinux_bugs_MyAppWidgetset.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_88);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    sendStats($intern_89, $intern_1);
    sendStats($intern_89, $intern_90);
  }

  processMetas();
  com_savoirfairelinux_bugs_MyAppWidgetset.__moduleBase = computeScriptBase();
  activeModules[$intern_4].moduleBase = com_savoirfairelinux_bugs_MyAppWidgetset.__moduleBase;
  var filename = getCompiledCodeFilename();
  if ($wnd) {
    var devModePermitted = !!($wnd.location.protocol == $intern_91 || $wnd.location.protocol == $intern_92);
    $wnd.__gwt_activeModules[$intern_4].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = $intern_93;
      try {
        $wnd.sessionStorage.setItem(key, key);
        $wnd.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = $intern_94;
      var devModeUrl = $wnd.sessionStorage[devModeKey];
      if (!$intern_95.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log($intern_96 + devModeUrl);
        }
        devModeUrl = $intern_15;
      }
      if (devModeUrl && !$wnd[devModeKey]) {
        $wnd[devModeKey] = true;
        $wnd[devModeKey + $intern_97] = computeScriptBase();
        var devModeScript = $doc.createElement($intern_25);
        devModeScript.src = devModeUrl;
        var head = $doc.getElementsByTagName($intern_29)[$intern_7];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[$intern_7]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats($intern_0, $intern_90);
  installScript(filename);
  return true;
}

com_savoirfairelinux_bugs_MyAppWidgetset.succeeded = com_savoirfairelinux_bugs_MyAppWidgetset();
