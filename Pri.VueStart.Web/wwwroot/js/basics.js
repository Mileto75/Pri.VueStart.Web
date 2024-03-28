let app = new Vue({
    el: "#app",
    data: {
        pageTitle: "My first Vue shizzles!",
        bold: "<b>This is bold text</b>",
        url: "https://www.gazzetta.it",
        urlTitle: "Gazzetta dello sport",
        visible: true,
        people: [
            {name:"Bart", city:"Wingene"},
            {name:"Wim", city:"Zeebrugge"},
            {name:"Mitch", city:"Brugge"},
            {name:"Shayan", city:"Oostende"},
        ],
        name: "",
        city: "",
        person: {
            name: "",
            city: "",
        },
    },
    methods: {
        showAlert: function () {
            alert("call me daddy!");
        },
        addPerson: function () {
            this.people.push(this.person);
            //herinitialiseer this.person
            this.person = { name: "", city: "" };
        },
    },
});
