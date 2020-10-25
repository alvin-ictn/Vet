import React from "react";

export function VetClinic(props) {
  return (
    <svg
      width={props.size || "73"}
      height={(props.size * 73) / 83 || "83"}
      viewBox="0 0 73 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="73" height="83" fill={props.bgcolor || "transparent"} />
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
      width={props.size || "62"}
      height={(props.size * 62) / 66 || "66"}
      viewBox="0 0 62 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="62" height="66" fill={props.bgcolor || "transparent"} />
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
      viewBox="0 0 70 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="70" height="83" fill={props.bgcolor || "transparent"} />
      <path
        d="M65.0005 58.6188C60.0005 48.7625 55.0005 50.3188 49.5005 49.8C50.0005 51.3563 50.0005 52.9125 50.0005 54.9875C58.0005 57.0625 60.0005 66.9187 60.0005 72.625V77.8125H50.0005V72.625H55.0005C55.0005 72.625 55.0005 59.6562 47.5005 59.6562C40.0005 59.6562 40.0005 72.1062 40.0005 72.625H45.0005V77.8125H35.0005V72.625C35.0005 66.9187 37.0005 56.5438 45.0005 54.9875C45.0005 51.875 44.5005 49.2812 44.0005 48.2438C43.0005 47.725 42.0005 46.6875 42.0005 45.1312C42.0005 42.0187 46.0005 43.0562 49.0005 37.35C49.0005 37.35 53.5005 25.4188 52.0005 15.0438H47.0005C47.0005 14.0063 47.5005 13.4875 47.5005 12.45C47.5005 11.4125 47.5005 10.8938 47.0005 9.85625H51.0005C49.5005 4.66875 44.5005 0 35.0005 0C25.5005 0 20.5005 4.66875 18.5005 10.375H22.5005C22.5005 11.4125 22.0005 11.9312 22.0005 12.9688C22.0005 14.0063 22.0005 14.525 22.5005 15.5625H17.5005C16.5005 25.9375 20.5005 37.8688 20.5005 37.8688C23.5005 43.0563 27.5005 42.0187 27.5005 45.65C27.5005 48.2438 25.0005 49.2813 22.0005 49.8C21.0005 50.8375 20.0005 52.9125 20.0005 57.0625V63.2875C23.0005 64.325 25.0005 67.4375 25.0005 70.55C25.0005 74.1813 21.5005 77.8125 17.5005 77.8125C13.5005 77.8125 10.0005 74.1813 10.0005 70.0312C10.0005 66.4 12.0005 63.8063 15.0005 62.7688V56.5437C15.0005 53.95 15.5005 51.875 16.0005 49.8C12.5005 50.3188 8.50049 51.875 5.00049 58.6188C2.00049 64.325 0.500488 83 0.500488 83H69.0005C69.5005 83 68.0005 64.325 65.0005 58.6188ZM27.5005 12.9688C27.5005 8.81875 31.0005 5.1875 35.0005 5.1875C39.0005 5.1875 42.5005 8.81875 42.5005 12.9688C42.5005 17.1187 39.0005 20.75 35.0005 20.75C31.0005 20.75 27.5005 17.1187 27.5005 12.9688Z"
        fill={props.color || "#1A3150"}
      />
    </svg>
  );
}

