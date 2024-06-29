import "./todoCard.css"
import bin from "./bin.png"

function todoCard({index,task,categeory,deleteItem}) {
    const Category_Emoji = {
        Sports: "🏓",
        Learning: "📚",
        Work: "💻",
        Personal: "🔐",
        Shopping: "🛍️",
        Health: "🏥",
        Other: "📁"
    }
    const Category_Color = {
        Sports: "#ffffff",
        Learning: "#ffffff",
        Work: "#ffffff",
        Personal: "#ffffff",
        Shopping: "#ffffff",
        Health: "#ffffff",
        Other: "#ffffff"
    }

  return (
    <div className="todo-Card">
        {task}
        <span className="category categoryy" style={{backgroundColor: Category_Color[categeory]}}>
            {Category_Emoji[categeory]} {categeory}
        </span>
            <img src={bin} className="delete-icon categoryy" alt="deleteIcon" onClick={()=>{
                deleteItem(index)
            }}/>
        
    </div>
  )
}

export default todoCard