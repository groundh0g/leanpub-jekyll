---
---

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

var posts = [
{% include search-json.liquid %}
];

$(document).ready(function (){
    $('#txtSearch').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        },
        {
            // name: 'title',
            display: 'title',
            source: searchMatcher(posts)
        });
    $('#txtSearch').bind('typeahead:select', function(ev, suggestion) {
        console.log('Selection: ' + suggestion.query);
    });
});
