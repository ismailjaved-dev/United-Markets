function getCookie(cookieName) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(cookieName + "=")) {
      return cookie.substring(cookieName.length + 1);
    }
  }

  return null;
}

const accepted = getCookie("accepted");
console.log(accepted);

let redirectData = sessionStorage.getItem("redirectForLanguage");

function checkEUUser() {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      const countryCode = data.country;

      const spanishSpeakingCountryCodes = [
        "AR",
        "BO",
        "CL",
        "CO",
        "CR",
        "CU",
        "DO",
        "EC",
        "SV",
        "GQ",
        "GT",
        "HN",
        "MX",
        "NI",
        "PA",
        "PY",
        "PE",
        "PR",
        "ES",
        "UY",
        "VE",
      ];

      const euCountries = [
        "AT",
        "AE",
        "BE",
        "BG",
        "HR",
        "CY",
        "CZ",
        "DK",
        "EE",
        "FI",
        "FR",
        "DE",
        "GR",
        "HU",
        "IE",
        "IT",
        "LV",
        "LT",
        "LU",
        "MT",
        "NL",
        "PL",
        "PT",
        "RO",
        "SK",
        "SI",
        "ES",
        "SE",
      ];

      sessionStorage.setItem("redirectForLanguage", true);

      const isES = spanishSpeakingCountryCodes.includes(countryCode);

      if (window.location.href.split("/")[3] != "es") {
        if (!redirectData) {
          if (isES) {
            // console.log("User is from a Spanish-speaking country.");
            window.location.href = "/es/index.html";
          }
        }
      }

      const isEU = euCountries.includes(countryCode);
      if (isEU) {
        // console.log("User is from EU.");

        if (accepted != "yes" || accepted === null) {
          $("#EU-Residents-Notice").modal("show");
          $("#importantNotice").click(function () {
            // console.log(`accepted`);
            document.cookie = "accepted=yes; path=/";
          });
        }
      } else {
        // console.log("User is not from EU.");
      }
    })
    .catch((error) => {
      console.error("Error fetching geolocation data:", error);
    });
}

checkEUUser();
