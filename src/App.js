import "./App.css"
import React from 'react'



function App() {
   let values =[
    {
      item: "Free",
      amount: "$0/month",
      user: "✔ Single User",
      storage: "✔ 5GB Storage",
      public: "✔ Unlimited public Projects",
      community: "✔ Community Access",
      private: <div className="disable">❌ Unlimited Private Projects</div>,
      phone: <div className="disable">❌ Dedicated Phone Support</div>,
      domain: <span className="disable">❌ Free Subdomain</span>,
      report: <div className="disable">❌ Monthly Status Reports </div>,
    },
    {
      item: "PLUS",
      amount: "$9/month",
      user: <span><b>✔ 5 Users</b></span>,
      storage: "✔ 50GB Storage",
      public: "✔ Unlimited public Projects",
      community: "✔ Community Access",
      private: "✔ Unlimited Private Projects",
      phone: "✔ Dedicated Phone Support",
      domain: "✔ Free Subdomain",
      report: <div className="disable">❌ Monthly Status Reports </div>,
    },
    {
      item: "PRO",
      amount: "$49/month",
      user: <span><b>✔ Unlimited Users</b> </span>,
      storage: "✔ 150GB Storage",
      public: "✔ Unlimited Pubc Projects",
      community: "✔ Community Access",
      private: "✔ Unlimited Private Projects",
      phone: "✔ Dedicated Phone Support",
      domain: (
        <span>
          <b>✔ Unlimited</b> Free Subdomain
        </span>
      ),
      report: "✔ Monthly Status Reports",
    },
   ];
  return (
    <div>
      <div id="title">Pricing Table Snippet</div>
      <div className='App'>{
        values.map((eachvalues,id) =>(
          <Card 
          item={eachvalues.item}
          amount ={eachvalues.amount}
          user={eachvalues.user}
          storage ={eachvalues.storage}
          public={eachvalues.public}
          community={eachvalues.community}
          private ={eachvalues.private}
          phone={eachvalues.phone}
          domain={eachvalues.domain}
          report ={eachvalues.report}
          />
        ))}
      </div>
    </div>
  );
}
 function Card(props){
  console.log(props)
   return (
    <div className='card'>
      <div id="package">
        <div className='insideheader'>{props.item}</div>
        <div className='insiderate'><b>{props.amount}</b></div>
        <hr></hr>
       <p>{props.user}</p>
      <p>{props.storage}</p>
      <p>{props.public}</p>
      <p>{props.community}</p>
      <p>{props.private}</p>
      <p>{props.phone}</p>
      <p>{props.domain}</p>
      <p>{props.report}</p>
      <button>Button</button>

      </div>
    </div>
   ); 
 }
export default App

