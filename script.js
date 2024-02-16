let storeArray = [
    {
        username: 'Naveen Choubey',
        userAddress: '22 D Radhaganj',
        city: 'ujjain',
        userId: '1'
    },
    {
        username: 'Vishal Thakur',
        userAddress: '456 Awas Nagar',
        city: 'Dewas',
        userId: '2'
    },
    {
        username: 'Nitesh jaiswal',
        userAddress: '456 Giri raj Dham',
        city: 'Indore',
        userId: '3'
    },
    {
        username: 'Raj Nayak',
        userAddress: '6 Siya',
        city: 'Bhopal',
        userId: '4'
    },
    {
        username: 'Ujjwal Choudhray',
        userAddress: '45 E Vridhavan Nagar',
        city: 'Bhopal',
        userId: '5'
    },
    {
        username: 'Manish Sharma',
        userAddress: '789 Narmada Nagar',
        city: 'Jabalpur',
        userId: '6'
    },
    {
        username: 'Priya Patel',
        userAddress: '123 ABC Colony',
        city: 'Ahmedabad',
        userId: '7'
    },
    {
        username: 'Amit Singh',
        userAddress: '456 Ganga Vihar',
        city: 'Varanasi',
        userId: '8'
    },
    {
        username: 'Preeti Gupta',
        userAddress: '67 Yamuna Enclave',
        city: 'Delhi',
        userId: '9'
    },
    {
        username: 'Rahul Verma',
        userAddress: '890 Krishna Nagar',
        city: 'Lucknow',
        userId: '10'
    },

];


const resultBox = document.querySelector(".result_Box");
const inputBox = document.getElementById("input_Box");

inputBox.onkeyup = function(){
    let results = [];
    let input = inputBox.value;

    if(input.length){
        results = storeArray.filter((user) =>{
            return user.username.toLowerCase().includes(input.toLowerCase()) ||
                   user.userAddress.toLowerCase().includes(input.toLowerCase()) ||
                   user.city.toLowerCase().includes(input.toLowerCase()) ||
                   user.userId.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(results); 
};

function display(results){
    const content = results.map((user) =>{
        return "<li>" + user.username + " - " + user.userAddress + ", " + user.city + " (ID: " + user.userId + ")</li>";
    })

    resultBox.innerHTML = "<ul>"+ content.join("") + "</ul>";
}
