var elt = jQuery.noConflict();
(function (elt) {
  function FadeTransition(element, opts) {
    var el = element,
        $el = elt(el),
        fadeTimer = null,
        current = 0,
        paused = false,
        self = this,
        options = elt.extend({pauseTime: 5000,
                            transitionTime: 2000,
                            ignore: null,
                            singleLoop: false,
                            delayStart: 0,
                            pauseOnMouseOver: false,
                            manualNavigation: false,
                            createNavButtons: false,
                            navButtonContainer: null}, opts),
        els = (options.ignore)?elt("> *:not(" + options.ignore + ")", el):elt("> *", el);
                            
    function setup() {
      $el.css("position", "relative");
      els.css("display", "none").css({left: 0, top: 0, position: "absolute"});
      els.filter(':first').css("display", "block");
      
      if (options.createNavButtons) {
        createNavButtons();
        highlightNav();
      }
    
      if (options.pauseOnMouseOver) {
        $el.mouseover(pause).mouseout(unpause);
        elt('a', options.navButtonContainer || el).mouseover(pause).mouseout(unpause);
      }
    
      if (options.delayStart > 0) {
        setTimeout(start, options.delayStart);
      }
      else {
        start();
      }
    }
    
    function transitionTo(nextIdx) {
      elt(els[current]).fadeOut(options.transitionTime);
      elt(els[current = nextIdx]).fadeIn(options.transitionTime, cue);
      highlightNav();
    }
    
    function manualNav(e) {
      var idx;
      this.blur();
      elt(els).stop(true);
      clearTimeouts();
      elt(els).css({'opacity': 1, 'display': 'none'});
      elt(els[current]).css({'display': 'block'});
      idx = elt('.fadenav a', el).index(this);
      transitionTo(idx);
      e.preventDefault();
    }
      
    function createNavButtons() {
      var i, nav = elt('<div class="fadenav"></div>');
      for (i=0; i<els.length; i++) {
        elt('<a class="nav' + i + '" href="#">&nbsp;</a>', options.navButtonContainer || el).click(manualNav).appendTo(nav);
      }
        
      nav.appendTo(options.navButtonContainer || el);
    }
    
    function highlightNav() {
      if (options.createNavButtons) {
        elt('.fadenav a', options.navButtonContainer || el).removeClass('current');
        elt('.fadenav a:nth-child(' + (1 + current) + ')', options.navButtonContainer || el).addClass('current');
      }
    }
      
    function start() {
      if (options.ignore) {
        elt(options.ignore, el).fadeOut(options.transitionTime);
        elt(els[current]).fadeIn(options.transitionTime);
        fadeTimer = setTimeout(self.next, options.pauseTime + options.transitionTime);
      }
      else {
        highlightNav();      
        if (!options.manualNavigation) {
          fadeTimer = setTimeout(self.next, options.pauseTime);
        }
      }
    }
    
    function pause() {
      paused = true;
      clearTimeouts();
    }
    
    function unpause() {
      paused = false;
      cue();
    }
    
    function clearTimeouts() {
      if (fadeTimer) {
        window.clearTimeout(fadeTimer);
        fadeTimer = null;
      }
    }
    
    this.show = function(item) {
      if (typeof(els[item]) !== 'undefined') {
        clearTimeouts();
        transition(item);
      }
      
      return this;
    };
    
    this.currentItem = function() {
      return current;
    }
    
    function cue() {
      if (paused || options.manualNavigation || (els.length < 2)) {
        return false;
      }
      clearTimeouts();
      fadeTimer = window.setTimeout(self.next, options.pauseTime);
    }
    
    this.next = function() {
      if (!options.singleLoop || ((current + 1) % els.length > 0)) {
        transitionTo((current + 1) % els.length || 0);
      }
    };

    this.prev = function() {
      transitionTo(((current || els.length) - 1) % els.length);
    };

    $el.data('Fader', this);
    setup();
  }
  
  elt.fn.fadeTransition = function(options) {
    function getFader() {
      if (typeof elt(this).data('Fader') === 'object') {
        return elt(this).data('Fader');
      }
      else {
        return new FadeTransition(this, options);
      }
    }
    
    this.fader = function() {
      if (typeof elt(this).filter(':first').data('Fader') === 'object') {
        return elt(this).filter(':first').data('Fader');
      }
      
      return null;
    };
    
    return this.each(getFader);
  };
  

}(jQuery));

