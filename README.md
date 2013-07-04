jquery-somewheregallery
================

A simple jQuery plugin for displaying sparks from Somewhere (http://somewherehq.com)

## Usage

1. Include jQuery on your page:

    ```html
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    ```

2. Include the plugin:

    ```html
    <script src="jquery.somewheregallery.js"></script>
    ```

3. Initialize the plugin:

    ```javascript
    $('.element').somewhereGallery({
        profile: 'profilename',
        sparks: [1, 2, 3, 4]
    });
    ```

The file `demo.html also demonstrates usage of the plugin.

## Options

### Required options

- profile: (*string*) - The Somewhere profile to show sparks from.
- sparks: (*array*) - An array of spark IDs to show.

### Other options

- imageSize: (*string*, options: `'image'`, `'profile_image'`, `'avatar_image'`, `'talk_image'`)
- debug: (*boolean*, default: `false`) - Show logging data for development and testing purposes.
- baseURL: (*string*, default: `'http://somewherehq.com/'`) - Base API url, it shouldn't change.

## Compatibility

jQuery SomewhereGallery has so far been test with jQuery 1.8+ on following browsers:

* Chrome 27+ (Mac)
* Firefox 22+ (Mac)
* Safari 6+ (Mac)

More testing to come.


## License

This software is made freely available under the open source MIT License.