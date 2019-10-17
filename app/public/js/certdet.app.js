var personRecordsApp = new Vue({
  el: '#certifDetailsApp',
  data: {
    person: [],
    recordPerson: {},
    filter: {
      sab: ''
    }
  },
  methods: {
    fetchPersons() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { certifDetailsApp.person = json })
    },
    handleSubmit(event) {
      fetch('api/records/post.php', {
        method: 'POST',
        body: JSON.stringify(this.recordPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {personRecordsApp.person.push( json[0] )})
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.handleReset();
    },
    handleReset() {
      this.recordPerson = {
        firstName: '',
        lastName: '',
        dob: '',
        gender: ''
      }
    },
    handleRowClick(person) {
      personTriageApp.person = person;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchPersons();
  }
});
