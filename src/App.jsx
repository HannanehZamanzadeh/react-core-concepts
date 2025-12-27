import { useState } from "react";
import Header from "./components/Header/Header"
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton.jsx"
import {CORE_CONCEPTS} from "./data.js"
import { EXAMPLES } from "./data.js";
const App=()=>{

    const[selectedTopic,setSelectedTopic]=useState('')
    function handleClick(selectedButton){
        setSelectedTopic(selectedButton);
    }
    let tabContent=<p>Please select a topic.</p>;

    if(selectedTopic){
        tabContent=<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<code>{EXAMPLES[selectedTopic].code}</code>
</div>
    }
  return(
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcepts key={conceptItem.title} {...conceptItem}/>))}
                {/* <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
                  <CoreConcepts {...CORE_CONCEPTS[1]}/>
                    <CoreConcepts {...CORE_CONCEPTS[2]}/>
                      <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
            </ul>
        </section>
        <section id="examples">
        <h2>Examples</h2>
        <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleClick('components')}>components</TabButton>
                        <TabButton isSelected={selectedTopic==='jsx'} onSelect={()=>handleClick('jsx')}>Jsx</TabButton>

            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleClick('state')}>State</TabButton>


        </menu>
{tabContent}
        </section>
      </main>
    </div>
  )
}
export default App;
