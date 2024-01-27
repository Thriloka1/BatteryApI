const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

//Batter API

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then(battery => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeChangeInfo();
      }
      updateAllBatteryDetails();
      //Battery Charging change
      function updateChargingInfo() {
        const isCharging = battery.charging ? "Yes" : "No";
        batteryCharging.innerHTML = isCharging;
      }
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });

      //Battery charging time
      function updateChargingTimeChangeInfo() {
        console.log(battery.chargingTime);
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeChangeInfo();
      });

      //Battery Discharging time
      
      function updateDischargingTimeInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
      }
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      //Battery level change

      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
    });
  }
};

battery();
