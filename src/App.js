import { useEffect } from "react";
import http from "utils/http";

function App() {

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/api/jobs/available-jobs');
      console.log(data)
    })()
  },[])

  return (
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="151" height="34" viewBox="0 0 151 34" fill="none">
        <path d="M15 2C23.2994 2.0869 30 8.76954 30 17C30 25.2305 23.2994 31.9131 15 32L25.7282 17L15 2Z" fill="pink"/>
        <path d="M14.8411 2.00123C21.5704 2.10506 27 8.78047 27 17C27 25.2195 21.5704 31.8949 14.8412 31.9988C14.7879 31.9994 14.7348 32 14.6816 32C6.57335 32 0 25.2841 0 17C0 8.7159 6.57335 2 14.6816 2C14.7348 2 14.7879 2.00059 14.8411 2.00123ZM22.0372 17C22.0372 12.8495 18.7441 9.48488 14.6816 9.48488C10.6192 9.48488 7.32601 12.8495 7.32601 17C7.32601 21.1505 10.6192 24.5151 14.6816 24.5151C18.744 24.5151 22.0372 21.1505 22.0372 17Z" fill="red"/>
    </svg>
       
    </div>
  );
}

export default App;
   