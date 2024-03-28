
let vue = new Vue({
    el: "#app",
    data: {
        pageTitle: "Quote of the day!",
        url: "https://api.chucknorris.io/jokes/random",
        quote: "",
    },
    mounted: async function () {
        this.quote = await fetch(this.url)
            .then(response => response.json())
            .then(data => data.value)
            .catch(error => { console.log(error) });
    },
    methods: {
        //put methods here
    },
});