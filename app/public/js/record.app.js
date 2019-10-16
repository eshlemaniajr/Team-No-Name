var personRecordsApp = new Vue({
  el: '#personRecordsApp',
  data: {
    person: [],
    recordPerson: {},
    filter: {
      sab: ''
    }
  },
  methods: {
    fetchPersons() {
      fetch('api/records/index.php')
      .then(response => response.json())
      .then(json => { personRecordsApp.person = json })
    },
    handleSubmit(event) {
      // fetch(url, {
      //   method: 'post',
      //   data: this.recordPatient
      // })
      // .then( ... )
      this.person.push( this.recordPerson );
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
