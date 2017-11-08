var vm = new Vue({
  el: '#web',
  
  data: {
    entry: 'Įveskite savo vardą:',
    send: 'Siųsti',
    go: 'Eikite jūs naxui, ',
    name: '',
    isName: false,
    isDebilas: false,
    debilas: 'Jūs esate debilas.'
  },
  
  methods: {
    callPerson: function() {
      this.transformName();
      
      if (this.isDebilas) { return; }
      
      var name = this.name;
      var askGently = this.go + name;
      this.name = askGently;
    },
    sendPerson: function() {
      this.isName = true;
      this.callPerson();
    },
    transformName: function() {
      var name = this.name;
      name = name.trim();
      
      if (name.includes(' ')) {
        this.isDebilas = true;
        this.name = this.debilas;
        return;
      }
      
      var lastIndex = name.length - 1;
      var lastLetter = name[lastIndex];
      var beforeLast = name[lastIndex - 1];
      
      if (lastLetter === 's') {
        if (beforeLast === 'a') {
          name = name.substring(0, lastIndex);
          name = name + 'i';
        } else if (beforeLast === 'u') {
          name = name.substring(0, lastIndex-1);
          name = name + 'au';
        } else if (beforeLast === 'i') {
          name = name.substring(0, lastIndex);
        }
      } else if (lastLetter === 'ė') {
        name = name.substring(0, lastIndex);
        name = name + 'e';
      } 
      
      this.name = name;
    }
  }
});