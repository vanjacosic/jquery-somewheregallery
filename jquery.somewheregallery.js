/*
 *  jQuery Somewhere Gallery - v0.2
 *  Made by Vanja Cosic, Opbeat Inc.
 *  Under MIT License
 *
 *  --------------------------------
 *
 *  Based on jQuery Boilerplate - v3.3.1
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = 'somewhereGallery',
        defaults = {
        sparks      : [],
        profile     : null,
        imageSize   : 'talk_image',
        baseURL     : 'http://somewherehq.com/',
        debug       : false
    };

    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;

        // Check for required options
        if (!this.settings.profile) throw 'A profile name is required!';
        if (this.settings.sparks.length === 0) throw 'An array of spark id\'s is required!';
        var validImageSizes = ['image', 'profile_image', 'avatar_image', 'talk_image'];
        if($.inArray(this.settings.imageSize, validImageSizes) === -1) throw 'Invalid imageSize specified!';

        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var self = this;

            // Debug mode
            if(self.settings.debug === true){
                self.debug();
            }

            // Prepare container
            $(self.element).addClass('somewhere-gallery');

            // Go through each spark in array
            $.each(self.settings.sparks, function(i, sparkId){
                // Fetch data from API
                self.getSparkData(sparkId);
            });
        },
        debug: function(){
            var self = this;

            // If debug is on, log settings and sparks
            console.log('Settings:', self.settings);
            console.log('Sparks: ', self.settings.sparks);
        },
        getAPIurl: function(sparkId) {
            // Construct API url
            return this.settings.baseURL + this.settings.profile + '/sparks/' + sparkId + '.json';
        },
        getSparkData: function(sparkId) {
            var self = this;

            // Fetch data
            $.ajax({
                url: self.getAPIurl(sparkId),
                dataType: 'json',
                success: function( data ) {
                    // Create elements from data
                    self.createGalleryImage(data);
                },
                error: function(xhr, status, error) {
                    throw 'API error!';
                }
            });
        },
        createGalleryImage: function(data){
            var self = this;
            var elm, link, img, desc;

            // Create and add attributes to elements
            elm = document.createElement('div');
            elm.className = 'spark';

            link = document.createElement('a');
            link.className = 'spark-link';
            link.href = data.permalink;

            img = document.createElement('img');
            img.className = 'spark-image';
            img.src = data[self.settings.imageSize];
            img.title = data.text_content;

            desc = document.createElement('div');
            desc.className = 'spark-caption';

            // Attach elements to build a spark
            link.appendChild(img);
            elm.appendChild(link);
            desc.appendChild(document.createTextNode(data.text_content.replace(/&quot;/g,'')));
            elm.appendChild(desc);

            // Add spark element to container
            self.element.appendChild(elm);
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, 'plugin_' + pluginName ) ) {
                $.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );