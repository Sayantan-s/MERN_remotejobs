import FormField from "components/elements/FormField.component";
import { useState } from "react";

function App() {
  let formArray = [];
  const [form, setForm] = useState({
    row1 : [
      {
        element : 'input',
        elementConfig : {
          type : 'text',
          placeholder : 'Sayantan',
          name : 'fullname'
        },
        value : '',
        className: 'w-1/2 mr-2'
      },
      {
        element : 'input',
        elementConfig : {
          type : 'email',
          placeholder : 'sssaanane7....',
          name : 'email'
        },
        value : '',
        className: 'w-1/2 ml-2'
      }
    ],
    password :   {
      element : 'input',
      elementConfig : {
        type : 'password',
        placeholder : '6-7 characters',
        name : 'password'
      },
      value : ''
    },
    description : {
      element : 'textarea',
      elementConfig : {
        rows : '6',
        placeholder : 'Add the description...',
        name : 'description'
      },
      value : ''
    }
  });

  for(let i in form){
    if(Array.isArray(form[i])){
      let newArray = [];
      Object.values(form[i]).map(data => {
        return newArray.push({
          id : data.elementConfig.name,
          info : data
        }) 
      })
      form[i] = newArray
    }
    formArray.push({
      key : i,
      data : form[i]
    })
  }
  
  const handleChange = eve => {
    const { name, value } = eve.target;

    console.log(name);
  }
  
  return (
    <div>
      <div className="bg-red-400">Heeelooo</div>
     <form className="w-1/3">
       {
         formArray.map(({ key,data }) => {
           let ele;
           const isArray = Array.isArray(data);
            if(isArray){
                ele = (
                <>
                {
                    data.map(({ id, info }) => (
                      <FormField 
                        key={id}
                        {...info} 
                        onChange={handleChange}
                      />
                    )
                  )
                }
                </>
              )
            }
            else ele = <FormField {...data} onChange={handleChange} />
            return (
              <div key={key} className={`flex w-full m-4`}>
                {ele}
              </div>
            )
         })
       }
     </form>
    </div>
  );
}

export default App;
   