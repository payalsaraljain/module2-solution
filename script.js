(function(window){
	var name=["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
	for(var i=0;i<name.length;i++){
	var firstLetter = name[i].charAt(0).toLowerCase();
	if (firstLetter === 'j') {
    byespeaker.speak(name[i]);
  } else {
    hellospeaker.speak(name[i]);
  }
}
window.name[i]=name[i];
})(window);
	