import { getContentfulUserData } from "../../services/contentfulDataModifier";

function JsonRender({ articleData }) {
  const listItems = articleData[0].fields.data.userList;
  debugger;
  return (
    <div className="main_container">
      <div className="details">
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              Name: {item.name} | Age: {item.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JsonRender;
