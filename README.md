# SmileJS, a JavaScript framework that makes you smile! 

## What is SmileJS?

SmileJS replaces all things negative on your website with positive vibes. Since it's currently just a beta version, 
all it does for now is change the current image into a brand new image. It also automatically replaces the title attribute with a positive message. 
  
## How does it work?

Download the project and add the following lines of code into your index.html:

<script type="text/javaScript">
  	window.onload = function() {
  		$('#change-it').smile('title', 'I am happy');
  	}
  </script>
