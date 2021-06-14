import { useEffect } from "react";
import http from "utils/http";
import { Layout } from "components";
import Styles from "styles/Styles";
import { themeDark, themeLight } from "styles/theme";
import { useToggle } from "hooks";
function App() {

  const [ toggle, handleToggle ] = useToggle()

  useEffect(() => {
    (async () => {
      const { data } = await http.get('/api/jobs/available-jobs');
      console.log(data)
    })()
  },[])

  return (
    <Styles theme={toggle ? themeDark : themeLight}>
      <Layout>
        <button onClick={handleToggle}>Change</button>
      </Layout>
    </Styles>
  );
}

export default App;
   