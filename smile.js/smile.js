function $(id) {
	var object = {};
	object.id = id;
	object.element = document.querySelector(object.id); 

	object.smile = function(name,message) {
		object.element.onclick = function() {
			if(!message) return object.element.getAttribute(name)
			object.element.setAttribute(name,message);

			if(object.element.src.match("https://www.photos-de-chat.fr/wp-content/uploads/2015/01/photo-de-chaton-triste")) {
				object.element.src = "http://orig12.deviantart.net/d4f7/f/2013/222/f/3/f34ce7f83f0a62047971dd2876a3e1ee-d6hihq3.jpg";
			} else {
				object.element.src = "https://www.photos-de-chat.fr/wp-content/uploads/2015/01/photo-de-chaton-triste.jpg";
			}
			return object;
		}
	}

	object.replace = function() {
			object.element.onclick = function() {
			var str = object.element.innerHTML; 
	    	var res = str.replace("sad :(", "happy :)");
	    	object.element.innerHTML = res; 
	    	return object;  
    	}
	}
	return object; 
}