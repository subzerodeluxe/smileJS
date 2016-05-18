# SmileJS, a JavaScript framework that makes you smile! 

## What is SmileJS?

SmileJS replaces all things negative on your website with positive vibes. Since it's currently just a beta version, 
all it does for now is change the current image into a brand new image when clicked on. It also automatically replaces the title attribute with a positive message. 
  
## How does it work?

Download the library (smile.js) and add the following lines of code into your index.html:

```html
<script type="text/javaScript">
  	window.onload = function() {
  		$('#change-it').smile('title', 'I am happy');
  	}
  </script>
```

## Motivation 

SmileJS was built as part of a schoolproject for students to create their own JavaScript library. 


## Log

* New feature: negative word replacement 
Created a filter that replaces negative words with positive ones. 