export function VetPaw(props) {
  return (
    <svg
      width={props.size || "24"}
      height={(props.size * 24) / 24 || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill={props.bgcolor || "transparent"} />
      <path
        d="M4.5 12.0001C5.88071 12.0001 7 10.8808 7 9.50012C7 8.11941 5.88071 7.00012 4.5 7.00012C3.11929 7.00012 2 8.11941 2 9.50012C2 10.8808 3.11929 12.0001 4.5 12.0001Z"
        fill={props.color || "#1A3150"}
      />
      <path
        d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8Z"
        fill={props.color || "#1A3150"}
      />
      <path
        d="M15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5C12.5 6.88071 13.6193 8 15 8Z"
        fill={props.color || "#1A3150"}
      />
      <path
        d="M19.5 12.0001C20.8807 12.0001 22 10.8808 22 9.50012C22 8.11941 20.8807 7.00012 19.5 7.00012C18.1193 7.00012 17 8.11941 17 9.50012C17 10.8808 18.1193 12.0001 19.5 12.0001Z"
        fill={props.color || "#1A3150"}
      />
      <path
        d="M17.3401 14.86C16.4701 13.84 15.7401 12.97 14.8601 11.95C14.4001 11.41 13.8101 10.87 13.1101 10.63C13.0001 10.59 12.8901 10.56 12.7801 10.54C12.5301 10.5 12.2601 10.5 12.0001 10.5C11.7401 10.5 11.4701 10.5 11.2101 10.55C11.1001 10.57 10.9901 10.6 10.8801 10.64C10.1801 10.88 9.60014 11.42 9.13014 11.96C8.26014 12.98 7.53014 13.85 6.65014 14.87C5.34014 16.18 3.73014 17.63 4.03014 19.66C4.32014 20.68 5.05014 21.69 6.36014 21.98C7.09014 22.13 9.42014 21.54 11.9001 21.54H12.0801C14.5601 21.54 16.8901 22.12 17.6201 21.98C18.9301 21.69 19.6601 20.67 19.9501 19.66C20.2601 17.62 18.6501 16.17 17.3401 14.86Z"
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
      viewBox="0 0 109 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="109" height="97" fill={props.bgcolor || "transparent"} />
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

export function VetLogoBox(props) {
  return (
    <svg
      width={props.size || "170"}
      height={(props.size * 170) / 170 || "170"}
      viewBox="0 0 170 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="170" height="170" fill={props.bgcolor || "#1A3150"} />
      <path
        d="M64.9014 119.739L68.7686 106.907H72.6826L66.7412 123.97H63.0733L57.1553 106.907H61.0576L64.9014 119.739ZM89.6054 116.575H82.8554V121.146H90.7773V123.97H79.3398V106.907H90.7539V109.755H82.8554V113.821H89.6054V116.575ZM110.958 109.755H105.731V123.97H102.216V109.755H97.0595V106.907H110.958V109.755Z"
        fill={props.color || "#FDCB5A"}
      />
      <path
        d="M42.7608 55.7521L35.3804 55.7417C38.2605 91.7941 73.3731 89.7932 85.5047 72.3436C106.977 104.064 140.081 76.5945 137.455 60.9564L129.684 60.5702C127.939 79.0306 101.214 88.7507 91.0718 64.7448L104.133 53.2388L98.9232 48.1787L86.7833 58.0383L85.1482 57.734L75.013 46.9093L68.9505 51.386L80.8397 64.3551C73.174 83.2282 44.294 78.9128 42.7608 55.7521Z"
        fill={props.color || "#FDCB5A"}
      />
    </svg>
  );
}

export function VetPCat(props) {
  return (
    <svg
      width={props.size || "28"}
      height={(props.size * 28) / 28 || "28"}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" fill={props.bgcolor || "transparent"} />
      <path
        d="M24.9526 1.30648C24.0227 1.14056 20.9496 2.21637 18.8075 5.16726C17.3363 4.50368 15.692 4.12294 13.949 4.12294C12.2897 4.12206 10.6489 4.47154 9.13389 5.1485C6.99233 2.21178 3.93016 1.141 3.00222 1.30654C2.08927 1.46945 -0.0542636 6.9516 2.69329 11.204C1.9893 12.4745 1.58806 13.936 1.58806 15.4914C1.58806 20.3847 5.55481 24.3514 10.4481 24.3514C10.8008 24.3514 11.1485 24.33 11.4905 24.2899C12.2352 24.7074 13.0938 24.9457 14.0082 24.9457C14.9217 24.9457 15.7796 24.7079 16.5237 24.2912C16.866 24.3312 17.2104 24.3513 17.5551 24.3515C22.4483 24.3515 26.4151 20.3847 26.4151 15.4914C26.4151 13.9199 26.0055 12.4441 25.2879 11.1645C27.9964 6.91758 25.8627 1.46885 24.9526 1.30648Z"
        fill="#F9E7C0"
      />
      <path
        d="M17.023 24.0007C16.6829 24.2685 16.2625 24.4139 15.8296 24.4132C15.5313 24.4132 15.229 24.3451 14.9442 24.2068C14.5213 24.0012 14.1968 23.6691 14.0076 23.2711C13.8183 23.6691 13.4938 24.0012 13.0709 24.2068C12.7862 24.3451 12.4838 24.4132 12.1855 24.4132C11.7526 24.4138 11.3322 24.2685 10.9921 24.0007C10.9522 23.9693 10.9264 23.9233 10.9203 23.8729C10.9143 23.8225 10.9285 23.7718 10.9599 23.7319C10.9913 23.692 11.0372 23.6661 11.0876 23.6601C11.138 23.6541 11.1888 23.6683 11.2287 23.6997C11.7024 24.072 12.3441 24.1343 12.9036 23.8625C13.4639 23.5901 13.812 23.0462 13.8119 22.443C13.8119 22.4073 13.8223 22.3744 13.8393 22.3458C13.8248 22.3187 13.8171 22.2884 13.8169 22.2577V20.8247C13.8169 20.7996 13.8218 20.7747 13.8314 20.7515C13.8411 20.7283 13.8552 20.7072 13.8729 20.6894C13.8907 20.6716 13.9118 20.6575 13.935 20.6479C13.9582 20.6383 13.9831 20.6333 14.0083 20.6333C14.0334 20.6333 14.0583 20.6383 14.0815 20.6479C14.1047 20.6575 14.1258 20.6716 14.1436 20.6894C14.1614 20.7072 14.1755 20.7283 14.1851 20.7515C14.1947 20.7747 14.1997 20.7996 14.1997 20.8247V22.2577C14.1997 22.2901 14.1908 22.3203 14.1766 22.347C14.1931 22.3753 14.2033 22.4078 14.2033 22.4429C14.2032 23.0461 14.5513 23.5901 15.1116 23.8624C15.6711 24.1343 16.3129 24.0719 16.7866 23.6996C16.8063 23.6841 16.829 23.6726 16.8532 23.6658C16.8774 23.6591 16.9027 23.6571 16.9276 23.6601C16.9526 23.6631 16.9767 23.671 16.9986 23.6833C17.0205 23.6956 17.0398 23.7122 17.0553 23.7319C17.0708 23.7517 17.0823 23.7743 17.0891 23.7985C17.0958 23.8227 17.0978 23.848 17.0948 23.873C17.0918 23.8979 17.0839 23.9221 17.0716 23.944C17.0593 23.9659 17.0427 23.9851 17.023 24.0007ZM7.43882 16.9886C7.98996 16.9886 8.47406 17.2742 8.75225 17.7052C8.83761 17.5178 8.8817 17.3143 8.88153 17.1084V13.8741C8.88153 13.0773 8.23562 12.4314 7.43882 12.4314C6.64203 12.4314 5.99611 13.0773 5.99611 13.8741V17.1084C5.99611 17.3213 6.0426 17.5233 6.12539 17.7052C6.40359 17.2742 6.88774 16.9886 7.43882 16.9886ZM20.516 16.9886C21.0672 16.9886 21.5513 17.2742 21.8295 17.7052C21.9148 17.5178 21.9589 17.3143 21.9587 17.1084V13.8741C21.9587 13.0773 21.3128 12.4314 20.516 12.4314C19.7192 12.4314 19.0733 13.0773 19.0733 13.8741V17.1084C19.0733 17.3213 19.1198 17.5233 19.2026 17.7052C19.4807 17.2742 19.9649 16.9886 20.516 16.9886Z"
        fill="#2B3B47"
      />
      <path
        d="M19.2045 17.9057C19.1197 17.9057 19.0366 17.8821 18.9645 17.8374C18.8924 17.7927 18.8342 17.7288 18.7965 17.6528C18.7699 17.5993 18.7541 17.541 18.75 17.4814C18.7459 17.4217 18.7536 17.3619 18.7727 17.3052C18.7918 17.2485 18.8218 17.1962 18.8611 17.1511C18.9004 17.1061 18.9482 17.0692 19.0017 17.0427C19.9659 16.5639 21.0672 16.5496 22.0231 17.0037C22.131 17.0563 22.2137 17.1493 22.2533 17.2625C22.293 17.3757 22.2864 17.4999 22.2349 17.6083C22.1834 17.7166 22.0913 17.8003 21.9785 17.8411C21.8657 17.8819 21.7414 17.8765 21.6325 17.8262C20.9304 17.4926 20.1191 17.5043 19.4066 17.858C19.3439 17.8893 19.2747 17.9057 19.2045 17.9057ZM6.32947 17.858C7.04188 17.5043 7.85323 17.4926 8.55542 17.8262C8.66448 17.878 8.78965 17.8843 8.90339 17.8438C9.01714 17.8033 9.11013 17.7193 9.16193 17.6102C9.21372 17.5012 9.22007 17.376 9.17957 17.2622C9.13908 17.1485 9.05506 17.0555 8.94599 17.0037C7.99 16.5496 6.8886 16.5638 5.92451 17.0427C5.87097 17.0692 5.82319 17.1061 5.78389 17.1512C5.7446 17.1962 5.71457 17.2486 5.69551 17.3052C5.67645 17.3619 5.66874 17.4217 5.67282 17.4814C5.67689 17.541 5.69268 17.5993 5.71927 17.6528C5.74585 17.7063 5.78272 17.7541 5.82778 17.7934C5.87283 17.8327 5.92519 17.8628 5.98185 17.8818C6.03852 17.9009 6.09838 17.9086 6.15803 17.9045C6.21767 17.9004 6.27593 17.8846 6.32947 17.858ZM0.5554 22.3691C0.578587 22.357 2.9646 21.1532 10.6492 20.9985C10.6672 20.9982 10.6849 20.9943 10.7013 20.9871C10.7178 20.9799 10.7326 20.9695 10.7451 20.9565C10.7575 20.9436 10.7673 20.9283 10.7738 20.9116C10.7804 20.8949 10.7835 20.877 10.7832 20.8591C10.7817 20.7836 10.7199 20.7217 10.6437 20.7252C2.87235 20.8816 0.524119 22.0764 0.427978 22.1272C0.400907 22.1414 0.379396 22.1643 0.366888 22.1922C0.354381 22.2201 0.351601 22.2514 0.358993 22.2811C0.366386 22.3108 0.383523 22.3371 0.407662 22.3559C0.4318 22.3747 0.461542 22.3848 0.492126 22.3847C0.513455 22.3847 0.535166 22.3797 0.5554 22.3691ZM1.38288 24.2767C1.4199 24.2651 5.13581 23.1087 9.66103 22.0642C9.67879 22.0604 9.69562 22.0531 9.71054 22.0428C9.72546 22.0324 9.73817 22.0192 9.74792 22.0039C9.75768 21.9886 9.76429 21.9715 9.76736 21.9536C9.77043 21.9357 9.76991 21.9174 9.76583 21.8997C9.76174 21.882 9.75417 21.8653 9.74356 21.8505C9.73295 21.8358 9.71951 21.8233 9.70403 21.8139C9.68855 21.8044 9.67133 21.7981 9.65339 21.7953C9.63544 21.7925 9.61713 21.7934 9.59951 21.7978C5.06433 22.8446 1.33847 24.004 1.30139 24.0156C1.26678 24.0264 1.23787 24.0506 1.22104 24.0827C1.2042 24.1148 1.20082 24.1523 1.21162 24.1869C1.22243 24.2215 1.24654 24.2504 1.27866 24.2672C1.31077 24.2841 1.34826 24.2875 1.38288 24.2767ZM3.0637 26.8083C3.09542 26.7776 6.29819 23.7293 11.6575 22.4922C11.6752 22.4884 11.692 22.4812 11.707 22.4708C11.7219 22.4605 11.7346 22.4472 11.7443 22.4319C11.7541 22.4166 11.7607 22.3995 11.7638 22.3816C11.7669 22.3637 11.7663 22.3454 11.7622 22.3277C11.7582 22.31 11.7506 22.2933 11.74 22.2786C11.7294 22.2638 11.7159 22.2514 11.7005 22.2419C11.685 22.2324 11.6678 22.2261 11.6498 22.2233C11.6319 22.2206 11.6135 22.2214 11.5959 22.2258C6.16366 23.4798 2.90603 26.5805 2.87377 26.6117C2.8605 26.624 2.84984 26.6389 2.84239 26.6555C2.83495 26.672 2.83087 26.6899 2.83041 26.7081C2.82994 26.7262 2.83309 26.7442 2.83967 26.7612C2.84625 26.7781 2.85613 26.7935 2.86874 26.8066C2.88135 26.8196 2.89642 26.83 2.9131 26.8372C2.92977 26.8444 2.9477 26.8481 2.96585 26.8483C2.984 26.8485 3.00199 26.845 3.01879 26.8381C3.03559 26.8313 3.05086 26.8211 3.0637 26.8083ZM27.8306 22.312C27.839 22.2961 27.8441 22.2787 27.8458 22.2608C27.8475 22.2429 27.8456 22.2249 27.8403 22.2077C27.835 22.1906 27.8264 22.1746 27.815 22.1608C27.8035 22.147 27.7894 22.1356 27.7735 22.1272C27.6773 22.0764 25.3291 20.8816 17.5577 20.7251L17.5549 20.7251C17.5191 20.7254 17.4847 20.7397 17.4594 20.765C17.434 20.7903 17.4195 20.8246 17.4192 20.8604C17.4188 20.8963 17.4326 20.9308 17.4574 20.9567C17.4823 20.9825 17.5163 20.9975 17.5522 20.9985C25.2368 21.1532 27.6228 22.357 27.6457 22.369C27.6616 22.3774 27.679 22.3826 27.6969 22.3843C27.7148 22.3859 27.7328 22.3841 27.75 22.3788C27.7671 22.3735 27.7831 22.3649 27.7969 22.3534C27.8108 22.3419 27.8222 22.3278 27.8306 22.312ZM26.9899 24.1869C27.0007 24.1522 26.9973 24.1148 26.9804 24.0826C26.9636 24.0505 26.9347 24.0264 26.9001 24.0156C26.8629 24.004 23.1371 22.8446 18.6019 21.7977C18.5845 21.7936 18.5663 21.7931 18.5486 21.796C18.5309 21.799 18.5139 21.8054 18.4987 21.8149C18.4835 21.8244 18.4703 21.8368 18.4598 21.8515C18.4494 21.8661 18.442 21.8826 18.438 21.9002C18.434 21.9177 18.4334 21.9358 18.4364 21.9535C18.4393 21.9712 18.4457 21.9881 18.4552 22.0034C18.4648 22.0186 18.4772 22.0318 18.4918 22.0422C18.5064 22.0526 18.5229 22.0601 18.5404 22.0641C23.065 23.1085 26.7816 24.265 26.8186 24.2766C26.8357 24.282 26.8537 24.2839 26.8716 24.2823C26.8895 24.2807 26.9069 24.2756 26.9228 24.2672C26.9387 24.2589 26.9528 24.2475 26.9643 24.2337C26.9758 24.2199 26.9845 24.204 26.9899 24.1869ZM25.331 26.8049C25.3562 26.7788 25.37 26.7438 25.3694 26.7076C25.3687 26.6714 25.3538 26.6368 25.3277 26.6117C25.2954 26.5805 22.0378 23.4797 16.6055 22.2258C16.588 22.2217 16.5699 22.2211 16.5522 22.2241C16.5345 22.227 16.5175 22.2334 16.5022 22.2429C16.487 22.2525 16.4738 22.2649 16.4634 22.2795C16.453 22.2942 16.4456 22.3107 16.4416 22.3283C16.4375 22.3457 16.437 22.3639 16.4399 22.3816C16.4429 22.3993 16.4493 22.4162 16.4588 22.4315C16.4683 22.4467 16.4808 22.4599 16.4954 22.4703C16.51 22.4807 16.5265 22.4882 16.544 22.4922C21.8988 23.7283 25.106 26.7777 25.1378 26.8084C25.1632 26.833 25.1973 26.8468 25.2327 26.8467C25.2511 26.8467 25.2692 26.843 25.2861 26.8359C25.303 26.8287 25.3183 26.8182 25.331 26.8049Z"
        fill="#DDC89B"
      />
      <path
        d="M13.6997 20.9644L12.1251 19.8085C11.6804 19.482 12.0408 18.9706 12.7155 18.9706H15.2149C15.8896 18.9706 16.25 19.482 15.8053 19.8085L14.2307 20.9644C14.0847 21.0716 13.8457 21.0716 13.6997 20.9644ZM4.31233 9.10011C5.1234 7.94396 6.17034 6.92153 7.39189 6.10811C5.87814 4.19711 4.0507 3.47971 3.39615 3.59647C2.73093 3.7152 1.19848 7.58319 2.97232 10.7353C3.35247 10.139 3.80231 9.59004 4.31233 9.10011ZM23.3788 8.81448C24.0062 9.36235 24.5537 9.99551 25.0052 10.6955C26.7439 7.55071 25.2211 3.71465 24.5587 3.59642C23.9014 3.47911 22.0614 4.20334 20.544 6.13239C21.6483 6.87379 22.6083 7.78674 23.3788 8.81448Z"
        fill="#FFA1E0"
      />
    </svg>
  );
}
