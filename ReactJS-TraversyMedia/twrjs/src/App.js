import logo from './logo.svg';
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';
import './App.css';

function App() {
  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
        <svg className="w-40" viewBox="0 0 114 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1835 0C17.0979 0.955678 17.0336 1.8795 16.9908 2.77147C16.9694 3.66343 16.9587 4.35365 16.9587 4.8421C16.9587 5.30932 16.9694 5.75531 16.9908 6.18006C17.0122 6.6048 17.0336 6.96584 17.055 7.26316H16.3163C16.0379 5.60665 15.6525 4.31117 15.16 3.37673C14.6675 2.42105 14.0573 1.74146 13.3293 1.33795C12.6226 0.93444 11.7769 0.732685 10.7919 0.732685H9.73197C9.111 0.732685 8.63993 0.785779 8.31874 0.891967C7.99756 0.998153 7.78343 1.21053 7.67637 1.52909C7.56931 1.84764 7.51578 2.3361 7.51578 2.99446V18.9862C7.51578 19.8144 7.60143 20.4303 7.77273 20.8338C7.94403 21.2373 8.27592 21.5028 8.7684 21.6302C9.26089 21.7576 9.98892 21.832 10.9525 21.8532V22.554C10.2887 22.5328 9.43219 22.5115 8.38298 22.4903C7.33377 22.4691 6.23103 22.4585 5.07475 22.4585C4.15402 22.4585 3.25469 22.4691 2.37678 22.4903C1.49887 22.5115 0.706611 22.5328 0 22.554V21.9169C0.685199 21.8744 1.1991 21.7895 1.5417 21.6621C1.8843 21.5346 2.10913 21.2798 2.21619 20.8975C2.34467 20.5152 2.4089 19.9418 2.4089 19.1773V3.37673C2.4089 2.59095 2.34467 2.01754 2.21619 1.65651C2.10913 1.27424 1.87359 1.01939 1.50958 0.891967C1.16698 0.743305 0.663787 0.658356 0 0.637119V0C0.877911 0.021237 1.80935 0.0424741 2.79433 0.0637111C3.7793 0.0637111 4.75357 0.0743296 5.71713 0.0955666C6.68069 0.0955666 7.58001 0.0955666 8.4151 0.0955666C9.25019 0.0955666 9.93538 0.0955666 10.4707 0.0955666C11.4557 0.0955666 12.5691 0.0955666 13.811 0.0955666C15.0744 0.0743296 16.1985 0.0424741 17.1835 0ZM12.3978 11.0222C12.3978 11.0222 12.3978 11.1283 12.3978 11.3407C12.3978 11.5531 12.3978 11.6593 12.3978 11.6593H6.55221C6.55221 11.6593 6.55221 11.5531 6.55221 11.3407C6.55221 11.1283 6.55221 11.0222 6.55221 11.0222H12.3978ZM13.2008 6.81717C13.1151 8.0277 13.0723 8.95152 13.0723 9.58864C13.0937 10.2258 13.1044 10.8098 13.1044 11.3407C13.1044 11.8717 13.1151 12.4557 13.1365 13.0928C13.158 13.7299 13.2115 14.6537 13.2971 15.8643H12.5584C12.4299 15.121 12.2265 14.4307 11.9482 13.7936C11.6698 13.1565 11.263 12.6468 10.7276 12.2645C10.1923 11.861 9.49643 11.6593 8.63993 11.6593V11.0222C9.2823 11.0222 9.81762 10.8947 10.2459 10.6399C10.6955 10.3638 11.0702 10.0134 11.37 9.58864C11.6698 9.14266 11.9053 8.67544 12.0766 8.18698C12.2479 7.69852 12.3764 7.24192 12.4621 6.81717H13.2008Z" fill="black"/>
<path d="M22.5857 22.777C21.6222 22.777 20.8192 22.5965 20.1768 22.2355C19.5344 21.8744 19.0634 21.3966 18.7636 20.8019C18.4638 20.1861 18.3139 19.5171 18.3139 18.795C18.3139 17.8818 18.5173 17.1385 18.9242 16.5651C19.3524 15.9917 19.8985 15.5245 20.5622 15.1634C21.226 14.8024 21.9219 14.5051 22.65 14.2715C23.3994 14.0379 24.106 13.8149 24.7698 13.6025C25.455 13.3689 26.001 13.1034 26.4078 12.8061C26.8361 12.4875 27.0502 12.084 27.0502 11.5956V9.1108C27.0502 8.55863 26.9539 8.07017 26.7612 7.64543C26.5899 7.19945 26.3115 6.85965 25.9261 6.62604C25.5621 6.39243 25.0803 6.27562 24.4807 6.27562C24.0525 6.27562 23.6242 6.33933 23.196 6.46676C22.7677 6.57295 22.4144 6.76408 22.1361 7.04017C22.7356 7.25254 23.196 7.58172 23.5172 8.0277C23.8598 8.45245 24.0311 8.9409 24.0311 9.49307C24.0311 10.2151 23.7741 10.7886 23.2602 11.2133C22.7677 11.638 22.1789 11.8504 21.4937 11.8504C20.7228 11.8504 20.134 11.6168 19.7272 11.1496C19.3417 10.6611 19.149 10.0771 19.149 9.39751C19.149 8.78163 19.2989 8.27193 19.5987 7.86842C19.9199 7.46491 20.3588 7.08264 20.9155 6.72161C21.5151 6.38181 22.2324 6.11634 23.0675 5.92521C23.924 5.73407 24.8447 5.6385 25.8297 5.6385C26.8147 5.6385 27.7033 5.74469 28.4956 5.95706C29.2878 6.1482 29.9516 6.50923 30.4869 7.04017C30.9794 7.52862 31.3006 8.13389 31.4505 8.85596C31.6004 9.55679 31.6753 10.4488 31.6753 11.5319V20.1967C31.6753 20.7276 31.7288 21.0993 31.8359 21.3116C31.943 21.5028 32.125 21.5983 32.3819 21.5983C32.5746 21.5983 32.7566 21.5452 32.9279 21.4391C33.1207 21.3329 33.3241 21.2054 33.5382 21.0568L33.8594 21.5983C33.4097 21.9806 32.8851 22.2779 32.2856 22.4903C31.7074 22.6814 31.0543 22.777 30.3263 22.777C29.5341 22.777 28.9024 22.6708 28.4313 22.4585C27.9602 22.2248 27.6176 21.9169 27.4035 21.5346C27.2108 21.1524 27.1145 20.7064 27.1145 20.1967C26.6006 21.0037 25.9796 21.6408 25.2516 22.108C24.5235 22.554 23.6349 22.777 22.5857 22.777ZM24.8661 20.7382C25.2944 20.7382 25.6798 20.6427 26.0224 20.4515C26.3864 20.2392 26.729 19.8994 27.0502 19.4321V12.9017C26.8575 13.2202 26.5899 13.5069 26.2473 13.7618C25.9047 14.0166 25.5406 14.2821 25.1552 14.5582C24.7698 14.813 24.3951 15.0997 24.0311 15.4183C23.6885 15.7368 23.4101 16.1297 23.196 16.597C22.9818 17.0642 22.8748 17.627 22.8748 18.2853C22.8748 19.1136 23.0568 19.7295 23.4208 20.133C23.7848 20.5365 24.2666 20.7382 24.8661 20.7382Z" fill="black"/>
<path d="M50.7724 5.73407V19.0817C50.7724 20.0374 50.9223 20.7488 51.222 21.2161C51.5218 21.6621 52.0571 21.885 52.828 21.885V22.554C52.1642 22.4903 51.5004 22.4585 50.8366 22.4585C49.9373 22.4585 49.1022 22.4903 48.3314 22.554C47.5605 22.6177 46.8325 22.7345 46.1473 22.9044V20.0374C45.6334 21.0993 44.9161 21.8638 43.9953 22.331C43.096 22.777 42.0896 23 40.9762 23C40.0769 23 39.3488 22.8832 38.7921 22.6496C38.2354 22.416 37.7964 22.1187 37.4752 21.7576C37.1112 21.3541 36.8543 20.8232 36.7044 20.1648C36.5545 19.5065 36.4796 18.657 36.4796 17.6163V9.55679C36.4796 8.60111 36.3297 7.90028 36.0299 7.45429C35.7515 6.98707 35.2162 6.75346 34.424 6.75346V6.08449C35.1092 6.1482 35.773 6.18006 36.4153 6.18006C37.3146 6.18006 38.1497 6.1482 38.9206 6.08449C39.7129 5.99954 40.4409 5.88273 41.1047 5.73407V18.9224C41.1047 19.4534 41.1475 19.9206 41.2331 20.3241C41.3402 20.7276 41.5329 21.0462 41.8113 21.2798C42.0896 21.4922 42.4965 21.5983 43.0318 21.5983C43.6099 21.5983 44.1238 21.4391 44.5735 21.1205C45.0446 20.8019 45.4193 20.3666 45.6976 19.8144C45.9974 19.241 46.1473 18.6039 46.1473 17.903V9.55679C46.1473 8.60111 45.9974 7.90028 45.6976 7.45429C45.4193 6.98707 44.884 6.75346 44.0917 6.75346V6.08449C44.7769 6.1482 45.4407 6.18006 46.0831 6.18006C46.9824 6.18006 47.8175 6.1482 48.5883 6.08449C49.3806 5.99954 50.1086 5.88273 50.7724 5.73407Z" fill="black"/>
<path d="M61.3859 6.08449V6.75346C60.9576 6.75346 60.6364 6.84903 60.4223 7.04017C60.2296 7.2313 60.2403 7.49677 60.4544 7.83657L68.9016 20.2922C69.1586 20.6745 69.4262 21.0249 69.7046 21.3435C70.0044 21.6408 70.3363 21.8213 70.7003 21.885V22.554C70.3791 22.5328 69.8866 22.5115 69.2228 22.4903C68.5805 22.4478 67.9274 22.4266 67.2636 22.4266C66.4927 22.4266 65.7005 22.4478 64.8868 22.4903C64.0731 22.5115 63.4736 22.5328 63.0882 22.554V21.885C63.5164 21.885 63.8269 21.7895 64.0196 21.5983C64.2337 21.4072 64.2337 21.1417 64.0196 20.8019L55.5724 8.34626C55.2084 7.81533 54.8979 7.43306 54.6409 7.19945C54.4054 6.9446 54.1163 6.79594 53.7737 6.75346V6.08449C54.1377 6.10572 54.6838 6.13758 55.4118 6.18006C56.1398 6.20129 56.8678 6.21191 57.5959 6.21191C58.3025 6.21191 59.0198 6.20129 59.7478 6.18006C60.4758 6.13758 61.0218 6.10572 61.3859 6.08449ZM60.6471 14.8767C60.6471 14.8767 60.6578 14.9404 60.6792 15.0679C60.7221 15.1953 60.7542 15.3227 60.7756 15.4501C60.8184 15.5776 60.8398 15.6413 60.8398 15.6413L59.5551 17.2659C58.9127 18.0942 58.5594 18.8587 58.4952 19.5596C58.4309 20.2392 58.6129 20.7913 59.0412 21.2161C59.4694 21.6196 60.0583 21.8532 60.8077 21.9169V22.554C60.4009 22.5328 59.8977 22.5222 59.2981 22.5222C58.72 22.5009 58.1526 22.4903 57.5959 22.4903C57.0391 22.4691 56.5681 22.4585 56.1826 22.4585C55.7116 22.4585 55.294 22.4691 54.93 22.4903C54.5874 22.4903 54.2555 22.5115 53.9343 22.554V21.9169C54.4268 21.7258 54.8979 21.4497 55.3475 21.0886C55.7972 20.7064 56.3004 20.1648 56.8571 19.464L60.6471 14.8767ZM69.7688 6.08449V6.72161C69.3192 6.84903 68.8481 7.12512 68.3556 7.54986C67.8631 7.97461 67.3492 8.51616 66.8139 9.17451L63.2809 13.5706C63.2809 13.5706 63.2595 13.5175 63.2166 13.4114C63.1952 13.2839 63.1631 13.1565 63.1203 13.0291C63.0989 12.9017 63.0882 12.838 63.0882 12.838L64.6941 10.7036C65.2722 9.9603 65.6255 9.30194 65.754 8.72853C65.8825 8.15512 65.7861 7.6879 65.4649 7.32687C65.1652 6.96583 64.6299 6.76408 63.859 6.72161V6.08449C64.48 6.10572 65.1116 6.12696 65.754 6.1482C66.3964 6.16944 66.9745 6.18006 67.4884 6.18006C67.9809 6.18006 68.4092 6.16944 68.7732 6.1482C69.1372 6.12696 69.4691 6.10572 69.7688 6.08449Z" fill="black"/>
<path d="M78.9096 5.59557V19.4529C78.9096 20.3449 79.0595 20.9501 79.3592 21.2687C79.6804 21.5873 80.2157 21.7465 80.9652 21.7465V22.4155C80.5797 22.3943 79.9802 22.373 79.1665 22.3518C78.3528 22.3093 77.5285 22.2881 76.6934 22.2881C75.8583 22.2881 75.0125 22.3093 74.156 22.3518C73.2995 22.373 72.6571 22.3943 72.2289 22.4155V21.7465C72.9783 21.7465 73.5029 21.5873 73.8027 21.2687C74.1239 20.9501 74.2845 20.3449 74.2845 19.4529V9.41828C74.2845 8.4626 74.1346 7.76177 73.8348 7.31579C73.5564 6.84857 73.0211 6.61496 72.2289 6.61496V5.94598C72.9141 6.0097 73.5779 6.04155 74.2202 6.04155C75.1196 6.04155 75.9546 6.0097 76.7255 5.94598C77.5177 5.86103 78.2458 5.74423 78.9096 5.59557Z" fill="black"/>
<path d="M90.7109 5.5C91.546 5.5 92.3062 5.59557 92.9914 5.7867C93.698 5.9566 94.2761 6.17959 94.7258 6.45568C95.2825 6.79548 95.7107 7.22022 96.0105 7.72992C96.3317 8.21837 96.4923 8.79178 96.4923 9.45014C96.4923 10.1934 96.2568 10.8093 95.7857 11.2978C95.3146 11.765 94.7044 11.9986 93.9549 11.9986C93.2055 11.9986 92.6059 11.7862 92.1563 11.3615C91.7066 10.9368 91.4818 10.3633 91.4818 9.64127C91.4818 8.96168 91.6959 8.39889 92.1241 7.95291C92.5524 7.48569 93.0449 7.17775 93.6016 7.02909C93.4303 6.81671 93.1734 6.6362 92.8308 6.48754C92.4882 6.33887 92.1027 6.26454 91.6745 6.26454C91.0107 6.26454 90.4219 6.45568 89.908 6.83795C89.4155 7.22022 88.9979 7.75116 88.6553 8.43075C88.3127 9.11034 88.0451 9.90674 87.8524 10.8199C87.6811 11.7331 87.5954 12.7313 87.5954 13.8144C87.5954 15.4497 87.7988 16.7345 88.2057 17.669C88.6339 18.6034 89.1692 19.2618 89.8116 19.644C90.4754 20.0263 91.1606 20.2175 91.8672 20.2175C92.274 20.2175 92.713 20.1537 93.1841 20.0263C93.6766 19.8989 94.169 19.644 94.6615 19.2618C95.1754 18.8795 95.6465 18.338 96.0748 17.6371L96.6208 17.8283C96.3852 18.614 95.9998 19.3998 95.4645 20.1856C94.9292 20.9714 94.2333 21.6191 93.3768 22.1288C92.5203 22.6173 91.4711 22.8615 90.2291 22.8615C88.8373 22.8615 87.574 22.5642 86.4391 21.9695C85.3257 21.3536 84.4264 20.4192 83.7412 19.1662C83.0774 17.892 82.7455 16.2567 82.7455 14.2604C82.7455 12.349 83.0881 10.7456 83.7733 9.45014C84.4799 8.13343 85.4328 7.14589 86.6319 6.48754C87.831 5.82918 89.1906 5.5 90.7109 5.5Z" fill="black"/>
<path d="M102.726 22.6385C101.763 22.6385 100.96 22.458 100.317 22.097C99.6751 21.7359 99.204 21.2581 98.9042 20.6634C98.6044 20.0476 98.4545 19.3786 98.4545 18.6565C98.4545 17.7433 98.658 17 99.0648 16.4266C99.493 15.8532 100.039 15.386 100.703 15.0249C101.367 14.6639 102.063 14.3666 102.791 14.133C103.54 13.8994 104.247 13.6764 104.91 13.464C105.596 13.2304 106.142 12.9649 106.548 12.6676C106.977 12.349 107.191 11.9455 107.191 11.4571V8.9723C107.191 8.42013 107.094 7.93167 106.902 7.50692C106.73 7.06094 106.452 6.72115 106.067 6.48754C105.703 6.25392 105.221 6.13712 104.621 6.13712C104.193 6.13712 103.765 6.20083 103.337 6.32826C102.908 6.43444 102.555 6.62558 102.277 6.90166C102.876 7.11404 103.337 7.44321 103.658 7.8892C104 8.31394 104.172 8.8024 104.172 9.35457C104.172 10.0766 103.915 10.65 103.401 11.0748C102.908 11.4995 102.319 11.7119 101.634 11.7119C100.863 11.7119 100.275 11.4783 99.8678 11.0111C99.4823 10.5226 99.2896 9.9386 99.2896 9.259C99.2896 8.64312 99.4395 8.13343 99.7393 7.72992C100.06 7.32641 100.499 6.94414 101.056 6.5831C101.656 6.24331 102.373 5.97784 103.208 5.7867C104.065 5.59557 104.985 5.5 105.97 5.5C106.955 5.5 107.844 5.60619 108.636 5.81856C109.428 6.00969 110.092 6.37073 110.628 6.90166C111.12 7.39012 111.441 7.99538 111.591 8.71745C111.741 9.41828 111.816 10.3102 111.816 11.3934V20.0582C111.816 20.5891 111.869 20.9608 111.977 21.1731C112.084 21.3643 112.266 21.4598 112.523 21.4598C112.715 21.4598 112.897 21.4067 113.069 21.3006C113.261 21.1944 113.465 21.0669 113.679 20.9183L114 21.4598C113.55 21.8421 113.026 22.1394 112.426 22.3518C111.848 22.5429 111.195 22.6385 110.467 22.6385C109.675 22.6385 109.043 22.5323 108.572 22.3199C108.101 22.0863 107.758 21.7784 107.544 21.3961C107.351 21.0139 107.255 20.5679 107.255 20.0582C106.741 20.8652 106.12 21.5023 105.392 21.9695C104.664 22.4155 103.776 22.6385 102.726 22.6385ZM105.007 20.5997C105.435 20.5997 105.82 20.5042 106.163 20.313C106.527 20.1006 106.87 19.7608 107.191 19.2936V12.7632C106.998 13.0817 106.73 13.3684 106.388 13.6233C106.045 13.8781 105.681 14.1436 105.296 14.4197C104.91 14.6745 104.536 14.9612 104.172 15.2798C103.829 15.5983 103.551 15.9912 103.337 16.4585C103.122 16.9257 103.015 17.4885 103.015 18.1468C103.015 18.9751 103.197 19.591 103.561 19.9945C103.925 20.398 104.407 20.5997 105.007 20.5997Z" fill="black"/>
<path d="M2 30.7876C2.14803 30.7945 2.34188 30.8014 2.58155 30.8083C2.82122 30.8152 3.05736 30.8187 3.28998 30.8187C3.62129 30.8187 3.9385 30.8152 4.24161 30.8083C4.54472 30.8014 4.75972 30.7979 4.8866 30.7979C5.73954 30.7979 6.37749 30.9879 6.80043 31.3679C7.22338 31.7478 7.43485 32.2383 7.43485 32.8394C7.43485 33.0881 7.39256 33.3506 7.30797 33.6269C7.22338 33.8964 7.07535 34.1485 6.86387 34.3834C6.65945 34.6114 6.37749 34.7979 6.01798 34.943C5.65848 35.0881 5.20381 35.1606 4.65398 35.1606H3.63891V34.9534H4.54825C5.04873 34.9534 5.42938 34.8601 5.6902 34.6736C5.95807 34.487 6.13782 34.2418 6.22945 33.9378C6.32814 33.6339 6.37749 33.3057 6.37749 32.9534C6.37749 32.2971 6.24355 31.8066 5.97569 31.4819C5.71487 31.1572 5.26373 30.9948 4.62226 30.9948C4.298 30.9948 4.08653 31.0535 3.98784 31.171C3.88916 31.2884 3.83981 31.5268 3.83981 31.886V37.0259C3.83981 37.2746 3.86448 37.4611 3.91383 37.5855C3.97022 37.7098 4.07596 37.7927 4.23104 37.8342C4.38612 37.8756 4.61169 37.9033 4.90775 37.9171V38.1244C4.72447 38.1105 4.49185 38.1036 4.20989 38.1036C3.92793 38.0967 3.64244 38.0933 3.35343 38.0933C3.07851 38.0933 2.82122 38.0967 2.58155 38.1036C2.34188 38.1036 2.14803 38.1105 2 38.1244V37.9171C2.23967 37.9033 2.41942 37.8756 2.53926 37.8342C2.66614 37.7927 2.75073 37.7098 2.79302 37.5855C2.83532 37.4611 2.85646 37.2746 2.85646 37.0259V31.886C2.85646 31.6304 2.83532 31.4439 2.79302 31.3264C2.75073 31.2021 2.66614 31.1192 2.53926 31.0777C2.41942 31.0294 2.23967 31.0017 2 30.9948V30.7876Z" fill="black"/>
<path d="M11.3361 32.6425C11.5264 32.6425 11.6921 32.6805 11.8331 32.7565C11.9811 32.8325 12.0939 32.9326 12.1714 33.057C12.256 33.1744 12.2983 33.3092 12.2983 33.4611C12.2983 33.6339 12.2419 33.7858 12.1291 33.9171C12.0234 34.0484 11.8789 34.114 11.6956 34.114C11.5476 34.114 11.4172 34.0691 11.3044 33.9793C11.1916 33.8826 11.1352 33.7478 11.1352 33.5751C11.1352 33.4439 11.1705 33.3333 11.2409 33.2435C11.3185 33.1468 11.4031 33.0708 11.4947 33.0155C11.4454 32.9465 11.3714 32.9119 11.2727 32.9119C11.0541 32.9119 10.8532 32.9775 10.67 33.1088C10.4867 33.2332 10.3316 33.3955 10.2047 33.5959C10.0778 33.7962 9.97916 34.0104 9.90867 34.2383C9.83818 34.4594 9.80293 34.6667 9.80293 34.8601V37.057C9.80293 37.3955 9.90162 37.6235 10.099 37.7409C10.3034 37.8515 10.5783 37.9067 10.9237 37.9067V38.1244C10.7616 38.1174 10.5325 38.1105 10.2365 38.1036C9.94039 38.0898 9.6267 38.0829 9.2954 38.0829C9.05573 38.0829 8.81606 38.0898 8.57639 38.1036C8.34377 38.1105 8.16754 38.1174 8.04771 38.1244V37.9067C8.33672 37.9067 8.54114 37.8549 8.66098 37.7513C8.78786 37.6477 8.8513 37.4508 8.8513 37.1606V33.9171C8.8513 33.6062 8.79491 33.3782 8.68213 33.2332C8.56934 33.0812 8.35787 33.0052 8.04771 33.0052V32.7876C8.27328 32.8083 8.4918 32.8187 8.70327 32.8187C8.9077 32.8187 9.10155 32.8083 9.28482 32.7876C9.47515 32.7599 9.64785 32.7219 9.80293 32.6736V33.9689C9.88047 33.7686 9.98973 33.5682 10.1307 33.3679C10.2787 33.1606 10.455 32.9879 10.6594 32.8497C10.8638 32.7116 11.0894 32.6425 11.3361 32.6425Z" fill="black"/>
<path d="M15.1192 32.6425C15.7395 32.6425 16.2223 32.829 16.5677 33.2021C16.9202 33.5682 17.0964 34.1416 17.0964 34.9223H13.3639L13.3534 34.7254H16.0814C16.0955 34.3869 16.0673 34.076 15.9968 33.7927C15.9263 33.5026 15.8135 33.2712 15.6584 33.0984C15.5104 32.9257 15.3165 32.8394 15.0769 32.8394C14.7526 32.8394 14.4636 32.9983 14.2098 33.3161C13.9631 33.6339 13.8151 34.1382 13.7657 34.829L13.7975 34.8705C13.7834 34.9741 13.7728 35.0881 13.7657 35.2124C13.7587 35.3368 13.7552 35.4611 13.7552 35.5855C13.7552 36.0553 13.8327 36.4594 13.9878 36.7979C14.1429 37.1364 14.3438 37.3955 14.5905 37.5751C14.8442 37.7478 15.1051 37.8342 15.3729 37.8342C15.5844 37.8342 15.7853 37.8031 15.9756 37.7409C16.1659 37.6718 16.3422 37.5613 16.5043 37.4093C16.6664 37.2573 16.8074 37.0535 16.9272 36.7979L17.1387 36.8808C17.0612 37.1088 16.9343 37.3299 16.7581 37.544C16.5818 37.7582 16.3598 37.9344 16.0919 38.0725C15.8241 38.2038 15.5139 38.2694 15.1615 38.2694C14.6539 38.2694 14.2169 38.1554 13.8503 37.9275C13.4908 37.6995 13.2124 37.3851 13.015 36.9845C12.8247 36.5769 12.7295 36.1105 12.7295 35.5855C12.7295 34.9775 12.8282 34.456 13.0256 34.0207C13.223 33.5786 13.5014 33.2401 13.8609 33.0052C14.2204 32.7634 14.6398 32.6425 15.1192 32.6425Z" fill="black"/>
<path d="M21.3878 32.6425C21.6346 32.6425 21.8496 32.677 22.0328 32.7461C22.2161 32.8152 22.3677 32.9119 22.4875 33.0363C22.6214 33.1744 22.7131 33.3541 22.7624 33.5751C22.8118 33.7962 22.8364 34.0691 22.8364 34.3938V37.1606C22.8364 37.4508 22.8963 37.6477 23.0162 37.7513C23.1431 37.8549 23.351 37.9067 23.64 37.9067V38.1244C23.5202 38.1174 23.3369 38.1105 23.0902 38.1036C22.8435 38.0898 22.6038 38.0829 22.3712 38.0829C22.1386 38.0829 21.9095 38.0898 21.6839 38.1036C21.4654 38.1105 21.2997 38.1174 21.1869 38.1244V37.9067C21.4407 37.9067 21.6205 37.8549 21.7262 37.7513C21.8319 37.6477 21.8848 37.4508 21.8848 37.1606V34.1658C21.8848 33.9516 21.8707 33.7547 21.8425 33.5751C21.8143 33.3955 21.7438 33.2504 21.631 33.1399C21.5182 33.0294 21.335 32.9741 21.0812 32.9741C20.8063 32.9741 20.5596 33.057 20.341 33.2228C20.1296 33.3886 19.9604 33.6166 19.8335 33.9067C19.7137 34.19 19.6538 34.5078 19.6538 34.8601V37.1606C19.6538 37.4508 19.7066 37.6477 19.8124 37.7513C19.9181 37.8549 20.0979 37.9067 20.3516 37.9067V38.1244C20.2388 38.1174 20.0697 38.1105 19.8441 38.1036C19.6256 38.0898 19.4 38.0829 19.1674 38.0829C18.9348 38.0829 18.6951 38.0898 18.4484 38.1036C18.2016 38.1105 18.0184 38.1174 17.8985 38.1244V37.9067C18.1876 37.9067 18.392 37.8549 18.5118 37.7513C18.6387 37.6477 18.7021 37.4508 18.7021 37.1606V33.9171C18.7021 33.6062 18.6457 33.3782 18.533 33.2332C18.4202 33.0812 18.2087 33.0052 17.8985 33.0052V32.7876C18.1241 32.8083 18.3426 32.8187 18.5541 32.8187C18.7585 32.8187 18.9524 32.8083 19.1357 32.7876C19.326 32.7599 19.4987 32.7219 19.6538 32.6736V33.8964C19.837 33.4473 20.0873 33.1261 20.4045 32.9326C20.7217 32.7392 21.0495 32.6425 21.3878 32.6425ZM24.5705 32.6425C24.8172 32.6425 25.0322 32.677 25.2155 32.7461C25.3988 32.8152 25.5503 32.9119 25.6702 33.0363C25.8041 33.1744 25.8957 33.3541 25.9451 33.5751C25.9944 33.7962 26.0191 34.0691 26.0191 34.3938V37.1606C26.0191 37.4508 26.079 37.6477 26.1988 37.7513C26.3257 37.8549 26.5337 37.9067 26.8227 37.9067V38.1244C26.7029 38.1174 26.5196 38.1105 26.2729 38.1036C26.0261 38.0898 25.7865 38.0829 25.5539 38.0829C25.3212 38.0829 25.0921 38.0898 24.8666 38.1036C24.648 38.1105 24.4824 38.1174 24.3696 38.1244V37.9067C24.6234 37.9067 24.8031 37.8549 24.9089 37.7513C25.0146 37.6477 25.0675 37.4508 25.0675 37.1606V34.1658C25.0675 33.9516 25.0534 33.7547 25.0252 33.5751C24.997 33.3955 24.9265 33.2504 24.8137 33.1399C24.7009 33.0294 24.5176 32.9741 24.2639 32.9741C23.989 32.9741 23.7422 33.057 23.5237 33.2228C23.3122 33.3886 23.1431 33.6131 23.0162 33.8964C22.8963 34.1796 22.8364 34.4974 22.8364 34.8497L22.8047 33.886C22.995 33.4093 23.2523 33.0846 23.5766 32.9119C23.9008 32.7323 24.2321 32.6425 24.5705 32.6425Z" fill="black"/>
<path d="M28.4901 30.1969C28.6734 30.1969 28.832 30.2625 28.9659 30.3938C29.0998 30.525 29.1668 30.6805 29.1668 30.8601C29.1668 31.0397 29.0998 31.1952 28.9659 31.3264C28.832 31.4577 28.6734 31.5233 28.4901 31.5233C28.3068 31.5233 28.1482 31.4577 28.0143 31.3264C27.8804 31.1952 27.8134 31.0397 27.8134 30.8601C27.8134 30.6805 27.8804 30.525 28.0143 30.3938C28.1482 30.2625 28.3068 30.1969 28.4901 30.1969ZM29.0399 32.6736V37.1606C29.0399 37.4508 29.0998 37.6477 29.2197 37.7513C29.3466 37.8549 29.5545 37.9067 29.8435 37.9067V38.1244C29.7237 38.1174 29.5404 38.1105 29.2937 38.1036C29.054 38.0898 28.8108 38.0829 28.5641 38.0829C28.3244 38.0829 28.0813 38.0898 27.8345 38.1036C27.5878 38.1105 27.4045 38.1174 27.2847 38.1244V37.9067C27.5737 37.9067 27.7781 37.8549 27.898 37.7513C28.0249 37.6477 28.0883 37.4508 28.0883 37.1606V33.9171C28.0883 33.6062 28.0319 33.3782 27.9191 33.2332C27.8063 33.0812 27.5949 33.0052 27.2847 33.0052V32.7876C27.5103 32.8083 27.7288 32.8187 27.9403 32.8187C28.1447 32.8187 28.3385 32.8083 28.5218 32.7876C28.7121 32.7599 28.8848 32.7219 29.0399 32.6736Z" fill="black"/>
<path d="M35.1829 32.6736V37.0052C35.1829 37.3161 35.2393 37.5475 35.3521 37.6995C35.4719 37.8446 35.6834 37.9171 35.9865 37.9171V38.1347C35.768 38.114 35.5494 38.1036 35.3309 38.1036C35.1265 38.1036 34.9291 38.114 34.7388 38.1347C34.5555 38.1554 34.3863 38.1934 34.2313 38.2487V37.0259C34.055 37.475 33.8048 37.7962 33.4805 37.9896C33.1633 38.1762 32.8355 38.2694 32.4972 38.2694C32.2505 38.2694 32.0355 38.2349 31.8522 38.1658C31.6689 38.0967 31.5174 38 31.3975 37.8756C31.2636 37.7375 31.1719 37.5579 31.1226 37.3368C31.0733 37.1157 31.0486 36.8428 31.0486 36.5181V33.9171C31.0486 33.6062 30.9922 33.3782 30.8794 33.2332C30.7666 33.0812 30.5552 33.0052 30.245 33.0052V32.7876C30.4706 32.8083 30.6891 32.8187 30.9006 32.8187C31.105 32.8187 31.2988 32.8083 31.4821 32.7876C31.6724 32.7599 31.8451 32.7219 32.0002 32.6736V36.7461C32.0002 36.9603 32.0143 37.1572 32.0425 37.3368C32.0707 37.5164 32.1412 37.6615 32.254 37.772C32.3668 37.8826 32.55 37.9378 32.8038 37.9378C33.0787 37.9378 33.3219 37.8549 33.5334 37.6891C33.7519 37.5233 33.9211 37.2988 34.0409 37.0155C34.1678 36.7323 34.2313 36.4145 34.2313 36.0622V33.9171C34.2313 33.6062 34.1749 33.3782 34.0621 33.2332C33.9493 33.0812 33.7378 33.0052 33.4277 33.0052V32.7876C33.6532 32.8083 33.8718 32.8187 34.0832 32.8187C34.2876 32.8187 34.4815 32.8083 34.6648 32.7876C34.8551 32.7599 35.0278 32.7219 35.1829 32.6736Z" fill="black"/>
<path d="M40.0156 32.6425C40.2623 32.6425 40.4773 32.677 40.6606 32.7461C40.8439 32.8152 40.9954 32.9119 41.1153 33.0363C41.2492 33.1744 41.3408 33.3541 41.3902 33.5751C41.4395 33.7962 41.4642 34.0691 41.4642 34.3938V37.1606C41.4642 37.4508 41.5241 37.6477 41.644 37.7513C41.7708 37.8549 41.9788 37.9067 42.2678 37.9067V38.1244C42.148 38.1174 41.9647 38.1105 41.718 38.1036C41.4713 38.0898 41.2316 38.0829 40.999 38.0829C40.7663 38.0829 40.5372 38.0898 40.3117 38.1036C40.0932 38.1105 39.9275 38.1174 39.8147 38.1244V37.9067C40.0685 37.9067 40.2482 37.8549 40.354 37.7513C40.4597 37.6477 40.5126 37.4508 40.5126 37.1606V34.1658C40.5126 33.9516 40.4985 33.7547 40.4703 33.5751C40.4421 33.3955 40.3716 33.2504 40.2588 33.1399C40.146 33.0294 39.9627 32.9741 39.709 32.9741C39.4341 32.9741 39.1873 33.057 38.9688 33.2228C38.7573 33.3886 38.5882 33.6166 38.4613 33.9067C38.3415 34.19 38.2815 34.5078 38.2815 34.8601V37.1606C38.2815 37.4508 38.3344 37.6477 38.4401 37.7513C38.5459 37.8549 38.7256 37.9067 38.9794 37.9067V38.1244C38.8666 38.1174 38.6974 38.1105 38.4719 38.1036C38.2533 38.0898 38.0278 38.0829 37.7951 38.0829C37.5625 38.0829 37.3229 38.0898 37.0761 38.1036C36.8294 38.1105 36.6461 38.1174 36.5263 38.1244V37.9067C36.8153 37.9067 37.0197 37.8549 37.1396 37.7513C37.2665 37.6477 37.3299 37.4508 37.3299 37.1606V33.9171C37.3299 33.6062 37.2735 33.3782 37.1607 33.2332C37.0479 33.0812 36.8365 33.0052 36.5263 33.0052V32.7876C36.7519 32.8083 36.9704 32.8187 37.1819 32.8187C37.3863 32.8187 37.5802 32.8083 37.7634 32.7876C37.9538 32.7599 38.1265 32.7219 38.2815 32.6736V33.8964C38.4648 33.4473 38.7151 33.1261 39.0323 32.9326C39.3495 32.7392 39.6773 32.6425 40.0156 32.6425ZM43.1983 32.6425C43.445 32.6425 43.66 32.677 43.8433 32.7461C44.0265 32.8152 44.1781 32.9119 44.2979 33.0363C44.4319 33.1744 44.5235 33.3541 44.5728 33.5751C44.6222 33.7962 44.6469 34.0691 44.6469 34.3938V37.1606C44.6469 37.4508 44.7068 37.6477 44.8266 37.7513C44.9535 37.8549 45.1614 37.9067 45.4505 37.9067V38.1244C45.3306 38.1174 45.1474 38.1105 44.9006 38.1036C44.6539 38.0898 44.4142 38.0829 44.1816 38.0829C43.949 38.0829 43.7199 38.0898 43.4943 38.1036C43.2758 38.1105 43.1102 38.1174 42.9974 38.1244V37.9067C43.2511 37.9067 43.4309 37.8549 43.5366 37.7513C43.6424 37.6477 43.6952 37.4508 43.6952 37.1606V34.1658C43.6952 33.9516 43.6811 33.7547 43.6529 33.5751C43.6247 33.3955 43.5543 33.2504 43.4415 33.1399C43.3287 33.0294 43.1454 32.9741 42.8916 32.9741C42.6167 32.9741 42.37 33.057 42.1515 33.2228C41.94 33.3886 41.7708 33.6131 41.644 33.8964C41.5241 34.1796 41.4642 34.4974 41.4642 34.8497L41.4325 33.886C41.6228 33.4093 41.8801 33.0846 42.2044 32.9119C42.5286 32.7323 42.8599 32.6425 43.1983 32.6425Z" fill="black"/>
<path d="M51.2928 30.7358L53.8728 37.2539C53.9785 37.5164 54.0983 37.6926 54.2323 37.7824C54.3662 37.8653 54.4896 37.9102 54.6024 37.9171V38.1244C54.4614 38.1105 54.2887 38.1036 54.0842 38.1036C53.8798 38.0967 53.6754 38.0933 53.471 38.0933C53.1961 38.0933 52.9388 38.0967 52.6991 38.1036C52.4594 38.1036 52.2656 38.1105 52.1176 38.1244V37.9171C52.4771 37.9033 52.7062 37.8446 52.8048 37.7409C52.9035 37.6304 52.8824 37.399 52.7414 37.0466L50.7747 31.8964L50.9439 31.7617L49.1041 36.4456C48.9913 36.7219 48.9243 36.9568 48.9032 37.1503C48.882 37.3368 48.8996 37.4853 48.956 37.5959C49.0195 37.7064 49.1217 37.7858 49.2627 37.8342C49.4107 37.8826 49.594 37.9102 49.8125 37.9171V38.1244C49.6151 38.1105 49.4072 38.1036 49.1887 38.1036C48.9772 38.0967 48.7798 38.0933 48.5965 38.0933C48.4203 38.0933 48.2687 38.0967 48.1419 38.1036C48.022 38.1036 47.9092 38.1105 47.8035 38.1244V37.9171C47.9445 37.8826 48.089 37.8031 48.237 37.6788C48.3851 37.5475 48.519 37.3264 48.6388 37.0155L51.1236 30.7358C51.1518 30.7358 51.18 30.7358 51.2082 30.7358C51.2364 30.7358 51.2646 30.7358 51.2928 30.7358ZM52.5828 35.1399V35.3472H49.4318L49.5376 35.1399H52.5828Z" fill="black"/>
<path d="M56.5255 32.6736V39.0363C56.5255 39.3333 56.6136 39.5302 56.7899 39.6269C56.9731 39.7306 57.2234 39.7824 57.5406 39.7824V40C57.3855 39.9931 57.1705 39.9827 56.8956 39.9689C56.6207 39.962 56.3281 39.9585 56.018 39.9585C55.7995 39.9585 55.5809 39.962 55.3624 39.9689C55.1509 39.9827 54.9888 39.9931 54.876 40V39.7824C55.1298 39.7824 55.3096 39.7375 55.4153 39.6477C55.521 39.5579 55.5739 39.3886 55.5739 39.1399V33.9171C55.5739 33.6062 55.5175 33.3782 55.4047 33.2332C55.2919 33.0812 55.0805 33.0052 54.7703 33.0052V32.7876C54.9959 32.8083 55.2144 32.8187 55.4259 32.8187C55.6303 32.8187 55.8241 32.8083 56.0074 32.7876C56.1977 32.7599 56.3704 32.7219 56.5255 32.6736ZM58.2173 32.6425C58.5909 32.6425 58.9257 32.7427 59.2218 32.943C59.5179 33.1364 59.7505 33.4231 59.9197 33.8031C60.0959 34.1831 60.184 34.6529 60.184 35.2124C60.184 35.5855 60.1382 35.9551 60.0465 36.3212C59.9549 36.6805 59.8104 37.0086 59.613 37.3057C59.4227 37.5959 59.1725 37.8307 58.8623 38.0104C58.5592 38.1831 58.1926 38.2694 57.7626 38.2694C57.4313 38.2694 57.1423 38.1934 56.8956 38.0415C56.6559 37.8895 56.4938 37.7064 56.4092 37.4922L56.5149 37.3472C56.6136 37.5406 56.7546 37.7029 56.9379 37.8342C57.1282 37.9655 57.3644 38.0311 57.6463 38.0311C58.0411 38.0311 58.3477 37.9102 58.5662 37.6684C58.7848 37.4266 58.9363 37.1054 59.0209 36.7047C59.1125 36.2971 59.1584 35.848 59.1584 35.3575C59.1584 34.8048 59.1125 34.3523 59.0209 34C58.9293 33.6477 58.7918 33.3851 58.6085 33.2124C58.4253 33.0397 58.1997 32.9534 57.9318 32.9534C57.5864 32.9534 57.2727 33.095 56.9908 33.3782C56.7088 33.6546 56.529 34.076 56.4515 34.6425L56.3246 34.4974C56.4022 33.9102 56.6136 33.4542 56.959 33.1295C57.3115 32.8048 57.7309 32.6425 58.2173 32.6425Z" fill="black"/>
<path d="M62.6694 32.6736V39.0363C62.6694 39.3333 62.7575 39.5302 62.9337 39.6269C63.117 39.7306 63.3672 39.7824 63.6845 39.7824V40C63.5294 39.9931 63.3144 39.9827 63.0395 39.9689C62.7645 39.962 62.472 39.9585 62.1618 39.9585C61.9433 39.9585 61.7248 39.962 61.5063 39.9689C61.2948 39.9827 61.1327 39.9931 61.0199 40V39.7824C61.2737 39.7824 61.4534 39.7375 61.5591 39.6477C61.6649 39.5579 61.7178 39.3886 61.7178 39.1399V33.9171C61.7178 33.6062 61.6614 33.3782 61.5486 33.2332C61.4358 33.0812 61.2243 33.0052 60.9142 33.0052V32.7876C61.1397 32.8083 61.3582 32.8187 61.5697 32.8187C61.7741 32.8187 61.968 32.8083 62.1513 32.7876C62.3416 32.7599 62.5143 32.7219 62.6694 32.6736ZM64.3612 32.6425C64.7348 32.6425 65.0696 32.7427 65.3657 32.943C65.6617 33.1364 65.8943 33.4231 66.0635 33.8031C66.2397 34.1831 66.3279 34.6529 66.3279 35.2124C66.3279 35.5855 66.282 35.9551 66.1904 36.3212C66.0988 36.6805 65.9543 37.0086 65.7569 37.3057C65.5666 37.5959 65.3163 37.8307 65.0062 38.0104C64.703 38.1831 64.3365 38.2694 63.9065 38.2694C63.5752 38.2694 63.2862 38.1934 63.0395 38.0415C62.7998 37.8895 62.6377 37.7064 62.5531 37.4922L62.6588 37.3472C62.7575 37.5406 62.8985 37.7029 63.0818 37.8342C63.2721 37.9655 63.5082 38.0311 63.7902 38.0311C64.1849 38.0311 64.4916 37.9102 64.7101 37.6684C64.9286 37.4266 65.0802 37.1054 65.1648 36.7047C65.2564 36.2971 65.3022 35.848 65.3022 35.3575C65.3022 34.8048 65.2564 34.3523 65.1648 34C65.0731 33.6477 64.9357 33.3851 64.7524 33.2124C64.5691 33.0397 64.3435 32.9534 64.0757 32.9534C63.7303 32.9534 63.4166 33.095 63.1346 33.3782C62.8527 33.6546 62.6729 34.076 62.5954 34.6425L62.4685 34.4974C62.546 33.9102 62.7575 33.4542 63.1029 33.1295C63.4554 32.8048 63.8748 32.6425 64.3612 32.6425Z" fill="black"/>
<path d="M68.6335 38.1969C68.3445 38.1969 68.0942 38.1451 67.8828 38.0415C67.6713 37.9309 67.5092 37.7789 67.3964 37.5855C67.2906 37.3921 67.2378 37.1675 67.2378 36.9119C67.2378 36.6079 67.3083 36.3592 67.4492 36.1658C67.5973 35.9724 67.7841 35.8169 68.0096 35.6995C68.2352 35.582 68.4714 35.4853 68.7181 35.4093C68.9718 35.3264 69.2115 35.2504 69.4371 35.1813C69.6627 35.1054 69.8459 35.019 69.9869 34.9223C70.1349 34.8256 70.209 34.6978 70.209 34.5389V33.8964C70.209 33.6062 70.1631 33.3851 70.0715 33.2332C69.9869 33.0812 69.8706 32.981 69.7226 32.9326C69.5745 32.8774 69.4089 32.8497 69.2256 32.8497C69.0494 32.8497 68.8591 32.8739 68.6546 32.9223C68.4573 32.9706 68.2987 33.0708 68.1788 33.2228C68.3128 33.2504 68.4291 33.3195 68.5278 33.4301C68.6264 33.5406 68.6758 33.6822 68.6758 33.8549C68.6758 34.0276 68.6194 34.1658 68.5066 34.2694C68.3938 34.3661 68.2493 34.4145 68.0731 34.4145C67.8687 34.4145 67.7171 34.3523 67.6184 34.228C67.5268 34.0967 67.481 33.9516 67.481 33.7927C67.481 33.6131 67.5268 33.468 67.6184 33.3575C67.7101 33.247 67.8264 33.1434 67.9674 33.0466C68.1295 32.9361 68.3374 32.8428 68.5912 32.7668C68.852 32.6839 69.1446 32.6425 69.4688 32.6425C69.7578 32.6425 70.0045 32.677 70.209 32.7461C70.4134 32.8083 70.5826 32.9016 70.7165 33.0259C70.8998 33.1917 71.0196 33.3955 71.076 33.6373C71.1324 33.8722 71.1606 34.1554 71.1606 34.487V37.3679C71.1606 37.5406 71.1853 37.6649 71.2346 37.7409C71.291 37.8169 71.3756 37.8549 71.4884 37.8549C71.5659 37.8549 71.6399 37.8377 71.7104 37.8031C71.7809 37.7686 71.8655 37.7133 71.9642 37.6373L72.0805 37.8135C71.9325 37.924 71.7915 38.0173 71.6576 38.0933C71.5236 38.1623 71.3439 38.1969 71.1183 38.1969C70.9139 38.1969 70.7447 38.1623 70.6108 38.0933C70.4768 38.0242 70.3746 37.924 70.3041 37.7927C70.2407 37.6546 70.209 37.4819 70.209 37.2746C70.0186 37.5855 69.7895 37.8169 69.5217 37.9689C69.2609 38.1209 68.9648 38.1969 68.6335 38.1969ZM69.0141 37.7824C69.2468 37.7824 69.4618 37.7168 69.6591 37.5855C69.8636 37.4542 70.0468 37.2573 70.209 36.9948V34.9637C70.1244 35.0812 70.001 35.1813 69.8389 35.2642C69.6768 35.3402 69.5005 35.4197 69.3102 35.5026C69.1199 35.5786 68.9366 35.6718 68.7604 35.7824C68.5912 35.886 68.4502 36.0242 68.3374 36.1969C68.2246 36.3696 68.1683 36.5941 68.1683 36.8705C68.1683 37.1468 68.2423 37.3679 68.3903 37.5337C68.5454 37.6995 68.7533 37.7824 69.0141 37.7824Z" fill="black"/>
<path d="M75.6866 32.6425C75.8769 32.6425 76.0426 32.6805 76.1836 32.7565C76.3316 32.8325 76.4444 32.9326 76.5219 33.057C76.6065 33.1744 76.6488 33.3092 76.6488 33.4611C76.6488 33.6339 76.5924 33.7858 76.4796 33.9171C76.3739 34.0484 76.2294 34.114 76.0461 34.114C75.8981 34.114 75.7677 34.0691 75.6549 33.9793C75.5421 33.8826 75.4857 33.7478 75.4857 33.5751C75.4857 33.4439 75.521 33.3333 75.5914 33.2435C75.669 33.1468 75.7536 33.0708 75.8452 33.0155C75.7959 32.9465 75.7218 32.9119 75.6232 32.9119C75.4046 32.9119 75.2037 32.9775 75.0205 33.1088C74.8372 33.2332 74.6821 33.3955 74.5552 33.5959C74.4283 33.7962 74.3297 34.0104 74.2592 34.2383C74.1887 34.4594 74.1534 34.6667 74.1534 34.8601V37.057C74.1534 37.3955 74.2521 37.6235 74.4495 37.7409C74.6539 37.8515 74.9288 37.9067 75.2742 37.9067V38.1244C75.1121 38.1174 74.883 38.1105 74.5869 38.1036C74.2909 38.0898 73.9772 38.0829 73.6459 38.0829C73.4062 38.0829 73.1666 38.0898 72.9269 38.1036C72.6943 38.1105 72.518 38.1174 72.3982 38.1244V37.9067C72.6872 37.9067 72.8916 37.8549 73.0115 37.7513C73.1384 37.6477 73.2018 37.4508 73.2018 37.1606V33.9171C73.2018 33.6062 73.1454 33.3782 73.0326 33.2332C72.9198 33.0812 72.7084 33.0052 72.3982 33.0052V32.7876C72.6238 32.8083 72.8423 32.8187 73.0538 32.8187C73.2582 32.8187 73.452 32.8083 73.6353 32.7876C73.8256 32.7599 73.9983 32.7219 74.1534 32.6736V33.9689C74.231 33.7686 74.3402 33.5682 74.4812 33.3679C74.6292 33.1606 74.8055 32.9879 75.0099 32.8497C75.2143 32.7116 75.4399 32.6425 75.6866 32.6425Z" fill="black"/>
<path d="M79.4697 32.6425C80.09 32.6425 80.5728 32.829 80.9182 33.2021C81.2707 33.5682 81.4469 34.1416 81.4469 34.9223H77.7144L77.7039 34.7254H80.4319C80.446 34.3869 80.4178 34.076 80.3473 33.7927C80.2768 33.5026 80.164 33.2712 80.0089 33.0984C79.8609 32.9257 79.667 32.8394 79.4274 32.8394C79.1031 32.8394 78.8141 32.9983 78.5603 33.3161C78.3136 33.6339 78.1656 34.1382 78.1162 34.829L78.1479 34.8705C78.1338 34.9741 78.1233 35.0881 78.1162 35.2124C78.1092 35.3368 78.1056 35.4611 78.1056 35.5855C78.1056 36.0553 78.1832 36.4594 78.3383 36.7979C78.4934 37.1364 78.6943 37.3955 78.941 37.5751C79.1947 37.7478 79.4556 37.8342 79.7234 37.8342C79.9349 37.8342 80.1358 37.8031 80.3261 37.7409C80.5164 37.6718 80.6927 37.5613 80.8548 37.4093C81.0169 37.2573 81.1579 37.0535 81.2777 36.7979L81.4892 36.8808C81.4117 37.1088 81.2848 37.3299 81.1086 37.544C80.9323 37.7582 80.7103 37.9344 80.4424 38.0725C80.1746 38.2038 79.8644 38.2694 79.5119 38.2694C79.0044 38.2694 78.5674 38.1554 78.2008 37.9275C77.8413 37.6995 77.5629 37.3851 77.3655 36.9845C77.1752 36.5769 77.08 36.1105 77.08 35.5855C77.08 34.9775 77.1787 34.456 77.3761 34.0207C77.5734 33.5786 77.8519 33.2401 78.2114 33.0052C78.5709 32.7634 78.9903 32.6425 79.4697 32.6425Z" fill="black"/>
<path d="M83.7505 38.1969C83.4615 38.1969 83.2112 38.1451 82.9998 38.0415C82.7883 37.9309 82.6262 37.7789 82.5134 37.5855C82.4076 37.3921 82.3548 37.1675 82.3548 36.9119C82.3548 36.6079 82.4253 36.3592 82.5662 36.1658C82.7143 35.9724 82.9011 35.8169 83.1266 35.6995C83.3522 35.582 83.5884 35.4853 83.8351 35.4093C84.0888 35.3264 84.3285 35.2504 84.5541 35.1813C84.7797 35.1054 84.9629 35.019 85.1039 34.9223C85.2519 34.8256 85.326 34.6978 85.326 34.5389V33.8964C85.326 33.6062 85.2801 33.3851 85.1885 33.2332C85.1039 33.0812 84.9876 32.981 84.8396 32.9326C84.6915 32.8774 84.5259 32.8497 84.3426 32.8497C84.1664 32.8497 83.9761 32.8739 83.7716 32.9223C83.5743 32.9706 83.4157 33.0708 83.2958 33.2228C83.4298 33.2504 83.5461 33.3195 83.6448 33.4301C83.7434 33.5406 83.7928 33.6822 83.7928 33.8549C83.7928 34.0276 83.7364 34.1658 83.6236 34.2694C83.5108 34.3661 83.3663 34.4145 83.1901 34.4145C82.9857 34.4145 82.8341 34.3523 82.7354 34.228C82.6438 34.0967 82.598 33.9516 82.598 33.7927C82.598 33.6131 82.6438 33.468 82.7354 33.3575C82.8271 33.247 82.9434 33.1434 83.0844 33.0466C83.2465 32.9361 83.4544 32.8428 83.7082 32.7668C83.969 32.6839 84.2615 32.6425 84.5858 32.6425C84.8748 32.6425 85.1215 32.677 85.326 32.7461C85.5304 32.8083 85.6996 32.9016 85.8335 33.0259C86.0168 33.1917 86.1366 33.3955 86.193 33.6373C86.2494 33.8722 86.2776 34.1554 86.2776 34.487V37.3679C86.2776 37.5406 86.3023 37.6649 86.3516 37.7409C86.408 37.8169 86.4926 37.8549 86.6054 37.8549C86.6829 37.8549 86.7569 37.8377 86.8274 37.8031C86.8979 37.7686 86.9825 37.7133 87.0812 37.6373L87.1975 37.8135C87.0495 37.924 86.9085 38.0173 86.7745 38.0933C86.6406 38.1623 86.4609 38.1969 86.2353 38.1969C86.0309 38.1969 85.8617 38.1623 85.7278 38.0933C85.5938 38.0242 85.4916 37.924 85.4211 37.7927C85.3577 37.6546 85.326 37.4819 85.326 37.2746C85.1356 37.5855 84.9065 37.8169 84.6387 37.9689C84.3779 38.1209 84.0818 38.1969 83.7505 38.1969ZM84.1311 37.7824C84.3638 37.7824 84.5788 37.7168 84.7761 37.5855C84.9806 37.4542 85.1638 37.2573 85.326 36.9948V34.9637C85.2414 35.0812 85.118 35.1813 84.9559 35.2642C84.7937 35.3402 84.6175 35.4197 84.4272 35.5026C84.2369 35.5786 84.0536 35.6718 83.8774 35.7824C83.7082 35.886 83.5672 36.0242 83.4544 36.1969C83.3416 36.3696 83.2852 36.5941 83.2852 36.8705C83.2852 37.1468 83.3593 37.3679 83.5073 37.5337C83.6624 37.6995 83.8703 37.7824 84.1311 37.7824Z" fill="black"/>
<path d="M89.1964 30V37.1606C89.1964 37.4508 89.2563 37.6477 89.3762 37.7513C89.503 37.8549 89.711 37.9067 90 37.9067V38.1244C89.8802 38.1174 89.6969 38.1105 89.4502 38.1036C89.2105 38.0898 88.9673 38.0829 88.7206 38.0829C88.4809 38.0829 88.2377 38.0898 87.991 38.1036C87.7443 38.1105 87.561 38.1174 87.4412 38.1244V37.9067C87.7302 37.9067 87.9346 37.8549 88.0545 37.7513C88.1813 37.6477 88.2448 37.4508 88.2448 37.1606V31.2435C88.2448 30.9326 88.1884 30.7047 88.0756 30.5596C87.9628 30.4076 87.7513 30.3316 87.4412 30.3316V30.114C87.6668 30.1347 87.8853 30.1451 88.0967 30.1451C88.3012 30.1451 88.495 30.1347 88.6783 30.114C88.8686 30.0864 89.0413 30.0484 89.1964 30Z" fill="black"/>
</svg>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-500 transition duration-300 flex items-center underline-35"
              >
                <AiOutlineHome className="text-xl" />
                <span className="ml-1">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-500 transition duration-300 flex items-center underline-35"
              >
                <AiOutlineInfoCircle className="text-xl" />
                <span className="ml-1">About</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-500 transition duration-300 flex items-center underline-35"
              >
                <AiOutlineMail className="text-xl" />
                <span className="ml-1">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
