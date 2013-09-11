jquery-somewheregallery
================

A simple jQuery plugin for displaying sparks from Somewhere (http://somewherehq.com)

Made by Vanja Cosic from Opbeat (http://opbeat.com) for the guys at Somewhere and everyone else!

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
        profile: 'profilename'
    });
    ```

The file `demo.html` also demonstrates usage of the plugin.

## Options

### Required options

- **profile**: (string) - The Somewhere profile to show sparks from.

### Other options

- **imageSize**: (string, options: `'image'`, `'profile_image'`, `'avatar_image'`, `'talk_image'`)
- **debug**: (boolean, default: `false`) - Show logging data for development and testing purposes.
- **baseURL**: (string, default: `'http://somewherehq.com/'`) - Base API url, shouldn't be changed.

## Changelog

### v. 0.3.1
- Minor change to accomodate Somewhere API change. Sparks are now in an array.

### v. 0.3
- Somewhere API has been updated. It is no longer necessary to provide an array of ID's. These are now fetched using the profile name.
- **profile** is now the only required option.
- README have been updated to reflect API change.
- Added changelog to README.

### v. 0.2
- Converted initial code into a jQuery plugin, added demo and documentation.

## Compatibility

jQuery SomewhereGallery has so far been test with jQuery 1.8+ on following browsers:

* Chrome 27+ (Mac)
* Firefox 22+ (Mac)
* Safari 6+ (Mac)

More testing to come.


## License

This software is made freely available under the open source MIT License.