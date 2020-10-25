import React from "react";

export function VetClinic(props) {
  return (
    <svg
      width={props.size || "73"}
      height={(props.size * 73) / 83 || "83"}
      viewBox={`0 0 ${props.size || "73"} ${(props.size * 73) / 83 || "83"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73 79.7578V83H0V79.7578C0 78.6835 0.875511 77.8125 1.95536 77.8125H5.21429V19.4531C5.21429 17.3044 6.96515 15.5625 9.125 15.5625H23.4643V3.89062C23.4643 1.74187 25.2151 0 27.375 0H45.625C47.7849 0 49.5357 1.74187 49.5357 3.89062V15.5625H63.875C66.0349 15.5625 67.7857 17.3044 67.7857 19.4531V77.8125H71.0446C72.1245 77.8125 73 78.6835 73 79.7578ZM50.1875 31.125H43.6696C42.5898 31.125 41.7143 31.996 41.7143 33.0703V39.5547C41.7143 40.629 42.5898 41.5 43.6696 41.5H50.1875C51.2673 41.5 52.1429 40.629 52.1429 39.5547V33.0703C52.1429 31.996 51.2673 31.125 50.1875 31.125ZM22.8125 41.5H29.3304C30.4102 41.5 31.2857 40.629 31.2857 39.5547V33.0703C31.2857 31.996 30.4102 31.125 29.3304 31.125H22.8125C21.7327 31.125 20.8571 31.996 20.8571 33.0703V39.5547C20.8571 40.629 21.7327 41.5 22.8125 41.5ZM39.7589 62.25H33.2411C32.1612 62.25 31.2857 63.121 31.2857 64.1953V77.8125H41.7143V64.1953C41.7143 63.121 40.8388 62.25 39.7589 62.25ZM50.1875 46.6875H43.6696C42.5898 46.6875 41.7143 47.5585 41.7143 48.6328V55.1172C41.7143 56.1915 42.5898 57.0625 43.6696 57.0625H50.1875C51.2673 57.0625 52.1429 56.1915 52.1429 55.1172V48.6328C52.1429 47.5585 51.2673 46.6875 50.1875 46.6875ZM31.2857 48.6328C31.2857 47.5585 30.4102 46.6875 29.3304 46.6875H22.8125C21.7327 46.6875 20.8571 47.5585 20.8571 48.6328V55.1172C20.8571 56.1915 21.7327 57.0625 22.8125 57.0625H29.3304C30.4102 57.0625 31.2857 56.1915 31.2857 55.1172V48.6328ZM29.6562 15.5625H33.8929V19.7773C33.8929 20.0353 33.9959 20.2827 34.1792 20.4651C34.3626 20.6475 34.6112 20.75 34.8705 20.75H38.1295C38.3888 20.75 38.6374 20.6475 38.8208 20.4651C39.0041 20.2827 39.1071 20.0353 39.1071 19.7773V15.5625H43.3438C43.603 15.5625 43.8517 15.46 44.0351 15.2776C44.2184 15.0952 44.3214 14.8478 44.3214 14.5898V11.3477C44.3214 11.0897 44.2184 10.8423 44.0351 10.6599C43.8517 10.4775 43.603 10.375 43.3438 10.375H39.1071V6.16016C39.1071 5.90219 39.0041 5.65479 38.8208 5.47238C38.6374 5.28998 38.3888 5.1875 38.1295 5.1875H34.8705C34.6112 5.1875 34.3626 5.28998 34.1792 5.47238C33.9959 5.65479 33.8929 5.90219 33.8929 6.16016V10.375H29.6562C29.397 10.375 29.1483 10.4775 28.9649 10.6599C28.7816 10.8423 28.6786 11.0897 28.6786 11.3477V14.5898C28.6786 14.8478 28.7816 15.0952 28.9649 15.2776C29.1483 15.46 29.397 15.5625 29.6562 15.5625Z"
        fill={props.color || "#1A3150"}
      />
    </svg>
  );
}

export function VetUser(props) {
  return (
    <svg
      width={props.size || "73"}
      height={(props.size * 62) / 66 || "66"}
      viewBox={`0 0 ${props.size || "62"} ${(props.size * 62) / 66 || "62"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.625 16.2085C15.625 24.6852 22.5233 31.5835 31 31.5835C39.4767 31.5835 46.375 24.6852 46.375 16.2085C46.375 7.73175 39.4767 0.833496 31 0.833496C22.5233 0.833496 15.625 7.73175 15.625 16.2085ZM58.3333 65.7502H61.75V62.3335C61.75 49.1486 51.0182 38.4168 37.8333 38.4168H24.1667C10.9783 38.4168 0.25 49.1486 0.25 62.3335V65.7502H58.3333Z"
        fill={props.color || "#1A3150"}
      />
    </svg>
  );
}

export function VetDoctor(props) {
  return (
    <svg
      width={props.size || "70"}
      height={(props.size * 70) / 83 || "83"}
      viewBox={`0 0 ${props.size || "70"} ${(props.size * 70) / 83 || "83"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65.0005 58.6188C60.0005 48.7625 55.0005 50.3188 49.5005 49.8C50.0005 51.3563 50.0005 52.9125 50.0005 54.9875C58.0005 57.0625 60.0005 66.9187 60.0005 72.625V77.8125H50.0005V72.625H55.0005C55.0005 72.625 55.0005 59.6562 47.5005 59.6562C40.0005 59.6562 40.0005 72.1062 40.0005 72.625H45.0005V77.8125H35.0005V72.625C35.0005 66.9187 37.0005 56.5438 45.0005 54.9875C45.0005 51.875 44.5005 49.2812 44.0005 48.2438C43.0005 47.725 42.0005 46.6875 42.0005 45.1312C42.0005 42.0187 46.0005 43.0562 49.0005 37.35C49.0005 37.35 53.5005 25.4188 52.0005 15.0438H47.0005C47.0005 14.0063 47.5005 13.4875 47.5005 12.45C47.5005 11.4125 47.5005 10.8938 47.0005 9.85625H51.0005C49.5005 4.66875 44.5005 0 35.0005 0C25.5005 0 20.5005 4.66875 18.5005 10.375H22.5005C22.5005 11.4125 22.0005 11.9312 22.0005 12.9688C22.0005 14.0063 22.0005 14.525 22.5005 15.5625H17.5005C16.5005 25.9375 20.5005 37.8688 20.5005 37.8688C23.5005 43.0563 27.5005 42.0187 27.5005 45.65C27.5005 48.2438 25.0005 49.2813 22.0005 49.8C21.0005 50.8375 20.0005 52.9125 20.0005 57.0625V63.2875C23.0005 64.325 25.0005 67.4375 25.0005 70.55C25.0005 74.1813 21.5005 77.8125 17.5005 77.8125C13.5005 77.8125 10.0005 74.1813 10.0005 70.0312C10.0005 66.4 12.0005 63.8063 15.0005 62.7688V56.5437C15.0005 53.95 15.5005 51.875 16.0005 49.8C12.5005 50.3188 8.50049 51.875 5.00049 58.6188C2.00049 64.325 0.500488 83 0.500488 83H69.0005C69.5005 83 68.0005 64.325 65.0005 58.6188ZM27.5005 12.9688C27.5005 8.81875 31.0005 5.1875 35.0005 5.1875C39.0005 5.1875 42.5005 8.81875 42.5005 12.9688C42.5005 17.1187 39.0005 20.75 35.0005 20.75C31.0005 20.75 27.5005 17.1187 27.5005 12.9688Z"
        fill={props.color || "#1A3150"}
      />
    </svg>
  );
}

export function VetLogo(props) {
  return (
    <svg
      width={props.size || "109"}
      height={(props.size * 109) / 97 || "97"}
      viewBox={`0 0 ${props.size || "109"} ${(props.size * 109) / 97 || "97"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.9014 82.7395L37.7686 69.9074H41.6826L35.7412 86.9699H32.0733L26.1553 69.9074H30.0576L33.9014 82.7395ZM58.6054 79.5754H51.8554V84.1457H59.7773V86.9699H48.3398V69.9074H59.7539V72.7551H51.8554V76.8215H58.6054V79.5754ZM79.9579 72.7551H74.7314V86.9699H71.2158V72.7551H66.0595V69.9074H79.9579V72.7551Z"
        fill={props.color || "#1A3150"}
      />
      <path
        d="M11.7608 18.7521L4.38036 18.7417C7.26053 54.7941 42.3731 52.7932 54.5047 35.3436C75.9766 67.0636 109.081 39.5945 106.455 23.9564L98.6836 23.5702C96.9391 42.0306 70.2142 51.7507 60.0718 27.7448L73.1333 16.2388L67.9232 11.1787L55.7833 21.0383L54.1482 20.734L44.013 9.9093L37.9505 14.386L49.8397 27.3551C42.174 46.2282 13.294 41.9128 11.7608 18.7521Z"
        fill={props.color || "#1A3150"}
      />
    </svg>
  );
}
