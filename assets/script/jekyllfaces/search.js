---
---

{% assign searchJsonPath = "/search.json" | relative_url %}

"use strict";

var searchMatcher = function(posts) {

    return function findMatches(q, cb) {
        var matches, substrRegex;

        // an array that will be populated with substring matches
        matches = [];

        var qs = q.split(" ");
        $.each(posts, function(i1, post){
            var include = true;
            $.each(qs, function(i2, term){
                var substrRegex = new RegExp(term, 'i');
                if(!substrRegex.test(post.terms)){
                    include = false;
                }
            });
            if(include) {
                post.query = qs.join(" ");
                matches.push(post);
            }
        });

        cb(matches);
    };
};

// TODO: search works as expected, but typeahead isn't working. fix it.

function TypeaheadHandler(inputId, data) {

  if(!data) return;

  var that = this;
  var $input = $("#" + (inputId || "txtSearch"));
  var postData = data;

  var getDataByFieldValue = function(field, value, firstOnly) {
    var matches = [];
    value = (value || "").toLocaleLowerCase();
    if(value) {
      field = (field || "title");
      var fields = field.split('|');
      for (var i = 0; i < postData.length; i++) {
        var match =
          fields.some(function(element, index, array) {
            var fieldText = $('<div/>').html((postData[i][element] || "").toLowerCase()).text();
            return fieldText.includes(value);
          });
        if(match) {
          matches.push(postData[i]);
          if (firstOnly) { break; }
        }
      }
    }
    return matches;
  };

  that.getDataByUrl = function(url) {
    return getDataByFieldValue("url", url, true);
  };

  that.getData = function(substring) {
    // return getDataByFieldValue("title|tags|keywords|excerpt|terms", substring);
    return getDataByFieldValue("terms", substring);
  };

  if($input && data) {
    $input.typeahead({
      autoSelect: false,
      source: data,
      displayText: function(item) { return $('<div/>').html(item.title).text(); },
      matcher: function(post) {
        var text = (this.query || "").toLowerCase();
        return (post.title || "").toLowerCase().includes(text) ||
               (post.tags || "").toLowerCase().includes(text) ||
               (post.keywords || "").toLowerCase().includes(text) ||
               (post.excerpt || "").toLowerCase().includes(text);
      }
    }).change(function(){
      var $input = $(this);
      var current = $input.typeahead("getActive");
      if(current) {
        if(current.title.toLowerCase() === $input.val().toLowerCase()) {
          // active element is exact match
          //console.log(current);
        } else {
          // active element is partial match
        }
      } else {
        // nothing is active
      }
    });
  }
}

var typeaheadHandler = typeaheadHandler || new TypeaheadHandler();

$(document).ready(function() {
  var initData = function(data) {
    typeaheadHandler = new TypeaheadHandler("txtSearch", data);
    if(typeof whenSearchTermsReady !== 'undefined') {
      whenSearchTermsReady();
    }
  };

  $.ajax({
    dataType: "json",
    url: "{{ searchJsonPath }}",
    data: null,
    success: function (data) {
      initData(data);
    },
    error: function(err) {
      if(err.status === 200) {
        initData(JSON.parse(err.responseText));
      }
    }
  });
});