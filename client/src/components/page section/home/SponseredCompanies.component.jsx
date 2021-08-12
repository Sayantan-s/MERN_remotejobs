import { View, Heading, Text, Stack } from 'components'
import React from 'react'

const SponseredCompanies = () => {
    return (
        <View width="desktop" m="0 auto" py="9">
            <Heading level={3} textAlign="center">
                More than <Text as={'span'} color="blue.5" fontSize="l" fontWeight="bold">20,000</Text> companies sponsership with us
            </Heading>
            <Stack mt={12} gap={9} justifyContent="center">
                <svg width={160} viewBox="0 0 512 168" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                    <g>
                        <path d="M496.052455,102.672055 L510.255737,112.140909 C505.6459,118.931075 494.619668,130.580258 475.557368,130.580258 C451.885231,130.580258 434.255719,112.2655 434.255719,88.967133 C434.255719,64.1736841 452.072116,47.3540078 473.563925,47.3540078 C495.180323,47.3540078 505.77049,64.5474546 509.19672,73.8294242 L511.065574,78.5638516 L455.373756,101.613038 C459.609823,109.960581 466.213103,114.196648 475.557368,114.196648 C484.901633,114.196648 491.380323,109.586811 496.052455,102.672055 L496.052455,102.672055 Z M452.383592,87.6589359 L489.573765,72.2097517 C487.518026,67.0392586 481.413107,63.3638478 474.124581,63.3638478 C464.842612,63.3638478 451.947526,71.5868007 452.383592,87.6589359 L452.383592,87.6589359 Z" fill="#FF302F" />
                        <path d="M407.406531,4.93104632 L425.347519,4.93104632 L425.347519,126.780257 L407.406531,126.780257 L407.406531,4.93104632 L407.406531,4.93104632 Z" fill="#20B15A" />
                        <path d="M379.124557,50.5933528 L396.442594,50.5933528 L396.442594,124.599929 C396.442594,155.311412 378.314721,167.957316 356.885207,167.957316 C336.701596,167.957316 324.554051,154.376986 320.00651,143.350753 L335.891759,136.747473 C338.757334,143.537639 345.67209,151.573706 356.885207,151.573706 C370.652424,151.573706 379.124557,143.039278 379.124557,127.091732 L379.124557,121.111404 L378.501606,121.111404 C374.39013,126.095011 366.540947,130.580258 356.573731,130.580258 C335.767169,130.580258 316.704869,112.452385 316.704869,89.0917231 C316.704869,65.6064713 335.767169,47.2917126 356.573731,47.2917126 C366.478652,47.2917126 374.39013,51.7146646 378.501606,56.5736822 L379.124557,56.5736822 L379.124557,50.5933528 L379.124557,50.5933528 Z M380.370459,89.0917231 C380.370459,74.3900801 370.590128,63.6753233 358.131109,63.6753233 C345.547499,63.6753233 334.957333,74.3900801 334.957333,89.0917231 C334.957333,103.606481 345.547499,114.134352 358.131109,114.134352 C370.590128,114.196648 380.370459,103.606481 380.370459,89.0917231 L380.370459,89.0917231 Z" fill="#3686F7" />
                        <path d="M218.21632,88.7802476 C218.21632,112.763861 199.527791,130.393373 176.603195,130.393373 C153.678599,130.393373 134.990069,112.701565 134.990069,88.7802476 C134.990069,64.6720448 153.678599,47.1048274 176.603195,47.1048274 C199.527791,47.1048274 218.21632,64.6720448 218.21632,88.7802476 L218.21632,88.7802476 Z M200.026151,88.7802476 C200.026151,73.8294242 189.186804,63.5507331 176.603195,63.5507331 C164.019585,63.5507331 153.180238,73.8294242 153.180238,88.7802476 C153.180238,103.606481 164.019585,114.009763 176.603195,114.009763 C189.186804,114.009763 200.026151,103.606481 200.026151,88.7802476 L200.026151,88.7802476 Z" fill="#FF302F" />
                        <path d="M309.104867,88.967133 C309.104867,112.950746 290.416338,130.580258 267.491742,130.580258 C244.567146,130.580258 225.878617,112.950746 225.878617,88.967133 C225.878617,64.8589302 244.567146,47.3540078 267.491742,47.3540078 C290.416338,47.3540078 309.104867,64.796635 309.104867,88.967133 L309.104867,88.967133 Z M290.852404,88.967133 C290.852404,74.0163095 280.013057,63.7376184 267.429447,63.7376184 C254.845837,63.7376184 244.00649,74.0163095 244.00649,88.967133 C244.00649,103.793366 254.845837,114.196648 267.429447,114.196648 C280.075352,114.196648 290.852404,103.731071 290.852404,88.967133 L290.852404,88.967133 Z" fill="#FFBA40" />
                        <path d="M66.5900525,112.327794 C40.4884066,112.327794 20.0556146,91.2720515 20.0556146,65.1704056 C20.0556146,39.0687598 40.4884066,18.0130168 66.5900525,18.0130168 C80.6687446,18.0130168 90.9474357,23.5572805 98.5474373,30.6589216 L111.068752,18.137607 C100.478585,7.98350613 86.3375984,0.258913997 66.5900525,0.258913997 C30.8326666,0.258913997 0.744134408,29.4130196 0.744134408,65.1704056 C0.744134408,100.927792 30.8326666,130.081897 66.5900525,130.081897 C85.9015328,130.081897 100.478585,123.727797 111.878588,111.891729 C123.590067,100.180251 127.203183,83.7343447 127.203183,70.4031939 C127.203183,66.2294223 126.704822,61.9310606 126.144166,58.7540106 L66.5900525,58.7540106 L66.5900525,76.0720477 L109.013014,76.0720477 C107.767112,86.9113947 104.340882,94.3245113 99.2949785,99.3704142 C93.1900592,105.537629 83.534319,112.327794 66.5900525,112.327794 L66.5900525,112.327794 L66.5900525,112.327794 Z" fill="#3686F7" />
                    </g>
                </svg>

                <svg width={160} viewBox="0 0 512 126" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M156.434 50.322c5.86 0 10.61-4.752 10.61-10.613 0-5.862-4.75-10.613-10.61-10.613-5.86 0-10.61 4.751-10.61 10.613 0 5.861 4.75 10.613 10.61 10.613zm350.16 36.261c-1.614-1.135-2.86-1.323-3.894.881-17.82 38.596-47.85 19.336-44.867 21.031 6.661-3.047 24.18-17.097 21.532-36.497-1.608-11.856-11.784-17.115-22.585-15.232-18.854 3.287-25.79 23.623-22.259 41.627.618 3.092 1.722 5.642 2.825 8.14-21.306 17.326-29.767-15.51-30.727-19.434-.038-.21 16.451-13.954 21.037-46.705 4.807-34.325-6.143-40.575-17.34-40.38-20.72.361-26.319 43.652-18.797 79.732-.63.164-3.562 1.788-8.273 1.97-3.39-10.667-17.875-20.017-21.666-16.414-9.488 9.013 2.301 26.634 10.596 28.016-4.983 30.691-36.146 23.09-30.345-15.361 10.148-18.845 17.866-46.866 16.489-63.782C357.832 8.186 353.404.162 343.39.56c-19.261.762-21.355 44.065-19.097 74.799-.112-.757-1.184 3.734-9.077 5.967-1.867-10.363-18.553-20.765-22.481-15.764-7.353 9.36 5.39 26.049 11.426 27.213-4.983 30.69-36.145 23.089-30.344-15.362 10.148-18.844 17.865-46.865 16.488-63.781-.488-5.99-4.915-14.014-14.93-13.617-19.261.763-21.355 44.066-19.097 74.8-.113-.769-1.21 3.87-9.425 6.066-.275-13.445-17.022-19.61-21.045-15.32-7.17 7.647 1.642 23.337 9.794 27.214-4.983 30.69-36.145 23.089-30.344-15.362 10.148-18.844 17.866-46.865 16.488-63.781-.487-5.99-4.915-14.014-14.93-13.617-19.26.763-20.81 46.243-18.552 76.976-6.344 27.181-27.619 61.125-24.855-6.872.273-4.77.571-6.581-1.807-8.367-1.782-1.388-5.834-.72-8.049-.665-2.692.108-3.367 1.683-3.962 4.064-1.386 6.148-1.635 12.108-1.833 20.24-.13 3.804-.435 5.579-1.9 10.766-1.463 5.186-9.81 14.665-14.38 13.08-6.34-2.18-4.26-20.078-3.072-32.375.99-9.718-2.18-14.082-10.302-15.669-4.755-.991-7.644-.839-12.596-2.4-4.683-1.476-5.742-10.334-15.73-7.382-5.463 1.616-1.951 13.191-3.264 21.77-6.455 42.201-19.886 43.36-26.117 22.86C88.46 27.31 68.515.214 56.84.214c-12.16 0-26.06 8.376-20.174 61.968-2.862-.835-3.742-1.285-6.875-1.285C12.072 60.897 0 75.221 0 92.891s12.073 31.995 29.792 31.995c10.46 0 17.804-4.757 23.366-12.116 3.629 5.197 8.048 12.196 16.129 11.881 24.087-.938 31.092-50.347 31.919-53.103 2.575.397 5.011 1.148 7.389 1.545 3.962.595 4.25 2.163 4.16 6.148-1.05 33.604 5.151 45.37 19.217 45.37 7.837 0 14.822-7.7 19.634-13.206 3.594 7.418 9.321 12.979 17.004 13.205 18.617.463 25.745-29.21 25.095-25.305-.51 3.064 6.04 25.138 25.206 25.218 23.741.1 28.154-26.008 28.68-30.381.066-.87.095-.78 0 0l-.018.265c7.537-1.402 11.426-5.443 11.426-5.443s6.052 35.965 28.47 35.56c23.28-.422 27.67-24.022 28.246-28.624.076-1.092.121-.964 0 0a20.34 20.34 0 0 0-.009.135c8.953-3.257 11.308-6.526 11.308-6.526s4.81 35.25 28.47 35.558c21.084.276 28.898-21.315 28.944-30.352 3.556.038 10.134-2.11 9.98-2.232 0 0 7.723 30.82 29.29 32.403 10.126.743 17.722-5.698 22.052-8.636 10.176 8.241 44.061 18.767 65.457-17.508 3.02-5.206-3.473-11.356-4.613-12.159zM28.937 112.92c-10.338 0-16.967-9.559-16.967-19.866 0-10.306 6.085-19.865 16.423-19.865 4.652 0 7.24.512 10.863 3.663.657 2.589 2.519 8.561 3.425 11.273 1.214 3.629 2.658 6.718 4.114 10.08-2.08 8.623-8.899 14.715-17.858 14.715zm25.192-35.765c-.43-.685-.34-.264-.821-.911-1.895-5.155-5.547-16.661-5.97-29.73-.478-14.784 1.986-32.113 9.25-32.113 4.922 0 10.153 35.12-2.46 62.754zM199.69 61.751c-1.166-8.773-1.227-47.883 8.162-46.806 5.184 2.1-3.287 39.005-8.162 46.806zm68.559 0c-1.166-8.773-1.227-47.883 8.162-46.806 5.184 2.1-3.287 39.005-8.162 46.806zm68.015.545c-1.167-8.774-1.227-47.884 8.161-46.807 5.184 2.1-3.287 39.006-8.161 46.807zm75.088-49.64c8.584-.89 8.23 36.596-9 60.262-2.222-8.554-5.629-57.325 9-60.263zm36.08 80.662c-2.757-13.927 4.367-23.074 11.711-24.077 2.567-.41 6.287 1.253 7.029 4.362 1.22 5.859-.177 14.55-16.614 25.577.024.094-1.511-2.76-2.125-5.862z" /></svg>
                <svg width={160} xmlns="http://www.w3.org/2000/svg" viewBox="0.253 0.2769999999999917 558.4269999999998 167.483"><path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 0 1-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 0 1-6.249-3.93 5.213 5.213 0 0 1 3.926-6.25c31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 0 1 4.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 0 1 5.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 0 1 2.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509.2.153.46.214.71.174a.933.933 0 0 0 .63-.386l7.06-9.952a.95.95 0 0 0-.18-1.288c-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51a.98.98 0 0 0-.69-.23c-.26.02-.49.14-.65.33l-7.92 9.42c-.33.4-.29.98.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 27.69-23.42.03-12.007-7.16-18.657-24.77-22.941zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624a.945.945 0 0 0-.94-.949h-12.95c-.52 0-.94.426-.94.949v73.601c0 .52.42.95.94.95h12.95c.52 0 .94-.43.94-.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 27.27-30.369.02-19.943-13.7-30.376-27.26-30.376zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 0-9.83 6.68-17.238 15.53-17.238 8.81-.001 15.21 7.247 15.21 17.237zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25V49.941a.944.944 0 0 0-.94-.948H393.5c-.52 0-.95.426-.95.948v14.566h-6.22c-.52 0-.94.426-.94.949v11.127c0 .522.42.949.94.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-.96 12.12-3.02.3-.16.48-.48.48-.82v-10.6c0-.32-.17-.63-.45-.8a.918.918 0 0 0-.92-.04c-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11v-26.76h14.25c.52 0 .94-.426.94-.949V65.462a.918.918 0 0 0-.93-.949zm49.64.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87.536 7.3 1.346.3.094.61.047.85-.132a.94.94 0 0 0 .39-.77v-10.91a.937.937 0 0 0-.67-.909c-2.56-.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-.52 0-.95.426-.95.948v11.184c0 .522.43.949.95.949h6.22v44.405c0 .53.43.95.95.95h12.94c.53 0 .95-.42.95-.95V77.535h12.09l18.52 44.402c-2.1 4.66-4.17 5.59-6.99 5.59-2.28 0-4.69-.68-7.14-2.03a1.03 1.03 0 0 0-.75-.07c-.25.09-.46.27-.56.51l-4.39 9.63c-.21.46-.03.99.41 1.23 4.58 2.48 8.71 3.54 13.82 3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037a.925.925 0 0 0-.1-.881.924.924 0 0 0-.77-.412h-13.48c-.41 0-.77.257-.9.636l-13.81 39.434-15.12-39.46a.944.944 0 0 0-.88-.61h-22.12zm-28.78-.057h-12.95c-.52 0-.95.426-.95.949v56.481c0 .53.43.95.95.95h12.95c.52 0 .95-.42.95-.95V65.46a.947.947 0 0 0-.95-.949zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281 0 5.132 4.16 9.289 9.29 9.289s9.28-4.157 9.28-9.289c0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 9.164zm.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.58 3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051.01 1.568-.9 2.526-2.21 2.905zm-1.54-4.315h-2.37v3.025h2.37c1.18 0 1.89-.579 1.89-1.514 0-.984-.71-1.511-1.89-1.511z" fill="#1ed760" /></svg>
                <svg width={160} enableBackground="new 0 0 2500 632.6" viewBox="0 0 2500 632.6" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m799.8 498.1 31.2-72.5c33.7 25.2 78.6 38.3 122.9 38.3 32.7 0 53.4-12.6 53.4-31.7-.5-53.4-195.9-11.6-197.4-145.5-.5-68 59.9-120.4 145.5-120.4 50.9 0 101.7 12.6 138 41.3l-29.2 74c-33.2-21.2-74.5-36.3-113.8-36.3-26.7 0-44.3 12.6-44.3 28.7.5 52.4 197.4 23.7 199.4 151.6 0 69.5-58.9 118.4-143.5 118.4-62-.1-118.9-14.7-162.2-45.9m1198.1-98.7c-15.6 27.2-44.8 45.8-78.6 45.8-49.9 0-90.1-40.3-90.1-90.1s40.3-90.1 90.1-90.1c33.7 0 63 18.6 78.6 45.8l86.1-47.8c-32.2-57.4-94.2-96.7-164.7-96.7-104.3 0-188.9 84.6-188.9 188.9s84.6 188.9 188.9 188.9c71 0 132.5-38.8 164.7-96.7zm-849.1-389.8h107.8v527.3h-107.8zm977.5 0v527.3h107.8v-158.2l127.9 158.2h138l-162.7-187.9 150.6-175.3h-132l-121.9 145.5v-309.6z" fillRule="evenodd" /><path d="m1576.9 400.4c-15.6 25.7-47.8 44.8-84.1 44.8-49.9 0-90.1-40.3-90.1-90.1s40.3-90.1 90.1-90.1c36.3 0 68.5 20.1 84.1 46.3zm0-226.6v42.8c-17.6-29.7-61.4-50.4-107.3-50.4-94.7 0-169.2 83.6-169.2 188.4s74.5 189.4 169.2 189.4c45.8 0 89.6-20.6 107.3-50.4v42.8h107.8v-362.6z" /><g clipRule="evenodd" fillRule="evenodd"><path d="m133.5 399.9c0 36.8-29.7 66.5-66.5 66.5s-66.5-29.8-66.5-66.5 29.7-66.5 66.5-66.5h66.5zm33.2 0c0-36.8 29.7-66.5 66.5-66.5s66.5 29.7 66.5 66.5v166.2c0 36.8-29.7 66.5-66.5 66.5s-66.5-29.7-66.5-66.5z" fill="#e01e5a" /><path d="m233.2 133c-36.8 0-66.5-29.7-66.5-66.5s29.7-66.5 66.5-66.5 66.5 29.7 66.5 66.5v66.5zm0 33.7c36.8 0 66.5 29.7 66.5 66.5s-29.7 66.5-66.5 66.5h-166.7c-36.8 0-66.5-29.8-66.5-66.5s29.7-66.5 66.5-66.5z" fill="#36c5f0" /><path d="m499.6 233.2c0-36.8 29.7-66.5 66.5-66.5s66.5 29.7 66.5 66.5-29.7 66.5-66.5 66.5h-66.5zm-33.2 0c0 36.8-29.7 66.5-66.5 66.5s-66.5-29.7-66.5-66.5v-166.7c0-36.8 29.7-66.5 66.5-66.5s66.5 29.7 66.5 66.5z" fill="#2eb67d" /><path d="m399.9 499.6c36.8 0 66.5 29.7 66.5 66.5s-29.7 66.5-66.5 66.5-66.5-29.7-66.5-66.5v-66.5zm0-33.2c-36.8 0-66.5-29.7-66.5-66.5s29.7-66.5 66.5-66.5h166.7c36.8 0 66.5 29.7 66.5 66.5s-29.7 66.5-66.5 66.5z" fill="#ecb22e" /></g></svg>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.7 36.3" width={160}><style dangerouslySetInnerHTML={{__html: ".st0{fill:#5e5e5e}" }} /><g id="TESLA"><path className="st0" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3" /><g><path className="st0" d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1" /></g></g></svg>
            </Stack>
            <Stack mt="8" gap={9} justifyContent="center">
                <svg xmlns="http://www.w3.org/2000/svg" width={180} viewBox="-384.501 305.5 901.319 214.234"><path d="M407.22 377.62c5.02 0 9.152-2.61 9.71-5.982l4.956-56.05c0-5.54-6.49-10.088-14.65-10.088-8.152 0-14.636 4.548-14.636 10.089l4.953 56.049c.545 3.371 4.677 5.982 9.684 5.982h-.017M376.927 395.127c2.518-4.342 2.328-9.222-.326-11.39l-46.07-32.317c-4.79-2.774-11.972.565-16.048 7.634-4.09 7.06-3.365 14.945 1.412 17.72l51.013 23.752c3.189 1.182 7.537-1.093 10.035-5.432l-.016.033M437.54 395.097c2.514 4.339 6.84 6.615 10.032 5.432l51.013-23.752c4.807-2.774 5.49-10.66 1.438-17.72-4.096-7.062-11.291-10.408-16.068-7.634l-46.073 32.317c-2.634 2.165-2.83 7.049-.326 11.39l-.016-.033M407.22 447.635c5.02 0 9.152 2.588 9.71 5.963l4.956 56.042c0 5.557-6.49 10.095-14.65 10.095-8.152 0-14.636-4.538-14.636-10.095l4.953-56.042c.545-3.375 4.677-5.963 9.684-5.963h-.017M437.54 430.124c2.514-4.351 6.84-6.607 10.032-5.411l51.013 23.736c4.807 2.777 5.49 10.67 1.438 17.736-4.096 7.039-11.291 10.394-16.068 7.624l-46.073-32.287c-2.634-2.182-2.83-7.069-.326-11.407h-.02M376.927 430.118c2.518 4.335 2.328 9.222-.326 11.408l-46.07 32.286c-4.79 2.77-11.972-.585-16.048-7.624-4.09-7.066-3.365-14.959 1.412-17.736l51.013-23.736c3.189-1.196 7.537 1.06 10.035 5.412h-.016" fill="#fdbb30" /><path d="M116.622 441.42c0 1.72-.153 3.494-.624 5.052-1.954 6.471-8.654 11.943-17.036 11.943-6.989 0-12.54-3.97-12.54-12.355 0-12.833 14.125-16.377 30.204-16.288l-.004 11.647zm25.22-22.364c0-21.161-9.042-39.781-39.594-39.781-15.683 0-28.13 4.405-34.924 8.331l4.976 17.012c6.209-3.92 16.105-7.165 25.47-7.165 15.497-.043 18.035 8.776 18.035 14.42v1.336c-33.781-.05-55.135 11.647-55.135 35.475 0 14.56 10.876 28.197 29.782 28.197 11.617 0 21.347-4.637 27.17-12.072h.575s3.853 16.142 25.124 9.966c-1.11-6.713-1.475-13.879-1.475-22.496l-.003-33.223M-384.5 350.457s22.075 90.454 25.6 105.134c4.112 17.135 11.523 23.443 32.88 19.184l13.783-56.078c3.495-13.936 5.834-23.872 8.086-38.034h.392c1.581 14.312 3.824 24.141 6.7 38.08 0 0 5.608 25.46 8.485 38.828 2.88 13.364 10.896 21.792 31.818 17.204l32.844-124.322h-26.51l-11.218 53.753c-3.016 15.64-5.75 27.875-7.86 42.18h-.375c-1.917-14.179-4.358-25.915-7.421-41.157l-11.67-54.776h-27.626l-12.49 53.395c-3.535 16.23-6.85 29.33-8.95 43.159h-.382c-2.156-13.022-5.026-29.493-8.132-45.196 0 0-7.415-38.193-10.023-51.358l-27.931.004M-173.766 441.42c0 1.72-.153 3.494-.631 5.052-1.95 6.471-8.654 11.943-17.036 11.943-6.99 0-12.533-3.97-12.533-12.355 0-12.833 14.121-16.377 30.203-16.288l-.003 11.647zm25.217-22.364c0-21.161-9.042-39.781-39.588-39.781-15.687 0-28.144 4.405-34.934 8.331l4.97 17.012c6.208-3.92 16.104-7.165 25.472-7.165 15.508-.043 18.046 8.776 18.046 14.42v1.336c-33.795-.05-55.139 11.647-55.139 35.475 0 14.56 10.87 28.197 29.762 28.197 11.633 0 21.357-4.637 27.187-12.072h.568s3.864 16.142 25.13 9.966c-1.112-6.713-1.474-13.879-1.474-22.496v-33.223M-106.463 448.385v-97.928h-25.25v124.322h25.25v-26.394M223.853 350.457v91.71c0 12.65 2.385 21.503 7.47 26.921 4.456 4.737 11.777 7.803 20.557 7.803 7.468 0 14.81-1.425 18.275-2.71l-.326-19.726c-2.578.63-5.538 1.14-9.59 1.14-8.604 0-11.481-5.512-11.481-16.863v-35.09h21.988v-23.79h-21.988v-29.395h-24.905M158.679 381.384v93.395h26.047v-47.82c0-2.585.156-4.837.565-6.897 1.927-10.022 9.587-16.42 20.59-16.42 3.016 0 5.175.328 7.514.66v-24.45c-1.963-.391-3.295-.574-5.737-.574-9.72 0-20.779 6.272-25.42 19.726h-.704v-17.62h-22.855M-88.783 381.384v93.395h25.377v-54.767c0-2.57.302-5.288 1.192-7.644 2.103-5.514 7.235-11.972 15.424-11.972 10.245 0 15.029 8.657 15.029 21.151v53.225h25.357v-55.434c0-2.452.335-5.408 1.06-7.57 2.082-6.276 7.61-11.379 15.224-11.379 10.381 0 15.364 8.505 15.364 23.211v51.169h25.374v-55.01c0-29.007-14.73-40.49-31.36-40.49-7.358 0-13.172 1.843-18.43 5.065-4.415 2.72-8.375 6.574-11.83 11.64h-.375c-4.01-10.065-13.445-16.7-25.74-16.7-15.795 0-22.894 8.007-27.2 14.797h-.378v-12.69h-24.088" fill="#1a75cf" /><path d="M511.38 470.238h.383c.508 0 .834-.21.834-.522 0-.355-.306-.548-.778-.548-.162 0-.328.033-.438.033v1.046-.01zm-.059 2.518h-1.349v-4.395c.306-.06 1.02-.167 1.934-.167.993 0 1.438.14 1.764.36.275.192.475.52.475.963 0 .451-.415.833-1.027 1v.056c.499.133.771.495.914 1.13.136.634.22.893.305 1.056h-1.528c-.133-.163-.212-.552-.302-.94-.086-.445-.296-.668-.747-.668h-.442l.003 1.605zm.558-5.827c-1.937 0-3.398 1.578-3.398 3.59 0 1.96 1.465 3.559 3.451 3.559 1.994.033 3.459-1.598 3.459-3.591 0-1.984-1.465-3.558-3.482-3.558h-.03zm.087-1.193c2.7 0 4.853 2.126 4.853 4.75 0 2.655-2.153 4.784-4.89 4.784s-4.917-2.132-4.917-4.783c0-2.625 2.183-4.75 4.917-4.75h.03" fill="#fdbb30" /></svg>
                <svg viewBox=".238 .034 919.406 248.488" width={120} xmlns="http://www.w3.org/2000/svg"><path d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z" fill="#e50914" /></svg>
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.7 179.8" width={80}><style dangerouslySetInnerHTML={{__html: ".st0{fill:#252f3e}.st1{fill:#f90}" }} /><path className="st0" d="M84.7 65.3c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5C39.3.8 44.5.2 50 .2c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4h.2zM44.1 80.5c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7V53c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L95 9.1c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9L129 73.7l15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zM252.9 94c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2S251.8 0 256.2 0c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z" /><path className="st1" d="M271.8 142.6c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" /><path className="st1" d="M285.5 127c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" /></svg>
            </Stack>
        </View>
    )
}

export default SponseredCompanies
