<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Page Form</title>
  <style>
    /* Basic CSS for styling */
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .form-page {
      display: block;
    }
    .hidden {
      display: none;
    }
    .error {
      border: 2px solid red;
    }
    .error-message {
      color: red;
      font-size: 12px;
      margin-bottom: 5px;
    }
    .details-page {
      margin-top: 20px;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="date"],
    select,
    textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    input[type="file"] {
      margin-bottom: 10px;
    }
    button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-right: 10px;
    }
    button:hover {
      background-color: #45a049;
    }
    .reset-button {
      background-color: #f44336;
    }
    .reset-button:hover {
      background-color: #d32f2f;
    }
    input:disabled,
    textarea:disabled,
    select:disabled {
      background-color: #f9f9f9;
      color: #666;
    }
  </style>
</head>
<body>

  <!-- Page 1: Form Input -->
  <div id="formPage" class="form-page">
    <h1>Personal Information Form</h1>
    <form id="personalForm">
      <!-- Personal Details -->
      <h2>Personal Details</h2>
      <div>
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name">
        <div class="error-message" id="nameError"></div>
      </div>
      <div>
        <label for="fatherName">Father's Name:</label>
        <input type="text" id="fatherName" name="fatherName" placeholder="Enter your father's name">
        <div class="error-message" id="fatherNameError"></div>
      </div>
      <div>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob">
        <div class="error-message" id="dobError"></div>
      </div>
      <div>
        <label for="bloodGroup">Blood Group:</label>
        <select id="bloodGroup" name="bloodGroup">
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <div class="error-message" id="bloodGroupError"></div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email">
        <div class="error-message" id="emailError"></div>
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">
        <div class="error-message" id="phoneError"></div>
      </div>
      <div>
        <label for="pincode">Pincode:</label>
        <input type="text" id="pincode" name="pincode" placeholder="Enter your pincode">
        <div class="error-message" id="pincodeError"></div>
      </div>

      <!-- Gender (Radio Buttons) -->
      <div>
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="Male"> Male
        <input type="radio" id="female" name="gender" value="Female"> Female
        <input type="radio" id="other" name="gender" value="Other"> Other
        <div class="error-message" id="genderError"></div>
      </div>

      <!-- Hobbies (Checkboxes) -->
      <div>
        <label>Hobbies:</label>
        <input type="checkbox" id="reading" name="hobbies" value="Reading"> Reading
        <input type="checkbox" id="traveling" name="hobbies" value="Traveling"> Traveling
        <input type="checkbox" id="sports" name="hobbies" value="Sports"> Sports
        <div class="error-message" id="hobbiesError"></div>
      </div>

      <!-- Educational Details -->
      <div>
        <label for="education">Educational Qualification:</label>
        <select id="education" name="education">
          <option value="">Select Qualification</option>
          <option value="High School">High School</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
        </select>
        <div class="error-message" id="educationError"></div>
      </div>

      <!-- Achievements -->
      <div>
        <label for="achievements">Achievements:</label>
        <textarea id="achievements" name="achievements" placeholder="Enter your achievements"></textarea>
        <div class="error-message" id="achievementsError"></div>
      </div>

      <!-- Address Details -->
      <h2>Address Details</h2>
      <div>
        <label for="currentAddress">Current Address:</label>
        <textarea id="currentAddress" name="currentAddress" placeholder="Enter your current address"></textarea>
        <div class="error-message" id="currentAddressError"></div>
      </div>
      <div>
        <label for="currentCity">City:</label>
        <input type="text" id="currentCity" name="currentCity" placeholder="Enter your city">
        <div class="error-message" id="currentCityError"></div>
      </div>
      <div>
        <label for="currentState">State:</label>
        <input type="text" id="currentState" name="currentState" placeholder="Enter your state">
        <div class="error-message" id="currentStateError"></div>
      </div>
      <div>
        <label for="currentCountry">Country:</label>
        <select id="currentCountry" name="currentCountry">
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <div class="error-message" id="currentCountryError"></div>
      </div>

      <!-- Same as Current Address Checkbox -->
      <div>
        <input type="checkbox" id="sameAddress" name="sameAddress" onchange="copyAddress()">
        <label for="sameAddress">Same as Current Address</label>
      </div>

      <div>
        <label for="permanentAddress">Permanent Address:</label>
        <textarea id="permanentAddress" name="permanentAddress" placeholder="Enter your permanent address" disabled></textarea>
        <div class="error-message" id="permanentAddressError"></div>
      </div>
      <div>
        <label for="permanentCity">City:</label>
        <input type="text" id="permanentCity" name="permanentCity" placeholder="Enter your city" disabled>
        <div class="error-message" id="permanentCityError"></div>
      </div>
      <div>
        <label for="permanentState">State:</label>
        <input type="text" id="permanentState" name="permanentState" placeholder="Enter your state" disabled>
        <div class="error-message" id="permanentStateError"></div>
      </div>
      <div>
        <label for="permanentCountry">Country:</label>
        <select id="permanentCountry" name="permanentCountry" disabled>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <div class="error-message" id="permanentCountryError"></div>
      </div>

      <!-- File Upload -->
      <div>
        <label for="profilePhoto">Profile Photo:</label>
        <input type="file" id="profilePhoto" name="profilePhoto" accept="image/*">
        <div class="error-message" id="profilePhotoError"></div>
      </div>
      <div>
        <label for="resume">Resume:</label>
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx">
        <div class="error-message" id="resumeError"></div>
      </div>

      <!-- Buttons -->
      <button type="button" onclick="validateForm()">Submit</button>
      <button type="button" class="reset-button" onclick="resetForm()">Reset</button>
    </form>
  </div>

  <!-- Page 2: Display Details -->
  <div id="detailsPage" class="form-page hidden">
    <h1>Submitted Details</h1>
    <div id="displayDetails"></div>
    <button onclick="goBack()">Back to Form</button>
  </div>

  <script>
    // Function to copy current address to permanent address
    function copyAddress() {
      const sameAddressCheckbox = document.getElementById("sameAddress");
      const permanentAddress = document.getElementById("permanentAddress");
      const permanentCity = document.getElementById("permanentCity");
      const permanentState = document.getElementById("permanentState");
      const permanentCountry = document.getElementById("permanentCountry");

      if (sameAddressCheckbox.checked) {
        // Copy values from current address to permanent address
        permanentAddress.value = document.getElementById("currentAddress").value;
        permanentCity.value = document.getElementById("currentCity").value;
        permanentState.value = document.getElementById("currentState").value;
        permanentCountry.value = document.getElementById("currentCountry").value;

        // Disable permanent address fields
        permanentAddress.disabled = true;
        permanentCity.disabled = true;
        permanentState.disabled = true;
        permanentCountry.disabled = true;
      } else {
        // Clear and enable permanent address fields
        permanentAddress.value = "";
        permanentCity.value = "";
        permanentState.value = "";
        permanentCountry.value = "";

        permanentAddress.disabled = false;
        permanentCity.disabled = false;
        permanentState.disabled = false;
        permanentCountry.disabled = false;
      }
    }

    // Function to reset the form
    function resetForm() {
      document.getElementById("personalForm").reset(); // Resets all form fields
      document.querySelectorAll(".error-message").forEach(el => el.textContent = ""); // Clears error messages
      document.querySelectorAll("input, select, textarea").forEach(el => el.classList.remove("error")); // Removes error highlights

      // Enable all permanent address fields
      document.getElementById("permanentAddress").disabled = false;
      document.getElementById("permanentCity").disabled = false;
      document.getElementById("permanentState").disabled = false;
      document.getElementById("permanentCountry").disabled = false;
    }

    // Function to validate the form
    function validateForm() {
      let isValid = true;

      // Clear previous errors
      document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
      document.querySelectorAll("input, select, textarea").forEach(el => el.classList.remove("error"));

      // Validate Name
      const name = document.getElementById("name").value;
      if (!name.match(/^[A-Za-z\s]{3,}$/)) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long and contain only letters.";
        document.getElementById("name").classList.add("error");
        isValid = false;
      }

      // Validate Father's Name
      const fatherName = document.getElementById("fatherName").value;
      if (!fatherName.match(/^[A-Za-z\s]{3,}$/)) {
        document.getElementById("fatherNameError").textContent = "Father's name must be at least 3 characters long and contain only letters.";
        document.getElementById("fatherName").classList.add("error");
        isValid = false;
      }

      // Validate Date of Birth
      const dob = document.getElementById("dob").value;
      if (!dob) {
        document.getElementById("dobError").textContent = "Date of Birth is required.";
        document.getElementById("dob").classList.add("error");
        isValid = false;
      }

      // Validate Blood Group
      const bloodGroup = document.getElementById("bloodGroup").value;
      if (!bloodGroup) {
        document.getElementById("bloodGroupError").textContent = "Blood Group is required.";
        document.getElementById("bloodGroup").classList.add("error");
        isValid = false;
      }

      // Validate Email
      const email = document.getElementById("email").value;
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("emailError").textContent = "Invalid email address.";
        document.getElementById("email").classList.add("error");
        isValid = false;
      }

      // Validate Phone Number
      const phone = document.getElementById("phone").value;
      if (!phone.match(/^\d{10}$/)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
        document.getElementById("phone").classList.add("error");
        isValid = false;
      }

      // Validate Pincode
      const pincode = document.getElementById("pincode").value;
      if (!pincode.match(/^\d{6}$/)) {
        document.getElementById("pincodeError").textContent = "Pincode must be 6 digits.";
        document.getElementById("pincode").classList.add("error");
        isValid = false;
      }

      // Validate Gender
      const gender = document.querySelector('input[name="gender"]:checked');
      if (!gender) {
        document.getElementById("genderError").textContent = "Gender is required.";
        isValid = false;
      }

      // Validate Hobbies
      const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
      if (hobbies.length === 0) {
        document.getElementById("hobbiesError").textContent = "At least one hobby is required.";
        isValid = false;
      }

      // Validate Educational Qualification
      const education = document.getElementById("education").value;
      if (!education) {
        document.getElementById("educationError").textContent = "Educational qualification is required.";
        document.getElementById("education").classList.add("error");
        isValid = false;
      }

      // Validate Achievements
      const achievements = document.getElementById("achievements").value;
      if (!achievements) {
        document.getElementById("achievementsError").textContent = "Achievements are required.";
        document.getElementById("achievements").classList.add("error");
        isValid = false;
      }

      // Validate Current Address
      const currentAddress = document.getElementById("currentAddress").value;
      if (!currentAddress) {
        document.getElementById("currentAddressError").textContent = "Current address is required.";
        document.getElementById("currentAddress").classList.add("error");
        isValid = false;
      }

      // Validate Current City
      const currentCity = document.getElementById("currentCity").value;
      if (!currentCity) {
        document.getElementById("currentCityError").textContent = "City is required.";
        document.getElementById("currentCity").classList.add("error");
        isValid = false;
      }

      // Validate Current State
      const currentState = document.getElementById("currentState").value;
      if (!currentState) {
        document.getElementById("currentStateError").textContent = "State is required.";
        document.getElementById("currentState").classList.add("error");
        isValid = false;
      }

      // Validate Current Country
      const currentCountry = document.getElementById("currentCountry").value;
      if (!currentCountry) {
        document.getElementById("currentCountryError").textContent = "Country is required.";
        document.getElementById("currentCountry").classList.add("error");
        isValid = false;
      }

      // Validate Permanent Address
      const permanentAddress = document.getElementById("permanentAddress").value;
      if (!permanentAddress) {
        document.getElementById("permanentAddressError").textContent = "Permanent address is required.";
        document.getElementById("permanentAddress").classList.add("error");
        isValid = false;
      }

      // Validate Permanent City
      const permanentCity = document.getElementById("permanentCity").value;
      if (!permanentCity) {
        document.getElementById("permanentCityError").textContent = "City is required.";
        document.getElementById("permanentCity").classList.add("error");
        isValid = false;
      }

      // Validate Permanent State
      const permanentState = document.getElementById("permanentState").value;
      if (!permanentState) {
        document.getElementById("permanentStateError").textContent = "State is required.";
        document.getElementById("permanentState").classList.add("error");
        isValid = false;
      }

      // Validate Permanent Country
      const permanentCountry = document.getElementById("permanentCountry").value;
      if (!permanentCountry) {
        document.getElementById("permanentCountryError").textContent = "Country is required.";
        document.getElementById("permanentCountry").classList.add("error");
        isValid = false;
      }

      // Validate Profile Photo
      const profilePhoto = document.getElementById("profilePhoto").files[0];
      if (!profilePhoto) {
        document.getElementById("profilePhotoError").textContent = "Profile photo is required.";
        document.getElementById("profilePhoto").classList.add("error");
        isValid = false;
      }

      // Validate Resume
      const resume = document.getElementById("resume").files[0];
      if (!resume) {
        document.getElementById("resumeError").textContent = "Resume is required.";
        document.getElementById("resume").classList.add("error");
        isValid = false;
      }

      // If form is valid, proceed to display details
      if (isValid) {
        displayDetails();
      }
    }

    // Function to display details on the next page
    function displayDetails() {
      const formData = new FormData(document.getElementById("personalForm"));
      const details = {};

      // Convert FormData to an object
      formData.forEach((value, key) => {
        details[key] = value;
      });

      // Convert profile photo to Base64
      const profilePhoto = document.getElementById("profilePhoto").files[0];
      if (profilePhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
          details.profilePhoto = e.target.result;
          showDetails(details);
        };
        reader.readAsDataURL(profilePhoto);
      } else {
        showDetails(details);
      }
    }

    // Function to show details on the next page
    function showDetails(details) {
      document.getElementById("formPage").classList.add("hidden");
      document.getElementById("detailsPage").classList.remove("hidden");

      let displayContent = `
        <h2>Personal Details</h2>
        <p><strong>Name:</strong> ${details.name}</p>
        <p><strong>Father's Name:</strong> ${details.fatherName}</p>
        <p><strong>Date of Birth:</strong> ${details.dob}</p>
        <p><strong>Blood Group:</strong> ${details.bloodGroup}</p>
        <p><strong>Email:</strong> ${details.email}</p>
        <p><strong>Phone Number:</strong> ${details.phone}</p>
        <p><strong>Pincode:</strong> ${details.pincode}</p>
        <p><strong>Gender:</strong> ${details.gender}</p>
        <p><strong>Hobbies:</strong> ${Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(el => el.value).join(", ")}</p>
        <p><strong>Educational Qualification:</strong> ${details.education}</p>
        <p><strong>Achievements:</strong> ${details.achievements}</p>
        <h2>Address Details</h2>
        <p><strong>Current Address:</strong> ${details.currentAddress}</p>
        <p><strong>City:</strong> ${details.currentCity}</p>
        <p><strong>State:</strong> ${details.currentState}</p>
        <p><strong>Country:</strong> ${details.currentCountry}</p>
        <p><strong>Permanent Address:</strong> ${details.permanentAddress}</p>
        <p><strong>City:</strong> ${details.permanentCity}</p>
        <p><strong>State:</strong> ${details.permanentState}</p>
        <p><strong>Country:</strong> ${details.permanentCountry}</p>
        <h2>Uploaded Files</h2>
        <p><strong>Profile Photo:</strong></p>
        <img src="${details.profilePhoto}" alt="Profile Photo" style="max-width: 200px;">
        <p><strong>Resume:</strong> ${document.getElementById("resume").files[0].name}</p>
      `;

      document.getElementById("displayDetails").innerHTML = displayContent;
    }

    // Function to go back to the form page
    function goBack() {
      document.getElementById("formPage").classList.remove("hidden");
      document.getElementById("detailsPage").classList.add("hidden");
    }
  </script>
</body>
</html>
