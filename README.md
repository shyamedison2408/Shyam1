<form id="myForm">
    <h3>Current Address</h3>
    <label for="currentAddress">Address:</label>
    <input type="text" id="currentAddress" placeholder="Enter current address">

    <label for="currentCity">City:</label>
    <input type="text" id="currentCity" placeholder="Enter city">

    <label for="currentState">State:</label>
    <input type="text" id="currentState" placeholder="Enter state">

    <label for="currentZip">ZIP Code:</label>
    <input type="text" id="currentZip" placeholder="Enter ZIP code">

    <br><br>

    <input type="checkbox" id="sameAddress">
    <label for="sameAddress">Same as Current Address</label>

    <h3>Permanent Address</h3>
    <label for="permanentAddress">Address:</label>
    <input type="text" id="permanentAddress" placeholder="Enter permanent address">

    <label for="permanentCity">City:</label>
    <input type="text" id="permanentCity" placeholder="Enter city">

    <label for="permanentState">State:</label>
    <input type="text" id="permanentState" placeholder="Enter state">

    <label for="permanentZip">ZIP Code:</label>
    <input type="text" id="permanentZip" placeholder="Enter ZIP code">

    <br><br>
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById("sameAddress").addEventListener("change", function() {
        let fields = ["Address", "City", "State", "Zip"];
        
        fields.forEach(field => {
            let currentField = document.getElementById("current" + field);
            let permanentField = document.getElementById("permanent" + field);
            
            if (this.checked) {
                permanentField.value = currentField.value;
                permanentField.setAttribute("readonly", true); // Lock input
            } else {
                permanentField.value = "";
                permanentField.removeAttribute("readonly"); // Unlock input
            }
        });
    });
</script>
