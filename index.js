;(function () {
  'use strict';

  function activate() {
    document.body.innerHTML = '<h1>' + document.title + '</h1>' +
      '<p>' +
      window.fakerUk.lorem.sentences(1) +
      '<br><br>' + window.fakerUk.lorem.sentences(4) +
      '<br><br>' + window.fakerUk.lorem.sentences(16) +
      '</p>' +
      '<hr><p><em>' + document.querySelector('meta[name="description"]').content + '</em></p>';
  }

  if (document.readyState !== 'loading') {
    activate();
  } else {
    document.addEventListener('DOMContentLoaded', activate);
  }
})();
