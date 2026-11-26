(function () {
  var panels = {
    spring: document.getElementById("panel-spring"),
    summer: document.getElementById("panel-summer"),
    fall: document.getElementById("panel-fall"),
    winter: document.getElementById("panel-winter")
  };
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".season-tabs [role='tab']"));
  var label = document.getElementById("season-label");
  var labels = {
    spring: "Spring Foraging in Tennessee",
    summer: "Summer Foraging in Tennessee",
    fall: "Fall Foraging in Tennessee",
    winter: "Winter Foraging in Tennessee"
  };

  function seasonFromDate(d) {
    var m = d.getMonth(); // 0-11
    if (m >= 2 && m <= 4) return "spring";
    if (m >= 5 && m <= 7) return "summer";
    if (m >= 8 && m <= 10) return "fall";
    return "winter";
  }

  function setSeason(name, pushHash) {
    if (!panels[name]) return;
    Object.keys(panels).forEach(function (key) {
      var on = key === name;
      panels[key].classList.toggle("is-active", on);
      panels[key].hidden = !on;
    });
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("data-season") === name;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
    });
    if (label) label.textContent = labels[name];
    if (pushHash) {
      if (history.replaceState) history.replaceState(null, "", "#" + name);
      else location.hash = name;
    }
  }

  function fromHash() {
    var h = (location.hash || "").replace("#", "").toLowerCase();
    if (panels[h]) return h;
    return seasonFromDate(new Date());
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setSeason(tab.getAttribute("data-season"), true);
    });
    tab.addEventListener("keydown", function (e) {
      var i = tabs.indexOf(tab);
      var next = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === "Home") next = tabs[0];
      if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        next.focus();
        setSeason(next.getAttribute("data-season"), true);
      }
    });
  });

  window.addEventListener("hashchange", function () {
    setSeason(fromHash(), false);
  });

  setSeason(fromHash(), false);
})();
