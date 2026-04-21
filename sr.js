// skip restrictions
(function () {
  "use strict";

  var name = "xyzlib.lampa-plugins.sr";
  var manifest = {
    //id: 'com.example.myplugin',
    version: "0.0.1",
    author: "@xyzlib",
    name: name,
    description: name + " description",
    url: "https://xyzlib.github.io/lampa-plugins/sr.js",
    //icon: '',
  };

  function pluginXYZ() {
    setTimeout(function() {
      console.log(manifest.name, "window.lampa_settings = ", window.lampa_settings);
      if (window.lampa_settings) {
        if (window.lampa_settings.disable_features) {
          window.lampa_settings.disable_features.dmca = true;
          window.lampa_settings.disable_features.lgbt = true;
        }
        window.lampa_settings.dmca = [];
        window.lampa_settings.lgbt = {};
      }
    }, 5000);
  }

  function initializePlugin() {
    //Lampa.Manifest.plugins = manifest;

    var updateplugins = false;
    var plugins = Lampa.Storage.get("plugins", "[]");
    plugins.forEach(function (plug) {
      console.log(manifest.name, "plug = ", plug);
      //console.log(manifest.name, `plug.url = ${plug.url}`);
      if (plug.url.indexOf("xyzlib.github.io") >= 0) {
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
    window.xyzlib___plugins[name] = true;
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

  if (!window.xyzlib___plugins) {
    window.xyzlib___plugins = {};
  }
  if (!window.xyzlib___plugins[name]) {
    startPlugin();
  }
})();
