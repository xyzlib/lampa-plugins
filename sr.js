// skip restrictions
(function () {
  "use strict";

  var category = "xyzlib.lampa-plugins";
  var name = category + ".sr";
  var manifest = {
    //id: 'com.example.myplugin',
    version: "0.0.2",
    author: "@xyzlib",
    name: name,
    description: name + " description",
    url: "https://xyzlib.github.io/lampa-plugins/sr.js",
    //icon: '',
  };

  function pluginXYZ() {
    var count = 0;
    var maxCount = 5;

    _sr();

    function _sr() {
      //console.log(manifest.name, "window.lampa_settings = ", window.lampa_settings);
      console.log(manifest.name, `::: count = ${count}::: ${!!window.lampa_settings} && (${!!window.lampa_settings.dmca} && ${!!window.lampa_settings.lgbt} || ${(count >= maxCount)})`);
      if (window.lampa_settings && (window.lampa_settings.dmca && window.lampa_settings.lgbt || (count >= maxCount))) {
        if (window.lampa_settings.disable_features) {
          window.lampa_settings.disable_features.dmca = true;
          window.lampa_settings.disable_features.lgbt = true;
        }
        window.lampa_settings.dmca = false;
        window.lampa_settings.lgbt = false;
      } else if (count < maxCount) {
        count++;
        setTimeout(_sr, 1000);
      }
    }
  }

  function initializePlugin() {
    //Lampa.Manifest.plugins = manifest;

    var updateplugins = false;
    var plugins = Lampa.Storage.get("plugins", "[]");
    plugins.forEach(function (plug) {
      //console.log(manifest.name, `plug.url = ${plug.url}`);
      if (plug.url.indexOf(manifest.url) > -1) {
        updateplugins = true;
        plug.author = manifest.author;
        plug.name = manifest.name;
        plug.version = manifest.version;
      }
    });
    if (updateplugins) {
      Lampa.Storage.set("plugins", plugins);
    }

    pluginXYZ();
  }

  function startPlugin() {
    //console.log(manifest.name, "Плагин запущен");
    window[category][name] = true;
    if (window.appready) {
      initializePlugin();
    } else {
      Lampa.Listener.follow("app", function (e) {
        if (e.type === "ready") {
          initializePlugin();
        }
      });
    }
  }

  if (!window[category]) {
    window[category] = {};
  }
  if (!window[category][name]) {
    startPlugin();
  }
})();
